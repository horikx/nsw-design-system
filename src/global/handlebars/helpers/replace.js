module.exports = function (str, a, b) {
  if (!(typeof str === 'string' || str instanceof String)) return ''
  if (!(typeof a === 'string' || a instanceof String)) return str
  if (!(typeof b === 'string' || b instanceof String)) b = ''
  return str.split(a).join(b)
}
