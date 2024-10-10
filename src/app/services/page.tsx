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
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-center text-5xl font-bold text-gray-800 mb-10">Our Services</h1>

        <p className="text-center text-lg text-gray-600 mx-5 mb-10">
          We provide innovative renewable energy solutions, empowering businesses, governments, and communities  
          to harness the power of nature and transition to clean, sustainable energy sources.
        </p>

        {/* Services for Business (B2B) */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Services for Businesses </h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg mb-6 w-full md:w-1/3">
              <div className="w-full h-64 relative">
                <Image src={service1} alt="Solar Power Solutions" layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mt-4">Solar Power Solutions</h3>
              <p className="text-gray-600 text-justify">
                We provide comprehensive solar energy solutions for businesses looking to reduce their carbon footprint. Our end-to-end services include system design, installation, and maintenance.
              </p>
            </div>

            <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg mb-6 w-full md:w-1/3">
              <div className="w-full h-64 relative">
                <Image src={service2} alt="Wind Energy Systems" layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mt-4">Wind Energy Systems</h3>
              <p className="text-gray-600 text-justify">
                Harness the power of wind for your industrial needs. We offer customized wind turbine installations, including feasibility studies, turbine selection, and ongoing maintenance to ensure maximum efficiency.
              </p>
            </div>

            <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg w-full md:w-1/3">
              <div className="w-full h-64 relative">
                <Image src={service3} alt="Energy Storage Solutions" layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mt-4">Energy Storage Solutions</h3>
              <p className="text-gray-600 text-justify">
                Our energy storage systems allow businesses to store excess energy generated from renewable sources, providing backup power during peak times and reducing energy costs.
              </p>
            </div>
          </div>
        </section>

        {/* Services for Government (B2G) */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Services for Governments </h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg mb-6 w-full md:w-1/3">
              <div className="w-full h-64 relative">
                <Image src={service4} alt="Large-Scale Solar Farms" layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mt-4">Large-Scale Solar Farms</h3>
              <p className="text-gray-600 text-justify">
                We partner with governments to build large-scale solar farms that provide clean energy to cities and regions. Our solutions are designed for scalability and long-term sustainability.
              </p>
            </div>

            <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg mb-6 w-full md:w-1/3">
              <div className="w-full h-64 relative">
                <Image src={service5} alt="Wind Power Projects" layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mt-4">Wind Power Projects</h3>
              <p className="text-gray-600 text-justify">
                We collaborate with governments on wind power projects that provide clean, renewable energy. Our projects are tailored to specific geographic conditions and energy needs.
              </p>
            </div>

            <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg w-full md:w-1/3">
              <div className="w-full h-64 relative">
                <Image src={service6} alt="Osmotic Power Plants" layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mt-4">Osmotic Power Plants</h3>
              <p className="text-gray-600 text-justify">
                We pioneer osmotic power solutions by utilizing the energy potential of freshwater and seawater interactions. Our cutting-edge technology helps governments tap into an untapped renewable energy source.
              </p>
            </div>
          </div>
        </section>

        {/* Services for Communities (B2C) */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Services for Communities </h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg mb-6 w-full md:w-1/3">
              <div className="w-full h-64 relative">
                <Image src={service7} alt="CSR Programs" layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mt-4">CSR Programs</h3>
              <p className="text-gray-600 text-justify">
                Our CSR initiatives focus on empowering local communities through education and renewable energy access. We strive to make clean energy available to all.
              </p>
            </div>

            <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg mb-6 w-full md:w-1/3">
              <div className="w-full h-64 relative">
                <Image src={service8} alt="Community Energy Education" layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mt-4">Community Energy Education</h3>
              <p className="text-gray-600 text-justify">
                We work with local communities to educate residents on renewable energy technologies, empowering them to make informed decisions about their energy future.
              </p>
            </div>

            <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg w-full md:w-1/3">
              <div className="w-full h-64 relative">
                <Image src={service9} alt="Retail Power Installation" layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mt-4">Retail Power Installation</h3>
              <p className="text-gray-600 text-justify">
                We offer retail power installations that allow communities to access clean energy solutions tailored to their needs, making renewable energy affordable and accessible.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
