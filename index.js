module.exports = function connerify (word) {
  var ignore = []

  return word
    .replace(/(https?:\/\/[^\s]+)|(@\w+)|(#\w+)/gi, stack)
    .replace(/(s)([^sh])/g, '$1h$2')
    .replace(/(S)([^SH])/g, '$1H$2')
    .replace(/(s)$/g, '$1h')
    .replace(/(S)$/g, '$1H')
    .replace(/(x)([^\ss])/g, '$1sh$2')
    .replace(/(X)([^\sS])/g, '$1SH$2')
    .replace(/ce/g, 'sh')
    .replace(/CE/g, 'SH')
    .replace(/ci/g, 'shi')
    .replace(/CI/g, 'SHI')
    .replace(/tz/g, 'tch')
    .replace(/TZ/g, 'TCH')
    .replace(/(^|\s)([A-Z])([A-Z])([a-z])/g, casing)
    .replace(/{{\d+}}/g, unstack)

  function casing (all, space, start, middle, next) {
    return space + start + middle.toLowerCase() + next
  }

  function stack (thing) {
    ignore.push(thing)
    return '{{' + ignore.length + '}}'
  }

  function unstack (thing) {
    return ignore.shift()
  }
}
