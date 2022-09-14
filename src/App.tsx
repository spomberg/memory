import './App.scss';
import { useAppSelector } from './hooks/hooks';
import Start from './components/Start/Start';
import Grid from './components/Grid/Grid';

function App() {
  const state = useAppSelector((state) => state.state.value);
  const isGridShowing = useAppSelector((state) => state.showGrid.value);

  return (
    <div className="app">
      {state === 'startPage' && <Start />}
      {(state === 'gamePage' || state === 'resultsPage') && 
        <div className={`grid-page ${isGridShowing ? '': 'hidden'}`}>
          <Grid />
        </div>
      }
    </div>
  );
}

export default App;
