document.getElementById("play-button").addEventListener("click", async() => {
    await Tone.start();
    console.log("context started");
})

const synth = new Tone.MonoSynth({
    oscillator: {
        type: "triangle"
    },

	envelope: {
		attack: 0.1
	}
});
synth.toDestination();

let tempo = 120;
let notes = ["C4", "D4", "E4", "G4", "A4"];
let arpeggiatorPattern = "randomWalk";

var arpeggiator = new Tone.Pattern(function(time, note){
    synth.triggerAttackRelease(note, '16n', time);
}, notes, arpeggiatorPattern);

arpeggiator.playbackRate = 4;
arpeggiator.start(0);


Tone.Transport.bpm.value = tempo;
Tone.Transport.start()