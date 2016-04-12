module.exports = function connerify (word) {
  return word
    .replace(/(s)([^sh])/gi, '$1h$2')
    .replace(/(s)$/gi, '$1h')
    .replace(/(x)([^\ss])/gi, '$1sh$2')
    .replace(/ce/gi, 'sh')
}
