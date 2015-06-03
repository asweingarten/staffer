enum Accidental {
        NATURAL,
        SHARP,
        FLAT
};

var COF = {
        [Accidental.SHARP]: ['F', 'C', 'G', 'D', 'A', 'E', 'B'],
        [Accidental.FLAT]: ['B', 'E', 'A', 'D', 'G', 'C', 'F'],
        C: {
            order: Accidental.SHARP,
            C: Accidental.NATURAL,
            D: Accidental.NATURAL,
            E: Accidental.NATURAL,
            F: Accidental.NATURAL,
            G: Accidental.NATURAL, 
            A: Accidental.NATURAL,
            B: Accidental.NATURAL,
        },
        F: {
            order: Accidental.FLAT,
            F: Accidental.NATURAL,
            G: Accidental.NATURAL,
            A: Accidental.NATURAL,
            B: Accidental.FLAT,
            C: Accidental.NATURAL,
            D: Accidental.NATURAL,
            E: Accidental.NATURAL,
        },
        B_FLAT: {
            order: Accidental.FLAT,
            B: Accidental.FLAT,
            C: Accidental.NATURAL,
            D: Accidental.NATURAL,
            E: Accidental.FLAT,
            F: Accidental.NATURAL,
            G: Accidental.NATURAL,
            A: Accidental.NATURAL,
        },
        E_FLAT: { 
            order: Accidental.FLAT,
            E: Accidental.FLAT,
            F: Accidental.NATURAL,
            G: Accidental.NATURAL,
            A: Accidental.FLAT,
            B: Accidental.FLAT,
            C: Accidental.NATURAL,
            D: Accidental.NATURAL,
        },
        A_FLAT: { 
            order: Accidental.FLAT,
            A: Accidental.FLAT,
            B: Accidental.FLAT,
            C: Accidental.NATURAL,
            D: Accidental.FLAT,
            E: Accidental.FLAT,
            F: Accidental.NATURAL,
            G: Accidental.NATURAL,
        },
        D_FLAT: { 
            order: Accidental.FLAT,
            D: Accidental.FLAT,
            E: Accidental.FLAT,
            F: Accidental.NATURAL,
            G: Accidental.FLAT,
            A: Accidental.FLAT,
            B: Accidental.FLAT,
            C: Accidental.NATURAL,
        },
        G_FLAT: { 
            order: Accidental.FLAT,
            G: Accidental.FLAT,
            A: Accidental.FLAT,
            B: Accidental.FLAT,
            C: Accidental.FLAT,
            D: Accidental.FLAT,
            E: Accidental.FLAT,
            F: Accidental.NATURAL,
        },
        F_SHARP: { 
            order: Accidental.SHARP,
            F: Accidental.SHARP,
            G: Accidental.SHARP,
            A: Accidental.SHARP,
            B: Accidental.NATURAL,
            C: Accidental.SHARP,
            D: Accidental.SHARP,
            E: Accidental.SHARP,
        },
        B: { 
            order: Accidental.SHARP,
            B: Accidental.NATURAL,
            C: Accidental.SHARP,
            D: Accidental.SHARP,
            E: Accidental.NATURAL,
            F: Accidental.SHARP,
            G: Accidental.SHARP,
            A: Accidental.SHARP,
        },
        E: { 
            order: Accidental.SHARP,
            E: Accidental.NATURAL,
            F: Accidental.SHARP,
            G: Accidental.SHARP,
            A: Accidental.NATURAL,
            B: Accidental.NATURAL,
            C: Accidental.SHARP,
            D: Accidental.SHARP,
        },
        A: { 
            order: Accidental.SHARP,
            A: Accidental.NATURAL,
            B: Accidental.NATURAL,
            C: Accidental.SHARP,
            D: Accidental.NATURAL,
            E: Accidental.NATURAL,
            F: Accidental.SHARP,
            G: Accidental.SHARP,
        },
        D: { 
            order: Accidental.SHARP,
            D: Accidental.NATURAL,
            E: Accidental.NATURAL,
            F: Accidental.SHARP,
            G: Accidental.NATURAL,
            A: Accidental.NATURAL,
            B: Accidental.NATURAL,
            C: Accidental.SHARP,
        },
        G: { 
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

    noteName(): string {
        return NoteName[this.name];
    }

    nameAndOctave(): string {
        return `${NoteName[this.name]}${this.octave}`;
    }

    accidentalToString(): string {
        switch (this.accidental) {
            case Music.Accidental.NATURAL:
                return '\u266E';
            case Music.Accidental.SHARP:
                return '\u266F';
            case Music.Accidental.FLAT:
                return '\u266d';
        }
    }

    toString(): string {
        return `${this.noteName()}${this.octave}${this.accidentalToString()}`;
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

var Music = {
    Accidental: Accidental,
    COF: COF,
    Note: Note,
    NoteName: NoteName,
    Note5Position: Note5Position
}
export = Music;
