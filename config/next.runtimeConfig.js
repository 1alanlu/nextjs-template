const path = require('path')

// 僅限服務器的運行時配置
const serverRuntimeConfig = {
  mySecret: 'secret',
  secondSecret: process.env.SECOND_SECRET, // Pass through env variables
}

// 客戶端和服務器端代碼都可以訪問的任何內容
const publicRuntimeConfig = {
  NODE_ENV: process.env.NODE_ENV, // XXX Used in utils/env
  projectName: process.env.NODE_ENV === 'production' ? '/nextjs-template' : '',
  staticFolder: '/static',
}

const aliasRuntimeConfig = {
  '@components': path.join(__dirname, '../src/components/'),
  '@context': path.join(__dirname, '../src/context/'),
  '@static': path.join(__dirname, '../src/static/'),
  '@utils': path.join(__dirname, '../src/assets/utils/'),
  '@sass': path.join(__dirname, '../src/assets/sass/'),
}

module.exports = {
  serverRuntimeConfig,
  publicRuntimeConfig,
  aliasRuntimeConfig,
}
