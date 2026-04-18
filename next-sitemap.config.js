/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://fullfilment-eight.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/api/*', '/server-sitemap.xml'], // l'API est déjà restreinte dans robots.txt
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://fullfilment-eight.vercel.app/server-sitemap.xml', // si jamais on a du contenu dynamique plus tard
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/']
      }
    ]
  },
}
