import React from 'react'

const CountStateContext = React.createContext()
const CountDispatchContext = React.createContext()

function countReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return { count: state.count + 1 }
    }
    case 'decrement': {
      return { count: state.count - 1 }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function CountProvider({ children }) {
  const [state, setCount] = React.useReducer(countReducer, { count: 0 })
  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={setCount}>{children}</CountDispatchContext.Provider>
    </CountStateContext.Provider>
  )
}

function useCountState() {
  const state = React.useContext(CountStateContext)
  if (state === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return state
}

function useCountDispatch() {
  const dispatch = React.useContext(CountDispatchContext)
  if (dispatch === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }
  const increment = () => dispatch({ type: 'increment' })
  const decrement = () => dispatch({ type: 'decrement' })
  return {
    dispatch,
    increment,
    decrement,
  }
}

function useCount() {
  return [useCountState(), useCountDispatch()]
}

export { CountProvider, useCount, useCountState, useCountDispatch }
