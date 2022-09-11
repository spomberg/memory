import './Score.scss';
import { useAppSelector } from '../../hooks/hooks';
import { convertPlayersToArr } from '../../helpers/helpers';

export default function MultiplayerScore() {
  const players = useAppSelector((state) => state.players.value);
  const playersArr = convertPlayersToArr(players);
  const score = useAppSelector((state) => state.score.value);
  const currentPlayer = useAppSelector((state) => state.currentPlayer.value);

  return (
    <div className='score'>
      <ul>
        {playersArr.map((index: number) => {
          return (
            <li 
              className={`score-box ${currentPlayer === index ? 'current-player' : ''}`}
              key={index}
            >
              {currentPlayer === index && <div className='triangle'></div>}
              <div>
                <span>Player {index + 1}</span>
                <span>{score[index]}</span>
              </div>
              {currentPlayer === index && <span className='current-turn'>CURRENT TURN</span>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
