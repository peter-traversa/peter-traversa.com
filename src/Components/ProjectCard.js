import React from 'react';
import { Card } from 'semantic-ui-react';

export default function ProjectCard(props) {
  console.log(props)
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
      </Card.Content>
    </Card>
  )
}