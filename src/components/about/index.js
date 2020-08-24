import React from 'react';
import './about.css'
import aboutImage from './../../assets/img/about.jpg';

const About = () => {
  return (
    <div id='about'>
      <div className='container py-5'>
        <div className='section-header py-5 text-center'>
          <h3 className='section-title'>
            <span>Our </span>Company
          </h3>
          <p className='section-subtitle mr-auto ml-auto'>
            Individualized quality care that meets the total needs of the
            patient Individualized quality care that quality care that
            Individualized quality care that meets the total.
          </p>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='aboutImage'>
                <img src={aboutImage} alt='about company' />
              </div>
            </div>
            <div className='col-lg-6'>
              <h3 className='about-title'>About us</h3>
              <div className='about-description'>
                <p>
                  Curabitur aliquet quam id dui posuere blandit. Donec
                  sollicitudin molestie malesuada Pellentesque ipsum id orci
                  porta dapibus. Vivamus suscipit tortor eget felis porttitor
                  volutpat.
                </p>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor , sed
                  quia non numquam eius modi tempora incidunt ut labore et
                  dolore magnam aliquam quaerat voluptatem. Nisi ut aliquid ex
                  ea commodi consequatur?
                </p>
                <p>
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae consequatur, vel illum qui
                  dolorem eum fugiat quo voluptas nulla pariatur
                </p>
                <a href='#' className='btn btn-primary rounded-0'>Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
