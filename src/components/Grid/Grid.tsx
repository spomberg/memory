import './Grid.scss';
import Topbar from '../Topbar/Topbar';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setGrid } from '../../features/grid/gridSlice';
import { addMatchedTiles } from '../../features/matched/matchedSlice';
import { useEffect, useState } from 'react';
import { generateNumberGrid, generateIconGrid } from '../../helpers/helpers';
import { incrementMoves } from '../../features/moves/movesSlice';
import { nextPlayer } from '../../features/currentPlayer/currentPlayerSlice';
import { initiateScore, incrementScore } from '../../features/score/scoreSlice';
import { ReactSVG } from 'react-svg';

export default function Grid() {
  const dispatch = useAppDispatch();
  const gridSize = useAppSelector((state) => state.gridSize.value);
  const theme = useAppSelector((state) => state.theme.value);
  const grid = useAppSelector((state) => state.grid.value);
  const matched = useAppSelector((state) => state.matched.value);
  const players = useAppSelector((state) => state.players.value);
  const currentPlayer = useAppSelector((state) => state.currentPlayer.value);
  const [tiles, setTiles] = useState<Array<any>>([]); // Will hold the content of the tiles selected on each play
  const [indices, setIndices] = useState<Array<number>>([]); // Will hold the index of the tiles selected on each play

  // Generates grid based on theme state
  useEffect(() => {
    switch (theme) {
      case 'numbers':
        dispatch(setGrid(generateNumberGrid(gridSize)));
        break;
      case 'icons':
        dispatch(setGrid(generateIconGrid(gridSize)));
    }
    // Resets states
    setTiles([]);
    setIndices([]);
    dispatch(initiateScore(players));
  }, [dispatch, gridSize, theme, players]);

  function handleClick(index: number, tile: any) {
    setIndices([...indices, index]); // Adds tile index number to play array
    setTiles([...tiles, tile]); // Adds tiles to array for comparison
  }

  // Handles the play, called everytime a tile is clicked.
  useEffect(() => {
    if (indices.length > 1) {
      setTimeout(() => {
        if (tiles[0] === tiles[1]) {
          // Adds matched tiles to matched array
          dispatch(addMatchedTiles(indices[0]));
          dispatch(addMatchedTiles(indices[1]));
          // Increments score
          dispatch(incrementScore(currentPlayer));
        }
        // Increment move counter
        dispatch(incrementMoves());
        // Reset play states
        setIndices([]);
        setTiles([]);
        // Changes player's turn
        dispatch(nextPlayer(players));
      }, 3000);
    }
  }, [indices, tiles, dispatch, players])
  
  
  return (
    <>
      <Topbar />
      <ul className={`grid ${gridSize === 16 ? '4x4' : '6x6'}`}>
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
    </>
  )
}
