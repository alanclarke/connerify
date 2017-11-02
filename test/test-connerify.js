var connerify = require('../index')
var chai = require('chai')

describe('connerify', function () {
  it('s', function () {
    expect('sh', 'sh')
    expect('segments', 'shegmentsh')
    expect('esp', 'eshp')
  })
  it('x', function () {
    expect('experiment', 'exshperiment')
    expect('example', 'exshample')
  })
  it('ce', function () {
    expect('flounce', 'flounsh')
    expect('experience', 'exshperiensh')
  })
  it('ci', function () {
    expect('citizen', 'shitizen')
    expect('medicine', 'medishine')
  })
})

function expect (val, expected) {
  chai.expect(connerify(val)).to.eql(expected)
}
