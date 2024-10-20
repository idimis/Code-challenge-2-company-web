"use client";

import React from 'react';
import Image from 'next/image';
import engineer from '@/public/engineer1.png';

const AboutSection: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-5 md:px-10 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
        
       
        <div className="md:w-1/2 flex flex-col">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
              About Us
            </h2>
            <p className="mt-4 text-base text-left md:text-justify leading-relaxed">
              We are a leading renewable energy company committed to providing sustainable solutions 
              that empower communities and protect the environment. Our innovative approach has made 
              us a trusted partner in the energy sector worldwide. With a dedicated team of experts, 
              we continually strive to advance our technologies and develop impactful projects that 
              contribute to a greener future for all.
            </p>
          </div>

          
          <ul className="mt-6 list-disc list-inside text-sm md:text-base space-y-2">
            <li>Trusted by 25 countries</li>
            <li>Collaborated with 50+ multinational companies</li>
            <li>Conducted enviro-workshops with 30+ NGOs</li>
            <li>Shared knowledge with 25+ universities</li>
            <li>Provided free mini-windmills to 50+ villages</li>
          </ul>

          
          <a
          href="/about"
          className="mt-6 self-start border border-black text-black font-semibold py-2 px-4 rounded 
                      hover:bg-gray-200 transition w-auto"
          >
          Learn More
        </a>

        </div>

        
        <div className="md:w-1/2 w-full relative">
        <Image
          src={engineer}
        alt="Engineer working on solar panels"
        className="w-full h-auto object-cover rounded-lg shadow-lg"
        priority
      />
    </div>
      </div>
    </section>
  );
};

export default AboutSection;
