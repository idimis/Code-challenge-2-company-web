import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeamMember from '@/components/TeamMember';

const Teams = () => {
  const teamMembers = [
    { name: "Alice", title: "CEO", description: "Leader and visionary." },
    { name: "Bob", title: "CTO", description: "Tech expert in renewable energy." },
    
  ];

  return (
    <div>
      <Header />
      <h1 className="text-center text-4xl mt-10">Our Team</h1>
      <div className="flex justify-center flex-wrap mt-5">
        {teamMembers.map((member, index) => (
          <TeamMember 
            key={index} 
            name={member.name} 
            title={member.title} 
            description={member.description} 
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Teams;
