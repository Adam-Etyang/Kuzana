import DashboardShell from "@/components/layout/dashboardshell";
import MentorSidebar from "@/components/layout/mentorsidebar";
import StatCard from "@/components/ui/statcard";
import SectionTitle from "@/components/ui/sectiontitle";

export default function MentorDashboardPage() {
  return (
    <DashboardShell sidebar={<MentorSidebar />}>
      <SectionTitle
        title="Mentor Dashboard"
        subtitle="Manage your mentees."
      />

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <StatCard
          label="Students"
          value="4"
        />

        <StatCard
          label="Pending Requests"
          value="7"
        />

        <StatCard
          label="Sessions"
          value="12"
        />
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-semibold text-[#112250] mb-4">
          Recent Requests
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li>Aisha Mwangi requested mentorship.</li>
          <li>Brian Otieno accepted your invitation.</li>
          <li>New compatibility match generated.</li>
        </ul>
      </div>
    </DashboardShell>
  );
}