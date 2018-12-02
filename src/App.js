import React, { Component } from 'react';
import './App.css';
import ProjectsPage from './Components/ProjectsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Portfolio Placeholder</h2>
        </header>
        <ProjectsPage />
      </div>
    );
  }
}

export default App;
