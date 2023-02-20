import TeamMemberCard from "../../components/TeamCard";

const teamMembers = [
  {
    name: "Aditya Singh",
    title: "Full Stack Developer",
    imageUrl: "/usar.png",
    description: "anierijgioerjgre",
  },
  {
    name: "Aman Sharma",
    title: "Full Stack Developer",
    imageUrl: "/usar.png",
    description: "aboieroijgoierji",
  },
  {
    name: "Subhangi Dhasmana",
    title: "Full Stack Developer",
    imageUrl: "/usar.png",
    description: "fbihiear",
  },
  {
    name: "Ayush Gupta",
    title: "Full Stack Developer",
    imageUrl: "/usar.png",
    description: "fbihieargeiorjeabioje",
  },
  {
    name: "Ayush Goyal",
    title: "Full Stack Developer",
    imageUrl: "/usar.png",
    description: "fbihieargeiorjeabioje",
  },
];

const Team = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {teamMembers.map((member) => (
        <TeamMemberCard
          key={member.name}
          name={member.name}
          title={member.title}
          imageUrl={member.imageUrl}
          description={member.description}
        />
      ))}
    </div>
  );
};

export default Team;
