import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const link = {
  paddingLeft: '10px',
  paddingRight: '10px',
  paddingTop: '10px',
  margin: '1px',
  color: 'black',
  background: 'lightblue',
  borderRadius: '5px',
}

const NavBar = () =>
  <Menu>
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
    >Projects</NavLink>
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