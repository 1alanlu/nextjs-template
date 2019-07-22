/* eslint-disable react/no-array-index-key */
import { useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import AOS from 'aos'

import '@sass/main.scss'

// 上下文
import { ScrollYProvider, useScrollYState, useScrollYDispatch } from '@context/scrollYContext'

// 展示組件
import Header from '@components/container/Header'
import Footer from '@components/container/Footer'
import ScrollTop from '@components/presentational/ScrollTop'
// import Script from '@components/Script'

// 工具
import debounce from '@utils/debounce'
// import * as gtag from '@utils/gtag'

// 資料
import aosConfig from '@config/aos.config'

// 樣式
import '@sass/vendors/aos/aos.scss'
import styles from '@sass/components/layout.module.scss'

const LayoutRoot = props => (
  <ScrollYProvider>
    <Layout {...props} />
  </ScrollYProvider>
)

const Layout = ({ children, jsSrcArr, title, desc: description }) => {
  // 卷軸相關變數
  const scrollYState = useScrollYState()
  // 設置捲軸相關變數
  const { setScrollY } = useScrollYDispatch()

  // CDM
  useEffect(() => {
    console.log('debounceHandleScroll')
    // 滾輪監聽事件
    const handleScroll = ({ setHeaderShow = true, setTopShow = true } = {}) => {
      const currentScrollY = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
      setScrollY(currentScrollY, setHeaderShow, setTopShow)
    }
    handleScroll({ setHeaderShow: false })

    const debounceHandleScroll = debounce(handleScroll, 20, false)
    window.addEventListener('scroll', debounceHandleScroll)
    return () => window.removeEventListener('scroll', debounceHandleScroll)
  }, [debounce])

  // AOS初始設置
  useEffect(() => {
    AOS.init(aosConfig)
  }, [])

  const header = useMemo(() => <Header styles={styles} />, [])
  const footer = useMemo(() => <Footer styles={styles} />, [])
  const scrollTop = useMemo(() => <ScrollTop isShow={scrollYState.isScrollTopShow} />, [scrollYState.isScrollTopShow])

  return (
    <>
      <Head>
        {jsSrcArr.map((jsSrc, index) => (
          <script src={jsSrc} key={`js${index}`} />
        ))}
        {/* <Script>
          {() => {
            console.log('test Script')
          }}
        </Script> */}
      </Head>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
        }}
        additionalMetaTags={[
          {
            property: 'dc.creator',
            content: 'Zyl',
          },
          {
            name: 'application-name',
            content: 'NextSeo',
          },
        ]}
      />
      <div className={styles.fixBG} />
      <div className={styles.app}>
        {header}
        <section className={styles.content}>
          <article className={styles.wrapper}>{children}</article>
        </section>
        {footer}
      </div>
      {scrollTop}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  jsSrcArr: PropTypes.array,
  title: PropTypes.string,
  desc: PropTypes.string,
}

Layout.defaultProps = {
  jsSrcArr: [],
  title: 'default',
  desc: 'some description...',
}

export default LayoutRoot
