type CardProps = {
  title: string;
  description: string;
  icon?: string;
  className?: string;
};

export default function Card({ title, description, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${className}`}
    >
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}
