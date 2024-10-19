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
        console.log("Audio paused");
      } else {
        audioRef.current.play().then(() => {
          console.log("Audio playing");
        }).catch(error => {
          console.error("Error playing audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    } else {
      console.error("Audio reference is null");
    }
  };

  return (
    <div className="relative flex bg-green-800 items-center justify-center overflow-hidden h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-50">
        <Image
          src={goodlifeImage}
          alt="farm sustainable"
          className="w-full h-full object-cover"
          loading="lazy"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src="/ods.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Content Container with Text */}
      <div className="flex flex-col justify-center items-center relative z-10 p-4 sm:p-8 md:p-12 text-center h-full mb-60">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentText}
            className="text-2xl sm:text-4xl md:text-6xl font-bold text-white leading-relaxed mb-1 md:mb-2"
            initial={{ opacity: 0, y: 20 }}  
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {textArray[currentText]}
          </motion.h1>
        </AnimatePresence>

        <p className="text-sm sm:text-lg md:text-2xl text-white my-1 md:mb-2">
          Renewable energy solutions designed to create a cleaner, greener, and brighter future for all.
        </p>

        {/* Sound Toggle Button */}
        <button 
          onClick={toggleAudio} 
          className="mt-4 px-4 py-2 bg-white text-green-800 font-semibold rounded-md transition hover:bg-gray-200 flex items-center"
        >
          {isPlaying ? <FaVolumeMute className="text-green-800" /> : <FaVolumeUp className="text-green-800" />}
        </button>
      </div>

      <div className="absolute bottom-0 right-0 mb-4 sm:mb-6 mr-4 sm:mr-10 flex space-x-2 sm:space-x-4">
        <a
          href="/services"
          className="px-6 sm:px-8 py-2 sm:py-3 bg-transparent border border-black text-white font-semibold rounded-md hover:bg-gray-200 transition"
        >
          Let&apos;s collaborate!
        </a>
        <a
          href="/about"
          className="px-6 sm:px-8 py-2 sm:py-3 bg-transparent border border-black text-white font-semibold rounded-md hover:bg-gray-200 transition"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
