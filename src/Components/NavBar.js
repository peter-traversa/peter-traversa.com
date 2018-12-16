import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const link = {
  paddingLeft: '10px',
  paddingRight: '10px',
  paddingTop: '10px',
  paddingBottom: '10px',
  marginBottom: '35px',
  marginTop: '2px',
  marginLeft: '2px',
  marginRight: '2px',
  color: 'black',
  background: '#dbf0fd',
  borderRadius: '5px',
}

const navbar = {
  backgroundColor: 'midnightblue',
  margin: '0px',
  borderRadius: '0px',
  height: '75px',
}

const NavBar = () =>
  <Menu style={navbar} >
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'blue',
        color: 'white'
      }}
    >Home</NavLink>
    <NavLink
      to="/bio"
      exact
      style={link}
      activeStyle={{
        background: 'blue',
        color: 'white'
      }}
    >Bio</NavLink>
    <NavLink
      to="/projects"
      exact
      style={link}
      activeStyle={{
        background: 'blue',
        color: 'white'
      }}
    >Recent Projects</NavLink>
    <NavLink
      to="/resume"
      exact
      style={link}
      activeStyle={{
        background: 'blue',
        color: 'white'
      }}
    >Resume</NavLink>
  </Menu>;

export default NavBar;