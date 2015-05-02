'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _Note = require('../src/es6/tones');

var _Note2 = _interopRequireDefault(_Note);

var test = require('tape');
test('timing test', function (t) {
    t.plan(3);
    var note = new _Note2['default'](0);
    t.equal(note, new _Note2['default'](0));
    t.equal(note.upHalfStep(), new _Note2['default'](1));
    t.equal(note.downHalfStep(note), new _Note2['default'](12));
});