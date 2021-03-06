import React from 'react';

import blogImage1 from './../../assets/img/blog1.jpg';
import blogImage2 from './../../assets/img/blog2.jpg';
import blogImage3 from './../../assets/img/blog3.jpg';

const Blog = () => {
  return (
    <section id='blog'>
      <div className='container py-5'>
        <div className='section-header py-5 text-center'>
          <h3 className='section-title'>
            <span>Our </span>Blog
          </h3>
          <h6 className='section-subtitle mx-auto'>
            Individualized quality care that meets the total needs of the
            patient Individualized quality care that quality care that
            Individualized quality care that meets the total.
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={blogImage1} alt='Blog 1' />
                <div className='card-body'>
                  <h5 className='card-title'>High Quality Support</h5>
                  <p className='card-text'>
                    Exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    cillum dolore eu fugiat nulla pariatur commodo
                    consequat.cillum dolore eu fugiat pariatur....
                  </p>
                  <a href='#' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={blogImage2} alt='Blog 2' />
                <div className='card-body'>
                  <h5 className='card-title'>Research Financial</h5>
                  <p className='card-text'>
                    Exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    cillum dolore eu fugiat nulla pariatur commodo
                    consequat.cillum dolore eu fugiat pariatur....
                  </p>
                  <a href='#' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={blogImage3} alt='Blog 3' />
                <div className='card-body'>
                  <h5 className='card-title'>Business Deal</h5>
                  <p className='card-text'>
                    Exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    cillum dolore eu fugiat nulla pariatur commodo
                    consequat.cillum dolore eu fugiat pariatur....
                  </p>
                  <a href='#' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
