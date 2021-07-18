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




var arpeggiator = new Tone.Pattern(function(time, note){
    synth.triggerAttackRelease(note, 5);
}, ["C4", "D4", "E4", "G4", "A4"], "randomOnce");

arpeggiator.start(0);


Tone.Transport.bpm.value = 180;
Tone.Transport.start()