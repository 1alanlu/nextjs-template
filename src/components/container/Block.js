/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

// 樣式
import styles from '@sass/components/block.module.scss'

// 大區塊
const Block = ({ data, blockRef }) => {
  console.log('render Block')

  return (
    <main>
      {data.map((item, index) => (
        <section
          key={item.id}
          id={`${item.anchor}`}
          className={styles.block}
          ref={el => (blockRef.current[index] = el)}
        >
          <div className={styles.maskBG} />
          <h2 data-aos="fade-right" className={styles.title}>
            {item.display}
          </h2>
          <div data-aos="fade-in" className={styles.content}>
            {item.content}
          </div>
        </section>
      ))}
    </main>
  )
}

export default Block
