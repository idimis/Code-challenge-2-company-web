import React, { useState } from 'react';
import Image from 'next/image';
import familyImage from '@/public/family2.jpg';
import forestImage from '@/public/forest1.jpg';
import workerImage1 from '@/public/worker1.jpg';
import workerImage2 from '@/public/worker2.jpg';

const images = [familyImage, forestImage, workerImage1, workerImage2];

const CompanyOverview = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="company-album-container py-10 px-5 bg-white max-w-[1440px] mx-auto">
      {/* Album Section */}
      <div className="album relative mb-4">
        <Image
          src={images[currentImage]}
          alt={`Image ${currentImage + 1}`}
          className="rounded-lg shadow-lg mb-4 transition-transform duration-300 transform hover:scale-105"
          width={650}
          height={840}
        />
        <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
          &lt;
        </button>
        <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
          &gt;
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mb-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer border-2 transition-colors duration-300 ${currentImage === index ? 'bg-black border-black' : 'bg-white border-black'}`}
            onClick={() => setCurrentImage(index)} // Allow clicking on dots to change image
          />
        ))}
      </div>

      {/* Company Overview Section */}
      <div className="company-overview flex-grow pl-0 mb-2">
        <h2 className="text-4xl font-bold text-center mb-4">Company Overview</h2>
        <p className="text-xl text-left mb-2 text-justify">
          Established in 2020, New World Co. has been at the forefront of the renewable energy revolution.
          Our dedicated team works tirelessly to deliver innovative solutions that empower communities while protecting
          the environment. With a commitment to sustainability, we lead the charge towards a greener future. Our
          innovative projects and sustainable practices aim to create a lasting impact in the communities we serve.

          Our culture promotes collaboration, integrity, and innovation, making us a trusted partner in the energy sector.
          We believe in fostering an inclusive workplace that encourages diverse perspectives and ideas, ensuring
          continuous growth and learning for all.
        </p>
      </div>
    </section>
  );
};

export default CompanyOverview;
