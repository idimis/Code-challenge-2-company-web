import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeamMember from '@/components/TeamMember';

const Teams = () => {
  const teamMembers = [
    { name: "Paijo Woodgate", title: "CEO", description: "Leader and visionary.", quote: "Working at X has allowed me to realize my dream of leading the renewable energy revolution.", linkedIn: "https://www.linkedin.com/in/alice" },
    { name: "Dalimin Smith", title: "CTO", description: "Tech expert in renewable energy.", quote: "Innovation drives us forward, and at X, we push the boundaries of technology.", linkedIn: "https://www.linkedin.com/in/bob" },
    { name: "Rukiyah Parker", title: "COO", description: "Operational strategist.", quote: "Our mission of sustainability keeps me motivated every single day.", linkedIn: "https://www.linkedin.com/in/catherine" },
    { name: "Srintil Shearer", title: "Head of Solar Energy", description: "Leading solar energy projects.", quote: "At X, we harness the power of the sun for a brighter future.", linkedIn: "https://www.linkedin.com/in/david" },
    { name: "Mukidi Rooney", title: "Head of Wind Energy", description: "Wind power specialist.", quote: "The wind is our partner in creating clean energy solutions.", linkedIn: "https://www.linkedin.com/in/eve" },
    { name: "Ngatirah Davis", title: "Head of Energy Storage", description: "Expert in energy storage solutions.", quote: "Energy storage is the key to a sustainable energy grid.", linkedIn: "https://www.linkedin.com/in/frank" },
    { name: "Sriyatun Lewis", title: "Chief Marketing Officer", description: "Marketing and branding expert.", quote: "Promoting renewable energy is not just a job, it's a passion.", linkedIn: "https://www.linkedin.com/in/grace" },
    { name: "Karyadi Ferdinand", title: "Head of Research & Development", description: "R&D expert leading innovation.", quote: "At X, we are always on the cutting edge of clean energy research.", linkedIn: "https://www.linkedin.com/in/henry" },
    { name: "Mulyono van Helsing", title: "Chief Financial Officer", description: "Financial strategist and planner.", quote: "Sustainable energy solutions must be financially viable to create lasting impact.", linkedIn: "https://www.linkedin.com/in/irene" }
  ];

  return (
    <div>
      <Header />
      <h1 className="text-center text-4xl font-bold mt-10">Our Team</h1>
      
      <div className="container mx-auto px-4 py-8">
        {/* First row */}
        <div className="flex justify-center items-center flex-wrap mb-12">
          {teamMembers.slice(0, 3).map((member, index) => (
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

        {/* Second row */}
        <div className="flex justify-center items-center flex-wrap mb-12">
          {teamMembers.slice(3, 6).map((member, index) => (
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

        {/* Third row */}
        <div className="flex justify-center items-center flex-wrap mb-12">
          {teamMembers.slice(6, 9).map((member, index) => (
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
