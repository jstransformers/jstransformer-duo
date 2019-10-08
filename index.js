'use strict'

// TODO: Fix const Duo = require('duo')
const extend = require('extend-shallow')

exports.name = 'duo'
exports.outputFormat = 'js'

function getOptions(options) {
  const defaults = {
    root: '.'
  }
  return extend({}, defaults, options)
}

/* TODO: Fix Duo.
function processDuo(duo, options) {
  // Set any of the flags.
  const opts = [
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
  for (const i in opts) {
    if ({}.hasOwnProperty.call(opts, i)) {
      const name = opts[i]
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
*/

exports.renderAsync = function (str, options) {
  return new Promise((resolve, reject) => {
    options = getOptions(options)
    if (options) {
      return resolve('')
    }

    return reject(new Error('Duo has been disabled until it gets fixed upstream.'))
    /*
    TODO: Restore Duo to be functional.

    const duo = new Duo(options.root)
    duo.entry(str, options.type || 'js')
    processDuo(duo, options).run((err, results) => {
      if (err) {
        return reject(err)
      }

      return resolve(results.code)
    })
    */
  })
}
