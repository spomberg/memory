/**
 * Creates an array of numbers based on the grid size 
 * @param gridSize number
 * @returns array
 */
export default function generateNumberGrid(gridSize: number) {
  const output: number[] = [];

  for (let x = 0; x < gridSize / 2; x++) {
    for (let y = 0; y < 2; y++) {
      output.push(x);
    }
  }

  output.sort();

  return output;
}