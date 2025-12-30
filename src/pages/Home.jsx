import React from 'react';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import WhyChooseUs from '../components/WhyChooseUs';
import WeHelp from '../components/WeHelp';
import PopularProduct from '../components/PopularProduct';
import Testimonial from '../components/Testimonial';
import Blog from '../components/Blog';

const Home = () => {
  return (
    <>
      <Hero />
      <ProductSection />
      <WhyChooseUs />
      <WeHelp />
      <PopularProduct />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Home;