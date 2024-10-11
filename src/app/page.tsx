"use client"; 

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection'; 
import Article from '@/components/Article';
import CompanyOverview from '@/components/CompanyOverview';
import TestimonialsSection from '@/components/TestimonialsSection';
import ServicesSection from '@/components/ServicesSection';
import SlideOutButton from '@/components/SlideOutButton';
import Overlay from '@/components/Overlay';
import LoadingScreen from '@/components/LoadingScreen'; 
import MultipleSwayingTrees from '@/components/LowPolyTree'; 

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isLoading, setIsLoading] = useState(true); 

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev); 
  };

  const handleLoadComplete = () => {
    setIsLoading(false); 
  };

  return (
    <div className="relative">
      {isLoading ? (
        <LoadingScreen onLoadComplete={handleLoadComplete} /> 
      ) : (
        <>
          <Header />
          <MultipleSwayingTrees /> 
          <HeroSection />
          <CompanyOverview /> 
          <AboutSection /> 
          <SlideOutButton isOpen={isMenuOpen} closeMenu={toggleMenu} /> 
          <Overlay />
          <ServicesSection />
          <Article /> 
          <TestimonialsSection />
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomePage;
