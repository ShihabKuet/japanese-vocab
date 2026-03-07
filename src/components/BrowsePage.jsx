import WordCard from "./WordCard";

/**
 * BrowsePage
 * Displays all vocabulary words grouped by category.
 * Each WordCard has audio + expandable example sentence.
 */
export default function BrowsePage({ lesson, selectedCategory, showRomaji, onBack }) {
  const browseVocab =
    selectedCategory === "All"
      ? lesson.vocab
      : { [selectedCategory]: lesson.vocab[selectedCategory] };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#fef3e2,#fde8cc)",
      fontFamily: "Georgia, serif",
      padding: 20,
    }}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{ maxWidth: 640, margin: "0 auto" }}>

        {/* ── Top bar ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <button onClick={onBack}
            style={{ background: "#b5341a", color: "white", border: "none", borderRadius: 10, padding: "8px 16px", cursor: "pointer", fontFamily: "Georgia, serif" }}>
            ← Back
          </button>
          <h2 style={{ margin: 0, color: "#b5341a", fontSize: 20 }}>Browse Vocabulary</h2>
          <span style={{ marginLeft: "auto", fontSize: 11, color: "#9a6040", background: "#fff0e6", padding: "4px 10px", borderRadius: 20, border: "1px solid #f0d0b8" }}>
            🔈 tap for audio
          </span>
        </div>

        {/* ── Tip banner ── */}
        <div style={{ background: "#fff8f0", border: "1px solid #f0d0b8", borderRadius: 12, padding: "10px 16px", marginBottom: 18, display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{ fontSize: 20, flexShrink: 0 }}>💡</span>
          <p style={{ margin: 0, fontSize: 12, color: "#7a4a2a", lineHeight: 1.6 }}>
            Tap <strong>🔈</strong> next to a word to hear it spoken in Japanese.
            Expand <strong>💬 Example sentence</strong> to see it in context — then tap <strong>🔈</strong> again to hear the full sentence!
          </p>
        </div>

        {/* ── Word categories ── */}
        {Object.entries(browseVocab).map(([cat, ws]) => (
          <div key={cat} style={{ background: "white", borderRadius: 16, padding: 20, marginBottom: 18, boxShadow: "0 4px 16px rgba(181,52,26,0.1)" }}>
            <h3 style={{ margin: "0 0 14px", color: "#b5341a", fontSize: 16, borderBottom: "2px solid #fde8cc", paddingBottom: 8 }}>
              {cat}
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 10 }}>
              {ws.map(w => (
                <WordCard key={w.jp} w={w} showRomaji={showRomaji} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
