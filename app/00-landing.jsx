import cn from 'classnames'
import { useRouter } from 'next/router'

import LINKSHead from '@Heads/links'
import SEOHead from '@Heads/sso/seo'
import SMOHead from '@Heads/sso/smo'

import Layout from '@Layout'
import Main from '@Layout/02_main'

export default function Landing() {
  const router = useRouter()
  return (
    <>
      <SEOHead page="Coming Soon!" />
      <SMOHead page="Coming Soon!" path={router.pathname} />
      <LINKSHead />

      <Layout>
        <Main className="landing">
          Coming Soon!
        </Main>
      </Layout>
    </>
  )
}
