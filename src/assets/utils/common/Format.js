export const Format = {
  // 千位符
  IntThusandth: val => {
    return val.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
  },
}

export { Format as default }
