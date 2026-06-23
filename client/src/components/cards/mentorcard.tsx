import Avatar from "../ui/avatar";
import Button from "../ui/button";
import Badge from "../ui/badge";
import Link from "next/link";
import { Briefcase, Building2, Star } from "lucide-react";

interface MentorCardProps {
  name: string;
  field: string;
  company: string;
}

export default function MentorCard({
  name,
  field,
  company,
}: MentorCardProps) {
  return (
    <div
      className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm
      hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
    >
      
      {/* HEADER */}
      <div className="flex items-start gap-4">
        
        <Avatar name={name} />

        <div className="flex-1">
          
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg text-[#112250]">
              {name}
            </h3>

            {/* Trust indicator */}
            <div className="flex items-center gap-1 text-xs text-[#E0C58F]">
              <Star className="w-3.5 h-3.5 fill-[#E0C58F] text-[#E0C58F]" />
              Verified
            </div>
          </div>

          {/* Field */}
          <div className="flex items-center gap-2 text-gray-600 mt-1">
            <Briefcase className="w-4 h-4 text-gray-400" />
            <p className="text-sm">{field}</p>
          </div>

          {/* Company */}
          <div className="flex items-center gap-2 text-gray-400 mt-1">
            <Building2 className="w-4 h-4" />
            <p className="text-sm">{company}</p>
          </div>

          {/* Availability hint */}
          <p className="text-xs text-green-600 mt-2">
            ● Available for mentorship
          </p>
        </div>
      </div>

      {/* TAGS */}
      <div className="mt-4 flex gap-2 flex-wrap">
        <Badge>Career Growth</Badge>
        <Badge>Industry Insights</Badge>
        <Badge>1:1 Mentorship</Badge>
      </div>

      {/* CTA */}
      <div className="mt-5 space-y-2">
        
        <Link href={`/student/requests/new?mentor=${encodeURIComponent(name)}`}>
          <Button className="w-full bg-[#112250] hover:bg-[#1B3475] text-white transition">
            Request Mentorship
          </Button>
        </Link>

        <Link href="/student/mentor/1">
          <button className="w-full text-sm text-[#1B3475] hover:underline py-1">
            View Full Profile
          </button>
        </Link>
      </div>
    </div>
  );
}