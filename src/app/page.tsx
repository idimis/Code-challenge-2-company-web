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

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev); // Toggle menu state
  };

  return (
    <div>
      <Header />
      <HeroSection />
      <CompanyOverview /> 
      <AboutSection /> 
      <SlideOutButton isOpen={isMenuOpen} closeMenu={toggleMenu} /> 
      <Overlay />
      <ServicesSection />
      <Article /> 
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
