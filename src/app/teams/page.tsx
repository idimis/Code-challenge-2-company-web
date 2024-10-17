import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

const Teams = () => {
  
  const teamMembers = [
    { name: "Paijo Woodgate", title: "Chief Executive Officer", description: "Leader and visionary.", quote: "Creating Ciptadaya has allowed me to realize my dream of leading the renewable energy revolution.", linkedIn: "https://www.linkedin.com/in/alice" },
    { name: "Dalimin Smith", title: "Chief Technology Officer", description: "Tech expert in renewable energy.", quote: "Innovation drives us forward, and at Ciptadaya, we push the boundaries of technology.", linkedIn: "https://www.linkedin.com/in/bob" },
    { name: "Rukiyah Parker", title: "Chief Operation Officer", description: "Operational strategist.", quote: "Our mission of sustainability keeps me motivated every single day.", linkedIn: "https://www.linkedin.com/in/catherine" },
    { name: "Sriyatun Lewis", title: "Chief Marketing Officer", description: "Marketing and branding expert.", quote: "Promoting renewable energy is not just a job, it's a passion.", linkedIn: "https://www.linkedin.com/in/grace" },
    { name: "Srintil Shearer", title: "Head of Solar Energy", description: "Leading solar energy projects.", quote: "At Ciptadaya, we harness the power of the sun for a brighter future.", linkedIn: "https://www.linkedin.com/in/david" },
    { name: "Mukidi Rooney", title: "Head of Wind Energy", description: "Wind power specialist.", quote: "The wind is our partner in creating clean energy solutions.", linkedIn: "https://www.linkedin.com/in/eve" },
    { name: "Ngatirah Davis", title: "Head of Energy Storage", description: "Expert in energy storage solutions.", quote: "Energy storage is the key to a sustainable energy grid.", linkedIn: "https://www.linkedin.com/in/frank" },
    { name: "Karyadi Ferdinand", title: "Head of Research & Development", description: "R&D expert leading innovation.", quote: "At Ciptadaya, we are always on the cutting edge of clean energy research.", linkedIn: "https://www.linkedin.com/in/henry" },
  ];

  
  const TeamMember = ({ name, title, description, quote, linkedIn }: { name: string; title: string; description: string; quote: string; linkedIn: string; }) => {
    const isMale = ['Paijo Woodgate', 'Dalimin Smith', 'Mukidi Rooney', 'Karyadi Ferdinand', 'Mulyono van Helsing'].includes(name);
    const gender = isMale ? 'men' : 'women';
    const randomUserImage = `https://randomuser.me/api/portraits/${gender}/${Math.floor(Math.random() * 10)}.jpg`;

    return (
      <div className="bg-white shadow-lg p-3 rounded-lg w-full md:w-1/3 mx-2 mb-4 relative group">
        <div className="h-28 w-28 mx-auto mb-3 relative overflow-hidden rounded-full">
          <Image
            src={randomUserImage}
            alt={`${name}`}
            width={112}
            height={112}
            className="h-full w-full object-cover rounded-full transition duration-300 group-hover:opacity-50"
          />
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-blue-700 bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"
          >
            <FaLinkedin className="text-white text-xl" />
          </a>
        </div>
        <h3 className="text-lg font-bold text-center">{name}</h3>
        <h4 className="text-s text-gray-500 text-center mb-1">{title}</h4>
        <p className="text-center text-s mb-2">{description}</p>
        <blockquote className="italic text-gray-600 text-center text-s">&quot;{quote}&quot;</blockquote>
      </div>
    );
  };

  
  return (
    <div>
      <Header />
      <h1 className="text-center text-2xl md:text-3xl font-bold mt-10 mb-8">Our Team</h1>

      <div className="container mx-auto px-4 py-8 max-w-screen-xl">
        <div className="flex flex-wrap justify-center items-start mb-10">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              title={member.title}
              description={member.description}
              quote={member.quote}
              linkedIn={member.linkedIn}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Teams;
