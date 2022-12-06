const fs = require('fs');
const path = require('path');

const globby = require('globby');
const prettier = require('prettier');

(async () => {
  const hostname = 'https://www.newcompany.xyz/'
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')

  const pages = await globby([
    'pages/**/*',
    '!pages/404.jsx', // ignore 404 page
    '!pages/_*', // ignore Next.js specific files (ex: _app, _document)
    '!pages/api', // ignore API routes
    // '!pages/account', // ignore Account pages
    // '!pages/checkout', // ignore Checkout pages
  ])

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map((page) => {
        const filePath = page
          .replace('.jsx', '')
          .replace('.tsx', '')
          .replace('.js', '')
          .replace('.ts', '')
        let route = filePath.slice(6)
        if (route.endsWith('index')) route = route.slice(0, -5)

        // Get lastModified
        const fullPath = path.join(__dirname + "/../", page)
        const fileStats = fs.statSync(fullPath)
        const lastModified = fileStats.mtime.toISOString().split('T')[0]

        return `
          <url>
            <loc>${hostname + route}</loc>
            <lastmod>${lastModified}</lastmod>
            <changefreq></changefreq>
            <priority>1.00</priority>
          </url>
        `
      }).join('')}
    </urlset>`

  // If you're not using Prettier, you can remove this.
  const formatted = prettier.format(sitemap, {
      ...prettierConfig,
      parser: 'html'
  })

  fs.writeFileSync('public/sitemap.xml', formatted)
})()
