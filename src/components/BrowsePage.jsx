import WordCard from "./WordCard";

export default function BrowsePage({ lesson, selectedCategory, showRomaji, onBack }) {
  const browseVocab = selectedCategory === "All"
    ? lesson.vocab
    : { [selectedCategory]: lesson.vocab[selectedCategory] };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#fef3e2,#fde8cc)",
      fontFamily: "Georgia, serif",
      padding: "16px 16px 24px",
      paddingTop: "calc(16px + env(safe-area-inset-top, 0px))",
    }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>

        {/* ── Top bar — right padding clears the fixed hamburger ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, paddingRight: 56 }}>
          <button onClick={onBack} style={{
            background: "#b5341a", color: "white", border: "none",
            borderRadius: 10, padding: "10px 18px",
            cursor: "pointer", fontFamily: "Georgia, serif", fontSize: 14,
            whiteSpace: "nowrap", flexShrink: 0,
          }}>
            ← Back
          </button>
          <h2 style={{ margin: 0, color: "#b5341a", fontSize: 18, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            Browse Vocabulary
          </h2>
        </div>

        {/* ── Tip banner ── */}
        <div style={{ background: "#fff8f0", border: "1px solid #f0d0b8", borderRadius: 12, padding: "10px 16px", marginBottom: 16, display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{ fontSize: 18, flexShrink: 0 }}>💡</span>
          <p style={{ margin: 0, fontSize: 12, color: "#7a4a2a", lineHeight: 1.6 }}>
            Tap <strong>🔈</strong> to hear Japanese audio. Expand <strong>💬 Example</strong> to see the word in context.
          </p>
        </div>

        {/* ── Word categories ── */}
        {Object.entries(browseVocab).map(([cat, ws]) => (
          <div key={cat} style={{ background: "white", borderRadius: 16, padding: 20, marginBottom: 18, boxShadow: "0 4px 16px rgba(181,52,26,0.1)" }}>
            <h3 style={{ margin: "0 0 14px", color: "#b5341a", fontSize: 16, borderBottom: "2px solid #fde8cc", paddingBottom: 8 }}>
              {cat}
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 10 }}>
              {ws.map(w => <WordCard key={w.jp} w={w} showRomaji={showRomaji} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
