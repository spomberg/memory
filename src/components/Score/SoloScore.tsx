import './Score.scss';
import { useAppSelector } from '../../hooks/hooks';

export default function SoloScore() {
  const moves = useAppSelector((state) => state.moves.value);

  return (
    <div className='score'>
      <div className='score-box'>
        <span>Time</span>
      </div>
      <div className='score-box'>
        <span>Moves</span>
        <span>{moves}</span>
      </div>
    </div>
  )
}
