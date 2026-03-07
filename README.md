# 🇯🇵 Japanese Vocabulary App

A scalable React app for learning Japanese vocabulary — with audio, example sentences, flashcards, and quizzes.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── WordCard.jsx          ← Word card: audio + example sentence
│   ├── BrowsePage.jsx        ← Browse all words by category
│   ├── FlashcardPage.jsx     ← Flip-card memorisation mode
│   ├── QuizPage.jsx          ← Multiple-choice quiz
│   ├── MenuPage.jsx          ← Lesson home screen
│   └── LessonSelector.jsx    ← Pick a lesson (shown if >1 lesson)
│
├── data/
│   ├── lesson1_food.js       ← 食べ物 Food (Page 43)
│   └── index.js              ← Register lessons here
│
├── utils/
│   ├── shuffle.js            ← shuffle() helper
│   └── speech.js             ← speak() Japanese TTS helper
│
├── App.jsx                   ← Screen router (clean, ~60 lines)
├── main.jsx                  ← React entry point
└── index.css                 ← Full-screen reset
```

---

## 🚀 Setup (First Time)

```bash
# 1. Create a new Vite + React project
npm create vite@latest japanese-vocab -- --template react
cd japanese-vocab

# 2. Install dependencies
npm install

# 3. Delete the default src/ folder contents
# (delete App.jsx, App.css, index.css, main.jsx, assets/)

# 4. Copy all files from this refactored project into src/
#    matching the folder structure above

# 5. Run the app
npm run dev
```

Open **http://localhost:5173** in your browser.

---

## ➕ How to Add a New Lesson

### Step 1 — Create the data file

Copy `src/data/lesson1_food.js` and rename it, e.g. `lesson2_numbers.js`.

Edit the fields at the top:
```js
const lesson2 = {
  id:      "lesson2_numbers",
  title:   "数字",
  titleEn: "Numbers",
  emoji:   "🔢",
  page:    12,

  vocab: {
    "🔢 数字 Numbers": [
      {
        jp:         "いち",
        en:         "one",
        romaji:     "ichi",
        sentence:   "りんごがいちこあります。",
        sentenceEn: "There is one apple.",
      },
      // ... more words
    ],
  },
};

export default lesson2;
```

### Step 2 — Register it in `src/data/index.js`

```js
import lesson1 from "./lesson1_food";
import lesson2 from "./lesson2_numbers";   // ← add this

export const lessons = [
  lesson1,
  lesson2,   // ← add this
];
```

That's it! The app will automatically show a **Lesson Selector** screen when more than one lesson exists. All Browse / Flashcard / Quiz features work instantly with the new data.

---

## 🛑 Stopping the Server

Press `Ctrl + C` in the terminal.

## ▶️ Starting Again Later

```bash
cd japanese-vocab
npm run dev
```
