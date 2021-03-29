module.exports = function (arr) {
  if (Array.isArray(arr) && arr.length < 8 && arr.length > 5) {
    return 'gwic-subnavigation__list--items-wide'
  }
  return ''
}
