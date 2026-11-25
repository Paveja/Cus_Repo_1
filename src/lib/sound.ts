type Tone = { frequency: number; duration: number; type?: OscillatorType };

let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined' || !('AudioContext' in window)) return null;
  audioContext ??= new AudioContext();
  return audioContext;
}

function playTones(tones: Tone[]) {
  const context = getAudioContext();
  if (!context) return;
  if (context.state === 'suspended') void context.resume();
  const start = context.currentTime;
  tones.forEach(({ frequency, duration, type = 'sine' }, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const time = start + index * 0.06;
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(0.08, time + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(time);
    oscillator.stop(time + duration);
  });
}

export const playMoveSound = () => playTones([{ frequency: 420, duration: 0.1 }]);
export const playInvalidSound = () =>
  playTones([{ frequency: 140, duration: 0.12, type: 'square' }]);
export const playWinSound = () =>
  playTones([
    { frequency: 520, duration: 0.18 },
    { frequency: 780, duration: 0.24 },
  ]);
export const playDrawSound = () =>
  playTones([
    { frequency: 260, duration: 0.18 },
    { frequency: 220, duration: 0.22 },
  ]);
