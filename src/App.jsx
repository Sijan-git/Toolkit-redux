import { useDispatch, useSelector } from 'react-redux';
import './App.css'

import logo from './logo.svg'
import { decrement, increment, incrementBy } from './store/slices/counter';

function App() {

  const { counter } = useSelector( state => state.counter )
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>   count is: { counter }  </p>
        <button onClick={ () => dispatch (increment ())}>
          Increment 
        </button>
        <button onClick={ () => dispatch (decrement ())}>
          Decrement  
        </button>
        <button onClick={ () => dispatch (incrementBy(5))}>
          Increment by 2  
        </button>
      
      
       
        
      </header>
    </div>
  )
}

export default App