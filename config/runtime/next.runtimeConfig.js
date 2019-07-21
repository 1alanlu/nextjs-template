/* eslint-disable no-shadow */

const path = require('path')
const fs = require('fs')
// const fetch = require('isomorphic-unfetch')

const isProd = process.env.NODE_ENV === 'production'
const port = parseInt(process.env.PORT, 10) || 3000
console.log('=== next.config.js ENV ===')
console.log('VERSION', process.env.VERSION)
console.log('NODE_ENV', process.env.NODE_ENV)
console.log('PORT', port)
console.log('=== next.config.js ENV ===')

// 僅限服務器的運行時配置
const serverRuntimeConfig = {
  mySecret: 'secret',
  secondSecret: process.env.SECOND_SECRET, // Pass through env variables
}

// 客戶端和服務器端代碼都可以訪問的任何內容
const publicRuntimeConfig = {
  repoName: isProd ? 'nextjs-template' : '',
  staticFolder: isProd ? `/_next/static` : '/static',
}

// 構建時配置 允許您process.env.xxx 在代碼中使用
const envRuntimeConfig = {
  SITE_URL: isProd ? `https://zhongyoulu.github.io/${publicRuntimeConfig.repoName}` : `https://localhost:${port}`,
  LOCATION_PREFIX: isProd ? `/${publicRuntimeConfig.repoName}` : '',
  STATIC_FOLDER: publicRuntimeConfig.staticFolder,
  GA_TRACKING_ID: '',
  TRIGGER_OFFSET: 60,
  TAB_CONTAINER_HEIGHT: 60,
}

const rootPath = fs.realpathSync(process.cwd()) // 項目根目錄 fs.realpathSync表示獲取真實路徑
const resolve = relativePath => path.resolve(rootPath, relativePath) // 自定義一個resolve函數，拼接出需要的路徑地址

const aliasRuntimeConfig = {
  '@config': resolve('config'),
  '@sass': resolve('src/assets/sass'),
  '@utils': resolve('src/assets/utils'),
  '@components': resolve('src/components'),
  '@context': resolve('src/context'),
  '@api': resolve('src/pages/api'),
  '@static': resolve(`src/static`),
}

const exportPathMapRuntimeConfig = async () => {
  // we fetch our list of posts, this allow us to dynamically generate the exported pages
  // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  // const data = await res.json()

  // const shows = data.map(entry => entry.show)

  // transform the list of posts into a map of pages with the pathname `/post/:id`
  // const pages = shows.reduce(
  //   (pages, post) =>
  //     Object.assign({}, pages, {
  //       [`/p/${post.id}`]: {
  //         page: '/p/[id]',
  //         query: { id: post.id },
  //       },
  //     }),
  //   {}
  // )

  // combine the map of post pages with the home
  return Object.assign(
    /* {}, pages, */ {
      '/': { page: '/' },
      '/about': { page: 'about' },
      '/demo': { page: '/demo' },
      '/test': { page: '/test' },
    }
  )
}

module.exports = {
  serverRuntimeConfig,
  publicRuntimeConfig,
  envRuntimeConfig,
  aliasRuntimeConfig,
  exportPathMapRuntimeConfig,
}
