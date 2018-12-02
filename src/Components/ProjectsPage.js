import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import { Card } from 'semantic-ui-react';
import '../Stylesheets/ProjectsPage.css';

export default class ProjectsPage extends Component {
  constructor() {
    super();

    this.state = {
      projects: [],
    };
  }
  
  componentDidMount() {
    fetch('https://api.github.com/users/peter-traversa/repos?sort=created&direction=desc')
    .then(res => res.json())
    .then(projects => this.setState({projects}));
  }

  render() {
    return (
      <>
        <h1>Recently Updated Projects</h1>
        <Card.Group className='project-cards'>
          {this.state.projects.map((project, idx) => {
            return (
              <ProjectCard key={idx} project={project}/>
            )
          })}
        </Card.Group>
      </>
    )
  }
}