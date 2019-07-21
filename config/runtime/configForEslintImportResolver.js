const { aliasRuntimeConfig } = require('./next.runtimeConfig')

// For eslint-import-resolver-webpack
module.exports = {
  resolve: {
    alias: aliasRuntimeConfig,
  },
}
