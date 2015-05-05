

var notes = ['C_NATURAL', 'C_SHARP', 'D_NATURAL', 'D_SHARP', 'E_NATURAL', 'F_NATURAL', 'F_SHARP', 'G_NATURAL', 'G_SHARP', 'A_NATURAL', 'A_SHARP', 'B_NATURAL'];

class Note {

    constructor(number) {
        this.number = number;
        this.name = notes[number];
    }

    static getNumNotes() {
        return 12;
    }

    static changeByHalfSteps(note, steps) {
        if (steps > 0) {
            return new Note((note.number + steps) % this.getNumNotes());
        } else if (steps < 0) {
            return note.number + steps < 0 ? new Note(note.number + steps + this.getNumNotes()) : new Note(note.number + steps);
        } else {
            return note;
        }
    }

    upHalfStep() {
        return Note.changeByHalfSteps(this, 1);
    }

    upWholeStep() {
        return Note.changeByHalfSteps(this, 2);
    }

    downHalfStep() {
        return Note.changeByHalfSteps(this, -1);
    }

    downWholeStep() {
        return Note.changeByHalfSteps(this, -2);
    }
}

export { Note };