import DashboardShell from "@/components/layout/dashboardshell";
import AdminSidebar from "@/components/layout/adminsidebar";
import { CheckCircle, Eye } from "lucide-react";

const mentors = [
  {
    name: "James Mutua",
    email: "james@safaricom.co.ke",
    company: "Safaricom",
    role: "Product Manager",
    expertise: "Product Management",
    date: "2 days ago",
    status: "Pending",
  },
  {
    name: "Rose Wanjiku",
    email: "rose@kcb.co.ke",
    company: "KCB",
    role: "HR Lead",
    expertise: "Leadership",
    date: "1 day ago",
    status: "Pending",
  },
];

export default function VerifyMentorsPage() {
  return (
    <DashboardShell sidebar={<AdminSidebar />}>
      <h1 className="text-2xl font-bold text-[#112250] mb-2">
        Verify Mentors
      </h1>

      <p className="text-gray-500 mb-6">
        Review and approve mentor applications.
      </p>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-4 text-left">Mentor</th>
              <th className="text-left">Company</th>
              <th className="text-left">Expertise</th>
              <th className="text-left">Submitted</th>
              <th className="text-left">Status</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {mentors.map((mentor) => (
              <tr key={mentor.email} className="border-t">
                <td className="p-4">
                  <p className="font-medium text-[#112250]">
                    {mentor.name}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {mentor.email}
                  </p>
                </td>

                <td>
                  {mentor.company}
                  <p className="text-xs text-gray-500">
                    {mentor.role}
                  </p>
                </td>

                <td>{mentor.expertise}</td>

                <td>{mentor.date}</td>

                <td>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">
                    Pending
                  </span>
                </td>

                <td>
                  <div className="flex gap-2">
                    <button className="border px-3 py-1 rounded-lg flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      Review
                    </button>

                    <button className="bg-[#112250] text-white px-3 py-1 rounded-lg flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      Approve
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardShell>
  );
}