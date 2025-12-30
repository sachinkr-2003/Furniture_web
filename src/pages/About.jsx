import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import WeHelp from '../components/WeHelp';

const About = () => {
  return (
    <>
      <WhyChooseUs />
      <WeHelp />

      <div className="testimonial-section before-footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <h2 className="section-title">Our Team</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 mx-auto">
              <div className="row">
                {[1, 2, 3, 4].map((person) => (
                  <div key={person} className="col-6 col-md-6 col-lg-3 mb-4">
                    <div className="text-center">
                      <img src={`/assets/images/person_${person}.jpg`} className="img-fluid mb-3" alt={`Person ${person}`} style={{borderRadius: '50%', width: '120px', height: '120px', objectFit: 'cover'}} />
                      <h3 className="h5">Lawson Arnold</h3>
                      <span className="text-muted d-block mb-2">CEO, Founder, Atty.</span>
                      <p className="text-muted small">Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;