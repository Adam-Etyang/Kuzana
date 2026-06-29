import DashboardShell from "@/components/layout/dashboardshell";
import AdminSidebar from "@/components/layout/adminsidebar";

export default function ReportsPage() {
  return (
    <DashboardShell sidebar={<AdminSidebar />}>
      <h1 className="text-2xl font-bold text-[#112250] mb-2">
        Reports & Issues
      </h1>

      <p className="text-gray-500 mb-6">
        Manage disputes and flagged mentorships.
      </p>

      <div className="space-y-4">

        <div className="bg-white border border-red-300 rounded-xl p-5">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold text-red-600">
                Inactive Mentor
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Mary ↔ James
              </p>
            </div>

            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs">
              Action Needed
            </span>
          </div>

          <div className="flex gap-3 mt-5">
            <button className="border border-red-500 text-red-500 px-4 py-2 rounded-lg">
              View
            </button>

            <button className="bg-[#112250] text-white px-4 py-2 rounded-lg">
              Resolve
            </button>
          </div>
        </div>

      </div>
    </DashboardShell>
  );
}