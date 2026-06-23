import DashboardShell from "@/components/layout/dashboardshell";
import AdminSidebar from "@/components/layout/adminsidebar";
import StatCard from "@/components/ui/statcard";
import SectionTitle from "@/components/ui/sectiontitle";

export default function AdminDashboardPage() {
  return (
    <DashboardShell sidebar={<AdminSidebar />}>
      <SectionTitle
        title="Admin Dashboard"
        subtitle="Platform overview."
      />

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Students"
          value="152"
        />

        <StatCard
          label="Mentors"
          value="38"
        />

        <StatCard
          label="Matches"
          value="94"
        />

        <StatCard
          label="Active Pairs"
          value="52"
        />
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-semibold text-[#112250] mb-4">
          Recent Activity
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li>5 mentors approved today.</li>
          <li>12 new students registered.</li>
          <li>3 mentorship disputes resolved.</li>
        </ul>
      </div>
    </DashboardShell>
  );
}