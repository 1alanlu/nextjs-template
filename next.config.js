/* eslint-disable no-param-reassign */

// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
// const withFonts = require('next-fonts')
const withOptimizedImages = require('next-optimized-images')

// env
const { parsed: localEnv } = require('dotenv').config()

// after dotenv
const {
  exportPathMapRuntimeConfig,
  envRuntimeConfig,
  serverRuntimeConfig,
  publicRuntimeConfig,
  aliasRuntimeConfig,
} = require('./config/runtime/next.runtimeConfig')

// next.js configuration
const nextConfig = {
  // target: 'serverless',

  exportPathMap() {
    return exportPathMapRuntimeConfig()
  },

  // 構建時配置 允許您process.env.xxx 在代碼中使用
  env: envRuntimeConfig,
  // 運行時配置
  serverRuntimeConfig,
  publicRuntimeConfig,

  // CDN支持資產前綴 (You may only need to add assetPrefix in the production.)
  // 注意：Next.js會在它加載的腳本中自動使用該前綴，但這對任何情況都沒有影響/static。
  // 如果您想通過CDN提供這些資產，您必須自己引入前綴。本示例中介紹了一種引入在組件內部工作且因環境而異的前綴的方法。
  assetPrefix: envRuntimeConfig.LOCATION_PREFIX,

  // 自定義生成目錄的名稱
  distDir: 'build',

  // 配置構建ID
  generateBuildId: async () => {
    // For example get the latest git commit hash here
    // When process.env.YOUR_BUILD_ID is undefined we fall back to the default
    if (process.env.VERSION) {
      const BUILD_ID = `v_${process.env.VERSION}`
      console.log('BUILD_ID: ', BUILD_ID)
      return BUILD_ID
    }

    return null
  },

  /**
    option 包含自定義其配置時有用的屬性的對象
    * buildId- String構建標識，用作構建之間的唯一標識符
    * dev- Boolean顯示編譯是否在開發模式下完成
    * isServer- Boolean顯示結果配置是否將用於服務器端（true）或客戶端大小編譯（false）。
    * defaultLoaders- Object 保存裝載程序對象Next.js在內部使用，以便您可以在自定義配置中使用它們
      - babel- Next.js Object 的babel-loader配置
      - hotSelfAccept- Object 該hot-self-accept-loader配置。此加載程序僅應用於高級用例。例如，@zeit/next-typescript將其添加到頂級打字稿頁面。
  */
  webpack: (config, options) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    }

    const { plugins } = config
    config.plugins = [
      ...plugins,
      // Whitelisting our env variables
      new options.webpack.EnvironmentPlugin(localEnv),
    ]

    const { alias } = config.resolve
    config.resolve.alias = {
      ...alias,
      ...aliasRuntimeConfig,
    }

    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })

    config.module.rules.forEach(rule => {
      if (rule.test.toString().includes('.scss')) {
        rule.rules = rule.use.map(useRule => {
          if (typeof useRule === 'string') {
            return {
              loader: useRule,
            }
          }
          if (useRule.loader.startsWith('css-loader')) {
            return {
              oneOf: [
                {
                  test: /\.module\.scss$/,
                  loader: useRule.loader,
                  options: {
                    ...useRule.options,
                    modules: true,
                  },
                },
                {
                  loader: useRule.loader,
                  options: {
                    ...useRule.options,
                    modules: false,
                  },
                },
              ],
            }
          }

          return useRule
        })

        delete rule.use
      }
    })

    return config
  },
}

module.exports = withPlugins(
  [
    /* [
      withFonts,
      {
        assetPrefix: envRuntimeConfig.LOCATION_PREFIX,
        // enableSvg: true,
      },
    ], */
    withCSS,
    [
      withSass,
      {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: '[name]_[local]_[hash:base64:5]',
        },
      },
    ],
    [
      withOptimizedImages,
      {
        // these are the default values so you don't have to provide them if they are good enough for your use-case.
        // but you can overwrite them here with any valid value you want.
        inlineImageLimit: 8192,
        imagesFolder: 'images',
        // imagesPublicPath: `/_next/static/images/`,
        // imagesOutputPath: `static/images/`,
        imagesName: '[name]-[hash].[ext]',
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
        optimizeImages: true,
        optimizeImagesInDev: false,
        mozjpeg: {
          quality: 80,
        },
        optipng: {
          optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
          interlaced: true,
          optimizationLevel: 3,
        },
        svgo: {
          // enable/disable svgo plugins here
        },
        webp: {
          preset: 'default',
          quality: 75,
        },
      },
    ],
  ],
  nextConfig
)
