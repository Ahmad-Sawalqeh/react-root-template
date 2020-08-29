import React from 'react';
import SmoothScrollLink from './../../scroll'

const Nav = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-light'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          <span>Root</span>
          <i className='fas fa-circle ml-1' />
        </a>
        <div className='nav'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <SmoothScrollLink targetId='home'  classes='nav-link'>
                Home
              </SmoothScrollLink>
            </li>
            <li className='nav-item'>
              <SmoothScrollLink targetId='about' offset={-80} classes='nav-link'>
                About
              </SmoothScrollLink> 
            </li>
            <li className='nav-item'>             
              <SmoothScrollLink targetId='services' offset={-80} classes='nav-link'>
                Services
              </SmoothScrollLink>
            </li>
            <li className='nav-item'>
              <SmoothScrollLink targetId='blog' offset={-80} classes='nav-link'>
                Blog
              </SmoothScrollLink>
            </li>
            <li className='nav-item'>
              <SmoothScrollLink targetId='contact' offset={-80} classes='nav-link'>
                Contact
              </SmoothScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;