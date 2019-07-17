/* eslint-disable no-param-reassign */

// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

// env
const path = require('path')
const Dotenv = require('dotenv-webpack')
// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config()

const { serverRuntimeConfig, publicRuntimeConfig, aliasRuntimeConfig } = require('./config/next.runtimeConfig')

console.log('=== next.config.js ENV ===')
console.log('VERSION', process.env.VERSION)
console.log('NODE_ENV', process.env.NODE_ENV)
console.log('PORT', process.env.PORT)
console.log('=== next.config.js ENV ===')

const prod = process.env.NODE_ENV === 'production'
// const port = prod ? process.env.PORT : 3000

module.exports = {
  // target: 'serverless',

  exportPathMap() {
    return {
      '/': { page: '/' },
      '/about': { page: 'about' },
      '/demo': { page: '/demo' },
      '/test': { page: '/test' },
    }
  },

  // 構建時配置 允許您process.env.xxx 在代碼中使用
  env: {
    BACKEND_URL: prod ? 'https://api.example.com' : 'https://localhost:8080',
    FRONTEND_URL: prod ? publicRuntimeConfig.projectName : '',
    STATIC_FOLDER: prod ? `/_next/static` : publicRuntimeConfig.staticFolder,
  },
  // 運行時配置
  serverRuntimeConfig,
  publicRuntimeConfig,

  // CDN支持資產前綴 (You may only need to add assetPrefix in the production.)
  // 注意：Next.js會在它加載的腳本中自動使用該前綴，但這對任何情況都沒有影響/static。
  // 如果您想通過CDN提供這些資產，您必須自己引入前綴。本示例中介紹了一種引入在組件內部工作且因環境而異的前綴的方法。
  // assetPrefix: '',
  assetPrefix: prod ? publicRuntimeConfig.projectName : '',
  // 自定義生成目錄的名稱
  distDir: 'build',

  // 配置構建ID
  generateBuildId: async () => {
    // For example get the latest git commit hash here
    // When process.env.YOUR_BUILD_ID is undefined we fall back to the default
    const BUILD_ID = `v_${process.env.VERSION}`
    console.log('BUILD_ID: ', BUILD_ID)
    if (BUILD_ID) {
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
  webpack: (config /* options */) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    }

    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })

    const { plugins } = config
    config.plugins = [
      ...plugins,
      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ]

    const { alias } = config.resolve
    config.resolve.alias = {
      ...alias,
      ...aliasRuntimeConfig,
    }

    return config
  },
}
