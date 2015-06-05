/// <reference path="../typings/fabricjs/fabricjs.d.ts" />
import {Accidental, Note, NoteName} from './music';
/// ts:import=cof,COF
import COF = require('./cof'); ///ts:import:generated

var NoteOffsetter = {
    keySignatureOffsets: {
        [Accidental.SHARP]: {
            [Note.F(5).toString()]: 25,
            [Note.G(5).toString()]: 24,
            [Note.A(4).toString()]: 30,
            [Note.B(4).toString()]: 29,
            [Note.C(5).toString()]: 28,
            [Note.D(5).toString()]: 27,
            [Note.E(5).toString()]: 26,
        },
        [Accidental.FLAT]: {
            [Note.F(5).toString()]: 25,
            [Note.G(4).toString()]: 31,
            [Note.A(4).toString()]: 30,
            [Note.B(4).toString()]: 29,
            [Note.C(5).toString()]: 28,
            [Note.D(5).toString()]: 27,
            [Note.E(5).toString()]: 26,
        },
        OCTAVE: 7
    },
    getKeySignatureOffset(note: Note, order: Accidental) {
        return this.keySignatureOffsets[order][note.toString()];
    },
    getNoteOffset(note: Note): number {
        return 0;
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
        Note.C(5, Accidental.NATURAL),
        Note.F(5, Accidental.NATURAL),
        Note.B(5, Accidental.FLAT),
        Note.E(5, Accidental.FLAT),
        Note.A(5, Accidental.FLAT),
        Note.D(5, Accidental.FLAT),
        Note.G(5, Accidental.FLAT),
        Note.F(5, Accidental.SHARP),
        Note.B(5, Accidental.NATURAL),
        Note.E(5, Accidental.NATURAL),
        Note.A(5, Accidental.NATURAL),
        Note.D(5, Accidental.NATURAL),
        Note.G(5, Accidental.NATURAL)
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
        if (this.key !== null) {
            const SHARP_SIGN = '\u266F',
                  FLAT_SIGN = '\u266D';
            let draw = ''; 

            for (var i = 0; i < COF[this.key.order].length; i++) {
                var note = COF[this.key.order][i];
                switch (this.key[note.noteName()]) {
                    case Accidental.NATURAL:
                        draw = '';
                        break;
                    case Accidental.SHARP:
                        draw = SHARP_SIGN;
                        break;
                    case Accidental.FLAT:
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
        }
    },

    drawNotes() {
        if (this.notes !== null) {

            for(var i = 0; i < this.notes.length; i++) {
                let noteWidth = this.canvas.getWidth()/this.notes.length/2;
                let gutter = 20;
                let note = this.notes[i];
                let noteHeight = note.position;
                this.canvas.add(new fabric.Ellipse({rx: noteWidth/2, ry: this.lineHeight/2,
                                                    left: noteWidth*i+gutter, top: 100,
                                                    fill: 'black'}));
            }
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

    }

};

export = Staffer;