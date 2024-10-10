import { FaLinkedin } from 'react-icons/fa';

interface TeamMemberProps {
  name: string;
  title: string;
  description: string;
  quote: string;
  linkedIn: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, description, quote, linkedIn }) => {
  // Determine gender based on the name
  const isMale = ['Paijo Woodgate', 'Dalimin Smith', 'Mukidi Rooney', 'Karyadi Ferdinand', 'Mulyono van Helsing'].includes(name);
  const gender = isMale ? 'men' : 'women'; 
  const randomUserImage = `https://randomuser.me/api/portraits/${gender}/${Math.floor(Math.random() * 10)}.jpg`;

  return (
    <div className="bg-white shadow-lg p-3 rounded-lg w-full md:w-1/3 mx-2 mb-4 relative group"> {/* Reduced padding */}
      <div className="h-28 w-28 mx-auto mb-3 relative overflow-hidden rounded-full"> {/* Reduced image size */}
        <img 
          src={randomUserImage} 
          alt={`${name}`} 
          className="h-full w-full object-cover rounded-full transition duration-300 group-hover:opacity-50"
        />
        <a 
          href={linkedIn} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute inset-0 flex items-center justify-center bg-blue-700 bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"
        >
          <FaLinkedin className="text-white text-xl" /> {/* Reduced icon size */}
        </a>
      </div>
      <h3 className="text-lg font-bold text-center">{name}</h3> {/* Keep font size for names */}
      <h4 className="text-xs text-gray-500 text-center mb-1">{title}</h4> {/* Reduced title font size */}
      <p className="text-center text-xs mb-2">{description}</p> {/* Reduced description font size */}
      <blockquote className="italic text-gray-600 text-center text-xs">"{quote}"</blockquote> {/* Keep quote size */}
    </div>
  );
};

export default TeamMember;
