import React, { Component } from 'react';
const Feed = require('rss-to-json');

export default class BlogPage extends Component {
  constructor() {
    super();

    this.state = {
      blogs: [],
    };
  }
  
  componentDidMount() {
    fetch('https://medium.com/@peter.traversa/latest?format=json')
    .then(res => res.json())
    .then(res => console.log(res));
  }

  componentWillUnmount() {
    this.setState({blog: []});
  }
  render() {
    return (
      <React.Fragment>
        <h1>Biography</h1>
        <p>lorem ipsum</p>
      </React.Fragment>
    )
  }
}