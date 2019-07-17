import React from 'react'
import { CountProvider, useCountState, useCountDispatch } from '@context/_demo/countContextReducer'
import RenderCounter from '@utils/hooks/useRenderCounter'

const CountDisplay = React.memo(() => {
  // console.log('CountContextDemo-CountDisplay')

  const { count } = useCountState()
  return (
    <div style={{ border: '1px solid black', padding: 10 }}>
      <RenderCounter />
      {`The current count is ${count}. `}
    </div>
  )
})

const Counter = React.memo(() => {
  // console.log('CountContextDemo-Counter')

  const { dispatch, increment } = useCountDispatch()
  return (
    <div style={{ border: '1px solid black', padding: 10 }}>
      <RenderCounter />
      <button type="button" onClick={increment}>
        Increment count
      </button>
      <button type="button" onClick={() => dispatch({ type: 'decrement' })}>
        Decrement count
      </button>
    </div>
  )
})

const CountContextReducerDemo = () => {
  const [, forceUpdate] = React.useState()
  return (
    <div style={{ border: '1px solid black', padding: 10 }}>
      <RenderCounter />
      <button type="button" onClick={() => forceUpdate({})}>
        force render
      </button>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default CountContextReducerDemo
