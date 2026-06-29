import Badge from "../ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RequestCardProps {
  id: string;
  mentor: string;
  status: string;
  date?: string;
}

export default function RequestCard({
  id,
  mentor,
  status,
  date,
}: RequestCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-[#112250]">
            {mentor}
          </h3>

          <p className="text-sm text-gray-500">
            Mentorship Request{date ? ` · ${date}` : ""}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Badge>
            {status}
          </Badge>
          <Link
            href={`/student/requests/${id}`}
            className="text-sm text-[#1B3475] hover:underline flex items-center gap-1"
          >
            Track <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}