import React from 'react';
import './home.css'

const Home = () => {
  return (
    <div className='home-content d-flex justify-content-center align-items-center py-5' >
        <div className='position-absolute z-index-1 container text-center text-light'>
        <h1 className='title'>WELCOME</h1>
        <h2 className='sub-title mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            laborum minus molestiae.
        </h2>
        <button className='btn btn-primary rounded-0 mr-2'>
            Learn More
        </button>
        <button className='btn btn-light text-dark rounded-0'>
            Contact Us
        </button>
        </div>
    </div>
  );
};

export default Home;