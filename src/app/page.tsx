import React from 'react';
import Header from '@/components/Header';
import ThreeDScene from '@/components/ThreeDScene';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection'; 
import Article from '@/components/Article';

const HomePage = () => {
  return (
    <div>
      <ThreeDScene />
      <Header />
      <HeroSection />
      <AboutSection />
      <Article /> 
      <Footer />
    </div>
  );
};

export default HomePage;
