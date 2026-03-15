export default function MenuPage({
  lesson, allWords, selectedCategory, setSelectedCategory,
  showRomaji, setShowRomaji, getWords,
  onBrowse, onFlashcards, onQuiz, onStory, onHome,
}) {
  const categories = ["All", ...Object.keys(lesson.vocab)];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#fef3e2 0%,#fde8cc 50%,#f9d5a7 100%)",
      fontFamily: "Georgia, serif",
      padding: "20px 16px 24px",
      // Push content down below status bar on Android
      paddingTop: "calc(20px + env(safe-area-inset-top, 0px))",
    }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>

        {/* ── Back to Lesson Selector — only shows when >1 lesson ── */}
        {onHome && (
          <div style={{ marginBottom: 8 }}>
            <button onClick={onHome} style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "transparent", border: "2px solid #e8cdb8",
              borderRadius: 10, padding: "7px 16px",
              cursor: "pointer", fontFamily: "Georgia, serif",
              fontSize: 13, color: "#7a4a2a",
            }}>
              🏠 All Lessons
            </button>
          </div>
        )}

        {/* ── Header — paddingRight clears the fixed hamburger button ── */}
        <div style={{ textAlign: "center", paddingTop: onHome ? 10 : 20, paddingBottom: 20, paddingRight: 56 }}>
          <div style={{ fontSize: 48, marginBottom: 4 }}>{lesson.emoji}</div>
          <h1 style={{ fontSize: 34, fontWeight: "bold", color: "#b5341a", margin: 0, letterSpacing: 2 }}>
            {lesson.title}
          </h1>
          <p style={{ color: "#7a4a2a", fontSize: 13, marginTop: 4, letterSpacing: 3 }}>
            JAPANESE {lesson.titleEn.toUpperCase()} VOCABULARY
          </p>
          <p style={{ color: "#9a6040", fontSize: 13, marginTop: 8 }}>
            {allWords.length} words from your textbook • Page {lesson.page}
          </p>
        </div>

        {/* ── Category selector ── */}
        <div style={{ background: "white", borderRadius: 16, padding: 20, marginBottom: 16, boxShadow: "0 4px 20px rgba(181,52,26,0.1)" }}>
          <p style={{ margin: "0 0 12px", color: "#7a4a2a", fontWeight: "bold", fontSize: 13, letterSpacing: 1 }}>
            CHOOSE CATEGORY
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setSelectedCategory(cat)} style={{
                padding: "7px 14px", borderRadius: 20, border: "2px solid",
                fontSize: 12, cursor: "pointer", fontFamily: "Georgia, serif",
                borderColor: selectedCategory === cat ? "#b5341a" : "#e8cdb8",
                background:  selectedCategory === cat ? "#b5341a" : "white",
                color:       selectedCategory === cat ? "white"   : "#7a4a2a",
              }}>
                {cat.length > 22 ? cat.slice(0, 22) + "…" : cat}
              </button>
            ))}
          </div>
          <p style={{ margin: "12px 0 0", color: "#b5341a", fontSize: 13 }}>
            ✓ {selectedCategory === "All" ? allWords.length : getWords().length} words selected
          </p>
        </div>

        {/* ── Romaji toggle ── */}
        <div style={{
          background: "white", borderRadius: 16, padding: "14px 20px", marginBottom: 16,
          boxShadow: "0 4px 20px rgba(181,52,26,0.1)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <span style={{ color: "#7a4a2a", fontSize: 14 }}>Show Romaji (pronunciation guide)</span>
          <div onClick={() => setShowRomaji(!showRomaji)} style={{
            width: 44, height: 24, borderRadius: 12,
            background: showRomaji ? "#b5341a" : "#ccc",
            cursor: "pointer", position: "relative", flexShrink: 0,
          }}>
            <div style={{ position: "absolute", top: 3, left: showRomaji ? 23 : 3, width: 18, height: 18, borderRadius: 9, background: "white", transition: "left 0.3s", boxShadow: "0 1px 4px rgba(0,0,0,0.2)" }} />
          </div>
        </div>

        {/* ── Mode buttons ── */}
        <div style={{ display: "grid", gridTemplateColumns: onStory ? "1fr 1fr" : "1fr 1fr 1fr", gap: 12, marginBottom: 12 }}>
          {[
            { label: "Browse",     icon: "📖", desc: "Audio + examples", action: onBrowse },
            { label: "Flashcards", icon: "🃏", desc: "Flip & memorize",  action: onFlashcards },
            { label: "Quiz",       icon: "🎯", desc: "Test yourself",    action: onQuiz },
          ].map(({ label, icon, desc, action }) => (
            <button key={label} onClick={action} style={{
              background: "white", border: "2px solid #e8cdb8", borderRadius: 16,
              padding: "18px 10px", cursor: "pointer", textAlign: "center",
              boxShadow: "0 4px 12px rgba(181,52,26,0.08)", fontFamily: "Georgia, serif",
            }}>
              <div style={{ fontSize: 28 }}>{icon}</div>
              <div style={{ fontWeight: "bold", color: "#b5341a", fontSize: 14, marginTop: 6 }}>{label}</div>
              <div style={{ color: "#9a6040", fontSize: 11, marginTop: 2 }}>{desc}</div>
            </button>
          ))}
        </div>

        {/* ── Story mode button — only shown when lesson has a story ── */}
        {onStory && (
          <button onClick={onStory} style={{
            width: "100%",
            background: "linear-gradient(135deg,#b5341a,#d4502a)",
            border: "none", borderRadius: 16, padding: "18px 20px",
            cursor: "pointer", textAlign: "left", marginBottom: 16,
            display: "flex", alignItems: "center", gap: 16,
            boxShadow: "0 4px 20px rgba(181,52,26,0.25)",
            fontFamily: "Georgia, serif",
          }}>
            <div style={{ fontSize: 36 }}>💬</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: "bold", color: "white", fontSize: 16 }}>Story Mode</div>
              <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, marginTop: 2 }}>
                Learn through conversation • 会話で学ぶ
              </div>
            </div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 22 }}>→</div>
          </button>
        )}

        <p style={{ textAlign: "center", color: "#b5341a", fontSize: 12, opacity: 0.7 }}>
          がんばって！ Ganbatte! (Good luck!)
        </p>
      </div>
    </div>
  );
}
