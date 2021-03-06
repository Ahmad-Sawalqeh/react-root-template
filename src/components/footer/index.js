import React from 'react';
import SmoothScrollLink from './../../scroll'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container text-light pt-5'>
        <div className='row'>
          <div className='col-lg-4 mb-5'>
            <div className='footer-title'>
              <h6>About Us</h6>
            </div>
            <div className='footer-content'>
              <p>
                <small className='text-muted'>
                  Aenean suscipit eget mi act fermentum phasellus vulputate
                  turpis tincidunt. Aenean suscipit eget. Aenean suscipit eget
                  mi act fermentum phasellus vulputate turpis tincidunt. Aenean
                  suscipit ege Aenean suscipit eget mi act fermentum phasellus.
                </small>
              </p>
              <button className='btn btn-sm btn-primary rounded-0'>
                Learn more
              </button>
            </div>
          </div>
          <div className='col-lg-2 mb-5'>
            <div className='footer-title'>
              <h6>Quick Links</h6>
            </div>
            <div className='footer-content'>
              <ul className='list-group quick-links'>
                <li>
                  <SmoothScrollLink targetId='home'>
                    Home
                  </SmoothScrollLink>
                </li>
                <li>
                  <SmoothScrollLink targetId='about' offset={-80}>
                    About
                  </SmoothScrollLink> 
                </li>
                <li>
                  <SmoothScrollLink targetId='services' offset={-80}>
                    Services
                  </SmoothScrollLink> 
                </li>
                <li>
                  <SmoothScrollLink targetId='blog' offset={-80}>
                    Blog
                  </SmoothScrollLink> 
                </li>
                <li>
                  <SmoothScrollLink targetId='contact' offset={-80}>
                    Contact
                  </SmoothScrollLink> 
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Latest News</h6>
            </div>
            <div className='footer-content'>
              <p>
                <small className='text-muted'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </small>
              </p>
              <p>
                <small className='text-muted'>
                  Pellentesque et pulvinar enim. Quisque at tempor ligula Natus
                  error sit voluptatem
                </small>
              </p>
              <p>
                <small className='text-muted'>accusantium doloremque</small>
              </p>
            </div>
          </div>
          <div className='col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Contact Us</h6>
            </div>
            <div className='footer-content'>
              <p className='text-muted'>
                <small>Address : 7689 street, Jordan</small>
              </p>
              <p className='text-muted'>
                <small>Phone : +213 (0) 123 456 789</small>
              </p>
              <p className='text-muted'>
                <small>E-mail : contact@email.com</small>
              </p>
              <div className='social-media mt-4'>
                <a href='#' className='text-light'>
                  <i className='fab fa-facebook-f mr-4' />
                </a>
                <a href='#' className='text-light'>
                  <i className='fab fa-twitter mr-4' />
                </a>
                <a href='#' className='text-light'>
                  <i className='fab fa-instagram mr-4' />
                </a>
                <a href='#' className='text-light'>
                  <i className='fab fa-github' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-footer pt-3 pb-3 text-center'>
        <small>&copy; All Right Reserved. Design By Ahmad Sawalqeh</small>
      </div>
    </footer>
  );
};

export default Footer;
