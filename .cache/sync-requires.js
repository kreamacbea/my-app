// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/macbook/Documents/my-app/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/macbook/Documents/my-app/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/macbook/Documents/my-app/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/macbook/Documents/my-app/src/pages/page-2.js"))
}

