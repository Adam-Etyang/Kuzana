"use client";

import DashboardShell from "@/components/layout/dashboardshell";
import StudentSidebar from "@/components/layout/studentsidebar";
import SectionTitle from "@/components/ui/sectiontitle";
import { SlidersHorizontal, Sparkles, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useMatches, type MatchData } from "@/lib/use-student-data";

function getMentorName(m: MatchData): string {
  if (m.mentor.profile) return `${m.mentor.profile.firstName} ${m.mentor.profile.lastName}`;
  return m.mentor.name ?? "Mentor";
}

export default function MatchesPage() {
  const { data: matches, loading, error } = useMatches();

  const sorted = (matches ?? []).slice().sort((a, b) => {
    const aScore = a.compatibilityScore ?? 0;
    const bScore = b.compatibilityScore ?? 0;
    return bScore - aScore;
  });

  return (
    <DashboardShell sidebar={<StudentSidebar />}>
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        
        <div>
          <SectionTitle
            title="Your Best Matches"
            subtitle="Mentors ranked by compatibility with your goals, interests, and profile."
          />

          <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#E0C58F]" />
            AI-assisted matching based on your onboarding profile
          </p>
        </div>

        {/* Actions */}
        <button className="flex items-center gap-2 text-sm text-[#112250] border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 transition w-fit">
          <SlidersHorizontal className="w-4 h-4" />
          Filter & Sort
        </button>
      </div>

      {/* MATCH LIST */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-[#112250]" />
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      ) : sorted.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl p-10 text-center">
          <p className="text-sm text-gray-500 mb-2">No matches yet.</p>
          <p className="text-xs text-gray-400 mb-4">
            Complete your profile and run matching to find your best mentors.
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
        <div className="space-y-4">
          {sorted.map((m, idx) => {
            const name = getMentorName(m);
            const score = m.compatibilityScore !== null ? Math.round(m.compatibilityScore) : null;
            const isTop = idx === 0 && score !== null;
            return (
              <div
                key={m.id}
                className={isTop ? "border border-[#E0C58F] bg-[#F5F0E9] rounded-xl p-1" : ""}
              >
                <div className="bg-white rounded-xl shadow-sm p-6 border">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-[#112250]">
                        {name}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {m.mentor.profile?.department ?? "—"} &middot; {m.mentor.profile?.faculty ?? "—"}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Matched {new Date(m.matchedAt).toLocaleDateString()}
                      </p>
                    </div>
                    {score !== null && (
                      <>
                        <div className="hidden sm:block w-32">
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                              className="bg-[#112250] h-3 rounded-full transition-all"
                              style={{ width: `${score}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-bold text-[#112250] bg-[#E0C58F]/20 px-3 py-1 rounded-full">
                          {score}% Match
                        </span>
                      </>
                    )}
                    <Link
                      href={`/student/mentor/${m.mentorId}`}
                      className="text-sm text-[#1B3475] hover:underline flex items-center gap-1"
                    >
                      View <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* EMPTY INSIGHT / CTA */}
      <div className="mt-10 bg-white border border-gray-200 rounded-xl p-6 text-center">
        
        <h3 className="text-[#112250] font-semibold">
          Want better matches?
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Improve your profile to unlock more accurate mentor recommendations.
        </p>

        <Link
          href="/student/profileedit"
          className="inline-block mt-4 bg-[#112250] hover:bg-[#1B3475] text-white px-4 py-2 rounded-lg text-sm transition"
        >
          Update Profile
        </Link>
      </div>

    </DashboardShell>
  );
}
