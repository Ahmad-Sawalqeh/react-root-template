import React from 'react';

const Numbers = () => {
  return (
    <div id='numbers'>
      <div className='numbers-container' >
        <div className='container py-5'>
          <div className='row'>
            <div className='col-md-3 text-center mb-4'>
              <div className='mb-2 numbers-icon'>
                <i className='fas fa-users' />
              </div>
              <h4 className='numbers-counter text-light'>780</h4>
              <h5 className='text-light'>Active Members</h5>
            </div>
            <div className='col-md-3 text-center mb-4'>
              <div className='mb-2 numbers-icon'>
                <i className='fas fa-grin-beam' />
              </div>
              <h4 className='numbers-counter text-light'>1004</h4>
              <h5 className='text-light'>Happy Clients</h5>
            </div>
            <div className='col-md-3 text-center mb-4'>
              <div className='mb-2 numbers-icon'>
                <i className='fas fa-project-diagram' />
              </div>
              <h4 className='numbers-counter text-light'>2850</h4>
              <h5 className='text-light'>Total Projects</h5>
            </div>
            <div className='col-md-3 text-center mb-4'>
              <div className='mb-2 numbers-icon'>
                <i className='fas fa-trophy' />
              </div>
              <h4 className='numbers-counter text-light'>56</h4>
              <h5 className='text-light'>Awards</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
