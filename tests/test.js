import {Note} from 'dist/notes';
import {Scale, ScaleConstructor} from 'dist/scales';
var test = require('tape');

test('note stepping tests', function (t) {
    t.plan(5);

    var C_NATURAL = new Note(0);

    t.deepEqual(C_NATURAL, new Note(0));

    t.deepEqual(C_NATURAL.upHalfStep(), new Note(1));

    t.deepEqual(C_NATURAL.upWholeStep(), new Note(2));

    t.deepEqual(C_NATURAL.downHalfStep(), new Note(11));

    t.deepEqual(C_NATURAL.downWholeStep(), new Note(10));
});

test('C Major scale construction', function(t) {
	t.plan(8);

	var C_NATURAL = new Note(0),
		D_NATURAL = C_NATURAL.upWholeStep(),
		E_NATURAL = D_NATURAL.upWholeStep(),
		F_NATURAL = E_NATURAL.upHalfStep(),
		G_NATURAL = F_NATURAL.upWholeStep(),
		A_NATURAL = G_NATURAL.upWholeStep(),
		B_NATURAL = A_NATURAL.upWholeStep(),
		C_MAJOR_SCALE = ScaleConstructor.majorScale(C_NATURAL);

	t.deepEqual(C_MAJOR_SCALE.root(), C_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[1], D_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[2], E_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[3], F_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[4], G_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[5], A_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[6], B_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[7], C_NATURAL);
});