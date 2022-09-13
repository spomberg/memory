import './App.scss';
import { useAppSelector } from './hooks/hooks';
import Start from './components/Start/Start';
import Grid from './components/Grid/Grid';

function App() {
  const state = useAppSelector((state) => state.state.value);

  return (
    <div className="app">
      {state === 'startPage' && <Start />}
      {(state === 'gamePage' || state === 'resultsPage') && <Grid />}
    </div>
  );
}

export default App;
