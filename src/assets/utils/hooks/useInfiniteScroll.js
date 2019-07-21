import { useState, useEffect } from 'react'

const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(false)
  // 是否還有更多
  const [hasMore, setHasMore] = useState(true)

  const handleScroll = () => {
    const currentScrollY = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
    if (isFetching || !hasMore || window.innerHeight + currentScrollY < document.body.offsetHeight - 10) return
    setIsFetching(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    console.log(isFetching)
    if (!isFetching) return
    callback(() => {
      console.log('called back')
    })
  }, [isFetching])

  return [isFetching, setIsFetching, hasMore, setHasMore]
}

export default useInfiniteScroll
