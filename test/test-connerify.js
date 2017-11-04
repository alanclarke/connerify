/* globals describe it */

var connerify = require('../index')
var chai = require('chai')

describe('connerify', function () {
  var tests = [
    [ 'sh', 'sh' ],
    [ 'segments', 'shegmentsh' ],
    [ 'esp', 'eshp' ],
    [ 'experiment', 'exshperiment' ],
    [ 'example', 'exshample' ],
    [ 'flounce', 'flounsh' ],
    [ 'experience', 'exshperiensh' ],
    [ 'citizen', 'shitizen' ],
    [ 'medicine', 'medishine' ],
    [ 'example', 'exshample' ],
    [ 'flounce', 'flounsh' ],
    [ 'experience', 'exshperiensh' ],
    [ 'citizen', 'shitizen' ],
    [ 'medicine', 'medishine' ],
    [ 'pretzel', 'pretchel' ],
    [ 'https://example.com', 'https://example.com' ]
  ]

  tests.map(expect)
  tests.map(upper).map(expect)
})

function upper (vals) {
  return vals.map(function (val) {
    return val.toUpperCase()
  })
}

function expect (vals) {
  it('should translate ' + vals[0] + ' into ' + vals[1], function () {
    chai.expect(connerify(vals[0])).to.eql(vals[1])
  })
}
