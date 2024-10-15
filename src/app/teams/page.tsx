import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeamMember from '@/components/TeamMember';

const Teams = () => {
  const teamMembers = [
    { name: "Paijo Woodgate", title: "Chief Executive Officer", description: "Leader and visionary.", quote: "Creating New World has allowed me to realize my dream of leading the renewable energy revolution.", linkedIn: "https://www.linkedin.com/in/alice" },
    { name: "Dalimin Smith", title: "Chief Technology Officer", description: "Tech expert in renewable energy.", quote: "Innovation drives us forward, and at New World, we push the boundaries of technology.", linkedIn: "https://www.linkedin.com/in/bob" },
    { name: "Rukiyah Parker", title: "Chief Operation  Officer", description: "Operational strategist.", quote: "Our mission of sustainability keeps me motivated every single day.", linkedIn: "https://www.linkedin.com/in/catherine" },
    { name: "Sriyatun Lewis", title: "Chief Marketing Officer", description: "Marketing and branding expert.", quote: "Promoting renewable energy is not just a job, it's a passion.", linkedIn: "https://www.linkedin.com/in/grace" },
    { name: "Srintil Shearer", title: "Head of Solar Energy", description: "Leading solar energy projects.", quote: "At New World, we harness the power of the sun for a brighter future.", linkedIn: "https://www.linkedin.com/in/david" },
    { name: "Mukidi Rooney", title: "Head of Wind Energy", description: "Wind power specialist.", quote: "The wind is our partner in creating clean energy solutions.", linkedIn: "https://www.linkedin.com/in/eve" },
    { name: "Ngatirah Davis", title: "Head of Energy Storage", description: "Expert in energy storage solutions.", quote: "Energy storage is the key to a sustainable energy grid.", linkedIn: "https://www.linkedin.com/in/frank" },
    
    { name: "Karyadi Ferdinand", title: "Head of Research & Development", description: "R&D expert leading innovation.", quote: "At New World, we are always on the cutting edge of clean energy research.", linkedIn: "https://www.linkedin.com/in/henry" },
  ];

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
