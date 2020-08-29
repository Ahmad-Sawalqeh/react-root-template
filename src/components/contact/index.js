import React from 'react';

const contact = () => {
  return (
    <section id='contact'>
      <div className='container py-5'>
        <div className='section-header py-5 text-center'>
          <h3 className='section-title'>
            <span>Contact </span>Us
          </h3>
          <h6 className='section-subtitle mx-auto'>
            Individualized quality care that meets the total needs of the
            patient Individualized quality care that quality care that
            Individualized quality care that meets the total.
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-lg-8 mx-auto'>
              <form>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter Name...'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Enter email...'
                  />
                </div>
                <div className='form-group'>
                  <textarea
                    className='form-control'
                    rows='5'
                    placeholder='Enter Message...'
                  />
                </div>
                <div className='form-group text-center'>
                  <button className='btn btn-block btn-primary mx-auto'>
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
