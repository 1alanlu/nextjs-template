export const Url = {
  // 取得參數
  GetParameterByName: (name, defaultValue) => {
    const temp = name.replace(/[[\]]/g, '\\$&')
    const regex = new RegExp(`[?&]${temp}(=([^&#]*)|&|#|$)`)
    const results = regex.exec(window.location.href)
    console.log(results)
    if (!results) return defaultValue || null
    if (!results[2]) return defaultValue || ''
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
  },
  // 替換Url
  ReplaceState: newUrl => {
    if (window.history && window.history.replaceState) {
      const state = {
        title: null,
        url: '/',
      }
      window.history.replaceState(state, null, newUrl)
    }
  },
}

export { Url as default }
