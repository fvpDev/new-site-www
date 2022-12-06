/* Basic Info */
export const BRAND_ID = "NEW"
export const BRAND_NAME = "New Company"
export const BRAND_TAGLINE = "Tagline"

/* Legal Entity */
export const BRAND_LOCATION = "" // City, STATE_ABBR
export const BRAND_ENTITY_TYPE = "" // LLC | Inc | null
export const BRAND_ENTITY_IS_LLC = BRAND_ENTITY_TYPE == "LLC"
export const BRAND_ENTITY_IS_INC = BRAND_ENTITY_TYPE == "Inc"
export const BRAND_ENTITY_NAME = `${BRAND_NAME}${BRAND_ENTITY_TYPE ? `${BRAND_ENTITY_IS_LLC ? ',' : ''} ${BRAND_ENTITY_TYPE}${BRAND_ENTITY_IS_INC ? '.' : ''}` : ''}`

/* Site Domain & Email */
export const BRAND_DOMAIN = "newcompany.xyz"
export const BRAND_WEBSITE_EMAIL_NAME = `${BRAND_ID} Website`
export const BRAND_WEBSITE_EMAIL_ADDRESS = `website@${BRAND_DOMAIN}`
export const BRAND_POSTMASTER_EMAIL_NAME = `${BRAND_ID} Postmaster`
export const BRAND_POSTMASTER_EMAIL_ADDRESS = `postmaster@${BRAND_DOMAIN}`
export const BRAND_WEBMASTER_EMAIL_ADDRESS = 'webmaster@mistfulcreations.com'
