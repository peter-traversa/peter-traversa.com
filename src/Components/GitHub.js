import React, { Component } from 'react';

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
    return (
      <ul>
        {this.state.projects.map((project, idx) => {
          return <li key={idx}>{project.name}</li>
        })}
      </ul>
    )
  }
}