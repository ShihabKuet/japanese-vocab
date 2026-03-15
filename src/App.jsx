import { useState, useCallback } from 'react';
import { useRegisterSW }          from 'virtual:pwa-register/react';

import { lessons }          from './data/index';
import { shuffle }          from './utils/shuffle';

import UpdateChecker    from './components/UpdateChecker';
import HamburgerMenu    from './components/HamburgerMenu';
import LessonSelector   from './components/LessonSelector';
import MenuPage         from './components/MenuPage';
import BrowsePage       from './components/BrowsePage';
import FlashcardPage    from './components/FlashcardPage';
import QuizPage         from './components/QuizPage';
import StoryPage        from './components/StoryPage';

/**
 * App — top-level router
 *
 * Screen flow:
 *   lessonSelect  (when >1 lesson)
 *       ↓
 *   menu  ──→  browse
 *         ──→  flashcard
 *         ──→  quiz
 *         ←──  (back / home button)
 *
 * UpdateChecker sits at the very top and is always rendered.
 * On web  → listens to the PWA service worker for new builds.
 * On Android → polls GitHub Releases API for a newer APK.
 */
export default function App() {

  // ── PWA service worker registration ─────────────────────────
  // needRefresh = true when a new SW build is waiting
  // updateServiceWorker() = activates the new SW and reloads
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swUrl, r) {
      // Check for SW updates every 60 minutes while app is open
      setInterval(() => r && r.update(), 60 * 60 * 1000);
    },
  });

  // ── Lesson / navigation state ────────────────────────────────
  const [lesson,           setLesson]           = useState(
    lessons.length === 1 ? lessons[0] : null
  );
  const [screen,           setScreen]           = useState(
    lessons.length === 1 ? 'menu' : 'lessonSelect'
  );
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showRomaji,       setShowRomaji]       = useState(true);

  const allWords = lesson ? Object.values(lesson.vocab).flat() : [];

  const getWords = useCallback(() => {
    if (!lesson) return [];
    if (selectedCategory === 'All') return allWords;
    return lesson.vocab[selectedCategory] || [];
  }, [lesson, selectedCategory, allWords]);

  const goToLesson = (l) => {
    setLesson(l);
    setSelectedCategory('All');
    setScreen('menu');
  };

  // ── Screens ──────────────────────────────────────────────────
  const renderScreen = () => {
    if (screen === 'lessonSelect') {
      return <LessonSelector lessons={lessons} onSelect={goToLesson} />;
    }

    if (screen === 'menu') {
      return (
        <MenuPage
          lesson={lesson}
          allWords={allWords}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          showRomaji={showRomaji}
          setShowRomaji={setShowRomaji}
          getWords={getWords}
          onStory={lesson?.story ? () => setScreen('story') : null}
          onBrowse={()     => setScreen('browse')}
          onFlashcards={()  => setScreen('flashcard')}
          onQuiz={()        => setScreen('quiz')}
          onHome={lessons.length > 1 ? () => setScreen('lessonSelect') : null}
        />
      );
    }

    if (screen === 'browse') {
      return (
        <BrowsePage
          lesson={lesson}
          selectedCategory={selectedCategory}
          showRomaji={showRomaji}
          onBack={() => setScreen('menu')}
        />
      );
    }

    if (screen === 'flashcard') {
      return (
        <FlashcardPage
          initialCards={shuffle(getWords())}
          showRomaji={showRomaji}
          onBack={() => setScreen('menu')}
        />
      );
    }

    if (screen === 'story') {
      return (
        <StoryPage
          lesson={lesson}
          onBack={() => setScreen('menu')}
        />
      );
    }

    if (screen === 'quiz') {
      return (
        <QuizPage
          initialWords={shuffle(getWords())}
          allWords={allWords}
          showRomaji={showRomaji}
          onBack={() => setScreen('menu')}
        />
      );
    }
  };

  return (
    <>
      {/* ── Global update banner (always on top) ── */}
      <UpdateChecker
        swUpdate={needRefresh}
        onSwReload={() => updateServiceWorker(true)}
      />

      {/* ── Hamburger menu (fixed top-right, every screen) ── */}
      <HamburgerMenu />

      {/* ── Main app content ── */}
      {renderScreen()}
    </>
  );
}
