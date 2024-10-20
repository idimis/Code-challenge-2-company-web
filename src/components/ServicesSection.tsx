"use client";

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import solarPanelImage1 from '@/public/solarpanel1.png';
import solarPanelImage2 from '@/public/solarpanel2.png';
import solarPanelImage3 from '@/public/solarpanel3.png';

interface Service {
  title: string;
  description: string;
  link: string;
  image: StaticImageData;
}

const services: Service[] = [
  {
    title: "Off Grid Panel",
    description: "We offer state-of-the-art solar energy systems designed to meet company needs.",
    link: "/services#solar-solutions",
    image: solarPanelImage1,
  },
  {
    title: "Large-scale Panel & Windmill",
    description: "Harness the sunlight & wind potential to help the government.",
    link: "/services#wind-energy-systems",
    image: solarPanelImage2,
  },
  {
    title: "Hybrid Panel",
    description: "Advanced on-off technologies to store potential energy to our community.",
    link: "/services#energy-storage-solutions",
    image: solarPanelImage3,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-10 px-5 max-w-[1440px] mx-auto mt-10 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Latest Products</h2>
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center border p-6 rounded-lg shadow-md w-full md:w-1/3"
          >
            
            <Image
              src={service.image}
              alt={service.title}
              className="rounded-lg mb-4 object-cover"
              width={300}
              height={200}
              priority
            />
            
            <h3 className="text-xl md:text-2xl font-semibold text-center">{service.title}</h3>
            <p className="mt-2 text-center text-gray-700">{service.description}</p>
            <a
              href={service.link}
              className="mt-4 inline-block bg-transparent border border-black text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
