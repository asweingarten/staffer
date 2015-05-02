import {Note} from './notes';
/* @flow */

export class Scale {
	notes: Array<Note>;

	constructor(startingNote: Note, scaleType: string) {
		this.notes = [];
		this.scaleTypes = {
			MAJOR : [0, 2, 2, 1, 2, 2, 2, 1]
		}

		var scaleSteps = this.scaleTypes[scaleType];

		if (scaleSteps === undefined) throw 'UNSUPPORT SCALE TYPE';

		this.notes[0] = startingNote;

		for (var i = 1; i < scaleSteps.length; i++) {
			this.notes[i] = Note.changeByHalfSteps(this.notes[i-1], scaleSteps[i]);
		}
	}
}