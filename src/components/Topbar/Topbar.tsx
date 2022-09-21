import './Topbar.scss';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { abortGame } from '../../features/state/stateSlice';
import { resetGrid } from '../../features/grid/gridSlice';
import { setGrid } from '../../features/grid/gridSlice';
import { generateNumberGrid, generateIconGrid } from '../../helpers/generateGrid';
import { hideGrid } from '../../features/showGrid/showGridSlice';
import { useState } from 'react';

export default function Topbar(props: {resetStates: any}) {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.value);
  const gridSize = useAppSelector((state) => state.gridSize.value);
  const [show, setShow] = useState(false);

  return (
    <div className='topbar'>
      <h1>memory</h1>
      <div>
        <button
          className='menu-button'
          onClick={() => setShow(true)}
        >
          Menu
        </button>
        <button
          className='restart-button'
          onClick={() => {
            props.resetStates();
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
        className='new-game-button'
          onClick={() => {
            props.resetStates();
            dispatch(hideGrid());
            setTimeout(() => {
              dispatch(resetGrid());
              dispatch(abortGame());
            }, 300);
        }}>
          New Game
        </button>
      </div>
      <Modal className='menu' show={show} onHide={() => setShow(false)}>
        <Modal.Body>
          <Button 
            className='restart-button'
            onClick={() => {
              props.resetStates();
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
          </Button>
          <Button 
            className='new-game-button'
            onClick={() => {
              props.resetStates();
              dispatch(hideGrid());
              setTimeout(() => {
                dispatch(resetGrid());
                dispatch(abortGame());
              }, 300);
          }}>
            New Game
          </Button>
          <Button 
            className='resume-game-button'
            onClick={() => setShow(false)}>
            Resume Game
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  )
}
