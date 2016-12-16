'use strict'

var Duo = require('duo')
var extend = require('extend-shallow')

exports.name = 'duo'
exports.outputFormat = 'js'

function getOptions(options) {
  var defaults = {
    root: '.'
  }
  return extend({}, defaults, options)
}

function processDuo(duo, options) {
  // Set any of the flags.
  var opts = [
    'development',
    'cache',
    'standalone',
    'copy',
    'concurrency',
    'installTo',
    'buildTo',
    'token',
    'global'
  ]
  for (var i in opts) {
    if ({}.hasOwnProperty.call(opts, i)) {
      var name = opts[i]
      if (name in options) {
        duo[name](options[name])
      }
    }
  }

  // TODO: Add duo.sourceMap() with output
  // TODO: Add duo.include(name, src)
  // TODO: Add duo.path(paths...) array
  // TODO: Add duo.installPath(paths...) array
  // TODO: Add duo.buildPath(paths...) array
  // TODO: Add duo.use(fn|gen) support

  return duo
}

exports.renderAsync = function (str, options) {
  return new Promise(function (resolve, reject) {
    options = getOptions(options)
    var duo = new Duo(options.root)
    duo.entry(str, options.type || 'js')
    processDuo(duo, options).run(function (err, results) {
      if (err) {
        return reject(err)
      }
      return resolve(results.code)
    })
  })
}

exports.renderFileAsync = function (file, options) {
  return new Promise(function (resolve, reject) {
    options = getOptions(options)
    var duo = new Duo(options.root)
    duo.entry(file)
    processDuo(duo, options).run(function (err, results) {
      if (err) {
        return reject(err)
      }
      return resolve(results.code)
    })
  })
}
