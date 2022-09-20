import './Topbar.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { abortGame } from '../../features/state/stateSlice';
import { resetGrid } from '../../features/grid/gridSlice';
import { setGrid } from '../../features/grid/gridSlice';
import { generateNumberGrid, generateIconGrid } from '../../helpers/generateGrid';
import { hideGrid } from '../../features/showGrid/showGridSlice';

export default function Topbar(props: {resetStates: any}) {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.value);
  const gridSize = useAppSelector((state) => state.gridSize.value);

  return (
    <div className='topbar'>
      <h1>memory</h1>
      <div>
        <button
          className='menu-button'
          onClick={() => console.log('clicked')}
        >
          Menu
        </button>
        <button
          className='restart-button'
          onClick={() => {
            props.resetStates();
            switch (theme) {
              case 'numbers':
                dispatch(setGrid(generateNumberGrid(gridSize)));
                break;
              case 'icons':
                dispatch(setGrid(generateIconGrid(gridSize)));
            }
          }}
        >
          Restart
        </button>
        <button 
        className='new-game-button'
          onClick={() => {
            props.resetStates();
            dispatch(hideGrid());
            setTimeout(() => {
              dispatch(resetGrid());
              dispatch(abortGame());
            }, 300);
        }}>
          New Game
        </button>
      </div>
    </div>
  )
}
