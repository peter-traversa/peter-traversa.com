import React, { Component } from 'react';
import './App.css';
import Github from './Components/GitHub';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Peter Traversa's Portfolio Site</h2>
        </header>
        <Github />
      </div>
    );
  }
}

export default App;
