import './Score.scss';
import { useAppSelector } from '../../hooks/hooks';

export default function SoloScore() {
  const moves = useAppSelector((state) => state.moves.value);
  const time = useAppSelector((state) => state.timer.value);

  return (
    <div className='score'>
      <div className='score-box time'>
        <span>Time</span>
        <h3>{time}</h3>
      </div>
      <div className='score-box moves'>
        <span>Moves</span>
        <h3>{moves}</h3>
      </div>
    </div>
  )
}
