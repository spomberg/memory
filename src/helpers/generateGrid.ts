import android from '../assets/icons/android.svg';
import apple from '../assets/icons/apple.svg';
import chrome from '../assets/icons/chrome.svg';
import css3 from '../assets/icons/css3-alt.svg';
import discord from '../assets/icons/discord.svg';
import github from '../assets/icons/github.svg';
import google from '../assets/icons/google.svg';
import html5 from '../assets/icons/html5.svg';
import js from '../assets/icons/js.svg';
import linux from '../assets/icons/linux.svg';
import microsoft from '../assets/icons/microsoft.svg';
import napster from '../assets/icons/napster.svg';
import playstation from '../assets/icons/playstation.svg';
import react from '../assets/icons/react.svg';
import reddit from '../assets/icons/reddit-alien.svg';
import safari from '../assets/icons/safari.svg';
import xbox from '../assets/icons/xbox.svg';
import youtube from '../assets/icons/youtube.svg';

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

/**
 * Creates an array of icons based on the grid size
 * @param gridSize number
 * @returns array
 */
function generateIconGrid(gridSize: number) {
  const icons = [
    android, apple, chrome, css3, discord, github, google, html5, js, linux, microsoft, napster,
    playstation, react, reddit, safari, xbox, youtube
  ];
  const shuffledIcons = icons.sort(() => Math.random() - 0.5); // Shuffle icons array
  let list: any[] = [];

  for (let x = 0; x < gridSize / 2; x++) {
    for (let y = 0; y < 2; y++) {
      list.push(shuffledIcons[x]);
    }
  }

  const output = list.sort(() => Math.random() - 0.5); // Shuffle output array

  return output;
}

/**
 * Receives the number of players and returns an array that goes from 0 to the number - 1.
 * @param players number
 * @returns number[]
 */
function convertPlayersToArr(players: number) {
  const output: number[] = [];

  for (let index = 0; index < players; index++) {
    output.push(index);
  }

  return output;
}

export { generateNumberGrid, generateIconGrid, convertPlayersToArr };