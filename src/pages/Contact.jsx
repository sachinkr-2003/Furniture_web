import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="untree_co-section" style={{paddingTop: '40px', paddingBottom: '40px'}}>
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-12">
              <h2 className="section-title text-center">Contact Us</h2>
            </div>
          </div>
          <div className="block">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-8 pb-4">
                <div className="row mb-4">
                  <div className="col-lg-4">
                    <div className="text-center mb-3">
                      <div className="mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-geo-alt-fill text-primary" viewBox="0 0 16 16">
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                        </svg>
                      </div>
                      <p className="mb-0 small">Lucknow, Uttar Pradesh, India</p>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="text-center mb-3">
                      <div className="mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope-fill text-primary" viewBox="0 0 16 16">
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                        </svg>
                      </div>
                      <p className="mb-0 small">Sachin@gmail.com</p>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="text-center mb-3">
                      <div className="mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telephone-fill text-primary" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                      </div>
                      <p className="mb-0 small">+91 9135321898</p>
                    </div>
                  </div>
                </div>

                <form>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group mb-3">
                        <label className="text-black small" htmlFor="fname">First name</label>
                        <input type="text" className="form-control form-control-sm" id="fname" />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group mb-3">
                        <label className="text-black small" htmlFor="lname">Last name</label>
                        <input type="text" className="form-control form-control-sm" id="lname" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label className="text-black small" htmlFor="email">Email address</label>
                    <input type="email" className="form-control form-control-sm" id="email" />
                  </div>

                  <div className="form-group mb-4">
                    <label className="text-black small" htmlFor="message">Message</label>
                    <textarea name="" className="form-control" id="message" cols="30" rows="3"></textarea>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-sm">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;