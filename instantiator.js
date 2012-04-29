var traverse = require('traverse')

function isVar(str) {
  return str[0] === '$'
}

module.exports = function instantiate(template, vars) {
  return traverse(template).map(function (value) {
    if (this.notRoot && isVar(this.key)) {
      this.remove()
      this.key = vars[this.key.slice(1)]
      this.update(value)
    }
    if (this.isLeaf && isVar(value)) this.update(vars[value.slice(1)])
  })
}
