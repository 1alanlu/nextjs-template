import { memo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

// 上下文
import { useScrollYState, useScrollYDispatch } from '@context/scrollYContext'

// 展示組件
import Nav from '@components/container/Nav'
import CustomLink from '@components/presentational/Link/CustomLink'

// 資料
import NavData from '@static/data/nav.json'

// 頁首
const Header = memo(({ styles }) => {
  console.log('render Header')

  // 卷軸相關變數
  const scrollYState = useScrollYState()
  const { headerRef } = useScrollYDispatch()

  return (
    <header
      ref={headerRef}
      className={classnames(styles.header, {
        [styles.hide]: !scrollYState.isHeaderShow,
        [styles.top]: scrollYState.isHeaderTop,
      })}
    >
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <CustomLink href="/">
            <a title="Home" className={styles.logo} />
          </CustomLink>
        </div>
        <Nav data={NavData} />
      </div>
    </header>
  )
})

Header.propTypes = {
  styles: PropTypes.object.isRequired,
}

export default Header
