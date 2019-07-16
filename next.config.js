/* eslint-disable no-param-reassign */
const { serverRuntimeConfig, publicRuntimeConfig, aliasRuntimeConfig } = require('./config/next.runtimeConfig')

module.exports = {
  // target: 'serverless',
  // 運行時配置
  serverRuntimeConfig,
  publicRuntimeConfig,

  // 自定義生成目錄的名稱
  distDir: 'build',

  webpack: (config /* options */) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    }

    const { alias } = config.resolve
    config.resolve.alias = {
      ...alias,
      ...aliasRuntimeConfig,
    }
    return config
  },
  /* exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  } */
}
