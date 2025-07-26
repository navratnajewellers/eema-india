/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://eemaindia.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,

  additionalPaths: async (config) => [
    { loc: "/", lastmod: new Date().toISOString(), priority: 1.0 },
    { loc: "/about", lastmod: new Date().toISOString(), priority: 0.9 },
    { loc: "/contact", lastmod: new Date().toISOString(), priority: 0.9 },
    { loc: "/careers", lastmod: new Date().toISOString(), priority: 0.8 },
    { loc: "/members", lastmod: new Date().toISOString(), priority: 0.8 },
    {
      loc: "/be-an-eema-member",
      lastmod: new Date().toISOString(),
      priority: 0.9,
    },
    { loc: "/members-list", lastmod: new Date().toISOString(), priority: 0.7 },
    { loc: "/footprints", lastmod: new Date().toISOString(), priority: 0.7 },
    {
      loc: "/press-coverage-eema",
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    { loc: "/eemagine2024", lastmod: new Date().toISOString(), priority: 0.8 },
    { loc: "/eemagine2025", lastmod: new Date().toISOString(), priority: 0.9 },

    // Knowledge Center Section
    {
      loc: "/knowledge-center",
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: "/knowledge-center/newsletter",
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: "/knowledge-center/mom",
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: "/knowledge-center/industry-whitepaper",
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: "/knowledge-center/value-added-tieups",
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: "/knowledge-center/events",
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },

    {
      loc: "/eema-regional-initiatives",
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },

    // EEMAX Global
    { loc: "/eemaxglobal", lastmod: new Date().toISOString(), priority: 0.8 },
    {
      loc: "/eemaxglobal/awards",
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: "/eemaxglobal/winners",
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: "/eemaxglobal/contact",
      lastmod: new Date().toISOString(),
      priority: 0.6,
    },
    {
      loc: "/eemaxglobal/terms-and-conditions",
      lastmod: new Date().toISOString(),
      priority: 0.6,
    },

    // Spotlight Awards
    {
      loc: "/spotlightaward",
      lastmod: new Date().toISOString(),
      priority: 0.8,
    },
    {
      loc: "/spotlightaward/awards",
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: "/spotlightaward/categories",
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },
    {
      loc: "/spotlightaward/winners",
      lastmod: new Date().toISOString(),
      priority: 0.7,
    },

    // Policies
    { loc: "/privacy", lastmod: new Date().toISOString(), priority: 0.5 },
    {
      loc: "/refund-and-cancellation-policy",
      lastmod: new Date().toISOString(),
      priority: 0.5,
    },
  ],

  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
