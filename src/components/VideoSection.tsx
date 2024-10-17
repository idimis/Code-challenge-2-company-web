"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const VideoSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      {
        threshold: 0.1, 
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="max-w-[1440px] mx-auto px-5 md:px-10 overflow-hidden mt-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
        
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }} 
        >
          <div className="relative w-full pb-[56.25%]" ref={videoRef}>
            {isVisible ? (
              <iframe
                src="https://www.youtube.com/embed/T4xKThjcKaE"
                title="Renewable Energy Video"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                allowFullScreen
                frameBorder="0"
              />
            ) : (
              <div className="bg-gray-200 rounded-lg shadow-lg h-full w-full"></div> 
            )}
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 w-full flex flex-col"
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }} 
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-4">Understanding Renewable Energy</h2>
          <p className="text-base md:text-lg text-left leading-relaxed">
            Renewable energy refers to energy sources that are replenished naturally and can be harnessed to generate power. These include solar, wind, hydroelectric, and geothermal energy. Utilizing renewable energy helps reduce dependence on fossil fuels, minimizes greenhouse gas emissions, and promotes sustainable development. As technology advances, the efficiency and affordability of renewable energy systems continue to improve, making them an increasingly viable solution for meeting global energy demands.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
