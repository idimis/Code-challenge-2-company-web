import React, { useState, useEffect } from 'react';  
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import goodlifeImage from '@/public/goodlife.jpg';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const textArray = [
  "It starts today, no more sorrow.",
  "For brighter future we embrace tomorrow.",
  "With every sunray our hopes will grow.",
  "Harness the wind let our dreams show.",
  "From solar lights to windmills' glow",
  "A sustainable path is the way we know."
];

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textArray.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.error("Error playing audio:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative flex flex-col items-center overflow-hidden min-h-[200px] md:min-h-[900px] mt-0">
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="max-w-[1920px] w-full">
          <Image
            src={goodlifeImage}
            alt="farm sustainable"
            className="w-full h-full object-cover rounded-lg shadow-lg"    
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 100vw" 
            style={{ 
              filter: 'brightness(85%)', 
              objectFit: 'cover',  
              objectPosition: 'top center'  
            }}  
          />
        </div>
      </div>

      <audio ref={audioRef} loop>
        <source src="/ods.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Adjusted Text Container */}
      <div className="content-container absolute inset-0 flex flex-col justify-center items-center p-4 md:p-12 z-10">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentText}
            className="hero-text text-1x1 sm:text-4xl md:text-5xl font-bold text-white leading-relaxed mb-1 md:mb-2"
            initial={{ opacity: 0, y: 20 }}  
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {textArray[currentText]}
          </motion.h1>
        </AnimatePresence>

        <p className="text-xs sm:text-lg md:text-2xl text-white my-1 md:mb-2 text-center">
          Renewable energy solutions designed to create a cleaner, greener, and brighter future for all.
        </p>

        <a
          href="/about"
          className="px-2 sm:px-6 py-1.5 sm:py-2.5 bg-transparent border border-white text-white text-xs sm:text-base font-semibold rounded-md hover:bg-gray-200 transition"
        >
          Learn More
        </a>
      </div>

      <button 
        onClick={toggleAudio} 
        className="absolute top-4 left-4 px-3 py-2 bg-white font-semibold rounded-md transition hover:bg-gray-200 flex items-center z-20"
      >
        {isPlaying ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </div>
  );
};

export default HeroSection;
