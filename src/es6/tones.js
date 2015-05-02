/* @flow */ 

var _ = require('lodash'),
    index= exports.Tone,
    Tones = ['C_NATURAL', 'C_SHARP', 'D_NATURAL', 'D_SHARP', 'E_NATURAL', 'F_NATURAL',
             'F_SHARP', 'G_NATURAL', 'G_SHARP', 'A_NATURAL', 'A_SHARP', 'B_NATURAL'];
    numTones = _.keys(Tones).length;

console.log(numTones);

// steps = # half-steps
function changeByHalfSteps(tone, steps) {
    var index = _.findIndex(tone);
    if (steps > 0) {
        return (Tones[(index + steps) % numTones]);
    }
    else if (steps < 0) {
        return (Tones[index + steps]) < 0
            ? (Tones[index + steps + numTones]) 
            : (Tones[index + steps]);
    }
    else {
        return Tones[index];
    }
}

function upHalfStep(tone) {
    return changeByHalfSteps(tone, 1);
}
function downHalfStep(tone) {
    return changeByHalfSteps(tone, -1);
}

exports.downHalfStep = downHalfStep;
exports.upHalfStep = upHalfStep;
exports.changeByHalfSteps = changeByHalfSteps;
exports.Tone = Tones;
