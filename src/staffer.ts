/// ts:import=music,Music
import Music = require('./music'); ///ts:import:generated
var Note = Music.Note;
/// <reference path="../typings/fabricjs/fabricjs.d.ts" />

var Staffer = {
    notes: null,
    key: null,
    lines: [],
    lineHeight: 0,
    noteCount: 0,
    canvas: null,
    keySignatures: [
        new Note(Music.NoteName.C, 5, Music.Accidental.NATURAL),
        new Note(Music.NoteName.F, 5, Music.Accidental.NATURAL),
        new Note(Music.NoteName.B, 5, Music.Accidental.FLAT),
        new Note(Music.NoteName.E, 5, Music.Accidental.FLAT),
        new Note(Music.NoteName.A, 5, Music.Accidental.FLAT),
        new Note(Music.NoteName.D, 5, Music.Accidental.FLAT),
        new Note(Music.NoteName.G, 5, Music.Accidental.FLAT),
        new Note(Music.NoteName.F, 5, Music.Accidental.SHARP),
        new Note(Music.NoteName.B, 5, Music.Accidental.NATURAL),
        new Note(Music.NoteName.E, 5, Music.Accidental.NATURAL),
        new Note(Music.NoteName.A, 5, Music.Accidental.NATURAL),
        new Note(Music.NoteName.D, 5, Music.Accidental.NATURAL),
        new Note(Music.NoteName.G, 5, Music.Accidental.NATURAL)
    ],
    keySignatureOffsets: {
        [Music.Accidental.SHARP]: {
            F: 7,
            G: 6,
            A: 12,
            B: 11,
            C: 10,
            D: 9,
            E: 8,
        },
        [Music.Accidental.FLAT]: {
            F: 7,
            G: 13,
            A: 12,
            B: 11,
            C: 10,
            D: 9,
            E: 8,
        },
        OCTAVE: 7
    },

    init(canvas, notes, key) {
        this.canvas = canvas;
        this.notes = notes || null;
        this.key = key || Music.COF.C;
        this.canvas.setDimensions({ width: 900, height: 400 });

        this.lineHeight = this.canvas.getHeight() / 20;
        for (var i = 0; i < 5; i++) {
            var height = ((i + 4) * this.lineHeight);
            this.lines[i] = new fabric.Line([0, height, this.canvas.getWidth(), height], {
                stroke: 'black',
                selectable: false
            });
        }
    },

    setKey(key: string) {
        this.key = Music.COF[key];
        this.draw();
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

        if (this.key !== null) {
            console.log('key not null');
            var sharp = '\u266F',
                flat = '\u266D',
                draw;

            for (var i = 0; i < Music.COF[this.key.order].length; i++) {
                console.log('printing note: ' + Music.COF[this.key.order][i]);
                var note = Music.COF[this.key.order][i];
                switch (this.key[note]) {
                    case Music.Accidental.NATURAL:
                        draw = '';
                        break;
                    case Music.Accidental.SHARP:
                        draw = sharp;
                        break;
                    case Music.Accidental.FLAT:
                        draw = flat;
                        break;
                }
                let noteWidth = 30;
                let gutter = 20;
                this.canvas.add(new fabric.Text(draw, {
                    left: noteWidth * i + gutter, top: (this.lineHeight / 2) * (this.keySignatureOffsets[this.key.order][note]) - 13,
                    width: noteWidth, height: 30,
                }));
            }
        }

        // if (this.notes !== null) {

        //     for(var i = 0; i < this.notes.length; i++) {
        //         let noteWidth = this.canvas.getWidth()/this.notes.length/2;
        //         let gutter = 20;
        //         let note = this.notes[i];
        //         let noteHeight = note.position;
        //         this.canvas.add(new fabric.Ellipse({rx: noteWidth/2, ry: this.lineHeight/2,
        //                                                                                 left: noteWidth*i+gutter, top: 100,
        //                                                                                 fill: 'black'}));
        //     }
        // }
    }

};

export = Staffer;