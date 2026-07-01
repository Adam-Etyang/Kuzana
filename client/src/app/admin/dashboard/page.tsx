"use client";

import DashboardShell from "@/components/layout/dashboardshell";
import AdminSidebar from "@/components/layout/adminsidebar";
import Link from "next/link";
import {
  Users,
  UserCheck,
  AlertTriangle,
  Clock,
  ArrowRight,
  CheckCircle,
  UserPlus,
} from "lucide-react";
import { useApi } from "@/lib/use-api";

interface AdminStats {
  counts: {
    students: number;
    mentors: number;
    pending: number;
    reports: number;
  };
  pendingVerifications: {
    id: string;
    name: string | null;
    email: string;
    createdAt: string;
  }[];
  recentUsers: {
    id: string;
    name: string | null;
    role: string;
    createdAt: string;
  }[];
  recentMatches: {
    id: string;
    menteeName: string | null;
    mentorName: string | null;
    matchedAt: string;
  }[];
}

function timeAgo(iso: string): string {
  const then = new Date(iso).getTime();
  const diff = Date.now() - then;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} minute${mins === 1 ? "" : "s"} ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days === 1 ? "" : "s"} ago`;
}

function roleLabel(role: string): string {
  if (role === "MENTOR") return "mentor";
  if (role === "ADMIN") return "admin";
  return "student";
}

export default function AdminDashboardPage() {
  const { data, loading, error } = useApi<AdminStats>("/users/stats");

  const counts = data?.counts;
  const pendingVerifications = data?.pendingVerifications ?? [];
  const recentUsers = data?.recentUsers ?? [];
  const recentMatches = data?.recentMatches ?? [];

  return (
    <DashboardShell sidebar={<AdminSidebar />}>
      {/* HERO */}
      <div className="mb-8 bg-gradient-to-r from-[#112250] to-[#1B3475] rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E0C58F]/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <p className="text-white/70 text-sm mb-2">Welcome back</p>

          <h1 className="text-3xl font-bold mb-3">Admin Control Center</h1>

          <p className="text-white/80 max-w-2xl">
            Monitor mentor applications, manage mentorship relationships,
            resolve issues, and oversee the Kuzana platform.
          </p>
        </div>
      </div>

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 text-sm">
          Failed to load dashboard data: {error}
        </div>
      )}

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-5 mb-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <Users className="w-8 h-8 text-blue-600" />
            <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
              Students
            </span>
          </div>
          <h2 className="text-3xl font-bold text-[#112250]">
            {loading ? "—" : counts?.students ?? 0}
          </h2>
          <p className="text-sm text-gray-500 mt-1">Registered students</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <UserCheck className="w-8 h-8 text-green-600" />
            <span className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded-full">
              Mentors
            </span>
          </div>
          <h2 className="text-3xl font-bold text-[#112250]">
            {loading ? "—" : counts?.mentors ?? 0}
          </h2>
          <p className="text-sm text-gray-500 mt-1">Registered mentors</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <Clock className="w-8 h-8 text-orange-500" />
            <span className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded-full">
              Pending
            </span>
          </div>
          <h2 className="text-3xl font-bold text-[#112250]">
            {loading ? "—" : counts?.pending ?? 0}
          </h2>
          <p className="text-sm text-gray-500 mt-1">Awaiting approval</p>
        </div>

        <div className="bg-white rounded-2xl border border-red-200 p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <AlertTriangle className="w-8 h-8 text-red-500" />
            <span className="text-xs bg-red-50 text-red-500 px-2 py-1 rounded-full">
              Reports
            </span>
          </div>
          <h2 className="text-3xl font-bold text-red-500">
            {loading ? "—" : counts?.reports ?? 0}
          </h2>
          <p className="text-sm text-gray-500 mt-1">Open issues</p>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* VERIFICATIONS */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-[#112250]">
              Awaiting Verification
            </h3>

            <Link
              href="/admin/verify"
              className="text-sm text-[#112250] flex items-center gap-1"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {loading ? (
              <p className="text-sm text-gray-400">Loading…</p>
            ) : pendingVerifications.length === 0 ? (
              <p className="text-sm text-gray-400">
                No mentors awaiting verification.
              </p>
            ) : (
              pendingVerifications.map((mentor) => (
                <div
                  key={mentor.id}
                  className="flex items-center justify-between border border-gray-100 rounded-xl p-4"
                >
                  <div>
                    <p className="font-medium text-[#112250]">
                      {mentor.name ?? mentor.email}
                    </p>
                    <p className="text-sm text-gray-500">
                      Submitted {timeAgo(mentor.createdAt)}
                    </p>
                  </div>

                  <button className="px-4 py-2 bg-[#112250] text-white rounded-lg text-sm hover:bg-[#1B3475]">
                    Review
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* QUICK STATS SUMMARY */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h3 className="font-semibold text-[#112250] mb-5">Overview</h3>

          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Total Users</span>
              <span className="font-medium">
                {loading
                  ? "—"
                  : (counts?.students ?? 0) + (counts?.mentors ?? 0)}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                Active Mentorships
              </span>
              <span className="font-medium">
                {loading ? "—" : recentMatches.length}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                Awaiting Verification
              </span>
              <span className="font-medium">
                {loading ? "—" : pendingVerifications.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* LOWER GRID */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* ACTIVITY */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h3 className="font-semibold text-[#112250] mb-5">Recent Activity</h3>

          <div className="space-y-5">
            {loading ? (
              <p className="text-sm text-gray-400">Loading…</p>
            ) : recentUsers.length === 0 && recentMatches.length === 0 ? (
              <p className="text-sm text-gray-400">No recent activity.</p>
            ) : (
              <>
                {recentUsers.map((u) => (
                  <div key={`u-${u.id}`} className="flex gap-3">
                    <UserPlus className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-700">
                        {u.name ?? "A user"} registered as a {roleLabel(u.role)}.
                      </p>
                      <p className="text-xs text-gray-400">
                        {timeAgo(u.createdAt)}
                      </p>
                    </div>
                  </div>
                ))}

                {recentMatches.map((m) => (
                  <div key={`m-${m.id}`} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-700">
                        {m.menteeName ?? "Mentee"} matched with{" "}
                        {m.mentorName ?? "mentor"}.
                      </p>
                      <p className="text-xs text-gray-400">
                        {timeAgo(m.matchedAt)}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h3 className="font-semibold text-[#112250] mb-5">Quick Actions</h3>

          <div className="grid gap-4">
            <Link
              href="/admin/verify"
              className="border rounded-xl p-4 hover:border-[#112250] transition"
            >
              <h4 className="font-medium text-[#112250]">Verify Mentors</h4>
              <p className="text-sm text-gray-500 mt-1">
                Review pending mentor applications.
              </p>
            </Link>

            <Link
              href="/admin/pairs"
              className="border rounded-xl p-4 hover:border-[#112250] transition"
            >
              <h4 className="font-medium text-[#112250]">Manage Pairings</h4>
              <p className="text-sm text-gray-500 mt-1">
                View active mentorship relationships.
              </p>
            </Link>

            <Link
              href="/admin/reports"
              className="border rounded-xl p-4 hover:border-red-400 transition"
            >
              <h4 className="font-medium text-red-500">Review Reports</h4>
              <p className="text-sm text-gray-500 mt-1">Resolve flagged issues.</p>
            </Link>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
