import React from 'react';
import { Card } from 'semantic-ui-react';

export default function ProjectCard(props) {
  return (
    <Card color='blue' raised >
      <Card.Content>
        <Card.Header>{props.project.name}</Card.Header>
      </Card.Content>
    </Card>
  )
}