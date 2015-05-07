import {Note} from 'dist/notes';
import {Scale, ScaleConstructor} from 'dist/scales';
var test = require('tape'),
	LOW_C_NATURAL = new Note(0, Note.Position.LOW),
	C_NATURAL = new Note(0, Note.Position.MID),
	D_NATURAL = new Note(2, Note.Position.MID),
	E_NATURAL = new Note(4, Note.Position.MID),
	F_NATURAL = new Note(5, Note.Position.MID),
	G_NATURAL = new Note(7, Note.Position.MID),
	A_NATURAL = new Note(9, Note.Position.MID),
	B_NATURAL = new Note(11, Note.Position.MID),
	HIGH_C_NATURAL = new Note(0, Note.Position.HIGH);

test('note stepping tests', function (t) {
    t.plan(5);

    t.deepEqual(C_NATURAL, new Note(0, Note.Position.MID));

    t.deepEqual(C_NATURAL.upHalfStep(), new Note(1, Note.Position.MID));

    t.deepEqual(C_NATURAL.upWholeStep(), new Note(2, Note.Position.MID));

    t.deepEqual(C_NATURAL.downHalfStep(), new Note(11, Note.Position.LOW));

    t.deepEqual(C_NATURAL.downWholeStep(), new Note(10, Note.Position.LOW));
});

test('Changing Note Position', function(t) {
	t.plan(3);

	t.deepEqual(Note.raisePosition(C_NATURAL), HIGH_C_NATURAL);
	t.deepEqual(Note.lowerPosition(C_NATURAL), LOW_C_NATURAL);

	t.deepEqual(Note.lowerPosition(B_NATURAL), C_NATURAL.downHalfStep());
});

test('C Major scale construction', function(t) {
	t.plan(8);
	var C_MAJOR_SCALE = ScaleConstructor.majorScale(C_NATURAL);

	t.deepEqual(C_MAJOR_SCALE.root(), C_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[1], D_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[2], E_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[3], F_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[4], Note.raisePosition(G_NATURAL));
	t.deepEqual(C_MAJOR_SCALE.notes[5], Note.raisePosition(A_NATURAL));
	t.deepEqual(C_MAJOR_SCALE.notes[6], Note.raisePosition(B_NATURAL));
	t.deepEqual(C_MAJOR_SCALE.notes[7], Note.raisePosition(C_NATURAL));
});

test('C Major scale convenience function', function(t) {
	t.plan(8);

	var C_MAJOR_SCALE = ScaleConstructor.C_MAJOR();

	t.deepEqual(C_MAJOR_SCALE.root(), C_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[1], D_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[2], E_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[3], F_NATURAL);
	t.deepEqual(C_MAJOR_SCALE.notes[4], Note.raisePosition(G_NATURAL));
	t.deepEqual(C_MAJOR_SCALE.notes[5], Note.raisePosition(A_NATURAL));
	t.deepEqual(C_MAJOR_SCALE.notes[6], Note.raisePosition(B_NATURAL));
	t.deepEqual(C_MAJOR_SCALE.notes[7], Note.raisePosition(C_NATURAL));
});