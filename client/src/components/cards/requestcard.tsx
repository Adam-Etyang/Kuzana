import Badge from "../ui/badge";

interface RequestCardProps {
  mentor: string;
  status: string;
}

export default function RequestCard({
  mentor,
  status,
}: RequestCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-[#112250]">
            {mentor}
          </h3>

          <p className="text-sm text-gray-500">
            Mentorship Request
          </p>
        </div>

        <Badge>
          {status}
        </Badge>
      </div>
    </div>
  );
}