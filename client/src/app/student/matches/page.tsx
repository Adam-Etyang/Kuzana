import DashboardShell from "@/components/layout/dashboardshell";
import StudentSidebar from "@/components/layout/studentsidebar";
import MatchCard from "@/components/cards/matchcard";
import SectionTitle from "@/components/ui/sectiontitle";
import { SlidersHorizontal, Sparkles } from "lucide-react";

export default function MatchesPage() {
  return (
    <DashboardShell sidebar={<StudentSidebar />}>
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        
        <div>
          <SectionTitle
            title="Your Best Matches"
            subtitle="Mentors ranked by compatibility with your goals, interests, and profile."
          />

          <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#E0C58F]" />
            AI-assisted matching based on your onboarding profile
          </p>
        </div>

        {/* Actions */}
        <button className="flex items-center gap-2 text-sm text-[#112250] border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 transition w-fit">
          <SlidersHorizontal className="w-4 h-4" />
          Filter & Sort
        </button>
      </div>

      {/* MATCH LIST */}
      <div className="space-y-4">

        {/* Top match highlight feel */}
        <div className="border border-[#E0C58F] bg-[#F5F0E9] rounded-xl p-1">
          <MatchCard mentor="Dr. Wanjiru" score={94} />
        </div>

        <MatchCard mentor="James Otieno" score={88} />

        <MatchCard mentor="Amina Hassan" score={84} />

        <MatchCard mentor="Kevin Mutua" score={79} />
      </div>

      {/* EMPTY INSIGHT / CTA */}
      <div className="mt-10 bg-white border border-gray-200 rounded-xl p-6 text-center">
        
        <h3 className="text-[#112250] font-semibold">
          Want better matches?
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Improve your profile to unlock more accurate mentor recommendations.
        </p>

        <button className="mt-4 bg-[#112250] hover:bg-[#1B3475] text-white px-4 py-2 rounded-lg text-sm transition">
          Update Profile
        </button>
      </div>

    </DashboardShell>
  );
}