import React from 'react';
import SocialNav from './socialNav'
import Nav from './nav'
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <SocialNav />
            <Nav />
        </div>
    )
}

export default Header