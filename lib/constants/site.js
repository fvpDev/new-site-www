import { BRAND_ID, BRAND_NAME, BRAND_TAGLINE, BRAND_LOCATION, BRAND_DOMAIN } from './brand'
import { gitBranch } from './env'

/* Site Identity */
export const SITE_IS_PWA = false
export const SITE_VERSION = '0.0.1'
export const SITE_NAME = BRAND_NAME
export const SITE_DOMAIN = BRAND_DOMAIN
export const SITE_IS_LOCAL = !gitBranch
export const SITE_PROTOCOL = SITE_IS_LOCAL ? 'localhost:3000' : 'https://'
export const SITE_SUBDOMAIN = SITE_IS_LOCAL ? '' : gitBranch == 'master' ? 'www' : gitBranch
export const SITE_HOSTNAME = SITE_IS_LOCAL ? '' : `${SITE_SUBDOMAIN}.${SITE_DOMAIN}`
export const SITE_BASE_URL = `${SITE_PROTOCOL}${SITE_HOSTNAME}`

/* SSO (Social Search Optimization): SEO (Search Engine Optimization) + SMO (Social Media Optimization) */
export const SSO_PAGE_DIVIDER = '»' // », -, |
export const SSO_TITLE_DIVIDER = '|' // », -, |
export const SSO_DEFAULT_TITLE = `${BRAND_NAME} ${SSO_TITLE_DIVIDER} ${BRAND_TAGLINE}`
export const SSO_DEFAULT_DESCRIPTION = 'New Company is the best at being new!'
export const SSO_DEFAULT_BRAND_KEYWORDS = `${BRAND_ID.toLowerCase()}, ${BRAND_NAME.toLowerCase()}, ${BRAND_NAME.toLowerCase().split(' ').join(', ')}, ${BRAND_TAGLINE.toLowerCase()}${BRAND_LOCATION ? ', ' + BRAND_LOCATION : ''}`
export const SSO_DEFAULT_KEYWORDS = `${SSO_DEFAULT_BRAND_KEYWORDS}`
