export const Concat = {
  // merge array
  DeDuplicate: (...arrs) => {
    return [...new Set([].concat(...arrs))]
  },
  // merge array(obj) #重複過濾:全部屬性
  DeDuplicateObjectsDeep: (...arrs) => {
    return [...new Set([].concat(...arrs).map(a => JSON.stringify(a)))].map(a => JSON.parse(a))
  },
  // merge array(obj) #重複過濾:單一屬性 *注意順序 後面重複的不會覆蓋前面的
  DeDuplicateObjectsByKey: (key, ...arrs) => {
    return [].concat(...arrs).reduce((a, b) => (!a.filter(c => b[key] === c[key]).length ? [...a, b] : a), [])
  },
}

export { Concat as default }
