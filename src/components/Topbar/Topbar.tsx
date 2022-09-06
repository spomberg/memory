import './Topbar.scss';
import { useAppDispatch } from '../../hooks/hooks';
import { abortGame } from '../../features/state/stateSlice';

export default function Topbar() {
  const dispatch = useAppDispatch();

  return (
    <div className='topbar'>
      <h1>memory</h1>
      <div>
        <button>
          Restart
        </button>
        <button onClick={() => dispatch(abortGame())}>
          New Game
        </button>
      </div>
    </div>
  )
}
