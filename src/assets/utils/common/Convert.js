export const Convert = {
  Boolean: val => {
    let bool = false
    if (val) {
      if (typeof val === 'boolean') {
        bool = val
      } else {
        bool = val.toLowerCase() === 'true' || val === '1'
      }
    }

    return bool
  },
  Int: (val, base = 10) => {
    const type = typeof val
    let parsed
    switch (type) {
      case 'boolean':
        parsed = val ? 1 : 0
        break

      default:
        parsed = Number.parseInt(val, base)
        break
    }
    return Number.isNaN(parsed) ? 0 : parsed
  },
}

export { Convert as default }
