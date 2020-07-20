const express = require('express')
const next = require('next')
var {createProxyMiddleware}= require('http-proxy-middleware');
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    // 重定向路由
    server.use('/api', createProxyMiddleware({
      target: 'http://10.0.0.38:3000',
      changeOrigin: true,
      pathRewrite: { '^/api': '/mock/39/api/' },

    }))
    server.get('/dashboard/:id', (req, res) => {
      return app.render(req, res, '/dashboard', { id: req.params.id })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })


    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })