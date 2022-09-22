import './Grid.scss';
import Topbar from '../Topbar/Topbar';
import SoloScore from '../Score/SoloScore';
import MultiplayerScore from '../Score/MultiplayerScore';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setGrid } from '../../features/grid/gridSlice';
import { addMatchedTiles, resetMatchedTiles } from '../../features/matched/matchedSlice';
import { useEffect } from 'react';
import { generateNumberGrid, generateIconGrid } from '../../helpers/generateGrid';
import { incrementMoves, resetMoves } from '../../features/moves/movesSlice';
import { nextPlayer } from '../../features/currentPlayer/currentPlayerSlice';
import { initiateScore, incrementScore } from '../../features/score/scoreSlice';
import { addTiles, resetTiles } from '../../features/tiles/tilesSlice';
import { addIndices, resetIndices } from '../../features/indices/indicesSlice';
import { ReactSVG } from 'react-svg';
import { gameOver } from '../../features/state/stateSlice';
import { useStopwatch } from 'react-timer-hook';
import { setTimer } from '../../features/timer/timerSlice';
import { resetPlayer } from '../../features/currentPlayer/currentPlayerSlice';
import GameOver from '../GameOver/GameOver';
import { showGrid } from '../../features/showGrid/showGridSlice';
import { hideMenu } from '../../features/showMenu/showMenuSlice';
import Menu from '../Menu/Menu';

export default function Grid() {
  const dispatch = useAppDispatch();
  const gridSize = useAppSelector((state) => state.gridSize.value);
  const theme = useAppSelector((state) => state.theme.value);
  const grid = useAppSelector((state) => state.grid.value);
  const matched = useAppSelector((state) => state.matched.value);
  const players = useAppSelector((state) => state.players.value);
  const currentPlayer = useAppSelector((state) => state.currentPlayer.value);
  const tiles = useAppSelector((state) => state.tiles.value); // Will hold the content of the tiles selected on each play
  const indices = useAppSelector((state) => state.indices.value); // Will hold the index of the tiles selected on each play
  const { seconds, minutes, reset, pause } = useStopwatch({ autoStart: true })

  // Resets states
  const resetStates = () => {
    dispatch(resetPlayer());
    dispatch(hideMenu());
    dispatch(resetMoves());
    dispatch(resetMatchedTiles());
    dispatch(resetTiles());
    dispatch(resetIndices());
    dispatch(initiateScore(players));
    reset();
  }

  // Updates timer state to match timer hook 
  useEffect(() => {
    const time = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    dispatch(setTimer(time));
  
  }, [dispatch, minutes, seconds])

  // Generates grid based on theme state
  useEffect(() => {
    switch (theme) {
      case 'numbers':
        dispatch(setGrid(generateNumberGrid(gridSize)));
        break;
      case 'icons':
        dispatch(setGrid(generateIconGrid(gridSize)));
    }
    dispatch(initiateScore(players)); // Resets score
  }, [dispatch, gridSize, theme, players]);

  // Changes grid opacity to 100 once component is mounted
  useEffect(() => {
    setTimeout(() => {
      dispatch(showGrid());
    }, 500);
  }, [dispatch])
  

  function handleClick(index: number, tile: any) {
    dispatch(addIndices(index)); // Adds tile index number to play array
    dispatch(addTiles(tile)); // Adds tiles to array for comparison
  }

  // Handles the play, called everytime a tile is clicked.
  useEffect(() => {
    if (indices.length > 1) {
      // Increment move counter
      dispatch(incrementMoves());
      setTimeout(() => {
        if (tiles[0] === tiles[1]) {
          // Adds matched tiles to matched array
          dispatch(addMatchedTiles(indices[0]));
          dispatch(addMatchedTiles(indices[1]));
          // Increments score
          dispatch(incrementScore(currentPlayer));
        } else {
          // Changes player's turn
          dispatch(nextPlayer(players));
        }
        // Reset play states
        dispatch(resetIndices());
        dispatch(resetTiles());
      }, 3000);
    }
     // eslint-disable-next-line
  }, [indices, tiles, dispatch, players])

  // Changes game state and pauses timer if the length of the matched array is equal to the grid size
  useEffect(() => {
    if (matched.length === gridSize) {
      pause();
      dispatch(gameOver());
    }
  }, [matched, gridSize, dispatch, pause])
   
  
  return (
    <>
      <Topbar resetStates={resetStates}/>
      <Menu resetStates={resetStates} />
      <ul className={`grid ${gridSize === 16 ? 'four-by-four' : 'six-by-six'}`}>
        {grid.map((tile: any, index: number) => {
          return (
            <li 
              key={index}
              >
              <button 
                className={`tile ${matched.includes(index) ? 'matched' : ''}${indices.includes(index) ? 'selected' : ''}`}
                {...(matched.includes(index) || indices.includes(index) || indices.length > 1) && {disabled: true}}
                onClick={() => handleClick(index, tile)}
                >
                {theme === 'numbers' ? <span >{tile}</span> : <ReactSVG src={tile} />}
              </button>
            </li>
          )
        })}
      </ul>
      {players === 1 ? <SoloScore /> : <MultiplayerScore />}
      <GameOver resetStates={resetStates}/>
    </>
  )
}
