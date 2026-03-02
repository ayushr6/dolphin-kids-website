type TeamMember = {
  name: string;
  role: string;
  initials: string;
};

const bgColors = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-pink-500",
];

export default function TeamSection({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {members.map((member, i) => (
        <div
          key={member.name}
          className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <div
            className={`flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold text-white ${bgColors[i % bgColors.length]}`}
          >
            {member.initials}
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            {member.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{member.role}</p>
        </div>
      ))}
    </div>
  );
}
