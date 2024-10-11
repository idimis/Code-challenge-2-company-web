"use client"; 

import React from 'react';
import Image from 'next/image';
import engineer from '@/public/engineer1.png'; 

const AboutSection = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between p-5 md:p-10">
      
      <div className="md:w-[600px] flex flex-col justify-between md:mr-8"> 
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
          <p className="mt-4 text-base md:text-lg text-justify">
            We are a leading renewable energy company committed to providing sustainable solutions
            that empower communities and protect the environment. Our innovative approach has made us a trusted partner in the energy sector worldwide. 
            With a dedicated team of experts, we continually strive to advance our technologies and develop impactful projects that contribute to a greener future for all.
          </p>
        </div>

        <ul className="mt-6 list-disc list-inside text-sm md:text-base">
          <li>Trusted by 25 countries </li>
          <li>Collaborated with 50+ multinational companies</li>
          <li>Conducted enviro-workshops with 30+ NGOs</li>
          <li>Shared knowledge with 25+ universities</li>
          <li>Provided free mini-windmills to 50+ villages</li>
        </ul>

        <a
          href="/about"
          className="mt-4 inline-block bg-transparent border border-black text-black font-semibold py-1 px-3 rounded hover:bg-gray-200 transition"
        >
          Learn More
        </a>
      </div>

      <div className="md:w-[840px] mt-6 md:mt-0 relative">
        <Image
          src={engineer}
          alt="solarengineer"
          className="w-full h-full object-cover rounded-lg shadow-lg" 
          priority
        />
      </div>
    </div>
  );
};

export default AboutSection;
