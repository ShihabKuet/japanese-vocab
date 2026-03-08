import TopBar from './TopBar';

export default function MenuPage({
  lesson, allWords, selectedCategory, setSelectedCategory,
  showRomaji, setShowRomaji, getWords,
  onBrowse, onFlashcards, onQuiz, onHome,
}) {
  const categories = ["All", ...Object.keys(lesson.vocab)];

  // Right slot: "All Lessons" button when multiple lessons exist
  const rightSlot = onHome ? (
    <button onClick={onHome} style={{
      background: 'transparent',
      border: '2px solid #e8cdb8',
      borderRadius: 8, padding: '5px 10px',
      cursor: 'pointer', fontFamily: 'Georgia, serif',
      fontSize: 11, color: '#7a4a2a', whiteSpace: 'nowrap',
    }}>
      🏠 Lessons
    </button>
  ) : null;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg,#fef3e2 0%,#fde8cc 50%,#f9d5a7 100%)',
      fontFamily: 'Georgia, serif',
      // paddingTop = TopBar height (52px) + safe-area-inset-top
      paddingTop: 'calc(52px + env(safe-area-inset-top, 0px))',
      paddingBottom: 24,
      paddingLeft: 16,
      paddingRight: 16,
    }}>
      <TopBar
        title={lesson.title}
        subtitle={`JAPANESE ${lesson.titleEn.toUpperCase()} VOCABULARY`}
        rightSlot={rightSlot}
      />

      <div style={{ maxWidth: 600, margin: '0 auto' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', paddingTop: 20, paddingBottom: 20 }}>
          <div style={{ fontSize: 52, marginBottom: 4 }}>{lesson.emoji}</div>
          <h1 style={{ fontSize: 32, fontWeight: 'bold', color: '#b5341a', margin: 0, letterSpacing: 2 }}>
            {lesson.title}
          </h1>
          <p style={{ color: '#9a6040', fontSize: 13, marginTop: 8 }}>
            {allWords.length} words from your textbook • Page {lesson.page}
          </p>
        </div>

        {/* ── Category selector ── */}
        <div style={{ background: 'white', borderRadius: 16, padding: 20, marginBottom: 16, boxShadow: '0 4px 20px rgba(181,52,26,0.1)' }}>
          <p style={{ margin: '0 0 12px', color: '#7a4a2a', fontWeight: 'bold', fontSize: 13, letterSpacing: 1 }}>
            CHOOSE CATEGORY
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '7px 14px', borderRadius: 20, border: '2px solid',
                  fontSize: 12, cursor: 'pointer', transition: 'all 0.2s',
                  fontFamily: 'Georgia, serif',
                  borderColor: selectedCategory === cat ? '#b5341a' : '#e8cdb8',
                  background:  selectedCategory === cat ? '#b5341a' : 'white',
                  color:       selectedCategory === cat ? 'white'   : '#7a4a2a',
                }}>
                {cat.length > 22 ? cat.slice(0, 22) + '…' : cat}
              </button>
            ))}
          </div>
          <p style={{ margin: '12px 0 0', color: '#b5341a', fontSize: 13 }}>
            ✓ {selectedCategory === 'All' ? allWords.length : getWords().length} words selected
          </p>
        </div>

        {/* ── Romaji toggle ── */}
        <div style={{
          background: 'white', borderRadius: 16, padding: '14px 20px', marginBottom: 16,
          boxShadow: '0 4px 20px rgba(181,52,26,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{ color: '#7a4a2a', fontSize: 14 }}>Show Romaji (pronunciation guide)</span>
          <div onClick={() => setShowRomaji(!showRomaji)}
            style={{ width: 44, height: 24, borderRadius: 12, background: showRomaji ? '#b5341a' : '#ccc', cursor: 'pointer', position: 'relative', transition: 'background 0.3s', flexShrink: 0 }}>
            <div style={{ position: 'absolute', top: 3, left: showRomaji ? 23 : 3, width: 18, height: 18, borderRadius: 9, background: 'white', transition: 'left 0.3s', boxShadow: '0 1px 4px rgba(0,0,0,0.2)' }} />
          </div>
        </div>

        {/* ── Mode buttons ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 16 }}>
          {[
            { label: 'Browse',     icon: '📖', desc: 'Audio + examples', action: onBrowse },
            { label: 'Flashcards', icon: '🃏', desc: 'Flip & memorize',  action: onFlashcards },
            { label: 'Quiz',       icon: '🎯', desc: 'Test yourself',    action: onQuiz },
          ].map(({ label, icon, desc, action }) => (
            <button key={label} onClick={action}
              style={{ background: 'white', border: '2px solid #e8cdb8', borderRadius: 16, padding: '18px 10px', cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(181,52,26,0.08)', fontFamily: 'Georgia, serif' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#b5341a'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8cdb8'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ fontSize: 28 }}>{icon}</div>
              <div style={{ fontWeight: 'bold', color: '#b5341a', fontSize: 14, marginTop: 6 }}>{label}</div>
              <div style={{ color: '#9a6040', fontSize: 11, marginTop: 2 }}>{desc}</div>
            </button>
          ))}
        </div>

        <p style={{ textAlign: 'center', color: '#b5341a', fontSize: 12, opacity: 0.7 }}>
          がんばって！ Ganbatte! (Good luck!)
        </p>
      </div>
    </div>
  );
}
