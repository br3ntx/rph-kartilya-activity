/* =====================================================================
   KARTILYA SHOWDOWN — MUSIC & SOUND EFFECTS
   ---------------------------------------------------------------------
   BG_MUSIC: path to the background music file (loops quietly).
   Change it if your file has a different name or folder.
   The sound effects are generated in code, so they need no files.
   ===================================================================== */
const BG_MUSIC = 'sounds/gameshow.mp3';
const MUSIC_VOLUME = 0.35;   // 0 = silent, 1 = full volume
const SFX_VOLUME = 0.5;

const Sound = (() => {
  const pref = (k, d) => { try { const v = localStorage.getItem('kshow_' + k); return v == null ? d : v === '1'; } catch (e) { return d; } };
  const setPref = (k, v) => { try { localStorage.setItem('kshow_' + k, v ? '1' : '0'); } catch (e) {} };
  const volumePref = (k, d) => { try { const v = Number(localStorage.getItem('kshow_' + k)); return Number.isFinite(v) ? Math.min(1, Math.max(0, v)) : d; } catch (e) { return d; } };
  const setVolumePref = (k, v) => { try { localStorage.setItem('kshow_' + k, String(v)); } catch (e) {} };
  let musicOn = pref('music', true), sfxOn = pref('sfx', true);
  let musicVolume = volumePref('musicVolume', MUSIC_VOLUME), sfxVolume = volumePref('sfxVolume', SFX_VOLUME);
  let ctx = null, master = null, unlocked = false, musicOk = true;

  const music = new Audio(BG_MUSIC);
  music.loop = true; music.preload = 'auto'; music.volume = musicVolume;
  music.addEventListener('error', () => { musicOk = false; updateButtons(); });

  function ac() {
    if (!ctx) {
      const C = window.AudioContext || window.webkitAudioContext;
      if (!C) return null;
      ctx = new C(); master = ctx.createGain(); master.gain.value = sfxVolume; master.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  // one note: frequency, start offset (s), length (s), wave type, loudness
  function tone(f, t0, d, type = 'triangle', g = 0.3, f2 = null) {
    const c = ac(); if (!c || !sfxOn) return;
    const t = c.currentTime + t0, o = c.createOscillator(), v = c.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t);
    if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + d);
    v.gain.setValueAtTime(0.0001, t);
    v.gain.exponentialRampToValueAtTime(g, t + 0.012);
    v.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(v); v.connect(master); o.start(t); o.stop(t + d + 0.05);
  }
  function brass(f, t0, d, g = 0.18) {        // warmer "horn" note for fanfares
    const c = ac(); if (!c || !sfxOn) return;
    const t = c.currentTime + t0, lp = c.createBiquadFilter(), v = c.createGain();
    lp.type = 'lowpass'; lp.frequency.setValueAtTime(900, t); lp.frequency.linearRampToValueAtTime(2600, t + 0.08);
    v.gain.setValueAtTime(0.0001, t); v.gain.exponentialRampToValueAtTime(g, t + 0.03);
    v.gain.setValueAtTime(g, t + d * 0.7); v.gain.exponentialRampToValueAtTime(0.0001, t + d);
    [0, 6].forEach(det => { const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; o.detune.value = det; o.connect(lp); o.start(t); o.stop(t + d + 0.05); });
    lp.connect(v); v.connect(master);
  }
  function noise(t0, d, from, to, g = 0.12) {  // filtered noise sweep (drumroll / whoosh)
    const c = ac(); if (!c || !sfxOn) return;
    const t = c.currentTime + t0, len = Math.ceil(c.sampleRate * d), buf = c.createBuffer(1, len, c.sampleRate), data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    const s = c.createBufferSource(), bp = c.createBiquadFilter(), v = c.createGain();
    s.buffer = buf; bp.type = 'bandpass'; bp.Q.value = 1.2;
    bp.frequency.setValueAtTime(from, t); bp.frequency.exponentialRampToValueAtTime(to, t + d);
    v.gain.setValueAtTime(0.0001, t); v.gain.exponentialRampToValueAtTime(g, t + d * 0.3); v.gain.exponentialRampToValueAtTime(0.0001, t + d);
    s.connect(bp); bp.connect(v); v.connect(master); s.start(t); s.stop(t + d);
  }

  // lower the music briefly so a fanfare can be heard
  function duck(sec) {
    if (!musicOn || music.paused) return;
    music.volume = musicVolume * 0.3;
    clearTimeout(duck._t); duck._t = setTimeout(() => { music.volume = musicVolume; }, sec * 1000);
  }

  const N = { C4: 261.6, E4: 329.6, G4: 392, A4: 440, B4: 493.9, C5: 523.3, D5: 587.3, E5: 659.3, F5: 698.5, G5: 784, A5: 880, B5: 987.8, C6: 1046.5, E6: 1318.5, G6: 1568 };

  const fx = {
    tick() { tone(1400, 0, 0.035, 'square', 0.06); },
    pop() { tone(500, 0, 0.12, 'sine', 0.25, 950); },
    correct() { [N.C5, N.E5, N.G5, N.C6].forEach((f, i) => tone(f, i * 0.07, 0.22, 'triangle', 0.28)); tone(N.G6, 0.3, 0.35, 'sine', 0.12); },
    wrong() { tone(160, 0, 0.22, 'sawtooth', 0.16); tone(115, 0.22, 0.38, 'sawtooth', 0.16); },
    reveal() { noise(0, 0.35, 400, 3000, 0.08); tone(N.C5, 0.3, 0.3, 'triangle', 0.2); tone(N.G5, 0.3, 0.3, 'triangle', 0.15); },
    points() { tone(N.B5, 0, 0.08, 'square', 0.12); tone(N.E6, 0.08, 0.35, 'square', 0.12); },
    flip(res) {   // Wordle: one note per tile, pitched by result
      res.forEach((r, i) => tone(r === 'g' ? N.A5 : r === 'y' ? N.E5 : N.G4, i * 0.08, 0.14, r === 'x' ? 'sine' : 'triangle', 0.18));
    },
    round() {      // round-start fanfare
      duck(2.2);
      brass(N.G4, 0, 0.16); brass(N.C5, 0.16, 0.16); brass(N.E5, 0.32, 0.16);
      [N.G4, N.C5, N.E5, N.G5].forEach(f => brass(f, 0.5, 0.9, 0.12));
      noise(0.5, 0.6, 3000, 6000, 0.05);
    },
    victory() {    // finale fanfare
      duck(3.5);
      const m = [[N.C5, 0, 0.14], [N.E5, 0.14, 0.14], [N.G5, 0.28, 0.14], [N.C6, 0.42, 0.3], [N.A5, 0.78, 0.14], [N.B5, 0.92, 0.14]];
      m.forEach(([f, t, d]) => brass(f, t, d));
      [N.C5, N.E5, N.G5, N.C6].forEach(f => brass(f, 1.08, 1.6, 0.11));
      noise(0, 1.0, 200, 900, 0.06);   // drumroll swell
      noise(1.08, 1.2, 4000, 8000, 0.05);
    },
    whoosh() { noise(0, 0.22, 600, 2400, 0.035); }
  };

  function play(name, arg) { if (!sfxOn) return; try { fx[name] && fx[name](arg); } catch (e) {} }

  function startMusic() {
    if (!musicOn || !musicOk) return;
    const p = music.play(); if (p && p.catch) p.catch(() => {});
  }
  // browsers only allow audio after the first click / key press
  function unlock() {
    if (unlocked) return; unlocked = true;
    ac(); startMusic();
  }
  ['pointerdown', 'keydown'].forEach(ev => document.addEventListener(ev, unlock, { capture: true }));

  function updateButtons() {
    const bm = document.getElementById('bMusic'), bs = document.getElementById('bSfx');
    const mv = document.getElementById('musicVolume'), sv = document.getElementById('sfxVolume');
    if (bm) { bm.classList.toggle('off', !musicOn || !musicOk); bm.title = !musicOk ? 'Music file not found: ' + BG_MUSIC : musicOn ? 'Music on (M)' : 'Music off (M)'; }
    if (bs) { bs.classList.toggle('off', !sfxOn); bs.title = sfxOn ? 'Sound effects on (S)' : 'Sound effects off (S)'; }
    if (mv) mv.value = String(musicVolume);
    if (sv) sv.value = String(sfxVolume);
  }
  function setMusicVolume(value) {
    musicVolume = Math.min(1, Math.max(0, Number(value)));
    music.volume = musicVolume;
    setVolumePref('musicVolume', musicVolume);
    updateButtons();
  }
  function setSfxVolume(value) {
    sfxVolume = Math.min(1, Math.max(0, Number(value)));
    if (master) master.gain.value = sfxVolume;
    setVolumePref('sfxVolume', sfxVolume);
    updateButtons();
  }
  function toggleMusic() {
    if (!musicOk) { if (typeof toast === 'function') toast('Music file not found: ' + BG_MUSIC); return; }
    musicOn = !musicOn; setPref('music', musicOn);
    if (musicOn) { unlocked = true; startMusic(); } else music.pause();
    updateButtons();
  }
  function toggleSfx() { sfxOn = !sfxOn; setPref('sfx', sfxOn); if (sfxOn) fx.pop(); updateButtons(); }

  document.addEventListener('DOMContentLoaded', updateButtons);
  return { play, toggleMusic, toggleSfx, setMusicVolume, setSfxVolume, updateButtons };
})();
const sfx = Sound.play;
