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

export default function Topbar() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.value);
  const gridSize = useAppSelector((state) => state.gridSize.value);
  const players = useAppSelector((state) => state.players.value);

  // Resets states
  const reset = () => {
    dispatch(resetPlayer());
    dispatch(resetMoves());
    dispatch(resetMatchedTiles());
    dispatch(resetTiles());
    dispatch(resetIndices());
    dispatch(initiateScore(players));
  }

  return (
    <div className='topbar'>
      <h1>memory</h1>
      <div>
        <button
          onClick={() => {
            reset();
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
