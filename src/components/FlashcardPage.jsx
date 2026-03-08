import { useState, useEffect, useRef } from "react";
import { shuffle } from "../utils/shuffle";
import { speak }   from "../utils/speech";
import TopBar    from "./TopBar";

/**
 * FlashcardPage
 *
 * Front : Japanese word + romaji + Listen button
 * Back  : Real photo from Wikipedia + English meaning + Japanese reminder
 *
 * Images are fetched from the free Wikipedia REST API using each
 * word's `wikiTitle` field — no API key needed, always real photos.
 *
 * Emoji fallbacks are shown if the fetch fails or the article has
 * no thumbnail.
 */

const EMOJI_FALLBACK = {
  "Cucumber": "🥒",  "Tomato": "🍅",      "Eggplant": "🍆",
  "Beans / Peas": "🫛", "Cabbage": "🥬",  "Spring Onion": "🧅",
  "Chinese Cabbage": "🥬", "Spinach": "🥬", "Lettuce": "🥗",
  "Potato": "🥔",    "Daikon Radish": "🌿", "Onion": "🧅",
  "Carrot": "🥕",    "Strawberry": "🍓",  "Peach": "🍑",
  "Watermelon": "🍉","Grape": "🍇",        "Japanese Pear": "🍐",
  "Persimmon": "🍊", "Mandarin Orange": "🍊", "Apple": "🍎",
  "Banana": "🍌",    "Beef": "🥩",         "Chicken": "🍗",
  "Pork": "🥩",      "Sausage": "🌭",      "Ham": "🍖",
  "Horse Mackerel": "🐟", "Sardine": "🐟", "Mackerel": "🐟",
  "Mackerel Pike": "🐟",  "Salmon": "🐟",  "Tuna": "🐟",
  "Sea Bream": "🐡", "Cod": "🐟",          "Shrimp": "🦐",
  "Crab": "🦀",      "Squid": "🦑",        "Octopus": "🐙",
  "Shellfish": "🐚", "Rice": "🍚",          "Egg": "🥚",
};

// Cache fetched image URLs so we don't re-fetch the same card
const imageCache = {};

function useWikiImage(wikiTitle) {
  const [imgUrl, setImgUrl] = useState(null);  // null = loading, "" = no image
  const cancelled = useRef(false);

  useEffect(() => {
    if (!wikiTitle) { setImgUrl(""); return; }
    cancelled.current = false;

    // Return cached result immediately
    if (imageCache[wikiTitle] !== undefined) {
      setImgUrl(imageCache[wikiTitle]);
      return;
    }

    setImgUrl(null); // loading state

    const url =
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikiTitle)}`;

    fetch(url)
      .then(r => r.json())
      .then(data => {
        if (cancelled.current) return;
        // Wikipedia returns originalimage or thumbnail
        const src =
          (data.originalimage && data.originalimage.source) ||
          (data.thumbnail     && data.thumbnail.source)     ||
          "";
        imageCache[wikiTitle] = src;
        setImgUrl(src);
      })
      .catch(() => {
        if (!cancelled.current) {
          imageCache[wikiTitle] = "";
          setImgUrl("");
        }
      });

    return () => { cancelled.current = true; };
  }, [wikiTitle]);

  return imgUrl;
}

/* ─── Card image component ─────────────────────────────────────── */
function CardImage({ wikiTitle, fallbackKey }) {
  const imgUrl  = useWikiImage(wikiTitle);
  const fallback = EMOJI_FALLBACK[fallbackKey] || "🍽️";
  const [imgError, setImgError] = useState(false);

  const isLoading = imgUrl === null;
  const hasImage  = imgUrl && !imgError;

  return (
    <div style={{
      width: "100%", maxWidth: 300, margin: "0 auto",
      borderRadius: 16, overflow: "hidden",
      background: "rgba(255,255,255,0.12)",
      height: 190,
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative",
      boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    }}>

      {/* ── Loading spinner ── */}
      {isLoading && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36,
            border: "3px solid rgba(255,255,255,0.25)",
            borderTop: "3px solid white",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
          }} />
          <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 11, letterSpacing: 1 }}>
            Loading…
          </span>
        </div>
      )}

      {/* ── Emoji fallback ── */}
      {!isLoading && !hasImage && (
        <div style={{ fontSize: 80 }}>{fallback}</div>
      )}

      {/* ── Real Wikipedia image ── */}
      {!isLoading && imgUrl && (
        <img
          src={imgUrl}
          alt={fallbackKey}
          onError={() => setImgError(true)}
          style={{
            width: "100%", height: "100%",
            objectFit: "cover",
            display: imgError ? "none" : "block",
            borderRadius: 16,
          }}
        />
      )}
      {!isLoading && imgUrl && imgError && (
        <div style={{ fontSize: 80 }}>{fallback}</div>
      )}
    </div>
  );
}

/* ─── Main FlashcardPage ────────────────────────────────────────── */
export default function FlashcardPage({ initialCards, showRomaji, onBack }) {
  const [cards,     setCards]     = useState(initialCards);
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped,   setFlipped]   = useState(false);
  const [speaking,  setSpeaking]  = useState(false);

  const card = cards[cardIndex];

  const nextCard = () => {
    setFlipped(false);
    setTimeout(() => setCardIndex(i => (i < cards.length - 1 ? i + 1 : 0)), 160);
  };

  const prevCard = () => {
    setFlipped(false);
    setTimeout(() => setCardIndex(i => (i > 0 ? i - 1 : cards.length - 1)), 160);
  };

  const handleListen = (e) => {
    e.stopPropagation();
    setSpeaking(true);
    speak(card.jp);
    setTimeout(() => setSpeaking(false), 1200);
  };

  const shuffleBtn = (
    <button
      onClick={() => { setCards(shuffle(cards)); setCardIndex(0); setFlipped(false); }}
      style={{ background: 'white', border: '2px solid #b5341a', color: '#b5341a', borderRadius: 8, padding: '6px 10px', cursor: 'pointer', fontFamily: 'Georgia, serif', fontSize: 12, whiteSpace: 'nowrap' }}>
      🔀 Shuffle
    </button>
  );

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#fef3e2,#fde8cc)",
      fontFamily: "Georgia, serif",
      paddingTop: "calc(52px + env(safe-area-inset-top, 0px))",
      paddingBottom: 24,
      paddingLeft: 16,
      paddingRight: 16,
      display: "flex", flexDirection: "column", alignItems: "center",
    }}>
      <style>{`
        @keyframes spin   { to { transform: rotate(360deg); } }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>

      <TopBar
        title="Flashcards"
        subtitle={`${cardIndex + 1} / ${cards.length}`}
        onBack={onBack}
        rightSlot={shuffleBtn}
      />

      <div style={{ width: "100%", maxWidth: 520, marginTop: 12 }}>

        {/* ── Progress bar ── */}
        <div style={{ height: 6, background: "#e8cdb8", borderRadius: 3, marginBottom: 24, overflow: "hidden" }}>
          <div style={{ height: "100%", background: "#b5341a", borderRadius: 3, width: `${((cardIndex + 1) / cards.length) * 100}%`, transition: "width 0.3s" }} />
        </div>

        {/* ── Card ── */}
        <div onClick={() => setFlipped(f => !f)} style={{ cursor: "pointer" }}>
          <div style={{
            background: flipped ? "#b5341a" : "white",
            borderRadius: 24,
            padding: flipped ? "26px 28px 30px" : "50px 30px",
            textAlign: "center",
            boxShadow: flipped
              ? "0 12px 48px rgba(181,52,26,0.35)"
              : "0 8px 40px rgba(181,52,26,0.15)",
            transition: "background 0.3s, box-shadow 0.3s, padding 0.2s",
            minHeight: 280,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: 10,
          }}>

            {/* ── FRONT ── */}
            {!flipped && (
              <>
                <p style={{ color: "#ccc", fontSize: 11, letterSpacing: 2, marginBottom: 4 }}>
                  TAP TO REVEAL
                </p>
                <div style={{ fontSize: 56, color: "#1a1a1a", lineHeight: 1.2 }}>{card.jp}</div>
                {showRomaji && (
                  <div style={{ color: "#9a6040", fontSize: 17, fontStyle: "italic" }}>{card.romaji}</div>
                )}
                <button onClick={handleListen}
                  style={{
                    marginTop: 10,
                    background: speaking ? "#b5341a" : "#fde8cc",
                    border: "none", borderRadius: 20,
                    padding: "8px 22px", cursor: "pointer",
                    fontSize: 14, fontFamily: "Georgia, serif",
                    color: speaking ? "white" : "#7a4a2a",
                    transition: "all 0.2s",
                    boxShadow: speaking ? "0 4px 12px rgba(181,52,26,0.3)" : "none",
                  }}>
                  {speaking ? "🔊 Playing…" : "🔈 Listen"}
                </button>
              </>
            )}

            {/* ── BACK ── */}
            {flipped && (
              <div style={{ width: "100%", animation: "fadeUp 0.3s ease" }}>

                {/* Wikipedia image */}
                <CardImage wikiTitle={card.wikiTitle} fallbackKey={card.en} />

                {/* English meaning */}
                <div style={{
                  marginTop: 18, fontSize: 30, color: "white",
                  fontWeight: "bold", letterSpacing: 0.5,
                }}>
                  {card.en}
                </div>

                {/* Japanese + romaji reminder */}
                <div style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", marginTop: 6 }}>
                  {card.jp}
                  {showRomaji && (
                    <span style={{ fontSize: 13, marginLeft: 8, fontStyle: "italic" }}>
                      ({card.romaji})
                    </span>
                  )}
                </div>

                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, marginTop: 14, letterSpacing: 1 }}>
                  TAP TO FLIP BACK
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ── Prev / Next ── */}
        <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
          <button onClick={prevCard}
            style={{ flex: 1, padding: 14, background: "white", border: "2px solid #e8cdb8", borderRadius: 14, cursor: "pointer", fontSize: 18, fontFamily: "Georgia, serif" }}>
            ◀ Prev
          </button>
          <button onClick={nextCard}
            style={{ flex: 1, padding: 14, background: "#b5341a", color: "white", border: "none", borderRadius: 14, cursor: "pointer", fontSize: 18, fontFamily: "Georgia, serif" }}>
            Next ▶
          </button>
        </div>

        <p style={{ textAlign: "center", color: "#9a6040", fontSize: 12, marginTop: 14 }}>
          Tap the card to flip it
        </p>
      </div>
    </div>
  );
}
