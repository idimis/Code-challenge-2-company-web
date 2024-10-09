"use client"; // Mark this component as a Client Component

import React, { useState } from 'react';

const AboutSection = () => {
  const images = [
    '/path/to/your/image1.jpg',
    '/path/to/your/image2.jpg',
    '/path/to/your/image3.jpg',
    '/path/to/your/image4.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-gray-100">
      <div className="md:w-1/2 relative">
        <img
          src={images[currentIndex]}
          alt="About Us"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition"
        >
          &lt;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition"
        >
          &gt;
        </button>
      </div>

      <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="mt-4 text-lg">
          We are a leading renewable energy company committed to providing sustainable solutions that empower communities and protect the environment. Our innovative approach has made us a trusted partner in the energy sector worldwide.
        </p>
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
    </div>
  );
};

export default AboutSection;
