import React, { useState, useCallback } from 'react'
import RenderCounter from '@utils/hooks/useRenderCounter'

// 優化不必要的重新渲染 useCallback + memo

const CountButton = React.memo(({ onClick, count, id }) => {
  console.log(`render CountButton-${id}`)
  return (
    <button type="button" onClick={onClick}>
      <RenderCounter />
      {count}
    </button>
  )
})

const UnnecessaryReRendersDemo = () => {
  const [count1, setCount1] = useState(0)
  const increment1 = useCallback(() => setCount1(c => c + 1), [])
  const [count2, setCount2] = useState(0)
  const increment2 = useCallback(() => setCount2(c => c + 1), [])
  return (
    <>
      <RenderCounter />
      <CountButton id="1" count={count1} onClick={increment1} />
      <CountButton id="2" count={count2} onClick={increment2} />
    </>
  )
}

export default UnnecessaryReRendersDemo
