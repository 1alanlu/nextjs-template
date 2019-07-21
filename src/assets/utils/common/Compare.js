export const Compare = {
  // 依ID順序
  ID_ASC: (a, b) => {
    let comparison = 0
    if (a.id > b.id) {
      comparison = 1
    } else if (a.id < b.id) {
      comparison = -1
    }
    return comparison
  },
  // 依ID反序
  ID_DESC: (a, b) => {
    let comparison = 0
    if (a.id < b.id) {
      comparison = 1
    } else if (a.id > b.id) {
      comparison = -1
    }
    return comparison
  },
}

export { Compare as default }
