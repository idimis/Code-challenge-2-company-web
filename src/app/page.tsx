import React from 'react';
import Header from '@/components/Header';
import ThreeDScene from '@/components/ThreeDScene';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';



const HomePage = () => {
  return (
    <div>
      <Header />
      <ThreeDScene />
      <HeroSection />
      
      <Footer />
    </div>
  );
};

export default HomePage;
