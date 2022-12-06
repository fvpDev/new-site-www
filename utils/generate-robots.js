const fs = require('fs');

(async () => {
  const hostname = 'https://www.newcompany.xyz'
  const robots =
`User-agent: *
Sitemap: ${hostname}/sitemap.xml
`

  fs.writeFileSync('public/robots.txt', robots)
})()
