import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">Our Services</h1>
        
        <p className="text-center text-lg text-gray-600 mx-5 mb-10">
          We provide innovative renewable energy solutions, empowering businesses, governments, and communities to harness the power of nature and transition to clean, sustainable energy sources.
        </p>

        {/* Services for Business (B2B) */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Services for Businesses (B2B)</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {/* Image placeholder */}
            <div className="w-full md:w-1/3">
              <div className="bg-gray-300 h-48 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Image Placeholder</span>
              </div>
            </div>

            {/* Service description */}
            <div className="w-full md:w-2/3">
              <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Solar Power Solutions</h3>
                <p className="text-gray-600">
                  We provide comprehensive solar energy solutions for businesses looking to reduce their carbon footprint. Our end-to-end services include system design, installation, and maintenance.
                </p>
              </div>

              <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Wind Energy Systems</h3>
                <p className="text-gray-600">
                  Harness the power of wind for your industrial needs. We offer customized wind turbine installations, including feasibility studies, turbine selection, and ongoing maintenance to ensure maximum efficiency.
                </p>
              </div>

              <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Energy Storage Solutions</h3>
                <p className="text-gray-600">
                  Our energy storage systems allow businesses to store excess energy generated from renewable sources, providing backup power during peak times and reducing energy costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Government (B2G) */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Services for Governments (B2G)</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {/* Image placeholder */}
            <div className="w-full md:w-1/3">
              <div className="bg-gray-300 h-48 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Image Placeholder</span>
              </div>
            </div>

            {/* Service description */}
            <div className="w-full md:w-2/3">
              <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Large-Scale Solar Farms</h3>
                <p className="text-gray-600">
                  We partner with governments to build large-scale solar farms that provide clean energy to cities and regions. Our solutions are designed for scalability and long-term sustainability.
                </p>
              </div>

              <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Wind Power Projects</h3>
                <p className="text-gray-600">
                  We collaborate with governments on wind power projects that provide clean, renewable energy. Our projects are tailored to specific geographic conditions and energy needs.
                </p>
              </div>

              <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Osmotic Power Plants</h3>
                <p className="text-gray-600">
                  We pioneer osmotic power solutions by utilizing the energy potential of freshwater and seawater interactions. Our cutting-edge technology helps governments tap into an untapped renewable energy source.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Communities (B2C) */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Services for Communities (B2C)</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {/* Image placeholder */}
            <div className="w-full md:w-1/3">
              <div className="bg-gray-300 h-48 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Image Placeholder</span>
              </div>
            </div>

            {/* Service description */}
            <div className="w-full md:w-2/3">
              <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Residential Solar Installation</h3>
                <p className="text-gray-600">
                  We offer affordable and efficient solar power solutions for homes, enabling communities to produce their own clean energy and reduce their dependency on the grid.
                </p>
              </div>

              <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Community Wind Turbines</h3>
                <p className="text-gray-600">
                  Our community wind turbine solutions provide local energy production, helping neighborhoods generate their own power and reduce overall energy costs.
                </p>
              </div>

              <div className="max-w-sm bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Energy Education Programs</h3>
                <p className="text-gray-600">
                  We work with local communities to educate residents on renewable energy technologies, empowering them to make informed decisions about their energy future.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
