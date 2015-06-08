'use strict';

var Duo = require('duo');

exports.name = 'duo';
exports.outputFormat = 'js';

function createDuo(options) {
  options = options || {};
  if (!options.root) {
    options.root = '.';
  }
  return new Duo(options.root);
}

exports.renderAsync = function (str, options) {
  return new Promise(function (fulfill, reject) {
    var duo = createDuo(options);
    duo.entry(str, (options || {}).type || 'js');
    duo.run(function (err, results) {
      if (err) {
        return reject(err);
      }
      else {
        return fulfill(results.code);
      }
    })
  });
};

exports.renderFileAsync = function (file, options) {
  return new Promise(function (fulfill, reject) {
    var duo = createDuo(options);
    duo.entry(file);
    duo.run(function (err, results) {
      if (err) {
        return reject(err);
      }
      else {
        return fulfill(results.code);
      }
    })
  });
};
