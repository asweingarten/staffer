/* @flow */ 

var notes: Array<string> = ['C_NATURAL', 'C_SHARP', 'D_NATURAL', 'D_SHARP', 'E_NATURAL', 'F_NATURAL', 'F_SHARP', 'G_NATURAL', 'G_SHARP', 'A_NATURAL', 'A_SHARP', 'B_NATURAL'];
        

export class Note {

    NUM_NOTES: number;
    number: number;
    name: string;
    position: string;

    constructor(number: number, position: string) {
        if (position !== 'HIGH' && position !== 'MID' && position !== 'LOW') throw "UNSUPPORTED NOTE POSITION";

        this.position = position;
        this.number = number;
        this.name = notes[number];
    }

    static getNumNotes(): number { return 12; }

    static C_NATURAL(): Note { return new Note(0, 'MID'); }
    static C_SHARP(): Note { return new Note(1, 'MID'); }
    static D_NATURAL(): Note { return new Note(2, 'MID'); }
    static D_SHARP(): Note { return new Note(3, 'MID'); }
    static E_NATURAL(): Note { return new Note(4, 'MID'); }
    static F_NATURAL(): Note { return new Note(5, 'MID'); }
    static F_SHARP(): Note { return new Note(6, 'MID'); }
    static G_NATURAL(): Note { return new Note(7, 'MID'); }
    static G_SHARP(): Note { return new Note(8, 'MID'); }
    static A_NATURAL(): Note { return new Note(9, 'MID'); }
    static A_SHARP(): Note { return new Note(10, 'MID'); }
    static B_NATURAL(): Note { return new Note(11, 'MID'); }

    static changeByHalfSteps(note: Note, steps: number): Note {
        if (steps > 0) {
            if (note.number + steps >= this.getNumNotes()) {
                return new Note((note.number + steps) % this.getNumNotes(), this.raisePosition(note.position));
            } else {
                return new Note(note.number + steps, note.position);
            }
            return new Note((note.number + steps) % this.getNumNotes());
        } else if (steps < 0) {
            return (note.number + steps < 0)
                ? new Note(note.number + steps + this.getNumNotes(), this.lowerPosition(note.position))
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

    static lowerPosition(position: string): string {
        switch(position) {
            case 'HIGH': return 'MID';
            case 'MID': return 'LOW';
            case 'LOW': return 'OUT_OF_RANGE';
        }
    }

    static raisePosition(position: string): string {
        switch(position) {
            case 'HIGH': return 'OUT_OF_RANGE';
            case 'MID': return 'HIGH';
            case 'LOW': return 'MID';
        }
    }
}

