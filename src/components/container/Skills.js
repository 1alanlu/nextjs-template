import { memo } from 'react'

// 組件
import CircularChart from '@components/presentational/CircularChart'

// 樣式
import styles from '@sass/components/skills.module.scss'

// 技能
const Skills = memo(
  ({ data }) => {
    console.log('render Skills')

    return (
      <div className={styles.skills}>
        {data.map((item, idx) => (
          <div data-aos="fade-in" data-aos-delay={100 * idx} key={item.id}>
            <CircularChart text={item.name} percentage={item.percentage} />
          </div>
        ))}
      </div>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.data === nextProps.data
  }
)

export default Skills
