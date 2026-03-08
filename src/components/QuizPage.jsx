import { useState } from "react";
import { shuffle } from "../utils/shuffle";
import TopBar from "./TopBar";

/**
 * QuizPage
 * Multiple-choice quiz.
 * Supports two directions: Japanese → English and English → Japanese.
 */
export default function QuizPage({ initialWords, allWords, showRomaji, onBack }) {
  const [words,     setWords]     = useState(initialWords);
  const [index,     setIndex]     = useState(0);
  const [selected,  setSelected]  = useState(null);
  const [score,     setScore]     = useState(0);
  const [done,      setDone]      = useState(false);
  const [direction, setDirection] = useState("jp→en"); // "jp→en" | "en→jp"

  const current = words[index];

  // Build 4 answer choices (1 correct + 3 random wrong)
  const getOptions = () => {
    const pool   = allWords.filter(w => w.jp !== current.jp);
    const wrong  = shuffle(pool).slice(0, 3);
    return shuffle([current, ...wrong]);
  };

  const options = getOptions();   // memo not needed — tiny array

  const handleAnswer = (opt) => {
    if (selected) return;
    setSelected(opt);

    const correct = direction === "jp→en"
      ? opt.en === current.en
      : opt.jp === current.jp;

    if (correct) setScore(s => s + 1);

    setTimeout(() => {
      if (index + 1 >= words.length) {
        setDone(true);
      } else {
        setIndex(i => i + 1);
        setSelected(null);
      }
    }, 1000);
  };

  const restart = () => {
    setWords(shuffle(initialWords));
    setIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  };

  /* ── Results screen ── */
  if (done) {
    const pct = Math.round((score / words.length) * 100);
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#fef3e2,#fde8cc)", fontFamily: "Georgia, serif", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
        <div style={{ background: "white", borderRadius: 24, padding: 40, textAlign: "center", maxWidth: 380, width: "100%", boxShadow: "0 8px 40px rgba(181,52,26,0.2)" }}>
          <div style={{ fontSize: 56 }}>{pct >= 80 ? "🎉" : pct >= 50 ? "💪" : "📚"}</div>
          <h2 style={{ color: "#b5341a", margin: "16px 0 8px" }}>Quiz Complete!</h2>
          <div style={{ fontSize: 52, fontWeight: "bold", color: "#b5341a" }}>{pct}%</div>
          <p style={{ color: "#7a4a2a" }}>{score} / {words.length} correct</p>
          <p style={{ color: "#9a6040", fontSize: 13 }}>
            {pct >= 80 ? "すばらしい！ Excellent!" : pct >= 50 ? "いいですね！ Good job!" : "もう一度！ Try again!"}
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            <button onClick={restart}
              style={{ flex: 1, background: "#b5341a", color: "white", border: "none", borderRadius: 12, padding: 14, cursor: "pointer", fontFamily: "Georgia, serif" }}>
              Retry
            </button>
            <button onClick={onBack}
              style={{ flex: 1, background: "white", border: "2px solid #b5341a", color: "#b5341a", borderRadius: 12, padding: 14, cursor: "pointer", fontFamily: "Georgia, serif" }}>
              Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── Question screen ── */
  const dirBtn = (
    <button
      onClick={() => setDirection(d => d === "jp→en" ? "en→jp" : "jp→en")}
      style={{ background: 'white', border: '2px solid #b5341a', color: '#b5341a', borderRadius: 8, padding: '6px 10px', cursor: 'pointer', fontFamily: 'Georgia, serif', fontSize: 11, whiteSpace: 'nowrap' }}>
      {direction}
    </button>
  );

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#fef3e2,#fde8cc)", fontFamily: "Georgia, serif",
      paddingTop: "calc(52px + env(safe-area-inset-top, 0px))",
      paddingBottom: 24, paddingLeft: 16, paddingRight: 16 }}>

      <TopBar
        title="Quiz"
        subtitle={`Q${index + 1}/${words.length} • Score: ${score}`}
        onBack={onBack}
        rightSlot={dirBtn}
      />

      <div style={{ maxWidth: 500, margin: "0 auto", paddingTop: 12 }}>

        {/* ── Progress bar ── */}
        <div style={{ height: 6, background: "#e8cdb8", borderRadius: 3, marginBottom: 24, overflow: "hidden" }}>
          <div style={{ height: "100%", background: "#b5341a", borderRadius: 3, width: `${(index / words.length) * 100}%`, transition: "width 0.3s" }} />
        </div>

        {/* ── Question card ── */}
        <div style={{ background: "white", borderRadius: 20, padding: "36px 24px", textAlign: "center", marginBottom: 20, boxShadow: "0 6px 30px rgba(181,52,26,0.15)" }}>
          <p style={{ color: "#9a6040", fontSize: 12, letterSpacing: 2, marginBottom: 12 }}>
            {direction === "jp→en" ? "WHAT DOES THIS MEAN?" : "HOW DO YOU SAY..."}
          </p>
          <div style={{ fontSize: direction === "jp→en" ? 48 : 28, color: "#1a1a1a", fontWeight: direction === "en→jp" ? "bold" : "normal" }}>
            {direction === "jp→en" ? current.jp : current.en}
          </div>
          {direction === "jp→en" && showRomaji && (
            <div style={{ color: "#9a6040", fontSize: 14, marginTop: 6, fontStyle: "italic" }}>{current.romaji}</div>
          )}
        </div>

        {/* ── Answer choices ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {options.map(opt => {
            const isCorrect  = direction === "jp→en" ? opt.en === current.en : opt.jp === current.jp;
            const isSelected = selected && (direction === "jp→en" ? opt.en === selected.en : opt.jp === selected.jp);

            let bg = "white", border = "#e8cdb8", color = "#3a1a0a";
            if (selected) {
              if (isCorrect)       { bg = "#e8f5e9"; border = "#4caf50"; color = "#2e7d32"; }
              else if (isSelected) { bg = "#fde8e8"; border = "#e53935"; color = "#c62828"; }
            }

            return (
              <button key={opt.jp} onClick={() => handleAnswer(opt)}
                style={{ background: bg, border: `2px solid ${border}`, color, borderRadius: 14, padding: "16px 12px", cursor: selected ? "default" : "pointer", fontFamily: "Georgia, serif", fontSize: direction === "jp→en" ? 15 : 18, transition: "all 0.2s", textAlign: "center" }}>
                {direction === "jp→en" ? opt.en : opt.jp}
                {direction === "en→jp" && showRomaji && (
                  <div style={{ fontSize: 11, color: "#9a6040", marginTop: 3, fontStyle: "italic" }}>{opt.romaji}</div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
