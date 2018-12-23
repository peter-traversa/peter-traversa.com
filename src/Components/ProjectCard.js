import React from 'react';
import { Card } from 'semantic-ui-react';

export default function ProjectCard(props) {
  return (
    <Card color='blue' raised='true' >
      <Card.Content>
        <Card.Header>{props.project.name}</Card.Header><br></br>
        <Card.Header>{props.project.language}</Card.Header><br></br>
        <Card.Header>{props.project.created_at}</Card.Header>
      </Card.Content>
    </Card>
  )
}