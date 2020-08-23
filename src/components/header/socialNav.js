import React from 'react';

const SocialNav = () => {
  return (
    <div className='top-bar py-1 text-light'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex py-2'>
            <div className='d-flex align-item-center mr-3'>
              <i className='fas fa-phone-alt mr-2' />
              <small>+213 (0) 123 456 789</small>
            </div>
            <div className='d-flex align-item-center'>
              <i className='fas fa-envelope mr-2' />
              <small>contact@email.com</small>
            </div>
          </div>
          <div className='d-flex py-2'>
            <div className='social-media d-flex align-item-center'>
              <a href='https://www.facebook.com' target='blank' className='text-light'>
                <i className='fab fa-facebook-f mr-4' />
              </a>
              <a href='https://www.twitter.com' target='blank' className='text-light'>
                <i className='fab fa-twitter mr-4' />
              </a>
              <a href='https://www.instagram.com' target='blank' className='text-light'>
                <i className='fab fa-instagram mr-4' />
              </a>
              <a href='https://www.github.com' target='blank' className='text-light'>
                <i className='fab fa-github' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialNav;