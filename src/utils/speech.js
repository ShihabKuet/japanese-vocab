/**
 * speech.js — Japanese TTS with native Android support
 *
 * Strategy:
 *   1. On native Android (Capacitor)
 *      → uses @capacitor-community/text-to-speech
 *        which calls the Android native TTS engine directly.
 *        Android has built-in Japanese TTS (Google TTS) so this
 *        always works reliably.
 *
 *   2. On web / PWA (browser)
 *      → uses window.speechSynthesis (Web Speech API).
 *        Waits for voices to load before speaking, which fixes
 *        the common "silent on first tap" bug in Chrome.
 *
 * Why Android WebView can't use window.speechSynthesis:
 *   - Android WebView does NOT ship with speechSynthesis voices.
 *   - Even if the API exists, calling speak() silently does nothing
 *     because there are no voices installed inside the WebView context.
 *   - The native TTS engine (outside the WebView) works perfectly,
 *     which is what the Capacitor plugin accesses.
 */

// ── Detect Capacitor native platform ──────────────────────────
let _isNative = null;
async function isNative() {
  if (_isNative !== null) return _isNative;
  try {
    const { Capacitor } = await import('@capacitor/core');
    _isNative = Capacitor.isNativePlatform();
  } catch {
    _isNative = false;
  }
  return _isNative;
}

// ── Native Android TTS ─────────────────────────────────────────
async function speakNative(text) {
  try {
    const { TextToSpeech } = await import('@capacitor-community/text-to-speech');

    // Stop any current speech first
    await TextToSpeech.stop();

    await TextToSpeech.speak({
      text,
      lang:         'ja-JP',
      rate:         0.85,      // slightly slower — better for learning
      pitch:        1.1,
      volume:       1.0,
      category:     'ambient', // doesn't interrupt media on iOS
    });
  } catch (err) {
    console.warn('[speech] Native TTS failed, falling back to web:', err);
    speakWeb(text);
  }
}

// ── Web Speech API (browser / PWA) ────────────────────────────
function speakWeb(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();

  const utter  = new SpeechSynthesisUtterance(text);
  utter.lang   = 'ja-JP';
  utter.rate   = 0.85;
  utter.pitch  = 1.1;

  const doSpeak = () => {
    const voices  = window.speechSynthesis.getVoices();
    const jaVoice = voices.find(v => v.lang && v.lang.startsWith('ja'));
    if (jaVoice) utter.voice = jaVoice;
    window.speechSynthesis.speak(utter);
  };

  // Chrome loads voices asynchronously — wait if not ready yet
  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    doSpeak();
  } else {
    window.speechSynthesis.addEventListener('voiceschanged', doSpeak, { once: true });
    // Safety timeout: speak anyway after 800ms even if event never fires
    setTimeout(() => {
      if (utter.voice === undefined) doSpeak();
    }, 800);
  }
}

// ── Public API ─────────────────────────────────────────────────
export async function speak(text) {
  if (await isNative()) {
    await speakNative(text);
  } else {
    speakWeb(text);
  }
}
