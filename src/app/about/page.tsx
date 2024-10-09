import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <h1 className="text-center text-4xl mt-10">About Us</h1>
      <p className="text-center mx-5 mt-5">
        We are a renewable energy company focused on providing sustainable solutions.
      </p>
      <Footer />
    </div>
  );
};

export default About;
