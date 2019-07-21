import { memo } from 'react'

// 組件
import Image from '@components/presentational/Image'

// 樣式
import styles from '@sass/components/profile.module.scss'

// 個人資料
const Profile = memo(
  ({ data }) => {
    console.log('render Profile')

    return (
      <div className={styles.profile}>
        <div className={styles.wrapper}>
          <div className={styles.avatar}>
            <div className={styles.frame} data-aos="zoom-in">
              <Image alt="avatar" src={data.avatar} />
            </div>
          </div>
          <div className={styles.info}>
            <h2 data-aos="fade-in" data-aos-delay="100">
              {data.name}
            </h2>
            <p data-aos="fade-in" data-aos-delay="200">
              {data.introduction}
            </p>
          </div>
        </div>
      </div>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.data === nextProps.data
  }
)

export default Profile
