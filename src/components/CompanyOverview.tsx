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
    <section className="company-album-container py-10 px-5 bg-gray-200">
      {/* Album Section */}
      <div className="album">
        <Image
          src={images[currentImage]}
          alt={`Image ${currentImage + 1}`}
          className="rounded-lg mb-4"
          width={650}
          height={840}
        />
        <button onClick={prevImage}>&lt;</button>
        <button onClick={nextImage}>&gt;</button>
      </div>

      {/* Company Overview Section */}
      <div className="company-overview flex-grow pl-0">
        <h2 className="text-4xl font-bold text-left mb-5">Company Overview</h2>
        <p className="text-lg text-left">
          Established in 2020, Renewable Energy Co. has been at the forefront of the renewable energy revolution.
          Our dedicated team works tirelessly to deliver innovative solutions that empower communities while protecting
          the environment. With a commitment to sustainability, we lead the charge towards a greener future. Our
          innovative projects and sustainable practices aim to create a lasting impact in the communities we serve.
        </p>
        <p className="text-lg text-left mt-4">
          Our culture promotes collaboration, integrity, and innovation, making us a trusted partner in the energy sector.
          We believe in fostering an inclusive workplace that encourages diverse perspectives and ideas, ensuring
          continuous growth and learning for all.
        </p>
      </div>
    </section>
  );
};

export default CompanyOverview;
