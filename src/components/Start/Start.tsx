import './Start.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setIconsTheme, setNumbersTheme } from '../../features/theme/themeSlice';
import { setPlayers } from '../../features/players/playersSlice';
import { setGridSize } from '../../features/gridSize/gridSizeSlice';
import { startGame } from '../../features/state/stateSlice';
import { hideStart, showStart } from '../../features/showStart/showStartSlice';
import { useEffect } from 'react';

export default function Start() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.value);
  const players = useAppSelector((state) => state.players.value);
  const gridSize = useAppSelector((state) => state.gridSize.value);
  const isStartShowing = useAppSelector((state) => state.showStart.value);

  // Shows component 0.5s after it mounts - for animation purposes
  useEffect(() => {
    setTimeout(() => {
      dispatch(showStart());
    }, 500);
  }, [dispatch])

  return (
    <div className={`start ${isStartShowing ? '' : 'hidden'}`}>
      <h1 className='start-title'>memory</h1>
      <div className='game-settings'>
        <div>
          <span>Select Theme</span>
          <div className='buttons-line'>
            <button
              {...theme === 'numbers' && {className: 'selected'}}
              onClick={() => dispatch(setNumbersTheme())}
            >
              Numbers
            </button> 
            <button
              {...theme === 'icons' && {className: 'selected'}}
              onClick={() => dispatch(setIconsTheme())}
            >
              Icons
            </button>
          </div>
        </div>
        <div className='number-of-players'>
          <span>Number of Players</span>
          <div className='buttons-line'>
            <button
              {...players === 1 && {className: 'selected'}}
              onClick={() => dispatch(setPlayers(1))}
            >
              1
            </button> 
            <button
              {...players === 2 && {className: 'selected'}}
              onClick={() => dispatch(setPlayers(2))}
            >
              2
            </button>
            <button
              {...players === 3 && {className: 'selected'}}
              onClick={() => dispatch(setPlayers(3))}
            >
              3
            </button>
            <button
              {...players === 4 && {className: 'selected'}}
              onClick={() => dispatch(setPlayers(4))}
            >
              4
            </button>
          </div>
        </div>
        <div>
          <span>Grid Size</span>
          <div className='buttons-line'>
            <button
              {...gridSize === 16 && {className: 'selected'}}
              onClick={() => dispatch(setGridSize(16))}
            >
              4x4
            </button> 
            <button
              {...gridSize === 36 && {className: 'selected'}}
              onClick={() => dispatch(setGridSize(36))}
            >
              6x6
            </button>
          </div>
        </div>
        <div>
          <button 
            className='start-button'
            onClick={() => {
              dispatch(hideStart());
              setTimeout(() => {
                dispatch(startGame());
              }, 500);
            }}
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  )
}
