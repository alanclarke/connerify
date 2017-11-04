module.exports = function connerify (word) {
  var urls = []

  return word
    .replace(/https?:\/\/[^\s]+/gi, stack)
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
    .replace(/{{\d+}}/g, unstack)

  function stack (url) {
    urls.push(url)
    return '{{' + urls.length + '}}'
  }

  function unstack (thing) {
    return urls.shift()
  }
}
