var test = require('tap').test
  , instan = require('../instantiator')

test('simple instantiation', function (t) {
  var sub = instan({ a: '$x', b: '$y' }, { $x: 400, $y: 100 })
  t.same(sub, { a: 400, b: 100 })
  t.end()
})

test('nested instantiation', function (t) {
  var sub = instan({ a: { abc: '$x' }, b: ['$y', '$y'] }, { $x: 400, $y: 100 })
  t.same(sub, { a: { abc: 400 }, b: [100, 100] })
  t.end()
})

test('key instantiation', function (t) {
  var sub = instan({ $a: 123 }, { $a: 'hello' })
  t.same(sub, { hello: 123})
  t.end()
})

test('complex instantiation', function (t) {
  var sub = instan({ $a: { $b: '$x' }, $b: { $c: ['$y', '$y'] } }
                   , { $a: 'hello', $b: 'world', $c: 'wide',  $x: '!', $y: 'web' })
  t.same(sub, { hello: { world: '!' }, world: { wide: ['web', 'web'] } })
  t.end()
})
