'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

/* @flow */

var _ = require('lodash'),
    index = exports.Tone,
    Notes = ['C_NATURAL', 'C_SHARP', 'D_NATURAL', 'D_SHARP', 'E_NATURAL', 'F_NATURAL', 'F_SHARP', 'G_NATURAL', 'G_SHARP', 'A_NATURAL', 'A_SHARP', 'B_NATURAL'];
// numNotes = _.keys(Notes).length;

console.log(numNotes);

var Note = (function () {
    function Note(number) {
        _classCallCheck(this, Note);

        this.numNotes = 12;
        this.number = number;
        this.name = Notes[number];
    }

    _createClass(Note, [{
        key: 'changeByHalfSteps',
        value: function changeByHalfSteps(note, steps) {
            if (steps > 0) {
                return new Note((note.number + steps) % this.numNotes);
            } else if (steps < 0) {
                return index + steps < 0 ? new Note(index + steps + this.numNotes) : new Note(index + steps);
            } else {
                return note;
            }
        }
    }, {
        key: 'upHalfStep',
        value: function upHalfStep() {
            return this.changeByHalfSteps(this, 1);
        }
    }, {
        key: 'downHalfStep',
        value: function downHalfStep() {
            return this.changeByHalfSteps(this, -1);
        }
    }]);

    return Note;
})();

exports.Note = Note;

// steps = # half-steps
// function changeByHalfSteps(tone, steps) {
//     var index = _.findIndex(tone);
//     if (steps > 0) {
//         return (Notes[(index + steps) % numNotes]);
//     }
//     else if (steps < 0) {
//         return (Notes[index + steps]) < 0
//             ? (Notes[index + steps + numNotes])
//             : (Notes[index + steps]);
//     }
//     else {
//         return Notes[index];
//     }
// }

// function upHalfStep(tone) {
//     return changeByHalfSteps(tone, 1);
// }
// function downHalfStep(tone) {
//     return changeByHalfSteps(tone, -1);
// }

// exports.downHalfStep = downHalfStep;
// exports.upHalfStep = upHalfStep;
// exports.changeByHalfSteps = changeByHalfSteps;
// exports.Notes = Notes;