/**
 * Received the score and returns an object with the player number as the key and 
 * @param score number[]
 * @returns []
 */
function generateFinalScore(score: number[]) {
  const output: any[] = [];

  for (let index = 0; index < score.length; index++) {
    output.push({ player: index + 1, score: score[index] })
  }

  const sortedOutput = output.sort((a, b) => b.score - a.score);

  return sortedOutput;
}

export { generateFinalScore };