import DashboardShell from "@/components/layout/dashboardshell";
import StudentSidebar from "@/components/layout/studentsidebar";
import RequestCard from "@/components/cards/requestcard";
import SectionTitle from "@/components/ui/sectiontitle";
import { Filter, Inbox } from "lucide-react";

export default function RequestsPage() {
  return (
    <DashboardShell sidebar={<StudentSidebar />}>
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        
        <div>
          <SectionTitle
            title="Mentorship Requests"
            subtitle="Track, manage, and follow up on your mentorship applications."
          />

          <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
            <Inbox className="w-3.5 h-3.5 text-[#E0C58F]" />
            This is your mentorship pipeline
          </p>
        </div>

        {/* FILTER */}
        <button className="flex items-center gap-2 text-sm text-[#112250] border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 transition w-fit">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      {/* REQUEST GROUPS */}
      <div className="space-y-6">

        {/* ACCEPTED */}
        <div>
          <h3 className="text-sm font-semibold text-[#112250] mb-3">
            Active Mentorships
          </h3>

          <div className="space-y-4">
            <div className="hover:shadow-sm transition">
              <RequestCard mentor="Dr. Wanjiru" status="Accepted" />
            </div>
          </div>
        </div>

        {/* PENDING */}
        <div>
          <h3 className="text-sm font-semibold text-[#112250] mb-3">
            Pending Requests
          </h3>

          <div className="space-y-4">
            <div className="hover:shadow-sm transition">
              <RequestCard mentor="James Otieno" status="Pending" />
            </div>

            <div className="hover:shadow-sm transition">
              <RequestCard mentor="Amina Hassan" status="Pending" />
            </div>
          </div>
        </div>

        {/* OPTIONAL FUTURE STATE */}
        <div className="opacity-60">
          <h3 className="text-sm font-semibold text-gray-400 mb-3">
            Past Requests
          </h3>

          <div className="space-y-4">
            <RequestCard mentor="Kevin Mutua" status="Declined" />
          </div>
        </div>

      </div>

      {/* EMPTY / STRATEGIC CTA */}
      <div className="mt-10 bg-white border border-gray-200 rounded-xl p-6 text-center">
        
        <h3 className="text-[#112250] font-semibold">
          Want more responses?
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Improve your profile or discover more mentors to increase your match rate.
        </p>

        <button className="mt-4 bg-[#112250] hover:bg-[#1B3475] text-white px-4 py-2 rounded-lg text-sm transition">
          Discover Mentors
        </button>
      </div>

    </DashboardShell>
  );
}