/* Environment */
export const NODE_ENV = process.env.NODE_ENV // Server
export const VERCEL_ENV = process.env.VERCEL_ENV // Hosting
export const VERCEL_GIT_COMMIT_REF = process.env.VERCEL_GIT_COMMIT_REF // Hosting

/* Contact Forms */
// export const POSTMARK_TOKEN = process.env.POSTMARK_TOKEN // Email
// export const GOOGLE_RECAPTCHA_SITEKEY = process.env.GOOGLE_RECAPTCHA_SITEKEY // Security
// export const GOOGLE_RECAPTCHA_SITEKEY_DEV = process.env.GOOGLE_RECAPTCHA_SITEKEY_DEV // Security

/* Maps */
// export const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY

/* Analytics */
// export const GOOGLE_ANALYTICS_TRACKING_ID = process.env.GOOGLE_ANALYTICS_TRACKING_ID
// export const FACEBOOK_PIXEL_ID = process.env.FACEBOOK_PIXEL_ID
// export const FULLSTORY_ORG = process.env.FULLSTORY_ORG

/* Cookies / Sessions */
// export const SESSION_SECRET = process.env.SESSION_SECRET

/* CMS / Database */
// export const FAUNADB_SECRET = process.env.FAUNADB_SECRET

/* E-Commerce */
// export const ALLAYPAY_SECRET = process.env.ALLAYPAY_SECRET // Credit Card Processor
// export const SHIPPO_SECRET = process.env.SHIPPO_SECRET // Shipper

export const isDev = NODE_ENV === 'development'
export const isProd = NODE_ENV === 'production'

export const isLiveDev = VERCEL_ENV === 'development'
export const isLivePreview = VERCEL_ENV === 'preview'
export const isLiveProduction = VERCEL_ENV === 'production'

export const gitBranch = VERCEL_GIT_COMMIT_REF

export const isTesting = isDev
export const isTestingAPI = isDev
export const isTestingDB = isDev
export const isTestingEmail = isDev
export const isTestingSessions = isDev
