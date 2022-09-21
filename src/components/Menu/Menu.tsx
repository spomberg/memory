import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
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
    <div className="menu">
      <Modal show={show} onHide={() => dispatch(hideMenu())}>
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
            onClick={() => dispatch(hideMenu())}>
            Resume Game
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  )
}
