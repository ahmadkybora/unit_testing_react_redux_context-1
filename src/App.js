import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { userContext } from './contexts/userContext';

function App() {
  // بوسیله متد زیر میتوان به کانتکست مورد نظر دسترسی داشت
  const a = useContext(userContext);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
