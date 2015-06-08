# jstransformer-duo

[Duo](http://duojs.org) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-duo/master.svg)](https://travis-ci.org/jstransformers/jstransformer-duo)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-duo/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-duo?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-duo/master.svg)](http://david-dm.org/jstransformers/jstransformer-duo)
[![NPM version](https://img.shields.io/npm/v/jstransformer-duo.svg)](https://www.npmjs.org/package/jstransformer-duo)

## Installation

    npm install jstransformer-duo

## API

```js
var duo = require('jstransformer')(require('jstransformer-duo'))

var options = {
  root: __dirname
}

duo.render('var a = 0;', options).body
//=> Compiled source
```

### Options

#### root

Matches the [`root`](https://github.com/duojs/duo/blob/master/docs/api.md#new-duoroot) directory when creating the Duo object.

## License

MIT
