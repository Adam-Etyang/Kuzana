"use client";

import DashboardShell from "@/components/layout/dashboardshell";
import AdminSidebar from "@/components/layout/adminsidebar";
import { useApi } from "@/lib/use-api";

interface AdminUser {
  id: string;
  name: string | null;
  email: string;
  role: string;
  banned: boolean | null;
  emailVerified: boolean;
  createdAt: string;
  profile: { firstName: string; lastName: string } | null;
}

function displayName(user: AdminUser): string {
  if (user.profile?.firstName || user.profile?.lastName) {
    return [user.profile?.firstName, user.profile?.lastName]
      .filter(Boolean)
      .join(" ");
  }
  return user.name ?? user.email;
}

function roleLabel(role: string): string {
  if (role === "MENTOR") return "Mentor";
  if (role === "ADMIN") return "Admin";
  return "Student";
}

export default function UserManagementPage() {
  const { data: users, loading, error } = useApi<AdminUser[]>("/users");

  return (
    <DashboardShell sidebar={<AdminSidebar />}>
      <h1 className="text-2xl font-bold text-[#112250] mb-6">
        User Management
      </h1>

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 text-sm">
          Failed to load users: {error}
        </div>
      )}

      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4">Name</th>
              <th className="text-left">Email</th>
              <th className="text-left">Role</th>
              <th className="text-left">Status</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr className="border-t">
                <td colSpan={5} className="p-4 text-gray-400">
                  Loading…
                </td>
              </tr>
            ) : !users || users.length === 0 ? (
              <tr className="border-t">
                <td colSpan={5} className="p-4 text-gray-400">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="p-4 font-medium text-[#112250]">
                    {displayName(user)}
                  </td>
                  <td className="text-gray-500">{user.email}</td>
                  <td>{roleLabel(user.role)}</td>
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        user.banned
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {user.banned ? "Banned" : "Active"}
                    </span>
                  </td>
                  <td>
                    <button className="text-[#112250] font-medium">View</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </DashboardShell>
  );
}
