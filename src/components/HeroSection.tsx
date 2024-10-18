import React from 'react';
import Image from 'next/image';
import solarPanelImage from '@/public/solarpanelba.jpg';

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[800px] mt-10">
      {/* Background Image */}
      <Image
        src={solarPanelImage}
        alt="Solar Panel Field"
        layout="fill"
        objectFit="cover"
        objectPosition="top center"
        loading="lazy" 
        className="z-0 brightness-[85%]" 
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center text-white p-5">
        <div className="mt-5 max-w-md mx-auto">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 drop-shadow-md">
            Harnessing the Power of Nature
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-3 drop-shadow-sm">
            Join us in creating a sustainable future through renewable energy solutions.
          </p>
          <div className="flex justify-center">
            <a
              href="/about"
              className="inline-block px-3 py-2 bg-transparent border border-white text-white font-semibold rounded hover:bg-gray-200 hover:text-black transition"
              style={{ fontSize: '0.75rem', minWidth: '100px' }}
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
