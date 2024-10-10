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
          />
        </div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center z-10 text-center text-white p-5">
        <div>
          <h1 className="text-5xl font-bold mb-5">Harnessing the Power of Nature</h1>
          <p className="text-xl mb-5">
            Join us in creating a sustainable future through renewable energy solutions.
          </p>
          <a
            href="/about"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transition"
          >
            Discover More
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
