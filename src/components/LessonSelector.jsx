/**
 * LessonSelector
 * Shown on app launch when multiple lessons exist.
 * Tap any card to enter that lesson.
 */
export default function LessonSelector({ lessons, onSelect }) {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#fef3e2,#fde8cc,#f9d5a7)",
      fontFamily: "Georgia, serif",
      padding: 20,
    }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", paddingTop: 40, paddingBottom: 30 }}>
          <div style={{ fontSize: 52, marginBottom: 8 }}>🇯🇵</div>
          <h1 style={{ fontSize: 32, fontWeight: "bold", color: "#b5341a", margin: 0, letterSpacing: 2 }}>
            Japanese Vocabulary
          </h1>
          <p style={{ color: "#7a4a2a", fontSize: 14, marginTop: 6, letterSpacing: 2 }}>
            CHOOSE A LESSON
          </p>
        </div>

        {/* ── Lesson cards ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
          {lessons.map(lesson => {
            const wordCount = Object.values(lesson.vocab).flat().length;
            return (
              <button key={lesson.id} onClick={() => onSelect(lesson)}
                style={{ background: "white", border: "2px solid #e8cdb8", borderRadius: 18, padding: "24px 20px", cursor: "pointer", textAlign: "left", transition: "all 0.2s", boxShadow: "0 4px 16px rgba(181,52,26,0.08)", fontFamily: "Georgia, serif" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#b5341a"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(181,52,26,0.15)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8cdb8"; e.currentTarget.style.transform = "translateY(0)";   e.currentTarget.style.boxShadow = "0 4px 16px rgba(181,52,26,0.08)"; }}>
                <div style={{ fontSize: 36, marginBottom: 10 }}>{lesson.emoji}</div>
                <div style={{ fontSize: 26, color: "#b5341a", fontWeight: "bold" }}>{lesson.title}</div>
                <div style={{ fontSize: 15, color: "#7a4a2a", marginTop: 2 }}>{lesson.titleEn}</div>
                <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
                  <span style={{ fontSize: 11, background: "#fde8cc", color: "#b5341a", borderRadius: 12, padding: "3px 10px" }}>
                    {wordCount} words
                  </span>
                  <span style={{ fontSize: 11, background: "#fde8cc", color: "#b5341a", borderRadius: 12, padding: "3px 10px" }}>
                    Page {lesson.page}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <p style={{ textAlign: "center", color: "#b5341a", fontSize: 12, opacity: 0.6, marginTop: 30 }}>
          がんばって！ Ganbatte! (Good luck!)
        </p>
      </div>
    </div>
  );
}
