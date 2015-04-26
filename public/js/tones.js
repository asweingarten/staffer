var _ = require('lodash');
(function (Tone) {
    Tone[Tone["C_NATURAL"] = 0] = "C_NATURAL";
    Tone[Tone["D_NATURAL"] = 1] = "D_NATURAL";
    Tone[Tone["D_SHARP"] = 2] = "D_SHARP";
    Tone[Tone["E_NATURAL"] = 3] = "E_NATURAL";
    Tone[Tone["E_SHARP"] = 4] = "E_SHARP";
    Tone[Tone["F_NATURAL"] = 5] = "F_NATURAL";
    Tone[Tone["F_SHARP"] = 6] = "F_SHARP";
    Tone[Tone["G_NATURAL"] = 7] = "G_NATURAL";
    Tone[Tone["G_SHARP"] = 8] = "G_SHARP";
    Tone[Tone["A_NATURAL"] = 9] = "A_NATURAL";
    Tone[Tone["A_SHARP"] = 10] = "A_SHARP";
    Tone[Tone["B_NATURAL"] = 11] = "B_NATURAL";
})(exports.Tone || (exports.Tone = {}));
var Tone = exports.Tone;
;
var numTones = _.keys(Tone).length;
// steps = # half-steps
function changeByHalfSteps(tone, steps) {
    if (steps > 0) {
        return (tone + steps) % numTones;
    }
    else if (steps < 0) {
        return (tone - steps) < 0
            ? (tone - steps) + numTones
            : (tone - steps);
    }
}
exports.changeByHalfSteps = changeByHalfSteps;
function upHalfStep(tone) {
    return changeByHalfSteps(tone, 1);
}
exports.upHalfStep = upHalfStep;
function downHalfStep(tone) {
    return changeByHalfSteps(tone, -1);
}
exports.downHalfStep = downHalfStep;
