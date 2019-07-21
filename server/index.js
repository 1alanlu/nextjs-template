const express = require('express')
const next = require('next')

// require('dotenv').config();

console.log("server's NODE_ENV", process.env.NODE_ENV)
console.log("server's PORT", process.env.PORT)

const port = parseInt(process.env.PORT, 10) || 3000
const env = process.env.NODE_ENV

/**
 * dev（bool）是否在開發模式下啟動Next.js - 默認false
 * dir（string）下一個項目所在的位置 - 默認'.'
 * quiet（bool）隱藏包含服務器信息的錯誤消息 - 默認false
 * conf（object）你將使用的相同對象next.config.js- 默認{}
 */
const nextApp = next({
  dir: './src', // base directory where everything is, could move to src later
  dev: env !== 'production',
})
const handle = nextApp.getRequestHandler()

nextApp
  .prepare()
  .then(() => {
    // 动态修改路径前缀，适合有 CDN 配置的静态资源部署：
    /* const server = new http.Server((req, res) => {
      // Add assetPrefix support based on the hostname
      if (req.headers.host === 'my-app.com') {
        app.setAssetPrefix('http://cdn.com/myapp')
      } else {
        app.setAssetPrefix('')
      }

      handleNextRequests(req, res)
    }) */

    const server = express()

    // custom route for posts
    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { id: req.params.id }
      return nextApp.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => handle(req, res))

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port} [${env}]`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
