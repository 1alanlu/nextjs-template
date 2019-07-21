export default {
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: process.env.TRIGGER_OFFSET, // 觸發動畫的位置上下(正負px)偏移 offset (in px) from the original trigger point
  delay: 0, // 動畫延遲時間 values from 0 to 3000, with step 50ms
  duration: 400, // 動畫持續時間 values from 0 to 3000, with step 50ms
  easing: 'ease-in-out', // default easing for AOS animations
  once: false, // 觸發次數 whether animation should happen only once - while scrolling down
  mirror: true, // 鏡像 whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // 動時觸發設定，錨點的上中下在螢幕上中下 defines which position of the element regarding to window should trigger the animation
}
