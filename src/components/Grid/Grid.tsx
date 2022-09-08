import './Grid.scss';
import Topbar from '../Topbar/Topbar';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setGrid } from '../../features/grid/gridSlice';
import { addMatchedTiles } from '../../features/matched/matchedSlice';
import { addPlay, resetPlay } from '../../features/play/playSlice';
import { useEffect, useState } from 'react';
import { generateNumberGrid, generateIconGrid } from '../../helpers/helpers';
import { ReactSVG } from 'react-svg';

export default function Grid() {
  const dispatch = useAppDispatch();
  const gridSize = useAppSelector((state) => state.gridSize.value);
  const theme = useAppSelector((state) => state.theme.value);
  const grid = useAppSelector((state) => state.grid.value);
  const matched = useAppSelector((state) => state.matched.value);
  const play = useAppSelector((state) => state.play.value);
  const [tiles, setTiles] = useState<Array<any>>([]);

  // Generates grid based on theme state
  useEffect(() => {
    switch (theme) {
      case 'numbers':
        dispatch(setGrid(generateNumberGrid(gridSize)));
        break;
      case 'icons':
        dispatch(setGrid(generateIconGrid(gridSize)));
    }
  }, [dispatch, gridSize, theme]);

  function handleClick(index: number, tile: any) {
    dispatch(addPlay(index)); // Adds tile index number to play array
    setTiles([...tiles, tile]); // Adds tiles to array for comparison
  }

  // Handles the play, called everytime a tile is clicked.
  useEffect(() => {
    if (play.length > 1) {
      setTimeout(() => {
        if (tiles[0] === tiles[1]) {
          // Adds matched tiles to matched array
          dispatch(addMatchedTiles(play[0]));
          dispatch(addMatchedTiles(play[1]));
          // Will add points later
        }
        // Reset play states
        dispatch(resetPlay());
        setTiles([]);
      }, 3000);
    }
  }, [play, tiles, dispatch])
  
  
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
                className={`tile ${matched.includes(index) ? 'matched' : ''}${play.includes(index) ? 'selected' : ''}`}
                {...(matched.includes(index) || play.includes(index) || play.length > 1) && {disabled: true}}
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
