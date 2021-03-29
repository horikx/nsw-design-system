const isNumber = function isNumber(value) {
  value = (Number(value) > 0) ? Number(value) : value

  return typeof value === 'number' && isFinite(value)
}
module.exports = function(a, b) {
  if (!isNumber(a)) {
    throw new TypeError('expected the first argument to be a number')
  }
  if (!isNumber(b)) {
    console.log(a, b)
    throw new TypeError('expected the second argument to be a number')
  }
  return Number(a) - Number(b)
}
