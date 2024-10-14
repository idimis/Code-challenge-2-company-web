import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick'; 
import familyImage from '@/public/family2.jpg';
import forestImage from '@/public/forest1.jpg';
import workerImage1 from '@/public/worker1.jpg';
import workerImage2 from '@/public/worker2.jpg';

const images = [familyImage, forestImage, workerImage1, workerImage2];

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
    <section className="company-album-container py-10 px-5 max-w-[1008px] mx-auto"> 
      <div className="album relative mb-4">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                className="rounded-lg shadow-lg mb-4 transition-transform duration-300 transform hover:scale-105"
                width={455}  
                height={588} 
                quality={100} 
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="company-overview flex-grow pl-0 mb-2">
        <h2 className="text-4xl font-bold text-center mb-4">Company Overview</h2>
        <p className="text-base text-left mb-2 text-justify"> 
          Established in 1995, New World Co. has been at the forefront of the renewable energy revolution.
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
