import Head from 'next/head'

export default function LINKSHead({ faviconPath = '/favicon.ico' }) {
  return (
    <Head>
      <link rel="shortcut icon" href={faviconPath} />
      {/*<link rel="alternate" type="application/rss+xml" href="/feed.xml" />*/}
    </Head>
  )
}
