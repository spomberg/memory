import './App.scss';
import { useAppSelector } from './hooks/hooks';
import Start from './components/Start/Start';

function App() {
  const state = useAppSelector((state) => state.state.value);

  return (
    <div className="App">
      {state === 'startPage' && <Start />}
    </div>
  );
}

export default App;
