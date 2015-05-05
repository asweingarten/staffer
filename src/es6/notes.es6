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

    static getNumNotes(): number { return 12; }

    static C_NATURAL(): Note { return new Note(0); }
    static C_SHARP(): Note { return new Note(1); }
    static D_NATURAL(): Note { return new Note(2); }
    static D_SHARP(): Note { return new Note(3); }
    static E_NATURAL(): Note { return new Note(4); }
    static F_NATURAL(): Note { return new Note(5); }
    static F_SHARP(): Note { return new Note(6); }
    static G_NATURAL(): Note { return new Note(7); }
    static G_SHARP(): Note { return new Note(8); }
    static A_NATURAL(): Note { return new Note(9); }
    static A_SHARP(): Note { return new Note(10); }
    static B_NATURAL(): Note { return new Note(11); }

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

