const TeamMember = ({ name, title, description }: { name: string; title: string; description: string; }) => {
    return (
      <div className="border p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-600">{title}</p>
        <p>{description}</p>
      </div>
    );
  };
  
  export default TeamMember;
  