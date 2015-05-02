/* @flow */ 

var _ = require('lodash'),
    notes = ['C_NATURAL', 'C_SHARP', 'D_NATURAL', 'D_SHARP', 'E_NATURAL', 'F_NATURAL',
                 'F_SHARP', 'G_NATURAL', 'G_SHARP', 'A_NATURAL', 'A_SHARP', 'B_NATURAL'];

export class Note {
    constructor(number) {
        this.NUM_NOTES = 12;
        this.number = number;
        this.name = notes[number];
    }

    changeByHalfSteps(note, steps) {
        if (steps > 0) {
            return new Note((note.number + steps) % this.NUM_NOTES);
        } else if (steps < 0) {
            return (note.number + steps < 0)
                ? new Note(note.number + steps + this.NUM_NOTES)
                : new Note(note.number + steps);
        } else {
            return note;
        }
    }

    upHalfStep() {
        return this.changeByHalfSteps(this, 1);
    }

    downHalfStep() {
        return this.changeByHalfSteps(this, -1);
    }
}

