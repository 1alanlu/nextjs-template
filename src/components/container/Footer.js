import { memo } from 'react'
import PropTypes from 'prop-types'

// 展示組件
import Contact from '@components/container/Contact'

// 工具
import { Compare } from '@utils/common/Compare'

// 資料
import ContactData from '@static/data/contact.json'

// 頁尾
const Footer = memo(({ styles }) => {
  console.log('render Footer')

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <Contact data={ContactData.sort(Compare.ID_ASC)} />
      </div>
    </footer>
  )
})

Footer.propTypes = {
  styles: PropTypes.object.isRequired,
}

export default Footer
