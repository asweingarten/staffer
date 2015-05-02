var Tones = require('../src/tones');
var test = require('tape');
test('timing test', function (t) {
    t.plan(3);
    var tone = Tones.Tone[0];
    t.equal(tone, Tones.Tone[0]);
    t.equal(Tones.upHalfStep(tone), Tones.Tone[1]);
    t.equal(Tones.downHalfStep(tone), Tones.Tone[12]);
});
