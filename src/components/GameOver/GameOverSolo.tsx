import './GameOver.scss';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useAppSelector } from '../../hooks/hooks';
import { useEffect, useRef } from 'react';

export default function GameOverSolo() {
  const state = useAppSelector((state) => state.state.value);
  const players = useAppSelector((state) => state.players.value);
  const show = useRef(false);
  
  useEffect(() => {
    if (state === 'resultsPage' && players === 1) {
      show.current = true
    }
  }, [show, state, players])
  
  return (
    <>
      <Modal show={show.current}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => console.log('Restart')}>
            Restart
          </Button>
          <Button variant="primary" onClick={() => console.log('Start New Game')}>
            Start New Game
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
