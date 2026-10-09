/**
 * Background Invisible Web Audio Elevator Music Synth
 * Runs 100% in the background, zero visible UI elements.
 */

class InvisibleElevatorMusic {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private volume = 0.28; // Pleasant background volume
  private masterGain: GainNode | null = null;
  private timerId: number | null = null;
  private beat = 0;
  private tempo = 90; // Smooth elevator jazz tempo

  // Smooth bossa / elevator jazz chord voicings (Hz)
  private chords = [
    [130.81, 164.81, 196.00, 246.94, 293.66], // Cmaj9
    [110.00, 130.81, 164.81, 196.00, 246.94], // Am9
    [146.83, 174.61, 220.00, 261.63, 329.63], // Dm9
    [98.00, 174.61, 246.94, 329.63, 440.00]   // G13
  ];

  private bassNotes = [
    [130.81, 98.00],
    [110.00, 82.41],
    [146.83, 110.00],
    [98.00, 73.42]
  ];

  private vibraphoneNotes = [
    [523.25, 587.33, 659.25],
    [440.00, 493.88, 523.25],
    [587.33, 659.25, 698.46],
    [392.00, 440.00, 493.88]
  ];

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playElevatorDing() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const tones = [
      { freq: 784, start: now, duration: 0.8 },
      { freq: 587.33, start: now + 0.16, duration: 1.2 }
    ];

    tones.forEach(tone => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(tone.freq, tone.start);

      gain.gain.setValueAtTime(0, tone.start);
      gain.gain.linearRampToValueAtTime(0.2, tone.start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, tone.start + tone.duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(tone.start);
      osc.stop(tone.start + tone.duration);
    });
  }

  private playRhodesChord(freqs: number[], time: number) {
    if (!this.ctx || !this.masterGain) return;

    freqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc1.type = 'sine';
      osc2.type = 'triangle';
      osc1.frequency.setValueAtTime(freq, time);
      osc2.frequency.setValueAtTime(freq * 1.002, time);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, time);
      filter.frequency.exponentialRampToValueAtTime(500, time + 0.8);

      const noteVolume = 0.06 / Math.sqrt(idx + 1);
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(noteVolume, time + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 1.1);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc1.start(time);
      osc2.start(time);
      osc1.stop(time + 1.2);
      osc2.stop(time + 1.2);
    });
  }

  private playBass(freq: number, time: number) {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(280, time);

    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.18, time + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.6);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.65);
  }

  private playShaker(time: number, accent: boolean) {
    if (!this.ctx || !this.masterGain) return;

    const bufferSize = Math.floor(this.ctx.sampleRate * 0.05);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(7000, time);
    filter.Q.setValueAtTime(3, time);

    const gain = this.ctx.createGain();
    const vol = accent ? 0.03 : 0.014;
    gain.gain.setValueAtTime(vol, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.045);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    whiteNoise.start(time);
    whiteNoise.stop(time + 0.05);
  }

  private playMelodyNote(freq: number, time: number) {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.05, time + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.7);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.75);
  }

  private step() {
    if (!this.isPlaying || !this.ctx) return;
    const now = this.ctx.currentTime;
    const stepDuration = 60 / this.tempo / 2;

    const chordIndex = Math.floor((this.beat % 32) / 8);
    const subBeat = this.beat % 8;

    // Shaker on 8th notes
    const isAccent = subBeat === 2 || subBeat === 6;
    this.playShaker(now, isAccent);

    // Rhodes bossa chords on beats 0, 3, 5
    if (subBeat === 0 || subBeat === 3 || subBeat === 5) {
      this.playRhodesChord(this.chords[chordIndex], now);
    }

    // Walking bass on beats 0 and 4
    if (subBeat === 0) {
      this.playBass(this.bassNotes[chordIndex][0], now);
    } else if (subBeat === 4) {
      this.playBass(this.bassNotes[chordIndex][1], now);
    }

    // Gentle vibraphone lead
    if (subBeat === 2 && Math.random() > 0.35) {
      const notes = this.vibraphoneNotes[chordIndex];
      const note = notes[Math.floor(Math.random() * notes.length)];
      this.playMelodyNote(note, now);
    } else if (subBeat === 6 && Math.random() > 0.45) {
      const notes = this.vibraphoneNotes[chordIndex];
      const note = notes[Math.floor(Math.random() * notes.length)];
      this.playMelodyNote(note * 1.5, now);
    }

    this.beat++;

    this.timerId = window.setTimeout(() => {
      this.step();
    }, stepDuration * 1000);
  }

  public start() {
    if (this.isPlaying) return;
    this.initContext();
    this.isPlaying = true;
    this.playElevatorDing();
    this.step();
  }

  public stop() {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  public setupInvisibleAutoplay() {
    const handleFirstUserInteraction = () => {
      this.start();
      window.removeEventListener('click', handleFirstUserInteraction);
      window.removeEventListener('touchstart', handleFirstUserInteraction);
      window.removeEventListener('keydown', handleFirstUserInteraction);
      window.removeEventListener('scroll', handleFirstUserInteraction);
    };

    window.addEventListener('click', handleFirstUserInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstUserInteraction, { once: true });
    window.addEventListener('keydown', handleFirstUserInteraction, { once: true });
    window.addEventListener('scroll', handleFirstUserInteraction, { once: true });
  }
}

export const invisibleElevatorMusic = new InvisibleElevatorMusic();
