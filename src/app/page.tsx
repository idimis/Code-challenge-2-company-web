"use client";

import { Analytics } from "@vercel/analytics/react"; 
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import LoadingScreen from '@/components/LoadingScreen'; 
import Article from '@/components/Article';
import CompanyOverview from '@/components/CompanyOverview';
import TestimonialsSection from '@/components/TestimonialsSection';
import ServicesSection from '@/components/ServicesSection';
import SlideOutButton from '@/components/SlideOutButton';
import Overlay from '@/components/Overlay';
import ChatbotComponent from '@/components/Chatbot'; 
import AnimationHead from '@/components/AnimationHead';
import DynamicDataDashboard from '@/components/DynamicDataDashboard';




const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isLoading, setIsLoading] = useState(true); 
  const [showChatbot, setShowChatbot] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev); 
  };

  const handleLoadComplete = () => {
    setIsLoading(false); 
  };

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const footerPosition = footer.getBoundingClientRect();
        if (footerPosition.top <= window.innerHeight) {
          setShowChatbot(true); 
        } else {
          setShowChatbot(false); 
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative"> 
        <Analytics />
      {isLoading ? (
        <LoadingScreen onLoadComplete={handleLoadComplete} /> 
      ) : (
        <>
          
          <Header />
          <link rel="icon" href="/favicon.ico" />
          <HeroSection />
          <AnimationHead />
          <DynamicDataDashboard /> 
          <CompanyOverview />
          <AboutSection /> 
          <ServicesSection />
          <Article /> 
          <TestimonialsSection />
          <SlideOutButton isOpen={isMenuOpen} closeMenu={toggleMenu} /> 
          <Overlay />
          <ChatbotComponent isVisible={showChatbot} /> 
          <Footer />
          </>
      )}
    </div>
  );
};

export default HomePage;
