import './Grid.scss';
import Topbar from '../Topbar/Topbar';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setGrid } from '../../features/grid/gridSlice';
import { addMatchedTiles } from '../../features/matched/matchedSlice';
import { useEffect } from 'react';
import { generateNumberGrid, generateIconGrid } from '../../helpers/helpers';
import { ReactSVG } from 'react-svg';

export default function Grid() {
  const dispatch = useAppDispatch();
  const gridSize = useAppSelector((state) => state.gridSize.value);
  const theme = useAppSelector((state) => state.theme.value);
  const grid = useAppSelector((state) => state.grid.value);
  const matched = useAppSelector((state) => state.matched.value);

  useEffect(() => {
    switch (theme) {
      case 'numbers':
        dispatch(setGrid(generateNumberGrid(gridSize)));
        break;
      case 'icons':
        dispatch(setGrid(generateIconGrid(gridSize)));
    }
  }, [dispatch, gridSize, theme]);
  
  return (
    <>
      <Topbar />
      <ul className={`grid ${gridSize === 16 ? '4x4' : '6x6'}`}>
        {grid.map((tile: any, index: number) => {
          return (
            <li key={index}>
              <div 
                className='tile'
                {...matched.includes(index) && {disabled: true}}
                >
                {theme === 'numbers' ? <span>{tile}</span> : <ReactSVG src={tile} />}
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
