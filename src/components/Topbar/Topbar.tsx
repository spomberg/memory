import './Topbar.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { abortGame } from '../../features/state/stateSlice';
import { resetGrid } from '../../features/grid/gridSlice';
import { resetPlayer } from '../../features/currentPlayer/currentPlayerSlice';
import { resetMoves } from '../../features/moves/movesSlice';
import { resetMatchedTiles } from '../../features/matched/matchedSlice';
import { setGrid } from '../../features/grid/gridSlice';
import { generateNumberGrid, generateIconGrid } from '../../helpers/helpers';
import { resetTiles } from '../../features/tiles/tilesSlice';
import { resetIndices } from '../../features/indices/indicesSlice';
import { initiateScore } from '../../features/score/scoreSlice';
import { useStopwatch } from 'react-timer-hook';
import { setTimer } from '../../features/timer/timerSlice';
import { useEffect } from 'react';

export default function Topbar() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.value);
  const gridSize = useAppSelector((state) => state.gridSize.value);
  const players = useAppSelector((state) => state.players.value);
  const { seconds, minutes, reset } = useStopwatch({ autoStart: true })

  // Resets states
  const resetStates = () => {
    dispatch(resetPlayer());
    dispatch(resetMoves());
    dispatch(resetMatchedTiles());
    dispatch(resetTiles());
    dispatch(resetIndices());
    dispatch(initiateScore(players));
    reset();
  }

  useEffect(() => {
    const time = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    dispatch(setTimer(time));
  
  }, [dispatch, minutes, seconds])

  return (
    <div className='topbar'>
      <h1>memory</h1>
      <div>
        <button
          onClick={() => {
            resetStates();
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
          onClick={() => {
            resetStates();
            dispatch(abortGame());
            dispatch(resetGrid());
        }}>
          New Game
        </button>
      </div>
    </div>
  )
}
