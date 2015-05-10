/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, For, If} from 'angular2/angular2';

var Accidentals = {
        NATURAL: 0,
        SHARP: 1,
        FLAT: 2
    },
    COF = {
        [Accidentals.SHARP]: ['F', 'C', 'G', 'D', 'A', 'E', 'B'],
        [Accidentals.FLAT]: ['B', 'E', 'A', 'D', 'G', 'C', 'F'],
        C: {
            order: Accidentals.SHARP,
            C: Accidentals.NATURAL,
            D: Accidentals.NATURAL,
            E: Accidentals.NATURAL,
            F: Accidentals.NATURAL,
            G: Accidentals.NATURAL, 
            A: Accidentals.NATURAL,
            B: Accidentals.NATURAL,
        },
        F: {
            order: Accidentals.FLAT,
            F: Accidentals.NATURAL,
            G: Accidentals.NATURAL,
            A: Accidentals.NATURAL,
            B: Accidentals.FLAT,
            C: Accidentals.NATURAL,
            D: Accidentals.NATURAL,
            E: Accidentals.NATURAL,
        },
        B_FLAT: {
            order: Accidentals.FLAT,
            B: Accidentals.FLAT,
            C: Accidentals.NATURAL,
            D: Accidentals.NATURAL,
            E: Accidentals.FLAT,
            F: Accidentals.NATURAL,
            G: Accidentals.NATURAL,
            A: Accidentals.NATURAL,
        },
        E_FLAT: { 
            order: Accidentals.FLAT,
            E: Accidentals.FLAT,
            F: Accidentals.NATURAL,
            G: Accidentals.NATURAL,
            A: Accidentals.FLAT,
            B: Accidentals.FLAT,
            C: Accidentals.NATURAL,
            D: Accidentals.NATURAL,
        },
        A_FLAT: { 
            order: Accidentals.FLAT,
            A: Accidentals.FLAT,
            B: Accidentals.FLAT,
            C: Accidentals.NATURAL,
            D: Accidentals.FLAT,
            E: Accidentals.FLAT,
            F: Accidentals.NATURAL,
            G: Accidentals.NATURAL,
        },
        D_FLAT: { 
            order: Accidentals.FLAT,
            D: Accidentals.FLAT,
            E: Accidentals.FLAT,
            F: Accidentals.NATURAL,
            G: Accidentals.FLAT,
            A: Accidentals.FLAT,
            B: Accidentals.FLAT,
            C: Accidentals.NATURAL,
        },
        G_FLAT: { 
            order: Accidentals.FLAT,
            G: Accidentals.FLAT,
            A: Accidentals.FLAT,
            B: Accidentals.FLAT,
            C: Accidentals.FLAT,
            D: Accidentals.FLAT,
            E: Accidentals.FLAT,
            F: Accidentals.NATURAL,
        },
        F_SHARP: { 
            order: Accidentals.SHARP,
            F: Accidentals.SHARP,
            G: Accidentals.SHARP,
            A: Accidentals.SHARP,
            B: Accidentals.NATURAL,
            C: Accidentals.SHARP,
            D: Accidentals.SHARP,
            E: Accidentals.SHARP,
        },
        B: { 
            order: Accidentals.SHARP,
            B: Accidentals.NATURAL,
            C: Accidentals.SHARP,
            D: Accidentals.SHARP,
            E: Accidentals.NATURAL,
            F: Accidentals.SHARP,
            G: Accidentals.SHARP,
            A: Accidentals.SHARP,
        },
        E: { 
            order: Accidentals.SHARP,
            E: Accidentals.NATURAL,
            F: Accidentals.SHARP,
            G: Accidentals.SHARP,
            A: Accidentals.NATURAL,
            B: Accidentals.NATURAL,
            C: Accidentals.SHARP,
            D: Accidentals.SHARP,
        },
        A: { 
            order: Accidentals.SHARP,
            A: Accidentals.NATURAL,
            B: Accidentals.NATURAL,
            C: Accidentals.SHARP,
            D: Accidentals.NATURAL,
            E: Accidentals.NATURAL,
            F: Accidentals.SHARP,
            G: Accidentals.SHARP,
        },
        D: { 
            order: Accidentals.SHARP,
            D: Accidentals.NATURAL,
            E: Accidentals.NATURAL,
            F: Accidentals.SHARP,
            G: Accidentals.NATURAL,
            A: Accidentals.NATURAL,
            B: Accidentals.NATURAL,
            C: Accidentals.SHARP,
        },
        G: { 
            order: Accidentals.SHARP,
            G: Accidentals.NATURAL,
            A: Accidentals.NATURAL,
            B: Accidentals.NATURAL,
            C: Accidentals.NATURAL,
            D: Accidentals.NATURAL,
            E: Accidentals.NATURAL,
            F: Accidentals.SHARP
        },
    };

var Staffer = {
    notes: null,
    key: null,
    lines: [],
    lineHeight: 0,
    noteCount: 0,
    canvas: null,

    init(canvas, notes, key) {
        this.canvas = canvas;
        this.notes = notes;
        this.key = key;
        this.canvas.setDimensions({width: 900, height: 400});

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
        this.key = COF[key];
        this.canvas.clear();
        this.init(this.canvas, null, this.key);
        this.draw();
    },

    draw() {

        this.canvas.add(new fabric.Rect({
            width: this.canvas.getWidth(),
            height: this.canvas.getHeight(),
            fill: 'rgba(230,230,230,0.25)',
            selectable: false
        }));

        for (var i = 0; i < this.lines.length; i++) {
            this.canvas.add(this.lines[i]);
        }


        var offsets = {
            F: 7,
            G: 6,
            A: 12,
            B: 11,
            C: 10,
            D: 9,
            E: 8,
            OCTAVE: 7
        }
        if (this.key !== null) {
            console.log('key not null');
            var sharp = '\u266F',
                flat = '\u266D',
                draw;

            for (var i = 0; i < COF[this.key.order].length; i++) {
                console.log('printing note: ' + COF[this.key.order][i]);
                var note = COF[this.key.order][i];
                switch (this.key[note]) {
                    case Accidentals.NATURAL:
                        draw = '';
                        break;
                    case Accidentals.SHARP:
                        draw = sharp;
                        break;
                    case Accidentals.FLAT:
                        draw = flat;
                        break;
                }
                let noteWidth = 30;
                let gutter = 20;
                this.canvas.add(new fabric.Text(draw, {
                    left: noteWidth * i + gutter, top: (this.lineHeight / 2) * (offsets[note]) - 13,
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

// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  directives: [For, If],
  templateUrl: 'templates/app.html',
})

// Component controller
class StafferApp {
  name: string;
  keys: string[];
  activeKey: string;
  staff;
  
  constructor() {
    this.staff = Staffer;
    this.staff.init(new fabric.Canvas('staff'), null, COF.A);
    this.staff.draw();
    this.name = 'Alice';
    this.keys = ['C', 'F', 'B_FLAT', 'E_FLAT', 'A_FLAT', 'D_FLAT', 'G_FLAT', 'F_SHARP', 'B', 'E', 'A', 'D', 'G'];
    this.activeKey = 'C';
  }

  setKey(key: string) {
      this.staff.setKey(key);
      this.activeKey = key;
  }

}

bootstrap(StafferApp);
