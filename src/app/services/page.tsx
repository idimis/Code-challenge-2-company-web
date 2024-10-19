import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

import service1 from '@/public/services/service1.png';
import service2 from '@/public/services/service2.jpg';
import service3 from '@/public/services/service3.jpeg';
import service4 from '@/public/services/service4.jpg';
import service5 from '@/public/services/service5.jpg';
import service6 from '@/public/services/service6.jpg';
import service7 from '@/public/services/service7.jpg';
import service8 from '@/public/services/service8.jpg';
import service9 from '@/public/services/service9.jpeg';

const Service = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-center text-5xl font-bold mb-10">Our Services</h1>

        <p className="text-center text-lg mx-5 mb-10">
          We provide innovative renewable energy solutions, empowering businesses, governments, and communities  
          to harness the power of nature and transition to clean, sustainable energy sources.
        </p>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-center">Services for Businesses</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[
              {
                image: service1,
                title: "Solar Power Solutions",
                description: "We provide comprehensive solar energy solutions for businesses looking to reduce their carbon footprint. Our end-to-end services include system design, installation, and maintenance.",
              },
              {
                image: service2,
                title: "Wind Energy Systems",
                description: "Harness the power of wind for your industrial needs. We offer customized wind turbine installations, including feasibility studies, turbine selection, and ongoing maintenance to ensure maximum efficiency.",
              },
              {
                image: service3,
                title: "Energy Storage Solutions",
                description: "Our energy storage systems allow businesses to store excess energy generated from renewable sources, providing backup power during peak times and reducing energy costs.",
              },
            ].map((service, index) => (
              <div key={index} className="max-w-sm bg-white p-6 shadow-lg rounded-lg w-full md:w-1/3">
                <div className="w-full h-64 relative mb-4">
                  <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-left">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-center">Services for Governments</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[
              {
                image: service4,
                title: "Large-Scale Solar Farms",
                description: "We partner with governments to build large-scale solar farms that provide clean energy to cities and regions. Our solutions are designed for scalability and long-term sustainability.",
              },
              {
                image: service5,
                title: "Wind Power Projects",
                description: "We collaborate with governments on wind power projects that provide clean, renewable energy. Our projects are tailored to specific geographic conditions and energy needs.",
              },
              {
                image: service6,
                title: "Osmotic Power Plants",
                description: "We pioneer osmotic power solutions by utilizing the energy potential of freshwater and seawater interactions. Our cutting-edge technology helps governments tap into an untapped renewable energy source.",
              },
            ].map((service, index) => (
              <div key={index} className="max-w-sm bg-white p-6 shadow-lg rounded-lg w-full md:w-1/3">
                <div className="w-full h-64 relative mb-4">
                  <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-left">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-center">Services for Communities</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[
              {
                image: service7,
                title: "CSR Programs",
                description: "Our CSR initiatives focus on empowering local communities through education and renewable energy access. We strive to make clean energy available to all.",
              },
              {
                image: service8,
                title: "Community Energy Education",
                description: "We work with local communities to educate residents on renewable energy technologies, empowering them to make informed decisions about their energy future.",
              },
              {
                image: service9,
                title: "Retail Power Installation",
                description: "We offer retail power installations that allow communities to access clean energy solutions tailored to their needs, making renewable energy affordable and accessible.",
              },
            ].map((service, index) => (
              <div key={index} className="max-w-sm bg-white p-6 shadow-lg rounded-lg w-full md:w-1/3">
                <div className="w-full h-64 relative mb-4">
                  <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-left">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
