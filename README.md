# 🇯🇵 Japanese Vocabulary App

A scalable React app for learning Japanese vocabulary — audio pronunciation,
example sentences, Wikipedia images, flashcards, and quizzes.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── WordCard.jsx          ← Word card (audio + example sentence)
│   ├── BrowsePage.jsx        ← Browse all words by category
│   ├── FlashcardPage.jsx     ← Flip-card mode with Wikipedia images
│   ├── QuizPage.jsx          ← Multiple-choice quiz
│   ├── MenuPage.jsx          ← Per-lesson home screen
│   └── LessonSelector.jsx    ← Lesson picker (auto-shown if >1 lesson)
│
├── data/
│   ├── lesson1_food.js               ✅ 食べ物   Food          (Page 43)
│   ├── lesson2_department_store.js   ✅ デパート  Dept. Store   (Page 25)
│   └── index.js              ← Register ALL lessons here
│
├── utils/
│   ├── shuffle.js            ← shuffle() helper
│   └── speech.js             ← speak() Japanese TTS
│
├── App.jsx                   ← Screen router (~60 lines)
├── main.jsx
└── index.css
```

---

## 🚀 Setup (First Time)

```bash
npm create vite@latest japanese-vocab -- --template react
cd japanese-vocab
npm install
# Delete everything in src/, then copy all files from this zip into src/
npm run dev
```

Open **http://localhost:5173**

---

## ➕ Adding a New Lesson (2 steps only)

### Step 1 — Create `src/data/lesson3_yourTopic.js`

Copy `lesson1_food.js` as a template and fill in:

```js
const lesson3 = {
  id:      "lesson3_greetings",   // unique, no spaces
  title:   "あいさつ",             // Japanese title
  titleEn: "Greetings",           // English title
  emoji:   "👋",                  // one emoji
  page:    8,                     // textbook page

  vocab: {
    "👋 あいさつ Basic Greetings": [
      {
        jp:         "おはよう",
        en:         "Good Morning",
        romaji:     "ohayou",
        wikiTitle:  "Morning",           // Wikipedia article for image
        sentence:   "おはようございます。",
        sentenceEn: "Good morning (polite).",
      },
      // ... more words
    ],
  },
};

export default lesson3;
```

### Step 2 — Register it in `src/data/index.js`

```js
import lesson1 from "./lesson1_food";
import lesson2 from "./lesson2_department_store";
import lesson3 from "./lesson3_greetings";   // ← add import

export const lessons = [
  lesson1,
  lesson2,
  lesson3,    // ← add here
];
```

Done! The Lesson Selector and all study modes work automatically.

---

## 🌐 Deployment (Free)

### Vercel (recommended — auto-deploys on every git push)
1. Push project to GitHub
2. Go to vercel.com → New Project → select repo → Deploy
3. Get a live URL instantly

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to vite.config.js:  base: '/japanese-vocab/'
# Add to package.json scripts:
#   "predeploy": "npm run build"
#   "deploy": "gh-pages -d dist"
npm run deploy
```

---

## ✅ Lessons Checklist

| # | File | Title | Page | Words |
|---|------|-------|------|-------|
| 1 | lesson1_food.js | 食べ物 Food | 43 | 39 |
| 2 | lesson2_department_store.js | デパート Dept. Store | 25 | 24 |
| 3 | lesson3_???.js | — | — | — |
| 4 | lesson4_???.js | — | — | — |

---

## ▶️ Run Locally

```bash
cd japanese-vocab
npm run dev
# Open http://localhost:5173
```

Stop: `Ctrl + C`
