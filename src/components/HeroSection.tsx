import React from 'react';
import Image from 'next/image';
import solarPanelImage from '@/public/solarpanelb.jpg';

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[800px] mt-10">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="max-w-[1440px] w-full">
          <Image
            src={solarPanelImage}
            alt="Solar Panel Field"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 100vw"
            style={{ 
              filter: 'brightness(85%)', 
              objectFit: 'cover', 
              objectPosition: 'top center',
            }}
            loading="lazy"  
            priority={false} 
            placeholder="blur" 
          />
        </div>
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center text-white p-5">
        <div className="mt-5 max-w-md mx-auto">
          <h1 
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-2" 
            style={{ 
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)',  
            }}
          >
            Harnessing the Power of Nature
          </h1>
          <p 
            className="text-sm sm:text-base md:text-lg mb-3" 
            style={{ 
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' 
            }}
          >
            Join us in creating a sustainable future through renewable energy solutions.
          </p>
          <div className="flex justify-center">
            <a
              href="/about"
              className="inline-block px-2 py-1 sm:px-3 sm:py-2 bg-transparent border border-white text-white font-semibold rounded hover:bg-gray-200 transition"
              style={{
                fontSize: '0.65rem',
                minWidth: '100px',
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
