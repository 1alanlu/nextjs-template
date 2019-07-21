/* eslint-disable no-use-before-define */
/* eslint-disable no-const-assign */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import { memo, useState, useEffect, useMemo, useRef } from 'react'
// import PropTypes from 'prop-types'
import StackGrid from 'react-stack-grid'
import Carousel, { Modal, ModalGateway } from 'react-images'
import classNames from 'classnames'

// 展示組件
import { MdExpandMore } from 'react-icons/md'
import Image from '@components/presentational/Image'

// 工具
import useInfiniteScroll from '@utils/hooks/useInfiniteScroll'
import * as gtag from '@utils/gtag'
import { Compare } from '@utils/common/Compare'

// 樣式
import styles from '@sass/components/portfolio.module.scss'

const ARRAY_SIZE = 20

const Portfolio = memo(({ data }) => {
  console.log('render Portfolio')
  const [isChk, setIsChk] = useState(true)
  // 顯示的物件
  const [listItems, setListItems] = useState([])
  // 全部的物件
  const [filterData, setFilterData] = useState(data.sort(isChk ? Compare.ID_DESC : Compare.ID_ASC))

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)

  // 格子引用
  const lastSelectedIndexRef = useRef()
  lastSelectedIndexRef.current = selectedIndex

  // 載入中
  const [isFetching, setIsFetching, hasMore, setHasMore] = useInfiniteScroll(fetchMoreListItems)

  function fetchMoreListItems() {
    console.log('-fetchMoreListItems-', listItems.length, filterData.length, hasMore, isFetching)
    setListItems(prevItems => [...prevItems, ...filterData.slice(prevItems.length, prevItems.length + ARRAY_SIZE)])
  }

  // 資料更新時 同步更新 是否還有更多
  useEffect(() => {
    console.log('useEffect-listItems:', listItems.length, filterData.length)
    setHasMore(listItems.length < filterData.length)

    const timeoutID = window.setTimeout(() => {
      handleGridUpdate()
      setIsFetching(false)
    }, 1000)

    return () => {
      window.clearTimeout(timeoutID)
    }
  }, [listItems])

  // 觸發載入
  useEffect(() => {
    handleLoad(true)
  }, [])

  // 載入物件 觸發(fetchMoreListItems)
  const handleLoad = (isForce = false) => {
    if (isForce) {
      setHasMore(true)
      setIsFetching(true)
    } else {
      if (isFetching) return
      setIsFetching(true)
    }
  }

  // 格子引用
  const gridRef = useRef()

  // 更新格子布局
  function handleGridUpdate() {
    gridRef.current.updateLayout()
  }

  // 目前分類
  const categoryRef = useRef(null)
  // 篩選物件
  const handleFilter = ({ display, value }) => {
    console.log('-handleFilter', hasMore, isFetching)
    if (categoryRef.current === value) return

    gtag.event({
      action: 'handleFilter',
      category: 'Portfolio',
      label: display,
    })

    categoryRef.current = value
    if (categoryRef.current) {
      setFilterData(
        data.sort(isChk ? Compare.ID_DESC : Compare.ID_ASC).filter(function(_data) {
          return _data.category.includes(categoryRef.current)
        })
      )
    } else {
      setFilterData(data.sort(isChk ? Compare.ID_DESC : Compare.ID_ASC))
    }

    handleReset()
  }

  // 重置物件
  const handleReset = () => {
    setListItems([])
    handleLoad(true)
  }

  const toggleLightbox = (idx = 0) => {
    setSelectedIndex(idx)
    setLightboxIsOpen(flag => !flag)
  }

  const handleImgClick = ({ src }) => {
    gtag.event({
      action: 'click_img',
      category: 'Portfolio',
      label: src,
    })
  }

  const handleChkChange = () => {
    if (isFetching) return
    let lastChk
    setIsChk(flag => {
      lastChk = !flag
      return !flag
    })

    setFilterData(data => data.sort(lastChk ? Compare.ID_DESC : Compare.ID_ASC))
    handleReset()
  }

  const COLUMN_WIDTH = document.body.clientWidth > 480 ? 200 : 150

  return (
    <>
      <div>
        <div className={styles.topBox}>
          {useMemo(
            () => (
              <Nav handleFilter={handleFilter} categoryRef={categoryRef} />
            ),
            [categoryRef.current]
          )}
          <div>
            <label htmlFor="default">
              <input type="checkbox" id="default" defaultChecked={isChk} onChange={handleChkChange} />
              <span className={styles.switch} />
            </label>
          </div>
        </div>
        {useMemo(
          () => (
            <StackGrid
              columnWidth={COLUMN_WIDTH}
              monitorImagesLoaded={false}
              gridRef={grid => (gridRef.current = grid)}
            >
              {listItems.map((item, index) => (
                <Box
                  key={item.id}
                  item={item}
                  columnWidth={COLUMN_WIDTH}
                  onClick={() => {
                    handleImgClick(item)
                    toggleLightbox(index)
                  }}

                  /* onLoad={handleGridUpdate} */
                />
              ))}
            </StackGrid>
          ),
          [listItems]
        )}
        <div className={styles.tips}>
          {hasMore && isFetching && <span className={styles.loading} />}
          {hasMore && !isFetching && (
            <button type="button" className={styles.more} onClick={handleLoad}>
              <MdExpandMore />
            </button>
          )}
        </div>
        {!hasMore && <div className={styles.done}>Will be updated</div>}
      </div>
      <ModalGateway>
        {lightboxIsOpen ? (
          <Modal
            onClose={toggleLightbox}
            styles={{
              blanket: base => ({
                ...base,
                zIndex: 10,
              }),
              positioner: base => ({
                ...base,
                display: 'block',
                zIndex: 11,
              }),
              track: base => ({
                ...base,
                height: '100vh',
              }),
            }}
          >
            <Carousel
              views={listItems.map(item => {
                return {
                  src: `${process.env.LOCATION_PREFIX}/static/${item.src}`,
                  srcSet: item.category[0],
                  caption: item.description,
                  alt: item.name,
                }
              })}
              currentIndex={lastSelectedIndexRef.current}
              frameProps={{ autoSize: 'height' }}
              styles={{
                container: base => ({
                  ...base,
                  height: '100vh',
                }),
                view: base => ({
                  ...base,
                  alignItems: 'center',
                  display: 'flex ',
                  height: '100vh',
                  justifyContent: 'center',

                  '& > img': {
                    maxHeight: 'calc(100vh - 44px)',
                  },
                }),
              }}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  )
})

const Nav = ({ handleFilter, categoryRef }) => {
  const categoryArr = [
    { id: 10, display: '全部', value: null },
    { id: 20, display: '平面', value: '平面' },
    { id: 30, display: 'RESIZE', value: 'resize' },
  ]

  return (
    <ul className={styles.nav}>
      {categoryArr.map(category => (
        <li
          key={category.id}
          role="menuitem"
          className={classNames({ [styles.active]: categoryRef.current === category.value })}
          onClick={() => handleFilter(category)}
          onKeyUp={() => {}}
        >
          {category.display}
        </li>
      ))}
    </ul>
  )
}

const Box = ({ item, columnWidth, onClick }) => {
  return (
    <div className={styles.box} role="button" tabIndex={0} onClick={onClick} onKeyUp={() => {}}>
      <figure>
        <Image src={item.src} alt={item.name} style={{ width: `${columnWidth}px`, height: 'auto' }} />
        <div className={styles.mask}>
          {item.category && (
            <div className={styles.category}>
              {item.category.map(c => (
                <span key={c}>{c}</span>
              ))}
            </div>
          )}
          {/* {item.description && <figcaption>{item.description}</figcaption>} */}
        </div>
      </figure>
    </div>
  )
}

export default Portfolio
