/**
 * Returns a new shuffled copy of an array.
 * Does NOT mutate the original.
 */
export function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}
