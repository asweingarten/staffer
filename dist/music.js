var Accidental;
(function (Accidental) {
    Accidental[Accidental["NATURAL"] = 0] = "NATURAL";
    Accidental[Accidental["SHARP"] = 1] = "SHARP";
    Accidental[Accidental["FLAT"] = 2] = "FLAT";
})(Accidental || (Accidental = {}));
;
var COF = (_a = {},
    _a[Accidental.SHARP] = ['F', 'C', 'G', 'D', 'A', 'E', 'B'],
    _a[Accidental.FLAT] = ['B', 'E', 'A', 'D', 'G', 'C', 'F'],
    _a.C = {
        order: Accidental.SHARP,
        C: Accidental.NATURAL,
        D: Accidental.NATURAL,
        E: Accidental.NATURAL,
        F: Accidental.NATURAL,
        G: Accidental.NATURAL,
        A: Accidental.NATURAL,
        B: Accidental.NATURAL,
    },
    _a.F = {
        order: Accidental.FLAT,
        F: Accidental.NATURAL,
        G: Accidental.NATURAL,
        A: Accidental.NATURAL,
        B: Accidental.FLAT,
        C: Accidental.NATURAL,
        D: Accidental.NATURAL,
        E: Accidental.NATURAL,
    },
    _a.B_FLAT = {
        order: Accidental.FLAT,
        B: Accidental.FLAT,
        C: Accidental.NATURAL,
        D: Accidental.NATURAL,
        E: Accidental.FLAT,
        F: Accidental.NATURAL,
        G: Accidental.NATURAL,
        A: Accidental.NATURAL,
    },
    _a.E_FLAT = {
        order: Accidental.FLAT,
        E: Accidental.FLAT,
        F: Accidental.NATURAL,
        G: Accidental.NATURAL,
        A: Accidental.FLAT,
        B: Accidental.FLAT,
        C: Accidental.NATURAL,
        D: Accidental.NATURAL,
    },
    _a.A_FLAT = {
        order: Accidental.FLAT,
        A: Accidental.FLAT,
        B: Accidental.FLAT,
        C: Accidental.NATURAL,
        D: Accidental.FLAT,
        E: Accidental.FLAT,
        F: Accidental.NATURAL,
        G: Accidental.NATURAL,
    },
    _a.D_FLAT = {
        order: Accidental.FLAT,
        D: Accidental.FLAT,
        E: Accidental.FLAT,
        F: Accidental.NATURAL,
        G: Accidental.FLAT,
        A: Accidental.FLAT,
        B: Accidental.FLAT,
        C: Accidental.NATURAL,
    },
    _a.G_FLAT = {
        order: Accidental.FLAT,
        G: Accidental.FLAT,
        A: Accidental.FLAT,
        B: Accidental.FLAT,
        C: Accidental.FLAT,
        D: Accidental.FLAT,
        E: Accidental.FLAT,
        F: Accidental.NATURAL,
    },
    _a.F_SHARP = {
        order: Accidental.SHARP,
        F: Accidental.SHARP,
        G: Accidental.SHARP,
        A: Accidental.SHARP,
        B: Accidental.NATURAL,
        C: Accidental.SHARP,
        D: Accidental.SHARP,
        E: Accidental.SHARP,
    },
    _a.B = {
        order: Accidental.SHARP,
        B: Accidental.NATURAL,
        C: Accidental.SHARP,
        D: Accidental.SHARP,
        E: Accidental.NATURAL,
        F: Accidental.SHARP,
        G: Accidental.SHARP,
        A: Accidental.SHARP,
    },
    _a.E = {
        order: Accidental.SHARP,
        E: Accidental.NATURAL,
        F: Accidental.SHARP,
        G: Accidental.SHARP,
        A: Accidental.NATURAL,
        B: Accidental.NATURAL,
        C: Accidental.SHARP,
        D: Accidental.SHARP,
    },
    _a.A = {
        order: Accidental.SHARP,
        A: Accidental.NATURAL,
        B: Accidental.NATURAL,
        C: Accidental.SHARP,
        D: Accidental.NATURAL,
        E: Accidental.NATURAL,
        F: Accidental.SHARP,
        G: Accidental.SHARP,
    },
    _a.D = {
        order: Accidental.SHARP,
        D: Accidental.NATURAL,
        E: Accidental.NATURAL,
        F: Accidental.SHARP,
        G: Accidental.NATURAL,
        A: Accidental.NATURAL,
        B: Accidental.NATURAL,
        C: Accidental.SHARP,
    },
    _a.G = {
        order: Accidental.SHARP,
        G: Accidental.NATURAL,
        A: Accidental.NATURAL,
        B: Accidental.NATURAL,
        C: Accidental.NATURAL,
        D: Accidental.NATURAL,
        E: Accidental.NATURAL,
        F: Accidental.SHARP
    },
    _a
);
var NoteName;
(function (NoteName) {
    NoteName[NoteName["C"] = 0] = "C";
    NoteName[NoteName["D"] = 1] = "D";
    NoteName[NoteName["E"] = 2] = "E";
    NoteName[NoteName["F"] = 3] = "F";
    NoteName[NoteName["G"] = 4] = "G";
    NoteName[NoteName["A"] = 5] = "A";
    NoteName[NoteName["B"] = 6] = "B";
})(NoteName || (NoteName = {}));
;
var Note = (function () {
    function Note(name, octave, accidental) {
        this.name = name;
        if (octave < 0 || octave > 9)
            throw "Octave Out of Range";
        this.octave = octave;
        this.accidental = accidental;
    }
    Note.prototype.noteName = function () {
        return name;
    };
    Note.prototype.accidentalToString = function () {
        switch (this.accidental) {
            case Music.Accidental.NATURAL:
                return '\u266E';
            case Music.Accidental.SHARP:
                return '\u266F';
            case Music.Accidental.FLAT:
                return '\u266d';
        }
    };
    Note.prototype.toString = function () {
        return "" + this.noteName() + this.octave + this.accidentalToString;
    };
    return Note;
})();
var Music = {
    Accidental: Accidental,
    COF: COF,
    Note: Note
};
var _a;
module.exports = Music;
//# sourceMappingURL=music.js.map