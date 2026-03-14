import { useState } from "react";
import { speak } from "../utils/speech";

/**
 * WordCard — updated to support N5/N4 example sentences with:
 *   - Japanese sentence + audio
 *   - English translation
 *   - Bengali translation
 *   - Grammar tip
 */
export default function WordCard({ w, showRomaji }) {
  const [showExamples,     setShowExamples]     = useState(false);
  const [activeLevel,      setActiveLevel]      = useState("N5");
  const [speakingWord,     setSpeakingWord]     = useState(false);
  const [speakingSentence, setSpeakingSentence] = useState(false);

  const handleSpeakWord = (e) => {
    e.stopPropagation();
    setSpeakingWord(true);
    speak(w.jp);
    setTimeout(() => setSpeakingWord(false), 1200);
  };

  const handleSpeakSentence = (e, sentence) => {
    e.stopPropagation();
    setSpeakingSentence(true);
    speak(sentence);
    setTimeout(() => setSpeakingSentence(false), 2500);
  };

  const audioBtn = (active) => ({
    borderRadius: "50%", border: "2px solid",
    borderColor: active ? "#b5341a" : "#f0d0b8",
    background:  active ? "#b5341a" : "#fff8f2",
    cursor: "pointer", display: "flex",
    alignItems: "center", justifyContent: "center", flexShrink: 0,
    boxShadow: active ? "0 0 0 4px rgba(181,52,26,0.15)" : "0 2px 6px rgba(181,52,26,0.1)",
    transition: "all 0.2s", transform: active ? "scale(0.9)" : "scale(1)",
  });

  // Support both old (sentence/sentenceEn) and new (examples[]) format
  const examples = w.examples || (w.sentence ? [{
    level: "N5", jp: w.sentence, en: w.sentenceEn, bn: null, grammar: null,
  }] : []);

  const activeExample = examples.find(e => e.level === activeLevel) || examples[0];
  const levels = examples.map(e => e.level);

  const levelColor = { N5: "#2e7d32", N4: "#1565c0" };
  const levelBg    = { N5: "#e8f5e9", N4: "#e3f2fd" };

  return (
    <div style={{
      background: "#fef8f0", borderRadius: 14, padding: "12px 14px",
      borderLeft: "3px solid #b5341a",
      boxShadow: showExamples
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
          {w.bn && (
            <div style={{ fontSize: 12, color: "#7a5030", marginTop: 1, fontStyle: "italic" }}>
              {w.bn}
            </div>
          )}
        </div>
        <button onClick={handleSpeakWord} title="Hear pronunciation"
          style={{ ...audioBtn(speakingWord), width: 38, height: 38, fontSize: 17 }}>
          {speakingWord ? "🔊" : "🔈"}
        </button>
      </div>

      {/* ── Example sentences toggle ── */}
      {examples.length > 0 && (
        <button onClick={() => setShowExamples(!showExamples)}
          style={{
            marginTop: 10, width: "100%",
            background: showExamples ? "#f5e2d0" : "#fdeede",
            border: "1px dashed #d4905a", borderRadius: 8,
            padding: "5px 10px", cursor: "pointer",
            fontSize: 11, color: "#7a4a2a", fontFamily: "Georgia, serif",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
          <span>💬 Example sentences</span>
          <span style={{ fontSize: 10, opacity: 0.7 }}>{showExamples ? "▲ hide" : "▼ show"}</span>
        </button>
      )}

      {/* ── Sentence panel ── */}
      {showExamples && activeExample && (
        <div style={{
          marginTop: 8, background: "white", borderRadius: 10,
          border: "1px solid #f0d0b8", overflow: "hidden",
          animation: "fadeIn 0.2s ease",
        }}>

          {/* Level tabs */}
          {levels.length > 1 && (
            <div style={{ display: "flex", borderBottom: "1px solid #f0d0b8" }}>
              {levels.map(lvl => (
                <button key={lvl} onClick={() => setActiveLevel(lvl)}
                  style={{
                    flex: 1, padding: "7px 0", border: "none", cursor: "pointer",
                    fontFamily: "Georgia, serif", fontSize: 12, fontWeight: "bold",
                    background: activeLevel === lvl ? levelBg[lvl] : "#fafafa",
                    color: activeLevel === lvl ? levelColor[lvl] : "#aaa",
                    borderBottom: activeLevel === lvl ? `2.5px solid ${levelColor[lvl]}` : "2.5px solid transparent",
                    transition: "all 0.15s",
                  }}>
                  {lvl}
                </button>
              ))}
            </div>
          )}

          <div style={{ padding: "10px 12px" }}>

            {/* Level badge */}
            <div style={{
              display: "inline-block", fontSize: 10, fontWeight: "bold",
              color: levelColor[activeExample.level] || "#555",
              background: levelBg[activeExample.level] || "#f0f0f0",
              borderRadius: 6, padding: "2px 8px", marginBottom: 8,
              letterSpacing: 0.5,
            }}>
              JLPT {activeExample.level}
            </div>

            {/* Japanese sentence + audio */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <div style={{ flex: 1, fontSize: 14, color: "#1a1a1a", lineHeight: 1.7 }}>
                {activeExample.jp}
              </div>
              <button onClick={(e) => handleSpeakSentence(e, activeExample.jp)}
                style={{ ...audioBtn(speakingSentence), width: 32, height: 32, fontSize: 13, marginTop: 2 }}>
                {speakingSentence ? "🔊" : "🔈"}
              </button>
            </div>

            {/* English translation */}
            <div style={{
              marginTop: 7, fontSize: 12, color: "#4a5568", fontStyle: "italic",
              paddingTop: 7, borderTop: "1px solid #f5e0d0", lineHeight: 1.5,
            }}>
              🇬🇧 "{activeExample.en}"
            </div>

            {/* Bengali translation */}
            {activeExample.bn && (
              <div style={{
                marginTop: 5, fontSize: 12, color: "#5a3e7a", fontStyle: "italic", lineHeight: 1.5,
              }}>
                🇧🇩 "{activeExample.bn}"
              </div>
            )}

            {/* Grammar tip */}
            {activeExample.grammar && (
              <div style={{
                marginTop: 8, background: "#fffbea", borderRadius: 8,
                padding: "7px 10px", border: "1px solid #f6e58d",
              }}>
                <div style={{ fontSize: 10, fontWeight: "bold", color: "#b7850a", marginBottom: 3, letterSpacing: 0.5 }}>
                  📖 GRAMMAR TIP
                </div>
                <div style={{ fontSize: 11, color: "#7a5a10", lineHeight: 1.6 }}>
                  {activeExample.grammar}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
