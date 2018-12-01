import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

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
            <Card key={idx} color='red' className='ui card'>
              <Card.Content>
                <Card.Header>
                  {project.name}
                </Card.Header>
                <Card.Description>
                  {project.url}
                </Card.Description>
              </Card.Content>
            </Card>
          )
        })}
      </React.Fragment>
    )
  }
}