import React from 'react';
import { Card, Image } from 'semantic-ui-react';

export default function ProjectCard(props) {
  // debugger
  return (
    <Card color='blue' raised >
      <Image src='favicon.ico'/>
      <Card.Content>
        <Card.Header>{props.project.name}</Card.Header>
      </Card.Content>
    </Card>
  )
}