import { memo } from 'react'
import { SocialProfileJsonLd } from 'next-seo'

// 展示組件
import { SvgIcon, IconType } from '@components/presentational/SvgIcon'

// 工具
import * as gtag from '@utils/gtag'

// 樣式
import styles from '@sass/components/contact.module.scss'

// 聯繫區塊
const Contact = memo(
  ({ data }) => {
    console.log('render Contact')

    const handleClick = site => {
      gtag.event({
        action: 'click_icon',
        category: 'Contact',
        label: site,
      })
    }

    return (
      <>
        <SocialProfileJsonLd
          type="Person"
          name={process.env.PROFILE_NAME}
          url={process.env.SITE_URL}
          sameAs={data.filter(contact => contact.site !== 'email').map(contact => contact.href)}
        />
        <div className={styles.contact}>
          {data.map(contact => (
            <a
              key={contact.id}
              href={(contact.site === 'email' ? 'mailto:' : '') + contact.href}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => handleClick(contact.site)}
            >
              {SvgIcon(IconType.Contact, contact.site)}
            </a>
          ))}
        </div>
      </>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.data === nextProps.data
  }
)

export default Contact
