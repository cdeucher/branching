import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HelloWorld } from '@cabd/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Version 0.0.1
          <HelloWorld />
      </header>
    </div>
  );
}

export default App;
