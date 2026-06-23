interface PairingCardProps {
  student: string;
  mentor: string;
}

export default function PairingCard({
  student,
  mentor,
}: PairingCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border">
      <h3 className="font-semibold text-[#112250]">
        {student}
      </h3>

      <p className="text-gray-500 mt-2">
        Matched with
      </p>

      <p className="font-medium mt-1">
        {mentor}
      </p>
    </div>
  );
}