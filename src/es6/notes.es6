/* @flow */ 

var notes: Array<string> = ['C_NATURAL', 'C_SHARP', 'D_NATURAL', 'D_SHARP', 'E_NATURAL', 'F_NATURAL', 'F_SHARP', 'G_NATURAL', 'G_SHARP', 'A_NATURAL', 'A_SHARP', 'B_NATURAL'];

class Note {

    NUM_NOTES: number;
    number: number;
    name: string;
    position: number;

    constructor(number: number, position: string) {
        if (position !== Note.Position.HIGH && position !== Note.Position.MID && position !== Note.Position.LOW) throw "UNSUPPORTED NOTE POSITION";

        this.position = position;
        this.number = number;
        this.name = notes[number];
    }

    static getNumNotes(): number { return 12; }

    static C_NATURAL(): Note { return new Note(0, Note.Position.MID); }
    static C_SHARP(): Note { return new Note(1, Note.Position.MID); }
    static D_NATURAL(): Note { return new Note(2, Note.Position.MID); }
    static D_SHARP(): Note { return new Note(3, Note.Position.MID); }
    static E_NATURAL(): Note { return new Note(4, Note.Position.MID); }
    static F_NATURAL(): Note { return new Note(5, Note.Position.MID); }
    static F_SHARP(): Note { return new Note(6, Note.Position.MID); }
    static G_NATURAL(): Note { return new Note(7, Note.Position.MID); }
    static G_SHARP(): Note { return new Note(8, Note.Position.MID); }
    static A_NATURAL(): Note { return new Note(9, Note.Position.MID); }
    static A_SHARP(): Note { return new Note(10, Note.Position.MID); }
    static B_NATURAL(): Note { return new Note(11, Note.Position.MID); }

    static changeByHalfSteps(note: Note, steps: number): Note {
        if (steps > 0) {
            if (note.number + steps >= this.getNumNotes()) {
                return Note.raisePosition(new Note((note.number + steps) % this.getNumNotes(), note.position));
            } else {
                return new Note(note.number + steps, note.position);
            }
            return new Note((note.number + steps) % this.getNumNotes());
        } else if (steps < 0) {
            return (note.number + steps < 0)
                ? Note.lowerPosition(new Note(note.number + steps + this.getNumNotes(), note.position))
                : new Note(note.number + steps, note.position);
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

    static lowerPosition(note: Note): Note {
        switch(note.position) {
            case Note.Position.HIGH: 
                return new Note(note.number, Note.Position.MID);
            case Note.Position.MID: 
                return new Note(note.number, Note.Position.LOW);
            case Note.Position.LOW: 
                return new Note(note.number, Note.Position.OUT_OF_RANGE);
        }

    }

    static raisePosition(note: Note): Note {
        switch(note.position) {
            case Note.Position.HIGH: 
                return new Note(note.number, Note.Position.OUT_OF_RANGE);
            case Note.Position.MID: 
                return new Note(note.number, Note.Position.HIGH);
            case Note.Position.LOW: 
                return new Note(note.number, Note.Position.MID);
        }
    }
}

Note.Position = {
    LOW: 0,
    MID: 1,
    HIGH: 2,
    OUT_OF_RANGE: 3
};

export {Note};
