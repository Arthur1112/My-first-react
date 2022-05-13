// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0) // lets react listen for variable changes
  const [firstName, setFirstName] = useState('Art')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const loginLogout = () => setIsLoggedIn(!isLoggedIn)

  return (
    <div className="App">
      <header className="App-header">
        <h1>You clicked the button {count} times.</h1>
        <button onClick={() => setCount(count + 1)}>Addition</button>&nbsp;
        <button className='btn-blue' onClick={() => setCount(0)}>REST</button>&nbsp;
        <button className='btn-red' onClick={() => setCount(count ? count - 1 : 0)}>Subtraction</button>
        {/* <button onClick={() => setCount(Math.max(count - 1, 0))}>-</button> */}
        <h2>{isLoggedIn ? 'Welcome Back' : 'Welcome Guest'}</h2>
        <button className='btn-blue' onClick={loginLogout}>{isLoggedIn ? 'Logout' : 'Login'}</button>

        <section>
        <h2 onClick={() => setFirstName('Arthur')}>Hello {firstName}.</h2>
        </section>
      </header>
    </div>
  );
}

export default App;
