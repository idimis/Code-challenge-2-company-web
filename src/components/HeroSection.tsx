import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import goodlifeImage from '@/public/goodlife.jpg';

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textArray.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex bg-gray-800 items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 top-0">
        <Image
          src={goodlifeImage}
          alt="farm sustainable"
          className="w-full h-full object-cover z-0 opacity-80"
          loading="lazy"
        />
      </div>

     {/* Content Container with Text */}
<div className="max-w-[1440px] flex flex-col relative z-10 p-8 md:p-16 text-center h-screen mt-60">
  <AnimatePresence mode="wait">
    <motion.h1
      key={currentText}
      className="text-4xl md:text-6xl font-bold text-white leading-relaxed mb-4"
      initial={{ opacity: 0, y: 32 }}  
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {textArray[currentText]}
    </motion.h1>
  </AnimatePresence>

  <p className="text-lg md:text-2xl text-white my-2">
    Renewable energy solutions designed to create a cleaner, greener, and brighter future for all.
  </p>
</div>

<div className="absolute bottom-0 right-0 mb-10 mr-10 flex space-x-4 z-10 pointer-events-auto">
  <a
    href="/services"
    className="px-4 md:px-8 py-3 bg-transparent border border-white text-white font-semibold rounded-md hover:bg-gray-200 transition"
  >
    Let&apos;s collaborate!
  </a>
  <a
    href="/about"
    className="px-4 md:px-8 py-3 bg-transparent border border-white text-white font-semibold rounded-md hover:bg-gray-200 transition"
  >
    Learn More
  </a>
</div>

      
    </div>
  );
}

export default HeroSection;
