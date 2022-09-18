import './Score.scss';
import { useAppSelector } from '../../hooks/hooks';
import { convertPlayersToArr } from '../../helpers/generateGrid';

export default function MultiplayerScore() {
  const players = useAppSelector((state) => state.players.value);
  const playersArr = convertPlayersToArr(players);
  const score = useAppSelector((state) => state.score.value);
  const currentPlayer = useAppSelector((state) => state.currentPlayer.value);

  return (
    <div className='score multiplayer'>
      <ul>
        {playersArr.map((index: number) => {
          return (
            <li key={index}>
              <div className={`triangle ${currentPlayer === index ? 'show' : ''}`}></div>
              <div className={`score-box ${currentPlayer === index ? 'current-player' : ''}`}>
                <span>Player {index + 1}</span>
                <h3>{score[index]}</h3>
              </div>
              {currentPlayer === index && <span className='current-turn'>CURRENT TURN</span>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
