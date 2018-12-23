import React from 'react';
import medium from '../Images/Medium-Monogram.png';
import twitter from '../Images/Twitter-Logo.png';
import linkedin from '../Images/Linkedin-Logo.png';
import github from '../Images/Github-Logo.png';

const footerIconStyle = {
  backgroundColor: 'transparent',
  width: '50px',
  paddingLeft: '3px',
  paddingRight: '3px',
};

const Footer = () => {
  return (
    <div id='portfolio-footer' >
      <div id='footer-contact'><h3>Contact</h3>
        <p>peter.traversa@gmail.com</p>
        <p>516-455-0774</p>
      </div>
      <div id='footer-follow' ><h3>Follow</h3>
      <div id='follow-icons'>
        <a target='_blank' rel='noopener noreferrer' href='https://medium.com/@peter.traversa/'>
          <img alt='medium icon' src={ medium } style={ footerIconStyle } />
        </a>
        <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/thisisjustpete/'>
          <img alt='twitter icon' src={ twitter } style={ footerIconStyle } />
        </a>
        <a target='_blank' rel='noopener noreferrer' href='https://github.com/peter-traversa'>
          <img alt='github icon' src={ github } style={ footerIconStyle } />
        </a>
      </div>
      </div>
      <div id='footer-connect' ><h3>Connect</h3>
        <a target='_blank' rel='noopener noreferrer' href='https://linkedin.com/in/peter-traversa/'>
          <img alt='linkedin icon' src={ linkedin } style={ footerIconStyle } />
        </a>
      </div>
    </div>
  )
};

export default Footer;