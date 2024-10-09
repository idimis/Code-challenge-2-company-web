import React from 'react';
import Image from 'next/image';
import solarPanelImage from '@/public/solarpanelmeadow.png';

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center bg-green-200 overflow-hidden h-[650px]"> {/* Set the height of hero section */}
      {/* Image Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src={solarPanelImage} 
          alt="Solar Panel Meadow" 
          width={1440} // Set width to 1440px
          height={650} // Set height to 650px
          objectFit="cover" 
          priority 
          quality={100} 
          className="object-center w-full h-auto"
        />
        <div className="bg-black opacity-40 inset-0 absolute"></div> {/* Overlay for darkening */}
      </div>

      {/* Content */}
      <div className="relative flex flex-col justify-center w-full max-w-lg p-6 z-10 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-snug">Harnessing Renewable Energy for a Sustainable Future</h2>
        <p className="mt-4 text-lg">Innovative solutions to power a greener tomorrow.</p>
        
        <div className="mt-6 flex justify-center space-x-4">
          <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition">
            Call Us Today
          </button>
          <button className="px-6 py-2 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-blue-500 transition">
            Our Projects
          </button>
        </div>
      </div>

      {/* Additional CTA on the right */}
      <div className="absolute bottom-6 right-6 z-10">
        <a href="/services" className="px-4 py-2 bg-white text-blue-500 font-semibold rounded hover:bg-blue-500 hover:text-white transition">
          View Our Services
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
