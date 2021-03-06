/* jshint esversion: 6 */
const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()
let cacheTime = 1000 * 60 * 60 // 1 hour

if (dev) {
  cacheTime = 1
}

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: cacheTime
})

app.prepare().then(() => {
  const server = express()
  //cache.reset()
  // Use the `renderAndCache` utility defined below to serve pages
  server.get('/', (req, res) => {
    renderAndCache(req, res, '/')
  })

  // server.get('/events', (req, res) => {
  //  renderAndCache(req, res, '/events')
  // })

  // server.get('/events/:id', (req, res) => {
  //  const queryParams = { id: req.params.id }
  //  renderAndCache(req, res, '/single-event', queryParams)
  // })

  server.get('/posts', (req, res) => {
    renderAndCache(req, res, '/posts')
  })

  server.get('/posts/:id', (req, res) => {
    const queryParams = { id: req.params.id }
    renderAndCache(req, res, '/single-post', queryParams)
  })

  server.get('/experience', (req, res) => {
    renderAndCache(req, res, '/experience')
  })

  server.get('/experience/:id', (req, res) => {
    const queryParams = { id: req.params.id }
    renderAndCache(req, res, '/single-exp', queryParams)
  })

  //server.get('/i/:id', (req, res) => {
  //  const queryParams = { id: req.params.id }
  //  renderAndCache(req, res, '/pdf-page', queryParams)
  //})

  //server.get('/search/*', (req, res) => {
  //  renderAndCache(req, res, '/search')
  //})

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  if (dev) {
    server.listen(3003, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3003')
    })
  } else {
    server.listen(8080, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:8080')
    })
  }
})

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey (req) {
  return `${req.url}`
}

function renderAndCache (req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.log(`CACHE HIT: ${key}`)
    res.send(ssrCache.get(key))
    return
  }

  // If not let's render the page into HTML
  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      // Let's cache this page
      console.log(`CACHE MISS: ${key}`)
      ssrCache.set(key, html)

      res.send(html)
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}
