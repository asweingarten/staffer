declare var require;
var _ = require('lodash');

export enum Tone { C_NATURAL, D_NATURAL, D_SHARP, E_NATURAL, E_SHARP, F_NATURAL, F_SHARP, G_NATURAL, G_SHARP, A_NATURAL, A_SHARP, B_NATURAL };
var numTones = _.keys(Tone).length;

// steps = # half-steps
export function changeByHalfSteps(tone: Tone, steps: number): Tone {
    if (steps > 0) {
        return (tone + steps) % numTones;
    } else if (steps < 0) {
        return (tone - steps) < 0 
            ? (tone - steps) + numTones
            : (tone - steps);
    }
}

export function upHalfStep(tone: Tone): Tone {
    return changeByHalfSteps(tone, 1);
}

export function downHalfStep(tone: Tone): Tone {
    return changeByHalfSteps(tone, -1);
}

