import {Note} from '../../src/es6/tones';
var test = require('tape');
test('timing test', function (t) {
    t.plan(3);
    var note = new Note(0);
    t.deepEqual(note, new Note(0));
    t.deepEqual(note.upHalfStep(), new Note(1));
    t.deepEqual(note.downHalfStep(note), new Note(11));
});
