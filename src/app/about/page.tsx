import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image'; 


import about1 from '@/public/about1.jpg';
import about2 from '@/public/about2.jpeg';
import about3 from '@/public/about3.png';
import about4 from '@/public/about4.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto max-w-6xl px-4 py-20">
        
        <section className="mb-20 flex flex-col items-center mt-16"> 
          <h1 className="text-5xl font-bold text-gray-800 mb-10 text-center">About Us</h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto text-justify leading-relaxed">
            We are a global leader in renewable energy, committed to transforming the way the world generates power. 
            With cutting-edge technology, we aim to create a cleaner and more sustainable future.
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl h-64 bg-gray-300 rounded-lg flex items-center justify-center mb-10"> 
              <Image src={about1} alt="Company Image" className="rounded-lg object-cover w-full h-full" />
            </div>
          </div>
        </section>

        
        <section className="mb-20"> 
          <h2 className="text-left text-4xl font-semibold text-gray-800 mb-6">Our History</h2>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="md:w-1/2">
              <p className="text-lg text-gray-600 mb-6 text-justify"> 
                Founded in 1995, our company began as a small startup focused on solar energy. Over the years, we have 
                expanded into wind, osmotic, and geothermal energy, becoming a global player in the renewable energy sector.
                Our growth has been steady, marked by continuous innovation and collaboration with industry leaders. From 
                humble beginnings, we have achieved a presence in over 50 countries, constantly pushing the boundaries of 
                what's possible in the renewable energy space.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-300 h-64 w-full rounded-lg flex items-center justify-center">
                <Image src={about2} alt="History Image" className="rounded-lg object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </section>

        
        <section className="mb-20"> 
          <h2 className="text-left text-4xl font-semibold text-gray-800 mb-6">Vision & Mission</h2>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="md:w-1/2 bg-white p-6 shadow-lg rounded-lg mb-6"> 
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be the world leader in renewable energy, creating sustainable solutions that empower communities and 
                preserve the planet for future generations.
              </p>
            </div>
            <div className="md:w-1/2 bg-white p-6 shadow-lg rounded-lg mb-6"> 
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                Our mission is to develop innovative and efficient renewable energy systems that reduce dependency on 
                fossil fuels, foster sustainable development, and enhance quality of life globally.
              </p>
            </div>
          </div>
        </section>

        
        <section className="mb-20"> 
          <h2 className="text-left text-4xl font-semibold text-gray-800 mb-6">Global Presence</h2>
          <div className="flex flex-col md:flex-row gap-8">
            
            <div className="md:w-1/2 bg-white p-6 shadow-lg rounded-lg flex items-center mb-6">
              <div className="w-1/3">
                <div className="bg-gray-300 h-32 w-full rounded-lg flex items-center justify-center">
                  <Image src={about3} alt="HQ Image" className="rounded-lg object-cover w-full h-full" />
                </div>
              </div>
              <div className="w-2/3 pl-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Headquarters</h3>
                <p className="text-gray-600">
                  Our global headquarters are located in New York City, where we manage worldwide operations, research, 
                  and strategic partnerships.
                </p>
              </div>
            </div>

            
            <div className="md:w-1/2 bg-white p-6 shadow-lg rounded-lg flex items-center mb-6"> 
              <div className="w-1/3">
                <div className="bg-gray-300 h-32 w-full rounded-lg flex items-center justify-center">
                  <Image src={about4} alt="Regional Office Image" className="rounded-lg object-cover w-full h-full" />
                </div>
              </div>
              <div className="w-2/3 pl-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Regional Offices</h3>
                <p className="text-gray-600">
                  We have regional offices in Europe (London), Asia (Tokyo), and Africa (Cape Town), where we manage 
                  projects and collaborate with local governments and businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        
        <section className="mb-20">
          <div className="bg-white text-black shadow-lg p-10 rounded-lg flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Join Us in Shaping the Future of Energy</h2>
              <p className="text-lg mb-6">
                Interested in learning more about our solutions or partnering with us?  <br /> 
                Contact us today and become part of the renewable energy revolution.
              </p>
            </div>
            <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700">
              Contact Us
            </button>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
