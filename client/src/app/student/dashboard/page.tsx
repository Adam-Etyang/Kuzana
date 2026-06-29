"use client";

import DashboardShell from "@/components/layout/dashboardshell";
import StudentSidebar from "@/components/layout/studentsidebar";
import Link from "next/link";
import {
  Search,
  Bell,
  User,
  ArrowRight,
  Users,
  Send,
  CheckCircle,
  Award,
  Sparkles,
  Clock,
  Loader2,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useProfile } from "@/lib/use-profile";
import { useRecommendations, useRequestCounts, useMatches, type RecommendationData } from "@/lib/use-student-data";

type ActivityType = "success" | "sent" | "verified" | "match";

// ── Helpers ───────────────────────────────────────────────────────────────

function ActivityIcon({ type }: { type: ActivityType }) {
  const base =
    "flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0";
  if (type === "success")
    return (
      <span className={`${base} bg-emerald-50 border border-emerald-100`}>
        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
      </span>
    );
  if (type === "sent")
    return (
      <span className={`${base} bg-blue-50 border border-blue-100`}>
        <Send className="w-3.5 h-3.5 text-[#1B3475]" />
      </span>
    );
  if (type === "verified")
    return (
      <span
        className={`${base} border`}
        style={{
          background: "rgba(224,197,143,0.15)",
          borderColor: "rgba(224,197,143,0.4)",
        }}
      >
        <Award className="w-3.5 h-3.5 text-[#C4A96B]" />
      </span>
    );
  return (
    <span
      className={`${base} border`}
      style={{
        background: "rgba(17,34,80,0.07)",
        borderColor: "rgba(17,34,80,0.15)",
      }}
    >
      <Sparkles className="w-3.5 h-3.5 text-[#112250]" />
    </span>
  );
}

function getInitials(name: string | null, profile?: { firstName: string; lastName: string } | null): string {
  if (profile) return `${profile.firstName[0] ?? ""}${profile.lastName[0] ?? ""}`;
  if (name) return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  return "M";
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function buildActivityFeed(
  matches: { id: string; matchedAt: string; mentor: { name: string | null; profile: { firstName: string; lastName: string } | null } }[],
  requests: { id: string; status: string; createdAt: string; updatedAt: string; mentor: { name: string | null; profile: { firstName: string; lastName: string } | null } }[],
): { id: string; type: ActivityType; text: string; time: string }[] {
  const items: { id: string; type: ActivityType; text: string; time: string; sortKey: number }[] = [];

  for (const m of matches) {
    const name = m.mentor.profile ? `${m.mentor.profile.firstName} ${m.mentor.profile.lastName}` : m.mentor.name ?? "A mentor";
    items.push({
      id: `match-${m.id}`,
      type: "match",
      text: `New match found — ${name}.`,
      time: timeAgo(m.matchedAt),
      sortKey: new Date(m.matchedAt).getTime(),
    });
  }

  for (const r of requests) {
    const name = r.mentor.profile ? `${r.mentor.profile.firstName} ${r.mentor.profile.lastName}` : r.mentor.name ?? "A mentor";
    if (r.status === "ACCEPTED") {
      items.push({
        id: `req-acc-${r.id}`,
        type: "success",
        text: `${name} accepted your mentorship request.`,
        time: timeAgo(r.updatedAt),
        sortKey: new Date(r.updatedAt).getTime(),
      });
    } else {
      items.push({
        id: `req-sent-${r.id}`,
        type: "sent",
        text: `You sent a mentorship request to ${name}.`,
        time: timeAgo(r.createdAt),
        sortKey: new Date(r.createdAt).getTime(),
      });
    }
  }

  return items.sort((a, b) => b.sortKey - a.sortKey).slice(0, 6);
}

// ── Page ──────────────────────────────────────────────────────────────────

export default function StudentDashboardPage() {
  const { data: session, isPending: sessionLoading } = authClient.useSession();
  const { profile, loading: profileLoading } = useProfile(session?.user?.id);
  const { data: recommendations, loading: recLoading } = useRecommendations();
  const { data: requestCounts, loading: countsLoading } = useRequestCounts("MENTEE");
  const { data: matches, loading: matchesLoading } = useMatches();

  const studentName = profile ? `${profile.firstName} ${profile.lastName}` : session?.user?.name ?? "Student";
  const studentInitials = profile
    ? `${profile.firstName[0] ?? ""}${profile.lastName[0] ?? ""}`
    : (session?.user?.name?.split(" ").map((n) => n[0]).join("").slice(0, 2) ?? "S");
  const course = profile?.department ?? "—";
  const school = profile?.faculty ?? "—";

  const isLoading = sessionLoading || profileLoading;
  const statsLoading = countsLoading || matchesLoading;
  const topRecs = (recommendations ?? []).slice(0, 2);
  const activities = buildActivityFeed(matches ?? [], []);
  const activeMentorCount = (matches ?? []).filter((m) => m.status === "ACTIVE").length;

  return (
    <DashboardShell sidebar={<StudentSidebar />}>

      {/* ── HEADER BAR ────────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-3 mb-6">

        <div className="hidden md:flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            placeholder="Search mentors, skills..."
            className="outline-none text-sm w-44"
          />
        </div>

        <button className="relative bg-white border border-gray-200 p-2 rounded-lg hover:bg-gray-50 transition self-start md:self-auto">
          <Bell className="w-4 h-4 text-[#112250]" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#E0C58F] rounded-full" />
        </button>

        <Link
          href="/student/profile"
          className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 transition self-start md:self-auto"
        >
          <User className="w-4 h-4 text-[#112250]" />
          <span className="text-sm font-medium text-[#112250]">Profile</span>
        </Link>

        <Link
          href="/student/discover"
          className="bg-[#112250] hover:bg-[#1B3475] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition self-start md:self-auto"
        >
          Discover
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* ── WELCOME BANNER ────────────────────────────────────────────── */}
      {/*
       * Signature element: the segmented gold dot-progress row.
       * 10 dots = 100%; filled count = Math.round(completion / 10).
       * This encodes real information (profile %) in a visual that is
       * specific to Kuzana — not a generic flat bar.
       */}
      <div className="relative rounded-2xl overflow-hidden bg-[#112250] mb-6">

        {/* Decorative background blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-14 -right-14 w-72 h-72 rounded-full bg-[#1B3475] opacity-70" />
          <div className="absolute -bottom-8 right-1/4 w-36 h-36 rounded-full bg-[#E0C58F] opacity-10" />
        </div>

        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6 px-6 py-7 md:px-8 md:py-8">

          {/* Left: Identity */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#E0C58F] flex items-center justify-center flex-shrink-0 ring-2 ring-white/20">
              <span className="text-[#112250] font-bold text-lg tracking-wide select-none">
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : studentInitials}
              </span>
            </div>
            <div>
              <p className="text-[#E0C58F]/70 text-xs font-semibold uppercase tracking-widest">
                Welcome back
              </p>
              <h1 className="text-white text-2xl md:text-3xl font-bold leading-tight mt-0.5">
                {isLoading ? "Loading..." : studentName}
              </h1>
              <p className="text-white/50 text-sm mt-0.5">
                {course} &middot; 
                {school}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── QUICK STATS ───────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">

        {/* Active Requests */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Requests
            </span>
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(17,34,80,0.07)" }}
            >
              <Send className="w-3.5 h-3.5 text-[#112250]" />
            </span>
          </div>
          <p className="text-3xl font-bold text-[#112250]">
            {statsLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : (requestCounts?.total ?? 0)}
          </p>
          <p className="text-xs text-gray-400 mt-1.5">
            {requestCounts ? `${requestCounts.pending} pending · ${requestCounts.accepted} accepted` : "—"}
          </p>
        </div>

        
        {/* Mentor Matches */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Matches
            </span>
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(17,34,80,0.07)" }}
            >
              <Users className="w-3.5 h-3.5 text-[#112250]" />
            </span>
          </div>
          <p className="text-3xl font-bold text-[#112250]">
            {statsLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : (matches?.length ?? 0)}
          </p>
          <p className="text-xs text-gray-400 mt-1.5">Total matches</p>
        </div>

        {/* Active Mentors */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Mentors
            </span>
            <span className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            </span>
          </div>
          <p className="text-3xl font-bold text-[#112250]">
            {statsLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : activeMentorCount}
          </p>
          <p className="text-xs text-emerald-600 mt-1.5 font-medium">
            Active mentorship{activeMentorCount !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* ── YOUR MENTOR + QUICK RECOMMENDATIONS ───────────────────────── */}
      <div className="grid md:grid-cols-5 gap-4 mb-6">

        {/* Your Active Mentor */}
        <div className="md:col-span-3 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-[#112250]">Your Mentor</h3>
            <span className="text-xs bg-gray-50 text-gray-500 font-semibold px-2.5 py-0.5 rounded-full border border-gray-200">
              None yet
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#F5F0E9] flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-[#112250]/30" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[#112250] leading-tight">
                No active mentor yet
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Browse our mentor network and send a request to get started.
              </p>
              <Link
                href="/student/discover"
                className="mt-3 inline-flex items-center gap-1.5 bg-[#112250] hover:bg-[#1B3475] text-white text-sm font-medium px-4 py-1.5 rounded-lg transition"
              >
                Discover Mentors
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Recommendations */}
        <div className="md:col-span-2 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-[#112250]">Top Picks for You</h3>
            <Link
              href="/student/discover"
              className="text-xs text-[#1B3475] hover:underline font-medium"
            >
              See all
            </Link>
          </div>

          {recLoading ? (
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-center justify-center">
              <Loader2 className="w-5 h-5 animate-spin text-[#112250]" />
            </div>
          ) : topRecs.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <p className="text-sm text-gray-400">No recommendations yet.</p>
              <p className="text-xs text-gray-300 mt-1">Complete your profile for better matches.</p>
            </div>
          ) : (
            topRecs.map((rec: RecommendationData) => {
              const m = rec.mentor;
              const mentorName = m.profile ? `${m.profile.firstName} ${m.profile.lastName}` : m.name ?? "Mentor";
              const mentorDept = m.profile?.department ?? "—";
              const mentorFaculty = m.profile?.faculty ?? "—";
              const tags = (m.profile?.skills ?? []).slice(0, 2).map((s) => s.skill.name);
              return (
                <Link
                  key={m.id}
                  href={`/student/mentor/${m.id}`}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#1B3475] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#E0C58F] text-xs font-bold select-none">
                        {getInitials(m.name, m.profile)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-[#112250] truncate">
                          {mentorName}
                        </p>
                        {rec.compatibilityScore !== null && (
                          <span className="text-xs font-bold text-[#C4A96B] flex-shrink-0">
                            {Math.round(rec.compatibilityScore)}%
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 truncate">
                        {mentorDept} &middot; {mentorFaculty}
                      </p>
                    </div>
                  </div>

                  {tags.length > 0 && (
                    <div className="flex gap-1.5 mt-2.5 flex-wrap">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <span className="text-xs text-[#1B3475] mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    View profile <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })
          )}
        </div>
      </div>

      {/* ── QUICK ACTIONS ─────────────────────────────────────────────── */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">

        <Link
          href="/student/discover"
          className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition group"
        >
          <Users className="w-5 h-5 text-[#112250]" />
          <h3 className="font-semibold mt-3 text-[#112250]">
            Discover Mentors
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Find mentors aligned with your academic and career goals.
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
          <h3 className="font-semibold mt-3 text-[#112250]">Your Requests</h3>
          <p className="text-sm text-gray-500 mt-1">
            Track all outgoing requests and mentor responses.
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
            Manage your ongoing mentorship connections.
          </p>
          <span className="text-sm text-[#1B3475] mt-3 flex items-center gap-1 group-hover:gap-2 transition-all">
            Open <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>

      {/* ── RECENT ACTIVITY LOG ───────────────────────────────────────── */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-semibold text-[#112250]">Recent Activity</h3>
          <span className="text-xs text-gray-400 bg-gray-50 border border-gray-200 px-2.5 py-0.5 rounded-full">
            Last 7 days
          </span>
        </div>

        <div className="space-y-4">
          {matchesLoading ? (
            <div className="flex items-center justify-center py-6">
              <Loader2 className="w-5 h-5 animate-spin text-[#112250]" />
            </div>
          ) : activities.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-sm text-gray-400">No recent activity.</p>
              <p className="text-xs text-gray-300 mt-1">
                Your mentorship activity will appear here.
              </p>
            </div>
          ) : (
            activities.map((activity) => (
              <div key={activity.id} className="flex gap-3 items-start">
                <ActivityIcon type={activity.type} />
                <div className="flex-1 min-w-0 pt-0.5">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {activity.text}
                  </p>
                  <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {activity.time}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

    </DashboardShell>
  );
}