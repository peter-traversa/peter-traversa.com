import React from 'react';
import ReactDOM from 'react-dom';
import './Stylesheets/index.css';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import BioPage from './Components/BioPage';
import ProjectsPage from './Components/ProjectsPage';
import ResumePage from './Components/ResumePage';
import Footer from './Components/Footer';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render((
  <Router>
    <React.Fragment>
      <NavBar />
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/bio" component={BioPage} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route exact path="/resume" component={ResumePage} />
      <Footer />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();