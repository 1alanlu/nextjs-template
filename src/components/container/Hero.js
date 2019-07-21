/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/interactive-supports-focus */

import { useState, useEffect, useRef, useMemo } from 'react'
import classnames from 'classnames'

// 上下文
import { useScrollYState /* , useScrollYDispatch */ } from '@context/scrollYContext'

// 組件
import Image from '@components/presentational/Image'

// 工具
import debounce from '@utils/debounce'
import scrollTo from '@utils/scrollTo'

// 樣式
import styles from '@sass/components/hero.module.scss'

// 導覽列高度
const tabContainerHeight = process.env.TAB_CONTAINER_HEIGHT

// 主板位
const HeroRoot = ({ data, blockRef }) => {
  // console.log('render Hero')

  // 卷軸相關變數
  const scrollYState = useScrollYState()

  // 目前錨點
  const [currentAnchor, setCurrentAnchor] = useState(null)
  // 目前導覽編號
  const [currentTabIdx, setCurrentTabIdx] = useState(null)
  // 導覽列置頂
  const [isTabContainerTop, setIsTabContainerTop] = useState(false)

  // 引用
  const heroRef = useRef()
  const tabRef = useRef([])

  // 最新的捲軸位移量
  const latestPreScrollY = useRef()
  latestPreScrollY.current = scrollYState.scrollY

  // 最新的導覽編號
  const latestCurrentTabIdx = useRef()
  latestCurrentTabIdx.current = currentTabIdx

  // 初始引用組數長度
  useEffect(() => {
    tabRef.current = tabRef.current.slice(0, data.length)
  }, [data])

  // 滾輪監聽事件
  useEffect(() => {
    const handleScroll = () => {
      checkTabContainerPosition()
      findCurrentTabSelector()
    }
    handleScroll()

    const debounceHandleScroll = debounce(handleScroll, 15, false)
    window.addEventListener('scroll', debounceHandleScroll)
    return () => window.removeEventListener('scroll', debounceHandleScroll)
  }, [debounce])

  // 檢查導覽列定位
  const checkTabContainerPosition = () => {
    if (heroRef.current) {
      const offset = heroRef.current.offsetTop + heroRef.current.clientHeight
      setIsTabContainerTop(latestPreScrollY.current > offset)
    }
  }
  // 檢查當前導覽區塊
  const findCurrentTabSelector = () => {
    let newCurrentAnchor
    let newCurrentTabIdx
    for (let i = 0; i < data.length; i += 1) {
      if (blockRef.current[i]) {
        const offsetTop = blockRef.current[i].offsetTop - tabContainerHeight
        const offsetBottom = blockRef.current[i].offsetTop + blockRef.current[i].clientHeight - tabContainerHeight
        if (latestPreScrollY.current > offsetTop && latestPreScrollY.current < offsetBottom) {
          newCurrentAnchor = data[i].anchor
          newCurrentTabIdx = i
        }
      }
    }
    if (currentAnchor !== newCurrentAnchor || currentAnchor === null) {
      // window.history.replaceState(null, null, newCurrentAnchor ? `#${newCurrentAnchor}` : ' ')

      setCurrentAnchor(newCurrentAnchor)
      setCurrentTabIdx(newCurrentTabIdx)
      setSliderCss()
    }
  }
  // 設置Slider樣式
  const setSliderCss = () => {
    const tabIdx = latestCurrentTabIdx.current
    if (tabRef.current[tabIdx]) {
      const left = tabRef.current[tabIdx].offsetLeft
      const width = tabRef.current[tabIdx].clientWidth
      document.getElementById('tabSlider').style.width = `10px`
      document.getElementById('tabSlider').style.left = `${left + width / 2 - 5}px`
    }
  }

  // 處理導覽點擊事件
  const handleTabClick = (event, index) => {
    event.preventDefault()
    const scrollTop = blockRef.current[index].offsetTop - tabContainerHeight + 1
    scrollTo(scrollTop, 300)
    setTimeout(function() {
      findCurrentTabSelector()
    }, 500)
  }

  const hero = useMemo(() => <Hero data={data} handleTabClick={handleTabClick} />, [data])
  const heroTabs = useMemo(
    () => (
      <HeroTabs
        data={data}
        handleTabClick={handleTabClick}
        tabRef={tabRef}
        isTabContainerTop={isTabContainerTop}
        currentAnchor={currentAnchor}
      />
    ),
    [data, isTabContainerTop, currentAnchor]
  )

  return (
    <section className={styles.heroTabs} ref={heroRef}>
      {hero}
      {heroTabs}
    </section>
  )
}

const Hero = ({ data, handleTabClick }) => {
  console.log('render Hero')

  return (
    <div className={styles.hero}>
      {data.map((item, index) => (
        <div
          key={item.id}
          data-aos="zoom-in"
          data-aos-delay={(index + 1) * 100}
          data-aos-offset={`-${tabContainerHeight}`}
        >
          <Image className={styles.bg} src={item.icon} bg />
          <div role="button" className={styles.mask} onClick={e => handleTabClick(e, index)} onKeyUp={() => {}}>
            <p>{item.display}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

const HeroTabs = ({ data, handleTabClick, tabRef, isTabContainerTop, currentAnchor }) => {
  console.log('render HeroTabs')

  return (
    <div className={classnames(styles.tabContainer, { [styles.top]: isTabContainerTop })}>
      {data.map((item, index) => (
        <a
          key={item.id}
          href={`${process.env.LOCATION_PREFIX}/#${item.anchor}`}
          className={classnames(styles.tab, { [styles.target]: item.anchor === currentAnchor })}
          onClick={e => handleTabClick(e, index)}
          ref={el => (tabRef.current[index] = el)}
        >
          {item.display}
        </a>
      ))}
      <span id="tabSlider" className={styles.tabSlider} />
    </div>
  )
}

export default HeroRoot
