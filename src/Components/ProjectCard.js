import React from 'react';
import { Card, Image } from 'semantic-ui-react';

export default function ProjectCard(props) {
  // debugger
  return (
    <Card>
      <Image src='../../public/favicon.ico'/>
      <Card.Content>
        <Card.Header>{props.project.name}</Card.Header>
      </Card.Content>
    </Card>
  )
}