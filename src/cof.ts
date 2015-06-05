import {Accidental, Note} from './music';
const SHARP = Accidental.SHARP,
    FLAT = Accidental.FLAT,
    NATURAL = Accidental.NATURAL;

var COF = {
    [SHARP]: [Note.F(), Note.C(), Note.G(), Note.D(),
        Note.A(4), Note.E(), Note.B(4)],
    [FLAT]: [Note.B(4), Note.E(), Note.A(4), Note.D(),
        Note.G(4), Note.C(), Note.F()],
    [Note.C().nameAndAccidental()]: {
        order: SHARP,
        C: NATURAL,
        D: NATURAL,
        E: NATURAL,
        F: NATURAL,
        G: NATURAL,
        A: NATURAL,
        B: NATURAL,
    },
    [Note.F().nameAndAccidental()]: {
        order: FLAT,
        F: NATURAL,
        G: NATURAL,
        A: NATURAL,
        B: FLAT,
        C: NATURAL,
        D: NATURAL,
        E: NATURAL,
    },
    [Note.B(5, FLAT).nameAndAccidental()]: {
        order: FLAT,
        B: FLAT,
        C: NATURAL,
        D: NATURAL,
        E: FLAT,
        F: NATURAL,
        G: NATURAL,
        A: NATURAL,
    },
    [Note.E(5, FLAT).nameAndAccidental()]: {
        order: FLAT,
        E: FLAT,
        F: NATURAL,
        G: NATURAL,
        A: FLAT,
        B: FLAT,
        C: NATURAL,
        D: NATURAL,
    },
    [Note.A(5, FLAT).nameAndAccidental()]: {
        order: FLAT,
        A: FLAT,
        B: FLAT,
        C: NATURAL,
        D: FLAT,
        E: FLAT,
        F: NATURAL,
        G: NATURAL,
    },
    [Note.D(5, FLAT).nameAndAccidental()]: {
        order: FLAT,
        D: FLAT,
        E: FLAT,
        F: NATURAL,
        G: FLAT,
        A: FLAT,
        B: FLAT,
        C: NATURAL,
    },
    [Note.G(5, FLAT).nameAndAccidental()]: {
        order: FLAT,
        G: FLAT,
        A: FLAT,
        B: FLAT,
        C: FLAT,
        D: FLAT,
        E: FLAT,
        F: NATURAL,
    },
    [Note.F(5, SHARP).nameAndAccidental()]: {
        order: SHARP,
        F: SHARP,
        G: SHARP,
        A: SHARP,
        B: NATURAL,
        C: SHARP,
        D: SHARP,
        E: SHARP,
    },
    [Note.B().nameAndAccidental()]: {
        order: SHARP,
        B: NATURAL,
        C: SHARP,
        D: SHARP,
        E: NATURAL,
        F: SHARP,
        G: SHARP,
        A: SHARP,
    },
    [Note.E().nameAndAccidental()]: {
        order: SHARP,
        E: NATURAL,
        F: SHARP,
        G: SHARP,
        A: NATURAL,
        B: NATURAL,
        C: SHARP,
        D: SHARP,
    },
    [Note.A().nameAndAccidental()]: {
        order: SHARP,
        A: NATURAL,
        B: NATURAL,
        C: SHARP,
        D: NATURAL,
        E: NATURAL,
        F: SHARP,
        G: SHARP,
    },
    [Note.D().nameAndAccidental()]: {
        order: SHARP,
        D: NATURAL,
        E: NATURAL,
        F: SHARP,
        G: NATURAL,
        A: NATURAL,
        B: NATURAL,
        C: SHARP,
    },
    [Note.G().nameAndAccidental()]: {
        order: SHARP,
        G: NATURAL,
        A: NATURAL,
        B: NATURAL,
        C: NATURAL,
        D: NATURAL,
        E: NATURAL,
        F: SHARP
    },
};

export = COF;