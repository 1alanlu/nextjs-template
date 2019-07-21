import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ selector, children }) => {
  console.log(`render Portal ${selector}`)

  const [element, setElement] = useState(null)
  useEffect(() => {
    setElement(document.querySelector(selector))
  }, [])

  return element ? createPortal(children, element) : null
}

export default Portal
