"use client";

import DashboardShell from "@/components/layout/dashboardshell";
import StudentSidebar from "@/components/layout/studentsidebar";
import MentorCard from "@/components/cards/mentorcard";
import SectionTitle from "@/components/ui/sectiontitle";
import { Search, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useMentors, type MentorWithProfile } from "@/lib/use-student-data";

function getMentorName(m: MentorWithProfile): string {
  if (m.profile) return `${m.profile.firstName} ${m.profile.lastName}`;
  return m.name ?? "Mentor";
}

export default function DiscoverPage() {
  const { data: mentors, loading, error } = useMentors();
  const [search, setSearch] = useState("");

  const filtered = (mentors ?? []).filter((m) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    const name = getMentorName(m).toLowerCase();
    const dept = m.profile?.department?.toLowerCase() ?? "";
    const faculty = m.profile?.faculty?.toLowerCase() ?? "";
    const skills = (m.profile?.skills ?? []).map((s) => s.skill.name.toLowerCase());
    return name.includes(q) || dept.includes(q) || faculty.includes(q) || skills.some((s) => s.includes(q));
  });

  return (
    <DashboardShell sidebar={<StudentSidebar />}>
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        
        <div>
          <SectionTitle
            title="Discover Mentors"
            subtitle="Find mentors aligned with your goals, interests, and career path."
          />
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 w-full md:w-80">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search mentors, skills, departments..."
            className="w-full outline-none text-sm"
          />
        </div>
      </div>

      {/* MENTOR GRID */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-[#112250]" />
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl p-10 text-center">
          <p className="text-sm text-gray-500 mb-2">
            {search.trim() ? "No mentors match your search." : "No mentors available yet."}
          </p>
          <p className="text-xs text-gray-400">
            Check back soon as our mentor network grows.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((m) => (
            <div key={m.id} className="hover:shadow-md transition">
              <MentorCard
                id={m.id}
                name={getMentorName(m)}
                field={m.profile?.department ?? "—"}
                company={m.profile?.faculty ?? "—"}
                skills={(m.profile?.skills ?? []).map((s) => s.skill.name)}
              />
            </div>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="mt-10 bg-white border border-gray-200 rounded-xl p-6 text-center">
        <h3 className="text-[#112250] font-semibold">
          Can&apos;t find the right mentor?
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          We&apos;ll help you match with someone based on your profile soon.
        </p>

        <Link
          href="/student/onboarding"
          className="inline-block mt-4 bg-[#112250] hover:bg-[#1B3475] text-white px-4 py-2 rounded-lg text-sm transition"
        >
          Improve your profile
        </Link>
      </div>

    </DashboardShell>
  );
}
