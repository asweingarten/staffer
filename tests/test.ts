declare var require;
import Tones = require('../src/tones');
var test = require('tape');
 
test('timing test', function (t) {
    t.plan(1);
    
    var tone: Tones.Tone = Tones.Tone.C_NATURAL;

    t.equal(tone, Tones.Tone.C_NATURAL);

});