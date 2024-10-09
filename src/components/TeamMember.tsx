import { FaLinkedin } from 'react-icons/fa';

interface TeamMemberProps {
  name: string;
  title: string;
  description: string;
  quote: string;
  linkedIn: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, description, quote, linkedIn }) => {
  // Logika untuk menentukan gambar berdasarkan nama
  const isMale = ['Paijo Woodgate', 'Dalimin Smith', 'Mukidi Rooney', 'Karyadi Ferdinand', 'Mulyono van Helsing'].includes(name);
  const gender = isMale ? 'men' : 'women'; // Tentukan gender untuk gambar
  const randomUserImage = `https://randomuser.me/api/portraits/${gender}/${Math.floor(Math.random() * 10)}.jpg`;

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg w-full md:w-1/3 mx-4 mb-8 relative group">
      <div className="h-40 w-40 mx-auto mb-4 relative overflow-hidden rounded-full">
        
        {/* Random image from randomuser.me, menggunakan foto orang */}
        <img 
          src={randomUserImage} 
          alt={`${name}`} 
          className="h-full w-full object-cover rounded-full transition duration-300 group-hover:opacity-50"
        />
        
        {/* LinkedIn overlay */}
        <a 
          href={linkedIn} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute inset-0 flex items-center justify-center bg-blue-700 bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"
        >
          <FaLinkedin className="text-white text-3xl" />
        </a>
      </div>
      <h3 className="text-xl font-bold text-center">{name}</h3>
      <h4 className="text-sm text-gray-500 text-center mb-2">{title}</h4>
      <p className="text-center mb-4">{description}</p>
      <blockquote className="italic text-gray-600 text-center">"{quote}"</blockquote>
    </div>
  );
};

export default TeamMember;
