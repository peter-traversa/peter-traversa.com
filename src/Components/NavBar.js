import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import '../Stylesheets/Navlink.css';

const NavBar = () =>
  <Menu color='green'>
    <NavLink
      to="/"
      exact
      className='navlink'
      activeStyle={{
        background: 'black'
      }}
    >Home</NavLink>
    <NavLink
      to="/bio"
      exact
      className='navlink'
      activeStyle={{
        background: 'black'
      }}
    >Bio</NavLink>
    <NavLink
      to="/projects"
      exact
      className='navlink'
      activeStyle={{
        background: 'black'
      }}
    >Projects</NavLink>
    <NavLink
      to="/resume"
      exact
      className='navlink'
      activeStyle={{
        background: 'black'
      }}
    >Resume</NavLink>
  </Menu>;

export default NavBar;