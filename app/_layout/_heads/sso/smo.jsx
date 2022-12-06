import React from 'react'
import Head from 'next/head'

import { BRAND_NAME, BRAND_TAGLINE } from '@Constants/brand'
import { SITE_NAME, SITE_BASE_URL, SSO_DEFAULT_TITLE, SSO_DEFAULT_DESCRIPTION } from '@Constants/site'

/* Social Media Optimization */
export default function SMOHead({
  isHome = false,
  path = '/',
  title = '',
  page = '',
  subPage = '',
  pageDivider = '»', // », -, |
  titleDivider = '|', // », -, |
  og = {
    url: `${SITE_BASE_URL}${path}`,
    locale: 'en_US',
    type: 'website',
    title: !!title ? title : (isHome ? `${SSO_DEFAULT_TITLE}` : `${page}${!!subPage ? ` ${pageDivider} ${subPage}` : ''} ${titleDivider} ${BRAND_NAME}`),
    description: SSO_DEFAULT_DESCRIPTION,
    site_name: SITE_NAME,
    // updated_time: '',
    image: {
      image: `${SITE_BASE_URL}/img/smo/og-tw.jpg`,
      url: `${SITE_BASE_URL}/img/smo/og-tw.jpg`,
      secure_url: `${SITE_BASE_URL}/img/smo/og-tw.jpg`,
      width: 1200,
      height: 630,
      alt: SITE_NAME,
      type: 'image/jpg',
    }
  },
  tw = {
    card: 'summary',
    title: SSO_DEFAULT_TITLE,
    description: SSO_DEFAULT_DESCRIPTION,
    image: `${SITE_BASE_URL}/img/smo/og-tw.jpg`,
  },
}) {
  return (
    <Head>
      {Object.keys(og).map(key => (
        <React.Fragment key={key}>
          {key !== 'image'
            ? <meta property={`og:${key}`} content={og[key]} />
            : Object.keys(og[key]).map(imgKey => <meta key={imgKey} property={`og:${imgKey == 'image' ? imgKey : `image:${imgKey}`}`} content={og[key][imgKey]} />)}
        </React.Fragment>
      ))}
      {Object.keys(tw).map(key => (
        <React.Fragment key={key}>
          <meta property={`twitter:${key}`} content={tw[key]} />
        </React.Fragment>
      ))}
    </Head>
  )
}
