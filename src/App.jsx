import { useState, useCallback } from "react";

import { lessons }        from "./data/index";
import { shuffle }        from "./utils/shuffle";

import LessonSelector  from "./components/LessonSelector";
import MenuPage        from "./components/MenuPage";
import BrowsePage      from "./components/BrowsePage";
import FlashcardPage   from "./components/FlashcardPage";
import QuizPage        from "./components/QuizPage";

/**
 * App
 * Top-level router. Manages which screen is visible.
 *
 * Screen flow:
 *   lessonSelect  (if multiple lessons)
 *       ↓
 *   menu  ──→  browse
 *         ──→  flashcard
 *         ──→  quiz
 *         ←──  (back button on every page)
 */
export default function App() {
  // If there is only one lesson, skip the selector and go straight to menu
  const [lesson,           setLesson]           = useState(lessons.length === 1 ? lessons[0] : null);
  const [screen,           setScreen]           = useState(lessons.length === 1 ? "menu" : "lessonSelect");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showRomaji,       setShowRomaji]       = useState(true);

  // All words flattened from the current lesson (filtered by category)
  const allWords = lesson ? Object.values(lesson.vocab).flat() : [];

  const getWords = useCallback(() => {
    if (!lesson) return [];
    if (selectedCategory === "All") return allWords;
    return lesson.vocab[selectedCategory] || [];
  }, [lesson, selectedCategory, allWords]);

  /* ── Navigation helpers ── */
  const goToLesson = (l) => {
    setLesson(l);
    setSelectedCategory("All");
    setScreen("menu");
  };

  const goBack = () => {
    // If only one lesson, go back to menu; otherwise go back to lesson selector
    if (lessons.length === 1) {
      setScreen("menu");
    } else {
      setScreen("lessonSelect");
    }
  };

  /* ── Screens ── */
  if (screen === "lessonSelect") {
    return <LessonSelector lessons={lessons} onSelect={goToLesson} />;
  }

  if (screen === "menu") {
    return (
      <MenuPage
        lesson={lesson}
        allWords={allWords}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        showRomaji={showRomaji}
        setShowRomaji={setShowRomaji}
        getWords={getWords}
        onBrowse={()      => setScreen("browse")}
        onFlashcards={()  => setScreen("flashcard")}
        onQuiz={()        => setScreen("quiz")}
      />
    );
  }

  if (screen === "browse") {
    return (
      <BrowsePage
        lesson={lesson}
        selectedCategory={selectedCategory}
        showRomaji={showRomaji}
        onBack={() => setScreen("menu")}
      />
    );
  }

  if (screen === "flashcard") {
    return (
      <FlashcardPage
        initialCards={shuffle(getWords())}
        showRomaji={showRomaji}
        onBack={() => setScreen("menu")}
      />
    );
  }

  if (screen === "quiz") {
    return (
      <QuizPage
        initialWords={shuffle(getWords())}
        allWords={allWords}
        showRomaji={showRomaji}
        onBack={() => setScreen("menu")}
      />
    );
  }
}
