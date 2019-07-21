/* eslint-disable no-param-reassign */
/* eslint-disable radix */
const scrollTo = function(to, duration) {
  const element = document.scrollingElement || document.documentElement
  const start = element.scrollTop
  const change = to - start
  const startDate = +new Date()
  // t = current time
  // b = start value
  // c = change in value
  // d = duration
  const easeInOutQuad = function(t, b, c, d) {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t -= 1
    return (-c / 2) * (t * (t - 2) - 1) + b
  }
  const animateScroll = function() {
    const currentDate = +new Date()
    const currentTime = currentDate - startDate
    element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration))
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll)
    } else {
      element.scrollTop = to
    }
  }
  animateScroll()
}

export default scrollTo
