"use client";

import DashboardShell from "@/components/layout/dashboardshell";
import StudentSidebar from "@/components/layout/studentsidebar";
import RequestCard from "@/components/cards/requestcard";
import SectionTitle from "@/components/ui/sectiontitle";
import { Filter, Inbox, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRequests, type RequestData } from "@/lib/use-student-data";

function getMentorName(r: RequestData): string {
  if (r.mentor.profile) return `${r.mentor.profile.firstName} ${r.mentor.profile.lastName}`;
  return r.mentor.name ?? "Mentor";
}

export default function RequestsPage() {
  const { data: requests, loading, error } = useRequests("MENTEE");

  const accepted = (requests ?? []).filter((r) => r.status === "ACCEPTED");
  const pending = (requests ?? []).filter((r) => r.status === "PENDING");
  const declined = (requests ?? []).filter((r) => r.status === "DECLINED");

  return (
    <DashboardShell sidebar={<StudentSidebar />}>
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        
        <div>
          <SectionTitle
            title="Mentorship Requests"
            subtitle="Track, manage, and follow up on your mentorship applications."
          />

      
        </div>

        {/* FILTER */}
        <button className="flex items-center gap-2 text-sm text-[#112250] border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 transition w-fit">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-[#112250]" />
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      ) : (requests ?? []).length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl p-10 text-center">
          <p className="text-sm text-gray-500 mb-2">No requests yet.</p>
          <p className="text-xs text-gray-400 mb-4">
            Browse mentors and send a request to get started.
          </p>
          <Link
            href="/student/discover"
            className="inline-flex items-center gap-2 bg-[#112250] hover:bg-[#1B3475] text-white px-4 py-2 rounded-lg text-sm transition"
          >
            Discover Mentors
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {/* ACCEPTED */}
          {accepted.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-[#112250] mb-3">
                Active Mentorships ({accepted.length})
              </h3>
              <div className="space-y-4">
                {accepted.map((r) => (
                  <div key={r.id} className="hover:shadow-sm transition">
                    <RequestCard
                      id={r.id}
                      mentor={getMentorName(r)}
                      status="Accepted"
                      date={new Date(r.createdAt).toLocaleDateString()}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PENDING */}
          {pending.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-[#112250] mb-3">
                Pending Requests ({pending.length})
              </h3>
              <div className="space-y-4">
                {pending.map((r) => (
                  <div key={r.id} className="hover:shadow-sm transition">
                    <RequestCard
                      id={r.id}
                      mentor={getMentorName(r)}
                      status="Pending"
                      date={new Date(r.createdAt).toLocaleDateString()}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DECLINED */}
          {declined.length > 0 && (
            <div className="opacity-60">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">
                Past Requests ({declined.length})
              </h3>
              <div className="space-y-4">
                {declined.map((r) => (
                  <div key={r.id} className="hover:shadow-sm transition">
                    <RequestCard
                      id={r.id}
                      mentor={getMentorName(r)}
                      status="Declined"
                      date={new Date(r.createdAt).toLocaleDateString()}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* CTA */}
      <div className="mt-10 bg-white border border-gray-200 rounded-xl p-6 text-center">
        
        <h3 className="text-[#112250] font-semibold">
          Want more responses?
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Improve your profile or discover more mentors to increase your match rate.
        </p>

        <Link
          href="/student/discover"
          className="inline-block mt-4 bg-[#112250] hover:bg-[#1B3475] text-white px-4 py-2 rounded-lg text-sm transition"
        >
          Discover Mentors
        </Link>
      </div>

    </DashboardShell>
  );
}
