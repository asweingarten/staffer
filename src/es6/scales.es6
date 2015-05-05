import { Note } from './notes';

export var ScaleConstructor = {

	majorScale(root: Note) {
		var scaleSteps = [0, 2, 2, 1, 2, 2, 2, 1],
			notes = [];

		notes[0] = root;

		for (var i = 1; i < scaleSteps.length; i++) {
			notes[i] = Note.changeByHalfSteps(notes[i - 1], scaleSteps[i]);
		}
		return new Scale(notes);
	}
}

export class Scale {
	notes: Array<Note>;

	constructor(notes: Array<Note>) {
		if (notes.length <= 0) throw 'SCALE WITH INVALID NUMBER OF NOTES';
		this.notes = notes;
	}

	root() { return this.notes[0]; }
}