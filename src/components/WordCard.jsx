import { useState } from "react";
import { speak } from "../utils/speech";

/**
 * WordCard
 * Displays a single vocabulary word with:
 *   - Japanese text, romaji, English meaning
 *   - Audio button to hear pronunciation
 *   - Expandable example sentence with its own audio
 */
export default function WordCard({ w, showRomaji }) {
  const [showSentence,   setShowSentence]   = useState(false);
  const [speakingWord,   setSpeakingWord]   = useState(false);
  const [speakingSentence, setSpeakingSentence] = useState(false);

  const handleSpeakWord = (e) => {
    e.stopPropagation();
    setSpeakingWord(true);
    speak(w.jp);
    setTimeout(() => setSpeakingWord(false), 1200);
  };

  const handleSpeakSentence = (e) => {
    e.stopPropagation();
    setSpeakingSentence(true);
    speak(w.sentence);
    setTimeout(() => setSpeakingSentence(false), 2500);
  };

  /* ── styles ── */
  const audioBtn = (active) => ({
    borderRadius: "50%",
    border: "2px solid",
    borderColor: active ? "#b5341a" : "#f0d0b8",
    background:  active ? "#b5341a" : "#fff8f2",
    cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
    boxShadow: active ? "0 0 0 4px rgba(181,52,26,0.15)" : "0 2px 6px rgba(181,52,26,0.1)",
    transition: "all 0.2s",
    transform: active ? "scale(0.9)" : "scale(1)",
  });

  return (
    <div style={{
      background: "#fef8f0", borderRadius: 14, padding: "12px 14px",
      borderLeft: "3px solid #b5341a",
      boxShadow: showSentence
        ? "0 4px 16px rgba(181,52,26,0.12)"
        : "0 1px 4px rgba(181,52,26,0.05)",
      transition: "box-shadow 0.2s",
    }}>

      {/* ── Word row ── */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 22, color: "#1a1a1a", lineHeight: 1.3 }}>{w.jp}</div>
          {showRomaji && (
            <div style={{ fontSize: 11, color: "#9a6040", fontStyle: "italic", marginTop: 1 }}>
              {w.romaji}
            </div>
          )}
          <div style={{ fontSize: 13, color: "#5a3020", marginTop: 2 }}>{w.en}</div>
        </div>

        {/* Word audio button */}
        <button onClick={handleSpeakWord} title="Hear pronunciation"
          style={{ ...audioBtn(speakingWord), width: 38, height: 38, fontSize: 17 }}>
          {speakingWord ? "🔊" : "🔈"}
        </button>
      </div>

      {/* ── Example sentence toggle ── */}
      <button onClick={() => setShowSentence(!showSentence)}
        style={{
          marginTop: 10, width: "100%",
          background: showSentence ? "#f5e2d0" : "#fdeede",
          border: "1px dashed #d4905a", borderRadius: 8,
          padding: "5px 10px", cursor: "pointer",
          fontSize: 11, color: "#7a4a2a", fontFamily: "Georgia, serif",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: "background 0.2s",
        }}>
        <span>💬 Example sentence</span>
        <span style={{ fontSize: 10, opacity: 0.7 }}>{showSentence ? "▲ hide" : "▼ show"}</span>
      </button>

      {/* ── Sentence panel ── */}
      {showSentence && (
        <div style={{
          marginTop: 8, background: "white", borderRadius: 10,
          padding: "10px 12px", border: "1px solid #f0d0b8",
          animation: "fadeIn 0.2s ease",
        }}>
          {/* Japanese sentence + audio */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
            <div style={{ flex: 1, fontSize: 14, color: "#1a1a1a", lineHeight: 1.7 }}>
              {w.sentence}
            </div>
            <button onClick={handleSpeakSentence} title="Hear sentence"
              style={{ ...audioBtn(speakingSentence), width: 32, height: 32, fontSize: 13, marginTop: 2 }}>
              {speakingSentence ? "🔊" : "🔈"}
            </button>
          </div>

          {/* English translation */}
          <div style={{
            marginTop: 7, fontSize: 12, color: "#7a4a2a", fontStyle: "italic",
            paddingTop: 7, borderTop: "1px solid #f5e0d0", lineHeight: 1.5,
          }}>
            "{w.sentenceEn}"
          </div>
        </div>
      )}
    </div>
  );
}
