/**
 * ═══════════════════════════════════════════════════════
 *  LESSONS REGISTRY
 *  HOW TO ADD A NEW LESSON — only 2 steps:
 *    1. Create  src/data/lessonN_topicname.js
 *       (copy any existing lesson file as a template)
 *    2. Import it below and add it to the `lessons` array
 *
 *  The app automatically shows a Lesson Selector screen
 *  when more than one lesson exists. No other files need
 *  to be touched.
 * ═══════════════════════════════════════════════════════
 *
 *  Each lesson file must export a default object with:
 *
 *    id        {string}  — unique key, e.g. "lesson3_greetings"
 *    title     {string}  — Japanese title,  e.g. "あいさつ"
 *    titleEn   {string}  — English title,   e.g. "Greetings"
 *    emoji     {string}  — One emoji icon,  e.g. "👋"
 *    page      {number}  — Textbook page number
 *    vocab     {object}  — { "Category Label": [ ...words ] }
 *
 *  Each word object inside vocab must have:
 *    jp          {string}  — Japanese (hiragana/katakana/kanji)
 *    en          {string}  — English meaning
 *    romaji      {string}  — Romanised pronunciation
 *    wikiTitle   {string}  — Wikipedia article title for image
 *    sentence    {string}  — Example sentence in Japanese
 *    sentenceEn  {string}  — English translation of sentence
 */

import lesson1 from "./lesson1_food";
import lesson2 from "./lesson2_department_store";
import lesson3 from "./lesson3_family";
// import lesson4 from "./lesson4_transport";
// import lesson5 from "./lesson5_weather";

export const lessons = [
  lesson1,
  lesson2,
  lesson3,
  // lesson4,
  // lesson5,
];
