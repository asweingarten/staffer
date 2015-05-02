/* @flow */

var System = require('es6-module-loader').System;

System.import('./tests/es6/test').then(function(test) {
    test.run(__dirname);
}).catch(function(err){
    console.log('err', err);
});