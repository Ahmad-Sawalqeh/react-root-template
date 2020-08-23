import React from 'react';

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
                <a href='#' className='nav-link'>Home</a>
            </li>
            <li className='nav-item'>
                <a href='#' className='nav-link'>About</a>                
            </li>
            <li className='nav-item'>
                <a href='#' className='nav-link'>Services</a>                
            </li>
            <li className='nav-item'>
                <a href='#' className='nav-link'>Blog</a>                
            </li>
            <li className='nav-item'>
                <a href='#' className='nav-link'>Contact</a>                
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;