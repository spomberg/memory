import './Topbar.scss';
import { useAppDispatch } from '../../hooks/hooks';
import { abortGame } from '../../features/state/stateSlice';
import { resetGrid } from '../../features/grid/gridSlice';
import { resetPlayer } from '../../features/currentPlayer/currentPlayerSlice';
import { resetMoves } from '../../features/moves/movesSlice';
import { resetMatchedTiles } from '../../features/matched/matchedSlice';

export default function Topbar() {
  const dispatch = useAppDispatch();

  // Resets states
  const reset = () => {
    dispatch(resetPlayer());
    dispatch(resetMoves());
    dispatch(resetMatchedTiles());
  }

  return (
    <div className='topbar'>
      <h1>memory</h1>
      <div>
        <button
          onClick={() => {
            reset();
          }}
        >
          Restart
        </button>
        <button 
          onClick={() => {
            reset();
            dispatch(abortGame());
            dispatch(resetGrid());
        }}>
          New Game
        </button>
      </div>
    </div>
  )
}
