import React from 'react'
import RenderCounter from '@utils/hooks/useRenderCounter'
import { CountProvider, useCountState, useCountUpdater } from '@context/_demo/countContext'

const CountDisplay = React.memo(() => {
  // console.log('CountContextDemo-CountDisplay')

  const count = useCountState()
  return (
    <div style={{ border: '1px solid black', padding: 10 }}>
      <RenderCounter />
      {`The current count is ${count}. `}
    </div>
  )
})

const Counter = React.memo(() => {
  // console.log('CountContextDemo-Counter')

  const increment = useCountUpdater()
  return (
    <div style={{ border: '1px solid black', padding: 10 }}>
      <RenderCounter />
      <button type="button" onClick={increment}>
        Increment count
      </button>
    </div>
  )
})

const CountContextDemo = () => {
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

export default CountContextDemo
