"use client"; 

import React from 'react';
import Header from '@/components/Header';
import ThreeDScene from '@/components/ThreeDScene';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection'; 
import Article from '@/components/Article';
import CompanyOverview from '@/components/CompanyOverview';
import TestimonialsSection from '@/components/TestimonialsSection';
import ServicesSection from '@/components/ServicesSection';


const HomePage = () => {
  return (
    <div>
      <ThreeDScene />
      <Header />
      <HeroSection />
      <CompanyOverview />
      <AboutSection />
      <ServicesSection />
      <Article /> 
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
