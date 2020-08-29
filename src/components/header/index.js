import React from 'react';
import SocialNav from './socialNav'
import Nav from './nav'

const Header = () => {
    return (
        <div className='header'>
            <SocialNav />
            <Nav />
        </div>
    )
}

export default Header