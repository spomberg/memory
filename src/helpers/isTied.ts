/**
 * Receives the score and returns false if the game was not tied or the tied score if it was 
 * @param score number[]
 * @returns boolean or number
 */
 function isTied(score: number[]) {
  if (score.length === 1) return false;

  const sortedScore = [...score].sort((a, b) => b - a);
  
  if (sortedScore[0] === sortedScore[1]) {
    return sortedScore[0]
  } else return false
}

export { isTied };