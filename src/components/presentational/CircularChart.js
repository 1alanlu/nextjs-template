import classnames from 'classnames'

// 樣式
import styles from '@sass/components/circularChart.module.scss'

// 圓形進度條
const CircularChart = ({ text = 'AI', percentage = 30 }) => {
  console.log('render CircularChart')

  return (
    <div className={classnames(styles.singleChart, styles[`_${text}`])}>
      <svg viewBox="0 0 36 36" className={styles.circularChart}>
        <circle cx="18" cy="18" r="15" />
        <path
          className={styles.circleBg}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className={styles.circle}
          strokeDasharray={`${percentage}, 100`}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <div className={styles.text}>{text}</div>
    </div>
  )
}

export default CircularChart
