var Music = require('./music');
/// <reference path="typings/fabricjs/fabricjs.d.ts" />
var Staffer = {
    notes: null,
    key: null,
    lines: [],
    lineHeight: 0,
    noteCount: 0,
    canvas: null,
    keySignatureOffsets: (_a = {},
        _a[Music.Accidental.SHARP] = {
            F: 7,
            G: 6,
            A: 12,
            B: 11,
            C: 10,
            D: 9,
            E: 8,
        },
        _a[Music.Accidental.FLAT] = {
            F: 7,
            G: 13,
            A: 12,
            B: 11,
            C: 10,
            D: 9,
            E: 8,
        },
        _a
    ),
    init: function (canvas, notes, key) {
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
    setKey: function (key) {
        this.key = Music.COF[key];
        this.draw();
    },
    draw: function () {
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
            var sharp = '\u266F', flat = '\u266D', draw;
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
                var noteWidth = 30;
                var gutter = 20;
                this.canvas.add(new fabric.Text(draw, {
                    left: noteWidth * i + gutter, top: (this.lineHeight / 2) * (this.keySignatureOffsets[this.key.order][note]) - 13,
                    width: noteWidth, height: 30,
                }));
            }
        }
    }
};
var _a;
module.exports = Staffer;
//# sourceMappingURL=staffer.js.map