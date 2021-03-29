const isNumber = function isNumber(value) {
  return typeof value === 'number' && isFinite(value)
}

module.exports = function(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return Number(a) + Number(b)
  }
  if (typeof a === 'string' && typeof b === 'string') {
    return a + b
  }
  return ''
}
