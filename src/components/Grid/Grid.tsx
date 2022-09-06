import './Grid.scss';
import Topbar from '../Topbar/Topbar';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setGrid } from '../../features/grid/gridSlice';
import { useEffect } from 'react';
import generateNumberGrid from '../../helpers/helpers';

export default function Grid() {
  const dispatch = useAppDispatch();
  const gridSize = useAppSelector((state) => state.gridSize.value);
  const players = useAppSelector((state) => state.players.value);
  const theme = useAppSelector((state) => state.theme.value);
  const grid = useAppSelector((state) => state.grid.value);

  useEffect(() => {
    switch (theme) {
      case 'numbers':
        dispatch(setGrid(generateNumberGrid(gridSize)));
        break;
    }
  }, [])
  
  return (
    <>
      <Topbar />
      <ul className='grid'>
        {grid.map((tile: any, index: number) => {
          return (
            <li key={index}>
              <div className='tile'>
                {tile}
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
