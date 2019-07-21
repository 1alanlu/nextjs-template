// 組件
import Image from '@components/presentational/Image'

// 樣式
import styles from '@sass/components/card.module.scss'

// 卡片
const Card = ({ /* id, */ name, desc = '', icon = 'https://picsum.photos/300/400?random=1', ...others }) => {
  console.log('render Card')

  return (
    <div {...others}>
      <div className={styles.card}>
        <div className={styles.imgBx}>
          <Image src={icon} alt={name} progressive={false} />
        </div>
        {desc && (
          <div className={styles.details}>
            <div>
              <h5>{name}</h5>
              <p>{desc}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
