import { useState, useRef } from "react";
import { speak } from "../utils/speech";

/**
 * StoryPage — Conversational story mode for learning vocabulary in context.
 *
 * Features:
 *   - Scene navigation (next/prev)
 *   - Chat-bubble dialogue with speaker labels
 *   - Highlighted vocabulary words (tap for meaning popup)
 *   - Audio button per line
 *   - English + Bengali translation toggle per line
 *   - Grammar tip per scene
 */

// ── Colours per speaker ────────────────────────────────────────
const SPEAKER_STYLE = {
  "わたし":    { bg: "#b5341a", text: "white", align: "flex-end",   bubbleBg: "#b5341a",   bubbleText: "white"  },
  "田中さん": { bg: "#4a7fa5", text: "white", align: "flex-start", bubbleBg: "#e8f4fc",   bubbleText: "#1a3a50" },
};
const DEFAULT_SPEAKER = { bg: "#888", text: "white", align: "flex-start", bubbleBg: "#f5f5f5", bubbleText: "#333" };

// ── Highlight vocab words inside a Japanese string ────────────
function HighlightedText({ text, highlights, onWordTap }) {
  if (!highlights || highlights.length === 0) return <span>{text}</span>;

  // Build a regex that matches any of the highlight words
  const escaped = highlights.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = text.split(pattern);

  return (
    <span>
      {parts.map((part, i) =>
        highlights.includes(part) ? (
          <span
            key={i}
            onClick={(e) => { e.stopPropagation(); onWordTap(part); }}
            style={{
              background: "rgba(255,220,80,0.5)",
              borderBottom: "2px solid #e6a800",
              borderRadius: 3,
              padding: "0 2px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}

// ── Word info popup ────────────────────────────────────────────
function WordPopup({ word, vocab, onClose }) {
  // Search all categories for the word
  const found = vocab
    ? Object.values(vocab).flat().find(w => w.jp === word || w.romaji === word)
    : null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 20000,
        background: "rgba(0,0,0,0.4)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "white", borderRadius: 20, padding: "20px 22px",
          maxWidth: 360, width: "100%",
          boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
          <div>
            <div style={{ fontSize: 28, color: "#1a1a1a" }}>{word}</div>
            {found && (
              <div style={{ fontSize: 12, color: "#9a6040", fontStyle: "italic", marginTop: 2 }}>
                {found.romaji}
              </div>
            )}
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#aaa", padding: 4 }}>✕</button>
        </div>

        {found ? (
          <>
            <div style={{ fontSize: 15, color: "#3a1a0a", marginBottom: 4 }}>🇬🇧 {found.en}</div>
            {found.examples?.[0]?.bn && (
              <div style={{ fontSize: 14, color: "#5a3e7a", marginBottom: 12 }}>🇧🇩 {found.examples[0].bn.split("।")[0]}।</div>
            )}
            <div style={{ fontSize: 11, background: "#fffbea", border: "1px solid #f6e58d", borderRadius: 8, padding: "8px 10px", color: "#7a5a10", lineHeight: 1.6 }}>
              📖 {found.examples?.[0]?.grammar || "See vocabulary for grammar details."}
            </div>
          </>
        ) : (
          <div style={{ fontSize: 14, color: "#7a4a2a" }}>
            This word appears in the lesson vocabulary. Check Browse mode for full details.
          </div>
        )}
      </div>
    </div>
  );
}

// ── Single dialogue bubble ─────────────────────────────────────
function ChatBubble({ line, vocab, showTranslation, onWordTap, speakerEn }) {
  const [speaking, setSpeaking] = useState(false);
  const [showTl,   setShowTl]   = useState(false);

  const style = SPEAKER_STYLE[line.speaker] || DEFAULT_SPEAKER;
  const isRight = style.align === "flex-end";

  const handleSpeak = () => {
    setSpeaking(true);
    speak(line.jp);
    setTimeout(() => setSpeaking(false), 3000);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: style.align, marginBottom: 14 }}>

      {/* Speaker label */}
      <div style={{
        fontSize: 11, fontWeight: "bold", color: style.bg,
        marginBottom: 4, paddingLeft: isRight ? 0 : 6, paddingRight: isRight ? 6 : 0,
        letterSpacing: 0.5,
      }}>
        {line.speaker}  <span style={{ color: "#aaa", fontWeight: "normal" }}>({speakerEn || line.speakerEn})</span>
      </div>

      {/* Bubble + audio button row */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: 8, maxWidth: "90%", flexDirection: isRight ? "row-reverse" : "row" }}>

        {/* Audio button */}
        <button onClick={handleSpeak} style={{
          flexShrink: 0, width: 34, height: 34, borderRadius: "50%",
          border: "2px solid", borderColor: speaking ? style.bg : "#e0c8b0",
          background: speaking ? style.bg : "#fffaf5",
          cursor: "pointer", fontSize: 14,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.2s",
        }}>
          {speaking ? "🔊" : "🔈"}
        </button>

        {/* Bubble */}
        <div style={{
          background: style.bubbleBg,
          color: style.bubbleText,
          borderRadius: isRight ? "18px 4px 18px 18px" : "4px 18px 18px 18px",
          padding: "10px 14px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}>
          {/* Japanese text with highlights */}
          <div style={{ fontSize: 16, lineHeight: 1.7, fontFamily: "sans-serif" }}>
            <HighlightedText
              text={line.jp}
              highlights={line.highlight}
              onWordTap={onWordTap}
            />
          </div>

          {/* Translation toggle */}
          <button
            onClick={() => setShowTl(!showTl)}
            style={{
              marginTop: 6, background: "none", border: "none",
              cursor: "pointer", fontSize: 11,
              color: isRight ? "rgba(255,255,255,0.7)" : "#9a6040",
              padding: 0, fontFamily: "Georgia, serif",
            }}
          >
            {showTl || showTranslation ? "▲ hide" : "▼ translation"}
          </button>

          {(showTl || showTranslation) && (
            <div style={{ marginTop: 4, paddingTop: 6, borderTop: isRight ? "1px solid rgba(255,255,255,0.3)" : "1px solid #f0d0b8" }}>
              <div style={{ fontSize: 12, color: isRight ? "rgba(255,255,255,0.85)" : "#4a5568", lineHeight: 1.5 }}>
                🇬🇧 {line.en}
              </div>
              {line.bn && (
                <div style={{ fontSize: 12, marginTop: 3, color: isRight ? "rgba(255,255,255,0.75)" : "#5a3e7a", lineHeight: 1.5 }}>
                  🇧🇩 {line.bn}
                </div>
              )}
            </div>
          )}

          {/* Vocab note */}
          {line.note && (
            <div style={{
              marginTop: 8, fontSize: 11, lineHeight: 1.5,
              color: isRight ? "rgba(255,255,255,0.8)" : "#7a4a2a",
              background: isRight ? "rgba(0,0,0,0.15)" : "#fff8f0",
              borderRadius: 8, padding: "5px 8px",
            }}>
              💡 {line.note}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main StoryPage ────────────────────────────────────────────
export default function StoryPage({ lesson, onBack }) {
  const story = lesson.story;
  const [sceneIdx,       setSceneIdx]       = useState(0);
  const [showAllTl,      setShowAllTl]      = useState(false);
  const [popupWord,      setPopupWord]      = useState(null);
  const [showGrammar,    setShowGrammar]    = useState(false);
  const topRef = useRef(null);

  if (!story) return (
    <div style={{ padding: 40, textAlign: "center", color: "#b5341a", fontFamily: "Georgia, serif" }}>
      <p>このレッスンにはストーリーがありません。</p>
      <p style={{ fontSize: 13, color: "#9a6040" }}>This lesson does not have a story yet.</p>
      <button onClick={onBack} style={{ marginTop: 20, background: "#b5341a", color: "white", border: "none", borderRadius: 10, padding: "10px 24px", cursor: "pointer", fontFamily: "Georgia, serif" }}>
        ← Back
      </button>
    </div>
  );

  const scene    = story.scenes[sceneIdx];
  const isFirst  = sceneIdx === 0;
  const isLast   = sceneIdx === story.scenes.length - 1;

  const goScene = (idx) => {
    setSceneIdx(idx);
    setShowGrammar(false);
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#fef3e2,#fde8cc)",
      fontFamily: "Georgia, serif",
      paddingTop: "calc(16px + env(safe-area-inset-top, 0px))",
      paddingBottom: 32,
      paddingLeft: 16,
      paddingRight: 16,
    }}>

      {/* ── Word popup ── */}
      {popupWord && (
        <WordPopup word={popupWord} vocab={lesson.vocab} onClose={() => setPopupWord(null)} />
      )}

      {/* ── Top bar ── */}
      <div ref={topRef} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, paddingRight: 56 }}>
        <button onClick={onBack} style={{
          background: "#b5341a", color: "white", border: "none",
          borderRadius: 10, padding: "10px 16px",
          cursor: "pointer", fontFamily: "Georgia, serif", fontSize: 14,
          whiteSpace: "nowrap", flexShrink: 0,
        }}>
          ← Back
        </button>
        <div style={{ flex: 1, overflow: "hidden" }}>
          <div style={{ fontSize: 15, fontWeight: "bold", color: "#b5341a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {story.title}
          </div>
          <div style={{ fontSize: 11, color: "#9a6040" }}>{story.titleBn}</div>
        </div>
      </div>

      <div style={{ maxWidth: 600, margin: "0 auto" }}>

        {/* ── Story intro card (scene 0 only) ── */}
        {sceneIdx === 0 && (
          <div style={{ background: "white", borderRadius: 16, padding: 18, marginBottom: 16, boxShadow: "0 4px 16px rgba(181,52,26,0.1)" }}>
            <div style={{ fontSize: 22, marginBottom: 6 }}>📖</div>
            <div style={{ fontSize: 14, color: "#3a1a0a", lineHeight: 1.7 }}>{story.summary}</div>
            <div style={{ fontSize: 13, color: "#5a3e7a", marginTop: 6, lineHeight: 1.7 }}>{story.summaryBn}</div>
            <div style={{ marginTop: 10, fontSize: 11, color: "#9a6040", background: "#fff8f0", borderRadius: 8, padding: "6px 10px" }}>
              💡 Tap <span style={{ background: "rgba(255,220,80,0.5)", border: "1px solid #e6a800", borderRadius: 3, padding: "0 4px", fontWeight: "bold" }}>highlighted words</span> to see their meaning. Tap 🔈 to hear each line.
            </div>
          </div>
        )}

        {/* ── Scene header ── */}
        <div style={{ background: "#b5341a", borderRadius: 14, padding: "14px 18px", marginBottom: 16, color: "white" }}>
          <div style={{ fontSize: 11, opacity: 0.75, letterSpacing: 1, marginBottom: 2 }}>
            SCENE {sceneIdx + 1} / {story.scenes.length}
          </div>
          <div style={{ fontSize: 16, fontWeight: "bold" }}>{scene.title}</div>
          <div style={{ fontSize: 12, opacity: 0.85, marginTop: 2 }}>{scene.titleBn}</div>
        </div>

        {/* ── Translation toggle ── */}
        <div style={{ display: "flex", gap: 8, marginBottom: 14, alignItems: "center" }}>
          <button
            onClick={() => setShowAllTl(!showAllTl)}
            style={{
              background: showAllTl ? "#b5341a" : "white",
              color: showAllTl ? "white" : "#b5341a",
              border: "2px solid #b5341a", borderRadius: 20,
              padding: "5px 14px", cursor: "pointer",
              fontFamily: "Georgia, serif", fontSize: 12,
            }}
          >
            {showAllTl ? "🌐 Hide All" : "🌐 Show All Translations"}
          </button>
          <button
            onClick={() => setShowGrammar(!showGrammar)}
            style={{
              background: showGrammar ? "#e6a800" : "white",
              color: showGrammar ? "white" : "#b7850a",
              border: "2px solid #e6a800", borderRadius: 20,
              padding: "5px 14px", cursor: "pointer",
              fontFamily: "Georgia, serif", fontSize: 12,
            }}
          >
            📖 Grammar
          </button>
        </div>

        {/* ── Grammar tip panel ── */}
        {showGrammar && (
          <div style={{ background: "#fffbea", border: "1px solid #f6e58d", borderRadius: 14, padding: "14px 16px", marginBottom: 16 }}>
            <div style={{ fontSize: 12, fontWeight: "bold", color: "#b7850a", marginBottom: 6, letterSpacing: 0.5 }}>
              📖 GRAMMAR FOCUS — {scene.grammar_focus}
            </div>
            <div style={{ fontSize: 12, color: "#5a3e7a" }}>{scene.grammar_focus_bn}</div>
          </div>
        )}

        {/* ── Dialogue bubbles ── */}
        <div style={{ marginBottom: 20 }}>
          {scene.lines.map((line, i) => (
            <ChatBubble
              key={i}
              line={line}
              vocab={lesson.vocab}
              showTranslation={showAllTl}
              onWordTap={setPopupWord}
              speakerEn={line.speakerEn}
            />
          ))}
        </div>

        {/* ── Scene navigation ── */}
        <div style={{ display: "flex", gap: 10, alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <button
            onClick={() => goScene(sceneIdx - 1)}
            disabled={isFirst}
            style={{
              flex: 1, background: isFirst ? "#f0e8e0" : "white",
              border: "2px solid", borderColor: isFirst ? "#e0c8b0" : "#b5341a",
              color: isFirst ? "#c0a090" : "#b5341a",
              borderRadius: 12, padding: "12px 10px",
              cursor: isFirst ? "default" : "pointer",
              fontFamily: "Georgia, serif", fontSize: 13,
            }}
          >
            ← Previous
          </button>

          {/* Scene dots */}
          <div style={{ display: "flex", gap: 6 }}>
            {story.scenes.map((_, i) => (
              <div key={i} onClick={() => goScene(i)} style={{
                width: i === sceneIdx ? 20 : 8, height: 8, borderRadius: 4,
                background: i === sceneIdx ? "#b5341a" : "#e0c8b0",
                cursor: "pointer", transition: "all 0.2s",
              }} />
            ))}
          </div>

          <button
            onClick={() => goScene(sceneIdx + 1)}
            disabled={isLast}
            style={{
              flex: 1, background: isLast ? "#f0e8e0" : "#b5341a",
              border: "2px solid", borderColor: isLast ? "#e0c8b0" : "#b5341a",
              color: isLast ? "#c0a090" : "white",
              borderRadius: 12, padding: "12px 10px",
              cursor: isLast ? "default" : "pointer",
              fontFamily: "Georgia, serif", fontSize: 13, fontWeight: "bold",
            }}
          >
            Next →
          </button>
        </div>

        {/* ── Finish card ── */}
        {isLast && (
          <div style={{ background: "white", borderRadius: 16, padding: 24, textAlign: "center", boxShadow: "0 4px 16px rgba(181,52,26,0.1)" }}>
            <div style={{ fontSize: 40, marginBottom: 10 }}>🎉</div>
            <div style={{ fontSize: 18, fontWeight: "bold", color: "#b5341a", marginBottom: 6 }}>
              おはなし　かんりょう！
            </div>
            <div style={{ fontSize: 13, color: "#7a4a2a", marginBottom: 4 }}>Story Complete!</div>
            <div style={{ fontSize: 12, color: "#5a3e7a", marginBottom: 20 }}>গল্প শেষ! এখন Browse বা Quiz দিয়ে অনুশীলন করুন।</div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => goScene(0)} style={{
                flex: 1, background: "white", border: "2px solid #b5341a", color: "#b5341a",
                borderRadius: 12, padding: 12, cursor: "pointer", fontFamily: "Georgia, serif", fontSize: 13,
              }}>
                🔄 Read Again
              </button>
              <button onClick={onBack} style={{
                flex: 1, background: "#b5341a", color: "white", border: "none",
                borderRadius: 12, padding: 12, cursor: "pointer", fontFamily: "Georgia, serif", fontSize: 13,
              }}>
                ← Back to Menu
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
