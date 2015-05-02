/* @flow */ 

var notes: Array<string> = ['C_NATURAL', 'C_SHARP', 'D_NATURAL', 'D_SHARP', 'E_NATURAL', 'F_NATURAL', 'F_SHARP', 'G_NATURAL', 'G_SHARP', 'A_NATURAL', 'A_SHARP', 'B_NATURAL'];

export class Note {

    NUM_NOTES: number;
    number: number;
    name: string;

    constructor(number: number) {
        this.number = number;
        this.name = notes[number];
    }

    static getNumNotes() { return 12; }

    static changeByHalfSteps(note: Note, steps: number): Note {
        if (steps > 0) {
            return new Note((note.number + steps) % this.getNumNotes());
        } else if (steps < 0) {
            return (note.number + steps < 0)
                ? new Note(note.number + steps + this.getNumNotes())
                : new Note(note.number + steps);
        } else {
            return note;
        }
    }

    upHalfStep(): Note {
        return Note.changeByHalfSteps(this, 1);
    }

    upWholeStep(): Note {
        return Note.changeByHalfSteps(this, 2);
    }

    downHalfStep(): Note {
        return Note.changeByHalfSteps(this, -1);
    }

    downWholeStep(): Note {
        return Note.changeByHalfSteps(this, -2);
    }
}

