import './GameOver.scss';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { useEffect, useRef } from 'react';
import { setGrid, resetGrid } from '../../features/grid/gridSlice';
import { generateNumberGrid, generateIconGrid } from '../../helpers/helpers';
import { abortGame, startGame } from '../../features/state/stateSlice';

export default function GameOverSolo(props: {resetStates: any}) {
  const state = useAppSelector((state) => state.state.value);
  const show = useRef(false);
  const theme = useAppSelector((state) => state.theme.value);
  const gridSize = useAppSelector((state) => state.gridSize.value); 
  const dispatch = useAppDispatch();
  
  // Turns modal on every time the state changes to resultsPage
  useEffect(() => {
    if (state === 'resultsPage') {
      show.current = true;
    } else show.current = false;
  }, [show, state])
  
  return (
    <>
      <Modal show={show.current}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
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
          <Button variant="primary" onClick={() => {
            props.resetStates();
            dispatch(abortGame());
            dispatch(resetGrid());
          }}>
            Start New Game
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
