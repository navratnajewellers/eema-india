/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://eemaindia.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,

  additionalPaths: async (config) => [
    { loc: "/", lastMod: new Date().toISOString(), priority: 1.0 },
    { loc: "/about", lastMod: new Date().toISOString(), priority: 0.8 },
    { loc: "/contact", lastMod: new Date().toISOString(), priority: 0.7 },
    { loc: "/product", lastMod: new Date().toISOString(), priority: 0.7 },
  ],

  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
