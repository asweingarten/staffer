import {Note} from 'dist/notes';
import {Scale, ScaleConstructor} from 'dist/scales';
var test = require('tape'),
	C_NATURAL = new Note(0, Note.Position.MID),
	D_NATURAL = C_NATURAL.upWholeStep(),
	E_NATURAL = D_NATURAL.upWholeStep(),
	F_NATURAL = E_NATURAL.upHalfStep(),
	G_NATURAL = F_NATURAL.upWholeStep(),
	A_NATURAL = G_NATURAL.upWholeStep(),
	B_NATURAL = A_NATURAL.upWholeStep();

test('note stepping tests', function (t) {
    t.plan(5);

    t.deepEqual(C_NATURAL, new Note(0, Note.Position.MID));

    t.deepEqual(C_NATURAL.upHalfStep(), new Note(1, Note.Position.MID));

    t.deepEqual(C_NATURAL.upWholeStep(), new Note(2, Note.Position.MID));

    t.deepEqual(C_NATURAL.downHalfStep(), new Note(11, Note.Position.LOW));

    t.deepEqual(C_NATURAL.downWholeStep(), new Note(10, Note.Position.LOW));
});

// test('Note position changes', function(t) {

// });

test('C Major scale construction', function(t) {
	t.plan(8);
	var C_MAJOR_SCALE = ScaleConstructor.majorScale(C_NATURAL);

	t.deepEqual(C_MAJOR_SCALE.root(), C_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[1], D_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[2], E_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[3], F_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[4], G_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[5], A_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[6], B_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[7], new Note(0, Note.Position.HIGH));
});

test('C Major scale convenience function', function(t) {
	t.plan(8);

	var C_MAJOR_SCALE = ScaleConstructor.C_MAJOR();

	t.deepEqual(C_MAJOR_SCALE.root(), C_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[1], D_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[2], E_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[3], F_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[4], G_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[5], A_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[6], B_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[7], new Note(0, Note.Position.HIGH));
});