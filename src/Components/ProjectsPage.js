import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

export default class Github extends Component {
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
    console.log(this.state.projects);
    return (
      <React.Fragment>
        {this.state.projects.map((project, idx) => {
          return (
            <ProjectCard key={idx} project={project}/>
          )
        })}
      </React.Fragment>
    )
  }
}