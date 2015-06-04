enum Accidental {
        NATURAL,
        SHARP,
        FLAT
};

enum NoteName {
    C,
    D,
    E,
    F,
    G,
    A,
    B,
};

class Note {
    name: any;
    octave: number;
    accidental: Accidental;

    constructor(name: NoteName, octave: number, accidental: Accidental) {
        this.name = name;
        if (octave < 0 || octave > 9) throw "Octave Out of Range";
        this.octave = octave;
        this.accidental = accidental;
    }

    static C(octave: number = 5, accidental: Accidental = Accidental.NATURAL) {
        return new Note(NoteName.C, octave, accidental);
    }
    static D(octave: number = 5, accidental: Accidental = Accidental.NATURAL) {
        return new Note(NoteName.D, octave, accidental);
    }
    static E(octave: number = 5, accidental: Accidental = Accidental.NATURAL) {
        return new Note(NoteName.E, octave, accidental);
    }
    static F(octave: number = 5, accidental: Accidental = Accidental.NATURAL) {
        return new Note(NoteName.F, octave, accidental);
    }
    static G(octave: number = 5, accidental: Accidental = Accidental.NATURAL) {
        return new Note(NoteName.G, octave, accidental);
    }
    static A(octave: number = 5, accidental: Accidental = Accidental.NATURAL) {
        return new Note(NoteName.A, octave, accidental);
    }
    static B(octave: number = 5, accidental: Accidental = Accidental.NATURAL) {
        return new Note(NoteName.B, octave, accidental);
    }

    flat(): Note {
        this.accidental = Accidental.FLAT;
        return this;
    }

    sharp(): Note {
        this.accidental = Accidental.SHARP;
        return this;
    }

    noteName(): string {
        return this.toString(true, false, false);
    }

    nameAndAccidental(): string {
        return this.toString(true, false, true);
    }

    nameAndOctave(): string {
        return this.toString(true, true, false);
    }

    accidentalToString(): string {
        return this.toString(false, false, true);
    }

    toString(includeNoteName: boolean = true, includeOctave: boolean = true,
     includeAccidental: boolean = true): string {
        let name = includeNoteName ? NoteName[this.name] : '';
        let octave = includeOctave ? this.octave : '';
        let accidental = '';
        if (includeAccidental) {
            switch (this.accidental) {
                case Accidental.NATURAL:
                    accidental = '\u266E';
                    break;
                case Accidental.SHARP:
                    accidental = '\u266F';
                    break;
                case Accidental.FLAT:
                    accidental = '\u266d';
                    break;
            }
        }
        return `${name}${octave}${accidental}`;
    }
}

// 0 is C9
var Note5Position = {
    [Note.C(5).nameAndOctave()]: 29,
    [Note.D(5).nameAndOctave()]: 28,
    [Note.E(5).nameAndOctave()]: 27,
    [Note.F(5).nameAndOctave()]: 26,
    [Note.G(5).nameAndOctave()]: 25,
    [Note.A(5).nameAndOctave()]: 24,
    [Note.B(5).nameAndOctave()]: 23,
}

var COF = {
        [Accidental.SHARP]: [Note.F(), Note.C(), Note.G(), Note.D(),
                             Note.A(4), Note.E(), Note.B(4)],
        [Accidental.FLAT]: [Note.B(4), Note.E(), Note.A(4), Note.D(),
                             Note.G(4), Note.C(), Note.F()],
        [Note.C().nameAndAccidental()]: {
            order: Accidental.SHARP,
            C: Accidental.NATURAL,
            D: Accidental.NATURAL,
            E: Accidental.NATURAL,
            F: Accidental.NATURAL,
            G: Accidental.NATURAL, 
            A: Accidental.NATURAL,
            B: Accidental.NATURAL,
        },
        [Note.F().nameAndAccidental()]: {
            order: Accidental.FLAT,
            F: Accidental.NATURAL,
            G: Accidental.NATURAL,
            A: Accidental.NATURAL,
            B: Accidental.FLAT,
            C: Accidental.NATURAL,
            D: Accidental.NATURAL,
            E: Accidental.NATURAL,
        },
        [Note.B().flat().nameAndAccidental()]: {
            order: Accidental.FLAT,
            B: Accidental.FLAT,
            C: Accidental.NATURAL,
            D: Accidental.NATURAL,
            E: Accidental.FLAT,
            F: Accidental.NATURAL,
            G: Accidental.NATURAL,
            A: Accidental.NATURAL,
        },
        [Note.E().flat().nameAndAccidental()]: { 
            order: Accidental.FLAT,
            E: Accidental.FLAT,
            F: Accidental.NATURAL,
            G: Accidental.NATURAL,
            A: Accidental.FLAT,
            B: Accidental.FLAT,
            C: Accidental.NATURAL,
            D: Accidental.NATURAL,
        },
        [Note.A().flat().nameAndAccidental()]: { 
            order: Accidental.FLAT,
            A: Accidental.FLAT,
            B: Accidental.FLAT,
            C: Accidental.NATURAL,
            D: Accidental.FLAT,
            E: Accidental.FLAT,
            F: Accidental.NATURAL,
            G: Accidental.NATURAL,
        },
        [Note.D().flat().nameAndAccidental()]: { 
            order: Accidental.FLAT,
            D: Accidental.FLAT,
            E: Accidental.FLAT,
            F: Accidental.NATURAL,
            G: Accidental.FLAT,
            A: Accidental.FLAT,
            B: Accidental.FLAT,
            C: Accidental.NATURAL,
        },
        [Note.G().flat().nameAndAccidental()]: { 
            order: Accidental.FLAT,
            G: Accidental.FLAT,
            A: Accidental.FLAT,
            B: Accidental.FLAT,
            C: Accidental.FLAT,
            D: Accidental.FLAT,
            E: Accidental.FLAT,
            F: Accidental.NATURAL,
        },
        [Note.F().sharp().nameAndAccidental()]: { 
            order: Accidental.SHARP,
            F: Accidental.SHARP,
            G: Accidental.SHARP,
            A: Accidental.SHARP,
            B: Accidental.NATURAL,
            C: Accidental.SHARP,
            D: Accidental.SHARP,
            E: Accidental.SHARP,
        },
        [Note.B().nameAndAccidental()]: { 
            order: Accidental.SHARP,
            B: Accidental.NATURAL,
            C: Accidental.SHARP,
            D: Accidental.SHARP,
            E: Accidental.NATURAL,
            F: Accidental.SHARP,
            G: Accidental.SHARP,
            A: Accidental.SHARP,
        },
        [Note.E().nameAndAccidental()]: { 
            order: Accidental.SHARP,
            E: Accidental.NATURAL,
            F: Accidental.SHARP,
            G: Accidental.SHARP,
            A: Accidental.NATURAL,
            B: Accidental.NATURAL,
            C: Accidental.SHARP,
            D: Accidental.SHARP,
        },
        [Note.A().nameAndAccidental()]: { 
            order: Accidental.SHARP,
            A: Accidental.NATURAL,
            B: Accidental.NATURAL,
            C: Accidental.SHARP,
            D: Accidental.NATURAL,
            E: Accidental.NATURAL,
            F: Accidental.SHARP,
            G: Accidental.SHARP,
        },
        [Note.D().nameAndAccidental()]: { 
            order: Accidental.SHARP,
            D: Accidental.NATURAL,
            E: Accidental.NATURAL,
            F: Accidental.SHARP,
            G: Accidental.NATURAL,
            A: Accidental.NATURAL,
            B: Accidental.NATURAL,
            C: Accidental.SHARP,
        },
        [Note.G().nameAndAccidental()]: { 
            order: Accidental.SHARP,
            G: Accidental.NATURAL,
            A: Accidental.NATURAL,
            B: Accidental.NATURAL,
            C: Accidental.NATURAL,
            D: Accidental.NATURAL,
            E: Accidental.NATURAL,
            F: Accidental.SHARP
        },
    };

var Music = {
    Accidental: Accidental,
    COF: COF,
    Note: Note,
    NoteName: NoteName,
    Note5Position: Note5Position
}
export = Music;
