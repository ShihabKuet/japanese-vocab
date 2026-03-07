/**
 * ─────────────────────────────────────────────
 *  LESSONS REGISTRY
 *  Add every new lesson here in two steps:
 *    1. import it at the top
 *    2. add it to the lessons array below
 * ─────────────────────────────────────────────
 *
 * Each lesson file must export a default object with:
 *   id      — unique string key  (e.g. "lesson2_numbers")
 *   title   — Japanese title     (e.g. "数字")
 *   titleEn — English title      (e.g. "Numbers")
 *   emoji   — Emoji icon         (e.g. "🔢")
 *   page    — Textbook page      (e.g. 12)
 *   vocab   — Object of category → word array
 *             (see lesson1_food.js for the exact shape)
 */

import lesson1 from "./lesson1_food";
// import lesson2 from "./lesson2_numbers";   ← uncomment when ready
// import lesson3 from "./lesson3_greetings"; ← uncomment when ready

export const lessons = [
  lesson1,
  // lesson2,
  // lesson3,
];
