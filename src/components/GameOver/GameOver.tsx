import './GameOver.scss';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { useEffect, useState } from 'react';
import { setGrid, resetGrid } from '../../features/grid/gridSlice';
import { generateNumberGrid, generateIconGrid } from '../../helpers/generateGrid';
import { abortGame, startGame } from '../../features/state/stateSlice';
import { isTied } from '../../helpers/isTied';
import { generateFinalScore } from '../../helpers/generateFinalScore';
import { hideGrid } from '../../features/showGrid/showGridSlice';

export default function GameOverSolo(props: {resetStates: any}) {
  const state = useAppSelector((state) => state.state.value);
  const [show, setShow] = useState(false);
  const [isGameTied, setIsGameTied] = useState<any>(false);
  const [finalScore, setFinalScore] = useState<any>([{ player: 0, score: 0 }]);
  const theme = useAppSelector((state) => state.theme.value);
  const gridSize = useAppSelector((state) => state.gridSize.value); 
  const time = useAppSelector((state) => state.timer.value);
  const moves = useAppSelector((state) => state.moves.value);
  const score = useAppSelector((state) => state.score.value);
  const players = useAppSelector((state) => state.players.value);
  const dispatch = useAppDispatch();
  
  // Turns modal on every time the state changes to resultsPage
  useEffect(() => {
    if (state === 'resultsPage') {
      setIsGameTied(isTied(score));
      setFinalScore(generateFinalScore(score));
      setShow(true);
    } else setShow(false);
  }, [state, score])
  
  return (
    <>
      <Modal className='game-over' show={show}>
        {(players === 1 && state === 'resultsPage') && (
          <>
            <Modal.Header>
              <Modal.Title>You did it!</Modal.Title>
              <span>Game over! Here's how you got on...</span>
            </Modal.Header>
            <Modal.Body>
              <div className='results-box'>
                <span>Time Elapsed</span>
                <h3>{time}</h3>
              </div>
              <div className='results-box'>
                <span>Moves Taken</span>
                <h3>{`${moves} Moves`}</h3>
              </div>
            </Modal.Body>
          </>
        )}
        {(players !== 1 && state === 'resultsPage') && (
          <>
            <Modal.Header>
              <Modal.Title>{isGameTied ? `It's a tie!` : `Player ${finalScore[0].player} Wins!`}</Modal.Title>
              <span>Game over! Here are the results...</span>
            </Modal.Header>
            <Modal.Body>
              <ul>
                {finalScore.map((score: any, index: number) => {
                  return(
                    <li key={index}>
                      <div className={`results-box ${(index === 0 || score.score === isGameTied) ? 'winner' : ''}`}>
                        <span>{`Player ${score.player} ${(index === 0 || score.score === isGameTied) ? '(Winner!)' : ''}`}</span>
                        <h3>{`${score.score} ${score.score === 1 ? 'Pair' : 'Pairs'}`}</h3>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </Modal.Body>
          </>
        )}
        <Modal.Footer>
          <Button className='restart-button' onClick={() => {
            props.resetStates();
            dispatch(startGame());
            switch (theme) {
              case 'numbers':
                dispatch(setGrid(generateNumberGrid(gridSize)));
                break;
              case 'icons':
                dispatch(setGrid(generateIconGrid(gridSize)));
            }
          }}>
            Restart
          </Button>
          <Button 
            className='new-game-button'
            onClick={() => {
              setShow(false);
              dispatch(hideGrid());
              setTimeout(() => {
                props.resetStates();
                dispatch(resetGrid());
                dispatch(abortGame());
              }, 500);
          }}>
            Setup New Game
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
