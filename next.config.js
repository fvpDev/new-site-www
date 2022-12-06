require('dotenv').config() // For .env to work in local dev environment
const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
})

module.exports = withBundleAnalyzer({
  swcMinify: false,
  experimental: { images: { allowFutureImage: true } },
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "content-security-policy",
            value: [
              "default-src 'self'",
              ["connect-src 'self'",
                "rs.fullstory.com",
                "www.google-analytics.com",
                "maps.googleapis.com",
                "fonts.googleapis.com",
                "fonts.gstatic.com",
                "vitals.vercel-insights.com",
              ].join(' '),
              ["font-src 'self'",
                "fonts.gstatic.com",
              ].join(' '),
              ["frame-src 'self'",
                "www.google.com",
              ].join(' '),
              ["img-src 'self'",
                "data:",
                "www.facebook.com",
                "www.google-analytics.com",
                "maps.gstatic.com",
                "*.googleapis.com",
                "*.ggpht.com",
              ].join(' '),
              "script-src 'self' 'unsafe-eval'",
              ["script-src-elem 'self'",
                "connect.facebook.net",
                "edge.fullstory.com",
                "www.google.com",
                "www.google-analytics.com",
                "maps.googleapis.com",
                "www.gstatic.com",
              ].join(' '),
              "style-src 'self' 'unsafe-inline'",
              ["style-src-elem 'self' 'unsafe-inline'",
                "fonts.googleapis.com",
              ].join(' '),
            ].join('; ')
          },
          { key: "feature-policy", value: "'none'" },
          { key: "referrer-policy", value: "same-origin" },
          { key: "x-content-type-options", value: "nosniff" },
          { key: "x-frame-options", value: "deny" },
          { key: "x-xss-protection", value: "1" },
        ]
      }
    ];
  },
  env: { // for env to work with Nextjs
    /* Environment */
    VERCEL_ENV: process.env.VERCEL_ENV, // Hosting
    VERCEL_GIT_COMMIT_REF: process.env.VERCEL_GIT_COMMIT_REF, // Hosting

    /* Contact Forms */
    // POSTMARK_TOKEN: process.env.POSTMARK_TOKEN, // Email
    // GOOGLE_RECAPTCHA_SITEKEY: process.env.GOOGLE_RECAPTCHA_SITEKEY, // Security
    // GOOGLE_RECAPTCHA_SITEKEY_DEV: process.env.GOOGLE_RECAPTCHA_SITEKEY_DEV, // Security

    /* Maps */
    // GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY, // Maps

    /* Analytics */
    // GOOGLE_ANALYTICS_TRACKING_ID: process.env.GOOGLE_ANALYTICS_TRACKING_ID, // Analytics
    // FACEBOOK_PIXEL_ID: process.env.FACEBOOK_PIXEL_ID, // Analytics
    // FULLSTORY_ORG: process.env.FULLSTORY_ORG, // Analytics

    /* Cookies / Sessions */
    // SESSION_SECRET: process.env.SESSION_SECRET, // Cookies/Sessions

    /* CMS / Database */
    // FAUNADB_SECRET: process.env.FAUNADB_SECRET, // Database

    /* E-Commerce */
    // ALLAYPAY_SECRET = process.env.ALLAYPAY_SECRET // Credit Card Processor
    // SHIPPO_SECRET = process.env.SHIPPO_SECRET // Shipper
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      /* App */
      '@App': path.resolve(__dirname, 'app/'),
      '@Brand': path.resolve(__dirname, 'app/_brand/'),
      '@Hooks': path.resolve(__dirname, 'app/_hooks/'),
      '@Layout': path.resolve(__dirname, 'app/_layout/'),
      '@Heads': path.resolve(__dirname, 'app/_layout/_heads/'),

      /* Lib */
      '@Lib': path.resolve(__dirname, 'lib/'),
      '@API': path.resolve(__dirname, 'lib/api/'),
      '@Helpers': path.resolve(__dirname, 'lib/helpers/'),
      '@Constants': path.resolve(__dirname, 'lib/constants/'),
    }
    if (isServer) { // Generate Sitemap + Robots + RSS on build time
      require('./utils/generate-sitemap')
      require('./utils/generate-robots')
      // require('./utils/generate-rss')
    }
    return config
  }
})
