import DashboardShell from "@/components/layout/dashboardshell";
import StudentSidebar from "@/components/layout/studentsidebar";
import StatCard from "@/components/ui/statcard";
import SectionTitle from "@/components/ui/sectiontitle";
import Link from "next/link";
import { Search, Bell, User, ArrowRight, Users, Send, CheckCircle } from "lucide-react";

export default function StudentDashboardPage() {
  return (
    <DashboardShell sidebar={<StudentSidebar />}>
      
      {/* HEADER BAR */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        
        <div>
          <h1 className="text-2xl font-bold text-[#112250]">
            Student Dashboard
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Welcome back — here’s your mentorship snapshot.
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              placeholder="Search mentors, skills..."
              className="outline-none text-sm"
            />
          </div>

          {/* Notifications */}
          <button className="relative bg-white border border-gray-200 p-2 rounded-lg hover:bg-gray-50 transition">
            <Bell className="w-4 h-4 text-[#112250]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#E0C58F] rounded-full" />
          </button>

          {/* Profile */}
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 transition">
            <User className="w-4 h-4 text-[#112250]" />
            <span className="text-sm font-medium text-[#112250]">
              Profile
            </span>
          </button>

          <Link
            href="/student/discover"
            className="bg-[#112250] hover:bg-[#1B3475] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition"
          >
            Discover
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        
        <div className="hover:shadow-md transition">
          <StatCard label="Mentor Matches" value="12" />
        </div>

        <div className="hover:shadow-md transition">
          <StatCard label="Requests Sent" value="5" />
        </div>

        <div className="hover:shadow-md transition">
          <StatCard label="Accepted Mentorships" value="3" />
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="grid md:grid-cols-3 gap-4 mb-10">

        <Link
          href="/student/discover"
          className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition group"
        >
          <Users className="w-5 h-5 text-[#112250]" />
          <h3 className="font-semibold mt-3 text-[#112250]">
            Discover Mentors
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Find mentors aligned with your goals.
          </p>
          <span className="text-sm text-[#1B3475] mt-3 flex items-center gap-1 group-hover:gap-2 transition-all">
            Explore <ArrowRight className="w-4 h-4" />
          </span>
        </Link>

        <Link
          href="/student/requests"
          className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition group"
        >
          <Send className="w-5 h-5 text-[#112250]" />
          <h3 className="font-semibold mt-3 text-[#112250]">
            Your Requests
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Track mentorship requests and responses.
          </p>
          <span className="text-sm text-[#1B3475] mt-3 flex items-center gap-1 group-hover:gap-2 transition-all">
            View <ArrowRight className="w-4 h-4" />
          </span>
        </Link>

        <Link
          href="/student/matches"
          className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition group"
        >
          <CheckCircle className="w-5 h-5 text-[#112250]" />
          <h3 className="font-semibold mt-3 text-[#112250]">
            Active Matches
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Your ongoing mentorship connections.
          </p>
          <span className="text-sm text-[#1B3475] mt-3 flex items-center gap-1 group-hover:gap-2 transition-all">
            Open <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>

      {/* ACTIVITY FEED */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        
        <h3 className="font-semibold text-[#112250] mb-5">
          Recent Activity
        </h3>

        <div className="space-y-4">

          <div className="flex gap-3">
            <div className="w-2 h-2 mt-2 bg-[#E0C58F] rounded-full" />
            <p className="text-sm text-gray-600">
              You sent a mentorship request to{" "}
              <span className="font-medium text-[#112250]">
                Dr. Wanjiru
              </span>.
            </p>
          </div>

          <div className="flex gap-3">
            <div className="w-2 h-2 mt-2 bg-[#112250] rounded-full" />
            <p className="text-sm text-gray-600">
              You matched with{" "}
              <span className="font-medium text-[#112250]">
                James Otieno
              </span>{" "}
              — you can now start chatting.
            </p>
          </div>

          <div className="flex gap-3">
            <div className="w-2 h-2 mt-2 bg-gray-300 rounded-full" />
            <p className="text-sm text-gray-600">
              Profile updated successfully and visible to mentors.
            </p>
          </div>

        </div>
      </div>
    </DashboardShell>
  );
}