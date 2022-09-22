import './Menu.scss';
import Modal from 'react-bootstrap/Modal';
import { hideMenu } from '../../features/showMenu/showMenuSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setGrid, resetGrid } from '../../features/grid/gridSlice';
import { generateNumberGrid, generateIconGrid } from '../../helpers/generateGrid';
import { hideGrid } from '../../features/showGrid/showGridSlice';
import { abortGame } from '../../features/state/stateSlice';

export default function Menu(props: {resetStates: any}) {
  const dispatch = useAppDispatch();
  const show = useAppSelector((state) => state.showMenu.value);
  const theme = useAppSelector((state) => state.theme.value);
  const gridSize = useAppSelector((state) => state.gridSize.value);

  return (
    <>
      <Modal className='menu' show={show} onHide={() => dispatch(hideMenu())}>
        <Modal.Body>
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
          <button 
            className='resume-game-button'
            onClick={() => dispatch(hideMenu())}>
            Resume Game
          </button>
        </Modal.Body>
      </Modal>
    </>
  )
}
