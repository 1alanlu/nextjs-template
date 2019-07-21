import classnames from 'classnames'
import { FaArrowUp } from 'react-icons/fa'

// 工具
import scrollTo from '@utils/scrollTo'

// 樣式
import styles from '@sass/components/scrolltop.module.scss'

// 置頂按鈕
const ScrollTop = ({ isShow, onClick = () => scrollTo(0, 300) }) => {
  console.log('render ScrollTop')

  return (
    <div
      role="button"
      tabIndex="0"
      className={classnames(styles.scrolltop, { [styles.hide]: !isShow })}
      onClick={onClick}
      onKeyUp={onClick}
    >
      <FaArrowUp />
    </div>
  )
}

export default ScrollTop
