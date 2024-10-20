import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick'; 

import workerImage1 from '@/public/worker1.jpg';
import workerImage3 from '@/public/worker3.jpg';
import childrenImage from '@/public/children.jpg';


const images = [childrenImage, workerImage1, workerImage3];

const CompanyOverview = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true, 
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          arrows: false, 
        },
      },
    ],
  };

  return (
    <section className="company-album-container py-10 px-5 max-w-[1008px] mx-auto overflow-hidden"> 
      <div className="album relative mb-4 h-auto"> 
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center h-full">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                className="rounded-lg shadow-lg justify-center transition-transform duration-300 transform hover:scale-105"
                layout="responsive"
                width={455}
                height={588}
                quality={100} 
                priority 
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="company-overview flex-grow pl-0 mb-0 md:mb-2"> 
        <h2 className="text-4xl font-bold text-center mb-2 md:mb-2">Company Overview</h2>
        <p className="text-base mb-0 text-left md:text-justify">
          Established in 1995, Ciptadaya has been at the forefront of the renewable energy revolution.
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
