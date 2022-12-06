import Head from 'next/head'

import { BRAND_NAME, BRAND_TAGLINE } from '@Constants/brand'
import { SSO_DEFAULT_DESCRIPTION, SSO_DEFAULT_KEYWORDS } from '@Constants/site'

/* Search Engine Optimization */
export default function SEOHead({
  isHome = false,
  title = '',
  page = '',
  subPage = '',
  pageDivider = '»', // », -, |
  titleDivider = '|', // », -, |
  description = SSO_DEFAULT_DESCRIPTION,
  keywords = SSO_DEFAULT_KEYWORDS,
}) {
  return (
    <Head>
      <title>{!!title ? title : (isHome
        ? `${BRAND_NAME} ${titleDivider} ${BRAND_TAGLINE}`
        : `${page}${!!subPage ? ` ${pageDivider} ${subPage}` : ''} ${titleDivider} ${BRAND_NAME}`)
      }</title>
      <meta name="description" content={description} />
      <meta name='keywords' content={keywords} />
    </Head>
  )
}
