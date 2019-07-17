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
  const context = React.useContext(CountStateContext)
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}

function useCountDispatch() {
  const context = React.useContext(CountDispatchContext)
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }
  return context
}

/*
What about async actions?

async function updateUser(dispatch, user, updates) {
  dispatch({ type: 'start update', updates })
  try {
    const updatedUser = await userClient.updateUser(user, updates)
    dispatch({ type: 'finish update', updatedUser })
  } catch (error) {
    dispatch({ type: 'fail update', error })
  }
}
// user-profile.js
import { useUserState, useUserDispatch, updateUser } from './user-context'
function UserSettings() {
  const { user, status, error } = useUserState()
  const userDispatch = useUserDispatch()
  function handleSubmit(event) {
    event.preventDefault()
    updateUser(userDispatch, user, formState)
  }
  // more code...
}

*/

export { CountProvider, useCountState, useCountDispatch /* , updateUser */ }
