/// <reference path="../typings/fabricjs/fabricjs.d.ts" />
import {Accidental, Note, NoteName} from './music';
/// ts:import=cof,COF
import COF = require('./cof'); ///ts:import:generated
const SHARP = Accidental.SHARP,
    FLAT = Accidental.FLAT,
    NATURAL = Accidental.NATURAL;

var NoteOffsetter = {
    keySignatureOffsets: {
        [SHARP]: {
            [Note.F(5).toString()]: 25,
            [Note.G(5).toString()]: 24,
            [Note.A(4).toString()]: 30,
            [Note.B(4).toString()]: 29,
            [Note.C(5).toString()]: 28,
            [Note.D(5).toString()]: 27,
            [Note.E(5).toString()]: 26,
        },
        [FLAT]: {
            [Note.F(5).toString()]: 25,
            [Note.G(4).toString()]: 31,
            [Note.A(4).toString()]: 30,
            [Note.B(4).toString()]: 29,
            [Note.C(5).toString()]: 28,
            [Note.D(5).toString()]: 27,
            [Note.E(5).toString()]: 26,
        },
    },

    // 0 is C9
    note5Position: {
        [Note.C(5).noteName()]: 28,
        [Note.D(5).noteName()]: 27,
        [Note.E(5).noteName()]: 26,
        [Note.F(5).noteName()]: 25,
        [Note.G(5).noteName()]: 24,
        [Note.A(5).noteName()]: 23,
        [Note.B(5).noteName()]: 22,
    },

    getKeySignatureOffset(note: Note, order: Accidental) {
        return this.keySignatureOffsets[order][note.toString()];
    },
    getNoteOffset(note: Note): number {
        const OCTAVE_OFFSET = 7;
        let offset = (5 - note.octave)*OCTAVE_OFFSET;
        return this.note5Position[note.noteName()] + offset;
    }
}

var Staffer = {
    notes: null,
    key: null,
    lines: [],
    lineHeight: 0,
    noteCount: 0,
    canvas: null,
    keySignatures: [
        Note.C(5, NATURAL),
        Note.F(5, NATURAL),
        Note.B(5, FLAT),
        Note.E(5, FLAT),
        Note.A(5, FLAT),
        Note.D(5, FLAT),
        Note.G(5, FLAT),
        Note.F(5, SHARP),
        Note.B(5, NATURAL),
        Note.E(5, NATURAL),
        Note.A(5, NATURAL),
        Note.D(5, NATURAL),
        Note.G(5, NATURAL)
    ],

    init(canvas, notes, key) {
        this.canvas = canvas;
        this.notes = notes || null;
        this.key = key;
        this.canvas.setDimensions({ width: 900, height: 720 });

        this.lineHeight = this.canvas.getHeight() / 36;
        for (var i = 0; i < 5; i++) {
            var height = (26 * this.lineHeight / 2) + i * this.lineHeight;
            this.lines[i] = new fabric.Line([0, height, this.canvas.getWidth(), height], {
                stroke: 'black',
                selectable: false
            });
        }
    },

    setKey(note: Note) {
        this.key = COF[note.nameAndAccidental()];
        this.draw();
    },

    drawKeySignature() {
        if (this.key === null) return;
        const SHARP_SIGN = '\u266F',
              FLAT_SIGN = '\u266D';
        let draw = ''; 

        for (var i = 0; i < COF[this.key.order].length; i++) {
            var note = COF[this.key.order][i];
            switch (this.key[note.noteName()]) {
                case NATURAL:
                    draw = '';
                    break;
                case SHARP:
                    draw = SHARP_SIGN;
                    break;
                case FLAT:
                    draw = FLAT_SIGN;
                    break;
            }
            let noteWidth: number = 30;
            let gutter: number = 20;
            let noteTop = (this.lineHeight / 2) * NoteOffsetter.getKeySignatureOffset(note, this.key.order) - 13;
            this.canvas.add(new fabric.Text(draw, {
                left: noteWidth * i + gutter,
                top:  noteTop,
                width: noteWidth, height: 30,
            }));
        }
    },

    drawNotes() {
        if (this.notes === null) return;

        for(var i = 0; i < this.notes.length; i++) {
            let noteWidth = this.lineHeight*1.5;
            let offset = 250;
            let gutter = noteWidth * 1.25;
            let note = this.notes[i];
            let noteOffset = NoteOffsetter.getNoteOffset(note);
            this.canvas.add(new fabric.Ellipse({rx: noteWidth/2, ry: this.lineHeight/2,
                                                left: offset+i*gutter, top: this.lineHeight/2*noteOffset,
                                                fill: 'black'}));
        }
    },

    draw() {
        this.canvas.clear();
        this.canvas.add(new fabric.Rect({
            width: this.canvas.getWidth(),
            height: this.canvas.getHeight(),
            fill: 'rgba(230,230,230,0.25)',
            selectable: false
        }));

        for (var i = 0; i < this.lines.length; i++) {
            this.canvas.add(this.lines[i]);
        }

        this.drawKeySignature();
        this.drawNotes();

    }

};

export = Staffer;