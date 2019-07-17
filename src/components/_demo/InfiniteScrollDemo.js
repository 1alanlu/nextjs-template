/* eslint-disable no-use-before-define */
import { useState } from 'react'
import useInfiniteScroll from '@utils/hooks/useInfiniteScroll'

// 無限滾動

const InfiniteScrollDemo = () => {
  // console.log('render InfiniteScroll')

  const [listItems, setListItems] = useState(Array.from(Array(30).keys(), n => n + 1))
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems)

  function fetchMoreListItems() {
    setTimeout(() => {
      setListItems(prevState => [...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)])
      setIsFetching(false)
    }, 2000)
  }

  return (
    <>
      <ul>
        {listItems.map(listItem => (
          <li key={listItem}>List Item {listItem}</li>
        ))}
      </ul>
      {isFetching && 'Fetching more list items...'}
    </>
  )
}

export default InfiniteScrollDemo
