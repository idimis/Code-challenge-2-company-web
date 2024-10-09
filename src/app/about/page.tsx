import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-16">
        {/* About Us Section */}
        <section className="mb-16">
          <h1 className="text-center text-5xl font-bold text-gray-800 mb-10">About Us</h1>
          <p className="text-center text-lg text-gray-600 mb-10">
            We are a global leader in renewable energy, committed to transforming the way the world generates power. With cutting-edge technology, we aim to create a cleaner and more sustainable future.
          </p>
          <div className="flex justify-center">
            <div className="w-2/3 h-64 bg-gray-300 rounded-lg flex items-center justify-center">
              {/* Placeholder for an interactive image */}
              <span className="text-gray-500">Company Image</span>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Our History</h2>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="md:w-1/2">
              <p className="text-lg text-gray-600">
                Founded in 1995, our company began as a small startup focused on solar energy. Over the years, we have expanded into wind, osmotic, and geothermal energy, becoming a global player in the renewable energy sector. With offices and operations across five continents, we have continued to grow, innovate, and contribute to the global fight against climate change.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-300 h-64 w-full rounded-lg flex items-center justify-center">
                {/* Placeholder for historical image */}
                <span className="text-gray-500">History Image</span>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Vision & Mission</h2>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="md:w-1/2 bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be the world leader in renewable energy, creating sustainable solutions that empower communities and preserve the planet for future generations.
              </p>
            </div>
            <div className="md:w-1/2 bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                Our mission is to develop innovative and efficient renewable energy systems that reduce dependency on fossil fuels, foster sustainable development, and enhance quality of life globally.
              </p>
            </div>
          </div>
        </section>

        {/* Headquarters and Offices Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Global Presence</h2>
          <div className="flex flex-wrap justify-between items-start gap-8">
            
            {/* Headquarters */}
            <div className="flex w-full md:w-1/2 bg-white p-6 shadow-lg rounded-lg items-center">
              <div className="w-1/3">
                <div className="bg-gray-300 h-32 w-full rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">HQ Image</span>
                </div>
              </div>
              <div className="w-2/3 pl-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Headquarters</h3>
                <p className="text-gray-600">
                  Our global headquarters are located in New York City, where we manage worldwide operations, research and development, and strategic partnerships.
                </p>
              </div>
            </div>

            {/* Regional Offices */}
            <div className="flex w-full md:w-1/2 bg-white p-6 shadow-lg rounded-lg items-center">
              <div className="w-1/3">
                <div className="bg-gray-300 h-32 w-full rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Regional Office Image</span>
                </div>
              </div>
              <div className="w-2/3 pl-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Regional Offices</h3>
                <p className="text-gray-600">
                  We have regional offices in Europe (London), Asia (Tokyo), and Africa (Cape Town), where we manage projects and collaborate with local governments and businesses.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-16">
          <div className="bg-blue-600 text-white text-center py-10 px-5 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Join Us in Shaping the Future of Energy</h2>
            <p className="text-lg mb-6">
              Interested in learning more about our solutions or partnering with us? Contact us today and become part of the renewable energy revolution.
            </p>
            <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100">
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
