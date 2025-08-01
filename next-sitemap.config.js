  /** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:  'https://ilite.dev',// Replace with your real domain
  generateRobotsTxt: true,
  sitemapSize: 5000, // Split large sitemaps if needed
  exclude: ['/admin', '/drafts', '/server-only-page'], // Exclude private routes

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        disallow: ['/private-media'],
      },
    ],
    additionalSitemaps: [
      'https://ilite.dev/sitemap-blog.xml',
      'https://ilite.dev/sitemap-services.xml',
    ],
  },

  // Optional: If you're using dynamic route sitemaps
  // transform: async (config, path) => {
  //   return {
  //     loc: path,
  //     changefreq: 'weekly',
  //     priority: 0.7,
  //     lastmod: new Date().toISOString(),
  //     alternateRefs: [],
  //   }
  // },
};
