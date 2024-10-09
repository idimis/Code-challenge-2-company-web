import React from 'react';

const services = [
  {
    title: "Solar Solutions",
    description: "We offer state-of-the-art solar energy systems designed to meet your energy needs.",
    link: "/services#solar-solutions" 
  },
  {
    title: "Wind Energy Systems",
    description: "Harness the power of wind with our innovative wind energy solutions.",
    link: "/services#wind-energy-systems" 
  },
  {
    title: "Energy Storage Solutions",
    description: "Advanced storage technologies to ensure your energy is always available.",
    link: "/services#energy-storage-solutions" 
  }
];

const ServicesSection = () => {
  return (
    <section className="py-10 px-5">
      <h2 className="text-4xl font-bold text-center mb-5">Our Services</h2>
      <div className="flex flex-col space-y-6">
        {services.map((service, index) => (
          <div key={index} className="border p-4 rounded-lg shadow">
            <h3 className="text-2xl font-semibold">{service.title}</h3>
            <p className="mt-2">{service.description}</p>
            <a href={service.link} className="mt-4 inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
