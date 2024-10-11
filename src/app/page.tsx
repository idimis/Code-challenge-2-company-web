// src/app/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
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
import ChatbotComponent from '@/components/Chatbot'; 

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isLoading, setIsLoading] = useState(true); 
  const [showChatbot, setShowChatbot] = useState(false); // State for chatbot visibility

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
          setShowChatbot(true); // Show chatbot when footer is in view
        } else {
          setShowChatbot(false); // Hide chatbot when footer is out of view
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
      {isLoading ? (
        <LoadingScreen onLoadComplete={handleLoadComplete} /> 
      ) : (
        <>
          <Header />
          <MultipleSwayingTrees /> 
          <HeroSection />
          <CompanyOverview /> 
          <AboutSection /> 
          <ServicesSection />
          <Article /> 
          <TestimonialsSection />
          <SlideOutButton isOpen={isMenuOpen} closeMenu={toggleMenu} /> 
          <Overlay />
          <ChatbotComponent isVisible={showChatbot} /> {/* Pass visibility prop */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomePage;
