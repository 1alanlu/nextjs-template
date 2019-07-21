import { memo } from 'react'

// 組件
import Card from '@components/presentational/Card'

// 樣式
import styles from '@sass/components/hobbies.module.scss'

// 興趣區塊
const Hobbies = memo(
  ({ data }) => {
    console.log('render Hobbies')

    return (
      <div className={styles.hobbies}>
        {data.map((item, idx) => (
          <Card
            data-aos="zoom-in-up"
            data-aos-delay={100 * idx}
            key={item.id}
            name={item.name}
            desc={item.desc}
            icon={item.icon}
          />
        ))}
      </div>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.data === nextProps.data
  }
)

export default Hobbies
