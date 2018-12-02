import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import { Card } from 'semantic-ui-react';

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
      <Card.Group>
        {this.state.projects.map((project, idx) => {
          return (
            <ProjectCard key={idx} project={project}/>
          )
        })}
      </Card.Group>
    )
  }
}