const debounce = (func, wait = 20, immediate = true) => {
  let timeout
  return function() {
    const context = this
    const later = function() {
      timeout = null
      if (!immediate) func.apply(context)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context)
  }
}

export default debounce
