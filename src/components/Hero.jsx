import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero" style={{position: 'relative', zIndex: 1, overflow: 'hidden'}}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>Modern Interior <span className="d-block">Design Studio</span></h1>
              <p className="mb-4">Transform your space with our premium furniture collection. From elegant sofas to stylish chairs, we bring comfort and sophistication to every corner of your home.</p>
              <p>
                <a href="/shop" className="btn btn-secondary me-2">Shop Now</a>
                <a href="#" className="btn btn-white-outline">Explore</a>
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-img-wrap" style={{position: 'relative', zIndex: 1}}>
              <img src="/assets/images/couch.png" className="img-fluid" alt="Couch" style={{position: 'relative', zIndex: 1}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;