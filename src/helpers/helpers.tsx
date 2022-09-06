/**
 * Creates an array of numbers based on the grid size 
 * @param gridSize number
 * @returns array
 */
export default function generateNumberGrid(gridSize: number) {
  const numbers: number[] = [];

  for (let x = 0; x < gridSize / 2; x++) {
    for (let y = 0; y < 2; y++) {
      numbers.push(x);
    }
  }

  const output = numbers.sort(() => Math.random() - 0.5);

  return output;
}