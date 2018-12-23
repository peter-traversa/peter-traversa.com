import React, { Component } from 'react';

export default class HomePage extends Component {
  constructor() {
    super();

    this.state = {

    };
  }
  render() {

    const recommendations = [
      {reco1: {
        recommender: 'Jessica Long',
        body: 'I had the pleasure of working with Pete recently on a website that had a React frontend and Rails backend. He was very easy going and eager to start in on a new technology stack. He jumped right in and began work on developing the backend api which stored our users and card decks we would later use for our game. He also implemented audio into the project which played when a user finished the game. Our group was able to complete the project on time, in part, due to his ability to debug and solve problems quickly. ',
      }},
      {reco2: {
        recommender: 'Michael Peterson',
        body: 'Pete is a talented programmer with a unique approach to solving problems. Together he and I worked on a ruby/javascript application where his skills were essential to the completion of our project. He was always looking for ways to improve code as well as functionality but also ensured our project was completed on time and exceeded expectations. His clear passion for coding as well as his ability to communicate effectively in a group was a pleasant experience. I highly recommend Pete.',
      }},
      {reco3: {
        recommender: 'Kevin Malone',
        body: 'I worked with Peter for thirteen years at AECReprographics. His insights into how the user interface drove the data workflow helped us to continually improve our product and better serve our customers.',
      }}
    ];

    return (
      <h1>Portfolio Placeholder</h1>
    )
  }
};