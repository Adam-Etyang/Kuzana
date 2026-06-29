import DashboardShell from "@/components/layout/dashboardshell";
import AdminSidebar from "@/components/layout/adminsidebar";

export default function UserManagementPage() {
  return (
    <DashboardShell sidebar={<AdminSidebar />}>
      <h1 className="text-2xl font-bold text-[#112250] mb-6">
        User Management
      </h1>

      <div className="bg-white rounded-xl border overflow-hidden">

        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4">Name</th>
              <th className="text-left">Role</th>
              <th className="text-left">Status</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-4">Mary Wambui</td>
              <td>Student</td>
              <td>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                  Active
                </span>
              </td>
              <td>
                <button className="text-[#112250] font-medium">
                  View
                </button>
              </td>
            </tr>

            <tr className="border-t">
              <td className="p-4">James Mutua</td>
              <td>Mentor</td>
              <td>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                  Verified
                </span>
              </td>
              <td>
                <button className="text-[#112250] font-medium">
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </DashboardShell>
  );
}