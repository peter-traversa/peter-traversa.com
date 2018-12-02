import React, { Component } from 'react';
import './Stylesheets/App.css';
import ProjectsPage from './Components/ProjectsPage';
import BioPage from './Components/BioPage';
import HomePage from './Components/HomePage';
import ResumePage from './Components/ResumePage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HomePage />
        <ProjectsPage />
        <BioPage />
        <ResumePage />
      </React.Fragment>
    );
  }
}

export default App;
