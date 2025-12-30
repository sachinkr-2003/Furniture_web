import React from 'react';

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center">
            <h2 className="section-title">Testimonials</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="testimonial-slider-wrap text-center">
              <div className="testimonial-slider">
                <div className="item">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 mx-auto">
                      <div className="testimonial-block text-center">
                        <blockquote className="mb-5">
                          <p>&ldquo;The furniture quality exceeded my expectations! The Nordic chair is not only beautiful but incredibly comfortable. The delivery was prompt and the customer service was exceptional throughout the entire process.&rdquo;</p>
                        </blockquote>

                        <div className="author-info">
                          <div className="author-pic">
                            <img src="/assets/images/person-1.png" alt="Maria Jones" className="img-fluid" />
                          </div>
                          <h3 className="font-weight-bold">Maria Jones</h3>
                          <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;