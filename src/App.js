import { useSelector, useDispatch } from 'react-redux' 
import { increment, decrement, signin } from './actions';

function App() {

  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>Plus</button>
      <button onClick={() => dispatch(decrement())}>Minus</button>
      
      <button onClick={() => dispatch(signin())}>Sign In</button>

      {isLogged ? <h3>Valuable info</h3> : ''}

    </div>
  );
}

export default App;
