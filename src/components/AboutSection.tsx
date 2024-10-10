"use client"; 

import React from 'react';
import Image from 'next/image';
import team1 from '@/public/team1.jpg'; // Pastikan path ini sesuai dengan lokasi file gambar

const AboutSection = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between p-10">
      {/* Container untuk teks */}
      <div className="md:w-[600px] h-[650px] md:pr-10 flex flex-col justify-between">
        <div>
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="mt-4 text-lg">
            We are a leading renewable energy company committed to providing sustainable solutions <br />
            that empower communities and protect the environment. Our innovative approach <br />
            has made us a trusted partner in the energy sector worldwide. <br />
          </p>
        </div>

        <ul className="mt-6 list-disc list-inside text-lg">
          <li>Trusted by 25 governments across various countries</li>
          <li>Collaborated with 50+ multinational companies</li>
          <li>Conducted environmental workshops with 30+ NGOs</li>
          <li>Shared knowledge with 25+ universities</li>
          <li>Provided free installed mini-windmills to 50+ villages</li>
        </ul>

        <a
          href="/about"
          className="mt-6 inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
        >
          Learn More
        </a>
      </div>

      {/* Container untuk gambar */}
      <div className="md:w-[840px] h-[650px] relative">
        <Image
          src={team1} // Menggunakan komponen Image dari Next.js
          alt="Team"
          className="w-full h-full object-cover rounded-lg shadow-lg" // Mengatur tinggi dan memelihara aspek rasio
          priority // Mengatur gambar ini sebagai prioritas untuk loading
        />
      </div>
    </div>
  );
};

export default AboutSection;
