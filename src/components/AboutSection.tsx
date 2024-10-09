import React from 'react';

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-gray-100">
      
      <div className="md:w-1/2">
        <img src="/path/to/your/image.jpg" alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
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

        <a href="/about" className="mt-6 inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default AboutSection;
