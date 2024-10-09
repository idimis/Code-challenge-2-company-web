import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-between bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/image.png)' }}>
     
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      <div className="flex flex-col justify-center w-full max-w-lg p-6 z-10 text-white">
        <h2 className="text-6xl font-bold">Harnessing Renewable Energy for a Sustainable Future</h2>
        <p className="mt-4 text-lg">Innovative solutions to power a greener tomorrow.</p>
        
        <div className="mt-6 flex space-x-4">
          <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition">
            Call Us Today
          </button>
          <button className="px-6 py-2 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-blue-500 transition">
            Our Projects
          </button>
        </div>
      </div>

      
      <div className="flex flex-col justify-center items-end w-full max-w-xs p-6 z-10">
        <a href="/services" className="px-4 py-2 bg-white text-blue-500 font-semibold rounded hover:bg-blue-500 hover:text-white transition">
          View Our Services
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
