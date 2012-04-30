JS Instantiator
===============

Takes a JS object template and a list of bindings to create an object with bindings replaced.

[![Build Status](https://secure.travis-ci.org/CrypticSwarm/js-instantiator.png?branch=master)](http://travis-ci.org/CrypticSwarm/js-instantiator)

Example Usage
-------------

```javascript

var instan = require('instantiator');
var template = { $a: '$x', $x: ['$y', '$z'], abc: 123 };
var bindings = { $a: 'hello', $x: 'world', $y: 'wide', $z: 'web' };
var obj = instan(template, bindings);
// Result: { hello: 'world', world: ['wide', 'web'], abc: 123 }
```

API
---

Module provides a single function that has the following signature.

1. template - template object.  Should have `$var` strings in places that should be replaced.  (can be keys or string values)
2. bindings - object with bindings that have the replace values for the `$vars` in the template object.
