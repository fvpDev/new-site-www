import React from 'react'

import BASEHead from './_heads/base'
import Header from './01_header'
import Footer from './03_footer'

export default function Layout({ children }) {
  return (
    <>
      <BASEHead />

      <Header />
      {children}
      <Footer />
    </>
  )
}
