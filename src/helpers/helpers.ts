import { FaApple, FaAndroid, FaChrome, FaCss3Alt, FaDev, FaDiscord, FaGithub, 
        FaGoogle, FaHtml5, FaJsSquare, FaMicrosoft, FaNapster, FaNpm, FaPlaystation, 
        FaReact, FaRedditAlien } from 'react-icons/fa';

/**
 * Creates an array of numbers based on the grid size 
 * @param gridSize number
 * @returns array
 */
function generateNumberGrid(gridSize: number) {
  const numbers: number[] = [];

  for (let x = 0; x < gridSize / 2; x++) {
    for (let y = 0; y < 2; y++) {
      numbers.push(x);
    }
  }

  const output = numbers.sort(() => Math.random() - 0.5);

  return output;
}

function generateIconGrid(gridSize: number) {
  return [];
}

module.exports = { generateNumberGrid, generateIconGrid };