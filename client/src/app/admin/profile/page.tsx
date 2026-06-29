import DashboardShell from "@/components/layout/dashboardshell";
import AdminSidebar from "@/components/layout/adminsidebar";
import { Mail, User } from "lucide-react";

export default function AdminProfilePage() {
  return (
    <DashboardShell sidebar={<AdminSidebar />}>
      <h1 className="text-2xl font-bold text-[#112250] mb-6">
        Admin Profile
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl border p-6 text-center">
          <div className="w-20 h-20 rounded-full bg-[#112250] flex items-center justify-center mx-auto mb-4">
            <span className="text-[#E0C58F] text-2xl font-bold">
              AD
            </span>
          </div>

          <h2 className="font-semibold text-[#112250]">
            System Administrator
          </h2>

          <p className="text-sm text-gray-500">
            Kuzana Platform
          </p>
        </div>

        <div className="md:col-span-2 bg-white rounded-xl border p-6">

          <div className="flex gap-3 mb-4">
            <Mail className="w-5 h-5 text-[#112250]" />
            admin@kuzana.com
          </div>

          <div className="flex gap-3 mb-6">
            <User className="w-5 h-5 text-[#112250]" />
            Platform Administrator
          </div>

          <h3 className="font-semibold text-[#112250] mb-4">
            Recent Actions
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>Approved 5 mentors.</li>
            <li>Resolved 3 reports.</li>
            <li>Reviewed 12 applications.</li>
          </ul>

        </div>
      </div>
    </DashboardShell>
  );
}