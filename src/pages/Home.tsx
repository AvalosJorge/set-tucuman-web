import React from 'react';
import Carousel from '../components/Carousel';
import ServicesCards from '../components/ServicesCards';

const Home: React.FC = () => {
  return (
    <main>
      <Carousel />
        <ServicesCards />
    </main>
  );
};

export default Home;
