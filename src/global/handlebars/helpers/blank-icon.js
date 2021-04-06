module.exports = function (str) {
  if (typeof str === 'string' && str.length > 0) return str
  return '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve"></svg>'
}
