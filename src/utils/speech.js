/**
 * Speaks the given text in Japanese using the browser's
 * built-in Web Speech API.
 *
 * Works best in Chrome / Edge with Japanese language installed.
 */
export function speak(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang  = "ja-JP";
  utter.rate  = 0.85;
  utter.pitch = 1.1;

  // Prefer a real Japanese voice if one is available
  const voices   = window.speechSynthesis.getVoices();
  const jaVoice  = voices.find(v => v.lang && v.lang.startsWith("ja"));
  if (jaVoice) utter.voice = jaVoice;

  window.speechSynthesis.speak(utter);
}
