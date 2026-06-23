interface StatCardProps {
  label: string;
  value: string | number;
}

export default function StatCard({
  label,
  value,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md border-l-8 border-[#112250] p-6">
      <p className="text-gray-500">
        {label}
      </p>

      <h2 className="text-4xl font-bold text-[#112250] mt-2">
        {value}
      </h2>
    </div>
  );
}