import React from 'react';

const WeHelp = () => {
  return (
    <div className="we-help-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="imgs-grid">
              <div className="grid grid-1"><img src="/assets/images/img-grid-1.jpg" alt="Interior Design" /></div>
              <div className="grid grid-2"><img src="/assets/images/img-grid-2.jpg" alt="Interior Design" /></div>
              <div className="grid grid-3"><img src="/assets/images/img-grid-3.jpg" alt="Interior Design" /></div>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-5">
            <h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
            <p>Our expert design team works closely with you to create stunning interiors that reflect your personal style. From space planning to furniture selection, we guide you through every step of the design process.</p>

            <ul className="list-unstyled custom-list my-4">
              <li>Professional interior design consultation</li>
              <li>Custom furniture recommendations</li>
              <li>Space optimization and layout planning</li>
              <li>Color coordination and styling advice</li>
            </ul>
            <p><a href="#" className="btn">Explore</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeHelp;