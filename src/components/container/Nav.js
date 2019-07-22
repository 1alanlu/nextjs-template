import { memo } from 'react'
import { withRouter } from 'next/router'
import classnames from 'classnames'

// 展示組件
import CustomLink from '@components/presentational/Link/CustomLink'

// 樣式
import styles from '@sass/components/nav.module.scss'

// 導覽列
const Nav = memo(
  withRouter(({ data, router }) => {
    console.log('render Nav')

    return (
      <nav className={styles.nav}>
        <ul>
          {data.map(item => (
            <li key={item.href} className={classnames({ [styles.active]: router.pathname === item.href })}>
              <CustomLink href={item.href} prefetch={false}>
                <a title={item.display}>{item.display}</a>
              </CustomLink>
            </li>
          ))}
        </ul>
      </nav>
    )
  }),
  (prevProps, nextProps) => {
    return prevProps.data === nextProps.data
  }
)

export default Nav
