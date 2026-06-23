import DashboardShell from "@/components/layout/dashboardshell";
import StudentSidebar from "@/components/layout/studentsidebar";
import MentorCard from "@/components/cards/mentorcard";
import SectionTitle from "@/components/ui/sectiontitle";
import { Search, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

export default function DiscoverPage() {
  return (
    <DashboardShell sidebar={<StudentSidebar />}>
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        
        <div>
          <SectionTitle
            title="Discover Mentors"
            subtitle="Find mentors aligned with your goals, interests, and career path."
          />
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 w-full md:w-80">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            placeholder="Search mentors, skills, companies..."
            className="w-full outline-none text-sm"
          />
        </div>
      </div>

      {/* FILTER CHIPS */}
      <div className="flex flex-wrap gap-2 mb-8">
        {[
          "Software Engineering",
          "UX Design",
          "Data Science",
          "Product Management",
          "Cybersecurity",
        ].map((tag) => (
          <button
            key={tag}
            className="px-3 py-1.5 text-sm rounded-full border border-gray-200 bg-white hover:bg-[#F5F0E9] hover:border-[#E0C58F] transition"
          >
            {tag}
          </button>
        ))}

        <button className="ml-auto flex items-center gap-2 text-sm text-[#112250] border border-gray-200 px-3 py-1.5 rounded-full hover:bg-gray-50 transition">
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </button>
      </div>

      {/* MENTOR GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="hover:shadow-md transition">
          <MentorCard
            name="Dr. Wanjiru"
            field="Software Engineering"
            company="Safaricom"
          />
        </div>

        <div className="hover:shadow-md transition">
          <MentorCard
            name="James Otieno"
            field="UX Design"
            company="Microsoft"
          />
        </div>
      </div>

      {/* EMPTY SPACE CTA FEEL (future expansion hook) */}
      <div className="mt-10 bg-white border border-gray-200 rounded-xl p-6 text-center">
        <h3 className="text-[#112250] font-semibold">
          Can’t find the right mentor?
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          We’ll help you match with someone based on your profile soon.
        </p>

        <Link
          href="/student/onboarding"
          className="inline-block mt-4 bg-[#112250] hover:bg-[#1B3475] text-white px-4 py-2 rounded-lg text-sm transition"
        >
          Improve your profile
        </Link>
      </div>

    </DashboardShell>
  );
}