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
        <div className="mt-10">
          <h1 
            className="text-5xl font-bold mb-5" 
            style={{ textShadow: '2px 2px 0px black' }} // Added text shadow for outline
          >
            Harnessing the Power of Nature
          </h1>
          <p 
            className="text-xl mb-5" 
            style={{ textShadow: '1px 1px 0px black' }} // Added text shadow for outline
          >
            Join us in creating a sustainable future through renewable energy solutions.
          </p>
          <a
            href="/about"
            className="inline-block px-6 py-3 bg-transparent border border-black text-black font-semibold rounded hover:bg-gray-200 transition"
          >
            Discover More
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
