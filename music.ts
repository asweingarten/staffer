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

var Music = {
    Accidental: Accidental,
    COF: COF
}
export = Music;

// export enum NoteName {
//     C,
//     D,
//     E,
//     F,
//     G,
//     A,
//     B,
// };

// class Note {
//     name: NoteName;
//     octave: number;
//     accidental: Accidental;

//     constructor(name: NoteName, octave: number, accidental: Accidental) {
//         this.name = name;
//         this.octave = octave;
//         this.accidental = accidental;
//     }

//     noteName(): string {
//         return name;
//     }

//     toString(): string {
//         return `${this.noteName()}${this.octave}`;
//     }
// }

