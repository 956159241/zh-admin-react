import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <div className="test">
        TEST SCSS
        <div className="test1">TEST SCSS111</div>
      </div>
    </div>
  );
}

export default App;
