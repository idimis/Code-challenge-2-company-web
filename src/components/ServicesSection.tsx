import React from 'react';
import Image from 'next/image';
import solarPanelImage1 from '@/public/solarpanel1.png';
import solarPanelImage2 from '@/public/solarpanel2.png';
import solarPanelImage3 from '@/public/solarpanel3.png';

const services = [
  {
    title: "Solar Solutions",
    description: "We offer state-of-the-art solar energy systems designed to meet your energy needs.",
    link: "/services#solar-solutions",
    image: solarPanelImage1,
  },
  {
    title: "Wind Energy Systems",
    description: "Harness the power of wind with our innovative wind energy solutions.",
    link: "/services#wind-energy-systems",
    image: solarPanelImage2,
  },
  {
    title: "Energy Storage Solutions",
    description: "Advanced storage technologies to ensure your energy is always available.",
    link: "/services#energy-storage-solutions",
    image: solarPanelImage3,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-10 px-5 max-w-[1440px] mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
      <div className="flex justify-between space-x-4">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center border p-4 rounded-lg shadow w-1/4"> 
            <Image 
              src={service.image} 
              alt={service.title} 
              className="rounded-lg mb-4" 
              width={300} 
              height={200} 
            />
            <h3 className="text-2xl font-semibold text-center">{service.title}</h3>
            <p className="mt-2 text-center">{service.description}</p>
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
