/**
Next.js 使用該App 組件初始化頁面。您可以覆蓋它並控制頁面初始化。這可以讓你做出驚人的事情：
 * 在頁面更改之間保持佈局
 * 導航頁面時保持狀態
 * 使用自定義錯誤處理 componentDidCatch
 * 將其他數據注入頁面（例如，通過處理GraphQL查詢）
 */
import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import Router, { withRouter } from 'next/router'
import { DefaultSeo, LogoJsonLd } from 'next-seo'
import NProgress from 'nprogress'
import { ThemeProvider } from 'styled-components'

// import your default seo configuration
import SEO from '@config/seo.config'

// GA
import * as gtag from '@utils/gtag'
// Router.events.on('routeChangeComplete', url => gtag.pageview(url))

let startProgressTimer = null
const startProgress = () => NProgress.start()
const stopProgress = () => {
  console.log('stopProgress')
  clearTimeout(startProgressTimer)
  Router.events.off('beforeHistoryChange', stopProgress)
  Router.events.off('routeChangeComplete', stopProgress)
  Router.events.off('routeChangeError', stopProgress)
  NProgress.done()
}

const showProgressBar = delay => {
  startProgressTimer = setTimeout(startProgress, delay)
  Router.events.on('beforeHistoryChange', stopProgress)
  Router.events.on('routeChangeComplete', stopProgress)
  Router.events.on('routeChangeError', stopProgress)
}

const handlerChangeStart = url => {
  console.log('App is changing to: ', url)
  showProgressBar(300)
}

Router.events.on('routeChangeStart', handlerChangeStart)
Router.events.on('routeChangeComplete', () => {
  // dev mode路由跳转后样式丢失
  // 原因：dev下样式根据页面动态加载，浏览器缓存文件styles.chunk.css造成样式不更新。
  // 解决方案： 利用版本号强制重载样式文件
  if (process.env.NODE_ENV !== 'production') {
    const els = document.querySelectorAll('link[href*="/_next/static/css/styles.chunk.css"]')
    const timestamp = new Date().valueOf()
    els[0].href = `/_next/static/css/styles.chunk.css?v=${timestamp}`
  }

  gtag.pageview(Router.pathname)
})

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

class MyApp extends App {
  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {}

  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }

  //   return { pageProps }
  // }

  componentWillUnmount() {
    clearTimeout(startProgressTimer)
    Router.events.off('routeChangeStart', handlerChangeStart)
    Router.events.off('beforeHistoryChange', stopProgress)
    Router.events.off('routeChangeComplete', stopProgress)
    Router.events.off('routeChangeError', stopProgress)
  }

  componentDidMount() {
    NProgress.done(true)
  }

  render() {
    console.log('render MyApp')

    const { Component, pageProps, router } = this.props

    SEO.openGraph.url = process.env.SITE_URL + router.pathname

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
            key="meta_viewport"
          />
        </Head>
        <DefaultSeo {...SEO} canonical={process.env.SITE_URL + router.pathname} />
        <LogoJsonLd logo={`${process.env.SITE_URL}/static/images/logo.png`} url={process.env.SITE_URL} />
        <Container>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Container>
      </>
    )
  }
}

export default withRouter(MyApp)
