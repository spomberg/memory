# Memory Game

This is a solution to the [Memory game challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/memory-game-vse4WFPvM). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

This project was built with React.js, TypeScript, Sass and tested with Jest, and it's hosted [here](https://memory.spomberg.com).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [Screenshots](#screenshots)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
  - [Work with detailed wireframes](#work-with-detailed-wireframes)
  - [Program in TypeScript](#program-in-typescript)
  - [Handle multiple states at the same time](#handle-multiple-states-at-the-same-time)
  - [Tackle an advanced project](#tackle-an-advanced-project)
- [Author](#author)
- [Other projects](#other-projects)

## Overview

Memory is a responsive single-page site built with React. Users are able to:

- Play the Memory game either solo or multiplayer (up to 4 players)
- Set the theme to use numbers or icons within the tiles
- Choose to play on either a 4x4 or 6x6 grid
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### The challenge

The challenge was to create the app based solely on the user stories above and the design files provided. I was free to use any framework and language I wished and no code was given to start with.

The image below is the provided preview of what the app was supposed to look like:

![preview](https://raw.githubusercontent.com/spomberg/memory/9f9b90e2df2bf52602dae5c146350a3d7298fe71/src/assets/images/preview.jpg)

## Screenshots

And these are gifs showing the final product in action:

### Desktop

![desktop-demo](https://raw.githubusercontent.com/spomberg/memory/ed26d7d885dccca30a710f93f52febce6e1b4da8/src/assets/images/memory-desktop-demo.gif)

Start Page
![desktop-start-page](https://github.com/spomberg/memory/blob/main/src/assets/images/memory-desktop-start-page.png?raw=true)

4x4 Grid
![desktop-4x4-grid](https://github.com/spomberg/memory/blob/main/src/assets/images/memory-desktop-4x4.png?raw=true)

6x6 Grid
![desktop-6x6-grid](https://github.com/spomberg/memory/blob/main/src/assets/images/memory-desktop-6x6.png?raw=true)

Game Over
![desktop-game-over](https://github.com/spomberg/memory/blob/main/src/assets/images/memory-desktop-game-over.png?raw=true)

### Mobile

![mobile-demo](https://raw.githubusercontent.com/spomberg/memory/0335a8b2b6fba3446cbae4ef3df26b91651e96f7/src/assets/images/memory-mobile-demo.gif)

Start Page

<img src="https://raw.githubusercontent.com/spomberg/memory/1aee21dcd24f0da5694f0bcd0bfb0f10db700188/src/assets/images/memory-mobile-start-page.png" width="300" height="500" />

4x4 Grid

<img src="https://github.com/spomberg/memory/blob/main/src/assets/images/memory-mobile-4x4.png?raw=true" width="300" height="500" />


6x6 Grid

<img src="https://github.com/spomberg/memory/blob/main/src/assets/images/memory-mobile-6x6.png?raw=true" width="300" height="500" />

Game Over

<img src="https://github.com/spomberg/memory/blob/main/src/assets/images/memory-mobile-game-over.png?raw=true" width="300" height="500" />

## Built with

- React
- TypeScript
- Sass
- Bootstrap

### Dependencies

- React Redux
- React Bootstrap
- React Copy to Clipboard
- React SVG
- React Timer Hook
- Jest

## What I learned

### Work with detailed wireframes

This challenge allowed me flex my frontend skills, I was able to bring industry-level designs to life, I'm proud of how close the final product is to the wireframes provided.

### Program in TypeScript

Up until now I had only programmed in JavaScript and Ruby and I had set a goal of becoming proficient in TypeScript. I not only completed this project using TypeScript but I also had to use the React TypeScript template which added some complexity to a library I used to be comfortable with, not to mention React Redux and other libraries that also work a little differently when used in conjunction with TypeScript. Overall, a lot of documentation reading was done. 

### Tackle an advanced project

This is the second Frontend Mentor challenge I complete. Since I recently graduated from a coding bootcamp, I decided to complete an [intermediate level project first](https://github.com/spomberg/password-generator-app), which gave me enough confidence to take on an advanced project this time. Considering that I'm still a junior developer, it was a great accomplishment to complete this one. 

### Handle multiple states at the same time

Since this is a game that can be played with several different settings, I had to juggle over a dozen states that affected several parts of the app such as the outcome of each play, the grid, score, game over screen, etc... 

To make all this work I leveraged React Redux in a way I had never done before. The piece of code that I'm most proud of is the following which basically handles each play.

```js
// Handles the play, called everytime a tile is clicked.
  useEffect(() => {
    if (indices.length > 1) { // If this is the second tile clicked:
      // Increment move counter
      dispatch(incrementMoves());
      if (tiles[0] === tiles[1]) { // If tiles are identical:
        // Adds matched tiles to matched array
        dispatch(addMatchedTiles(indices[0]));
        dispatch(addMatchedTiles(indices[1]));
        // Increments score
        dispatch(incrementScore(currentPlayer));
        // Resets play states
        dispatch(resetIndices());
        dispatch(resetTiles());
      } else { // If tiles are different:
          setTimeout(() => {
            // Changes player's turn
            dispatch(nextPlayer(players));
            // Resets play states
            dispatch(resetIndices());
            dispatch(resetTiles());
          }, 3000);
        }
    }
  }, [indices, tiles, dispatch, players])
```

## Author

Aws Certified Web Developer with a knack for finding innovative solutions for solving complex problems in a timely manner.

Throughout my career, I have honed my people skills in other industries where I successfully led projects in different areas. I also trained hundreds of people, as passing down knowledge (while continuously learning) is a passion of mine.

Aside from my passion for coding, my abilities also extend to communication and collaboration with proficiency in interpersonal skills. My strongest suit is that I can bring these two skill sets together in a unique way.

My goal is to now use my skills to make meaningful connections, exchange knowledge and help others while working as a Web Developer.

- Portfolio - [spomberg.com](https://spomberg.com)
- LinkedIn - [/marcos-spomberg](https://www.linkedin.com/in/marcos-spomberg/)

## Other projects

- My Movie List - [Site](https://mymovielist.ca) / [GitHub](https://github.com/spomberg/my-movie-list)
- Password Generator App - [Site](https://password-generator.spomberg.com) / [GitHub](https://github.com/spomberg/password-generator-app)
