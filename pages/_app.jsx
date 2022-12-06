import '../styles/index.css'

import App from 'next/app'

export default class MistfulApp extends App {
  render() {
    const { Component, pageProps, router } = this.props
    return <Component {...pageProps} />
  }
}

export function reportWebVitals(metric) {
  // console.log(metric)
}
