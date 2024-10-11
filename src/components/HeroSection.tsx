import React from 'react';
import Image from 'next/image';
import solarPanelImage from '@/public/solarpanelmeadow.png';

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden h-[650px]">
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="max-w-[1440px] w-full">
          <Image
            src={solarPanelImage}
            alt="Solar Panel Field"
            className="w-full h-full object-cover"
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
          />
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10 text-center text-white p-5">
        <div className="mt-10 max-w-md mx-auto">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3" 
            style={{ textShadow: '2px 2px 0px black' }} 
          >
            Harnessing the Power of Nature
          </h1>
          <p 
            className="text-base sm:text-lg md:text-xl mb-4" 
            style={{ textShadow: '1px 1px 0px black' }} 
          >
            Join us in creating a sustainable future through renewable energy solutions.
          </p>
          <div className="flex justify-center">
            <a
              href="/about"
              className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-transparent border border-white text-white font-semibold rounded hover:bg-gray-200 transition"
              style={{
                fontSize: '0.875rem',  
                minWidth: '150px',     
              }}
            >
              Discover More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
