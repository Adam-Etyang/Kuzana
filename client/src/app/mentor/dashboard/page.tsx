"use client";

import { useState } from "react";
import DashboardShell from "@/components/layout/dashboardshell";
import MentorSidebar from "@/components/layout/mentorsidebar";
import { authClient } from "@/lib/auth-client";
import { useProfile } from "@/lib/use-profile";
import { Loader2 } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

type RequestStatus = "pending" | "accepted" | "declined";

interface PendingRequest {
  id: number;
  name: string;
  programme: string;
  year: string;
  compatibility: number;
  status: RequestStatus;
}

interface Mentee {
  id: number;
  name: string;
  programme: string;
  year: string;
  lastSession: string;
  compatibility: number;
  initials: string;
}

// ─── Seed Data ────────────────────────────────────────────────────────────────

const INITIAL_REQUESTS: PendingRequest[] = [
  {
    id: 1,
    name: "Aisha Mwangi",
    programme: "BSc Computer Science",
    year: "Year 2",
    compatibility: 91,
    status: "pending",
  },
  {
    id: 2,
    name: "Kamau Njoroge",
    programme: "BSc Information Technology",
    year: "Year 3",
    compatibility: 84,
    status: "pending",
  },
  {
    id: 3,
    name: "Zawadi Oloo",
    programme: "BSc Software Engineering",
    year: "Year 1",
    compatibility: 78,
    status: "pending",
  },
];

const MENTEES: Mentee[] = [
  {
    id: 1,
    name: "Brian Otieno",
    programme: "BSc Computer Science",
    year: "Year 3",
    lastSession: "2 days ago",
    compatibility: 88,
    initials: "BO",
  },
  {
    id: 2,
    name: "Lydia Wanjiku",
    programme: "BSc IT",
    year: "Year 2",
    lastSession: "1 week ago",
    compatibility: 82,
    initials: "LW",
  },
  {
    id: 3,
    name: "David Kiprono",
    programme: "BSc Software Engineering",
    year: "Year 4",
    lastSession: "3 days ago",
    compatibility: 95,
    initials: "DK",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Circular initials avatar */
function Avatar({
  initials,
  size = "md",
}: {
  initials: string;
  size?: "sm" | "md" | "lg";
}) {
  const dims: Record<string, string> = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-lg",
  };
  return (
    <div
      className={`${dims[size]} rounded-full bg-[#112250]/10 text-[#112250] font-semibold flex items-center justify-center shrink-0`}
    >
      {initials}
    </div>
  );
}

/** Compatibility badge */
function CompatBadge({ score }: { score: number }) {
  const color =
    score >= 90
      ? "bg-emerald-50 text-emerald-700"
      : score >= 80
        ? "bg-blue-50 text-[#112250]"
        : "bg-amber-50 text-amber-700";
  return (
    <span
      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${color}`}
    >
      {score}% match
    </span>
  );
}

/** Capacity meter bar */
function CapacityMeter({
  filled,
  total,
}: {
  filled: number;
  total: number;
}) {
  const pct = Math.round((filled / total) * 100);
  const color =
    pct >= 100
      ? "bg-red-500"
      : pct >= 80
        ? "bg-amber-400"
        : "bg-[#C9A84C]";

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs text-gray-500 font-medium">Capacity</span>
        <span className="text-xs font-semibold text-[#112250]">
          {filled} / {total} slots
        </span>
      </div>
      <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/** Summary stat card */
function StatCard({
  label,
  value,
  sub,
  accent,
}: {
  label: string;
  value: string | number;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-4 border ${
        accent
          ? "bg-[#112250] border-[#112250] text-white"
          : "bg-white border-gray-100 text-[#112250]"
      } shadow-sm`}
    >
      <p
        className={`text-xs font-medium mb-1 ${accent ? "text-blue-200" : "text-gray-400"}`}
      >
        {label}
      </p>
      <p className={`text-2xl font-bold ${accent ? "text-white" : "text-[#112250]"}`}>
        {value}
      </p>
      {sub && (
        <p className={`text-xs mt-0.5 ${accent ? "text-blue-200" : "text-gray-400"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────────

export default function MentorDashboardPage() {
  const { data: session, isPending: sessionLoading } = authClient.useSession();
  const { profile, loading: profileLoading } = useProfile(session?.user?.id);

  const [requests, setRequests] = useState<PendingRequest[]>(INITIAL_REQUESTS);

  const mentorName = profile ? `${profile.firstName} ${profile.lastName}` : session?.user?.name ?? "Mentor";
  const mentorInitials = profile
    ? `${profile.firstName[0] ?? ""}${profile.lastName[0] ?? ""}`
    : (session?.user?.name?.split(" ").map((n) => n[0]).join("").slice(0, 2) ?? "M");
  const mentorDept = profile?.department ?? "—";
  const mentorFaculty = profile?.faculty ?? "—";
  const mentorBio = profile?.bio ?? "";
  const totalSlots = profile?.maxMentees ?? 5;
  const filledSlots = profile?.currentMentees ?? 0;
  const isLoading = sessionLoading || profileLoading;

  const pendingCount = requests.filter((r) => r.status === "pending").length;
  const activeMentees = filledSlots;
  const avgCompatibility = MENTEES.length > 0
    ? Math.round(MENTEES.reduce((acc, m) => acc + m.compatibility, 0) / MENTEES.length)
    : 0;

  function handleRequest(id: number, action: "accepted" | "declined") {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: action } : r)),
    );
  }

  const visibleRequests = requests.filter((r) => r.status === "pending");

  return (
    <DashboardShell sidebar={<MentorSidebar />}>
      {/* ── Profile Banner ─────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-[#112250] text-white font-bold text-xl flex items-center justify-center shrink-0">
          {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : mentorInitials}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-0.5">
            <h1 className="text-lg font-bold text-[#112250]">
              {isLoading ? "Loading..." : mentorName}
            </h1>
            <span className="text-xs font-semibold bg-[#C9A84C]/15 text-[#8A6A1B] px-2 py-0.5 rounded-full">
              Verified Mentor
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-1">
            {mentorDept} &nbsp;·&nbsp; {mentorFaculty}
          </p>
          <p className="text-xs text-gray-400">
            {mentorBio || "No bio set yet."}
          </p>
        </div>

        {/* Capacity meter */}
        <div className="w-full sm:w-52 shrink-0">
          <CapacityMeter filled={filledSlots} total={totalSlots} />
          <p className="text-xs text-gray-400 mt-1.5 text-right">
            {totalSlots - filledSlots} slot
            {totalSlots - filledSlots !== 1 ? "s" : ""} available
          </p>
        </div>
      </div>

      {/* ── Summary Stats ──────────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <StatCard
          label="Pending Requests"
          value={pendingCount}
          sub="awaiting response"
        />
        <StatCard
          label="Active Mentees"
          value={activeMentees}
          sub={`of ${totalSlots} slots`}
        />
        <StatCard
          label="Capacity Used"
          value={`${Math.round((filledSlots / totalSlots) * 100)}%`}
          sub={`${filledSlots}/${totalSlots} filled`}
          accent
        />
        <StatCard
          label="Avg Compatibility"
          value={`${avgCompatibility}%`}
          sub="across mentees"
        />
      </div>

      {/* ── Two-column lower section ────────────────────────────── */}
      <div className="grid md:grid-cols-2 gap-5">
        {/* Pending Requests */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-bold text-[#112250]">
                Pending Requests
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Students waiting for your response
              </p>
            </div>
            {pendingCount > 0 && (
              <span className="text-xs font-semibold bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">
                {pendingCount} pending
              </span>
            )}
          </div>

          {visibleRequests.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-sm text-gray-400">No pending requests.</p>
              <p className="text-xs text-gray-300 mt-1">
                New requests will appear here.
              </p>
            </div>
          ) : (
            <ul className="space-y-3">
              {visibleRequests.map((req) => (
                <li
                  key={req.id}
                  className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <Avatar initials={req.name.split(" ").map((n) => n[0]).join("")} size="sm" />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                      <span className="text-sm font-semibold text-[#112250] truncate">
                        {req.name}
                      </span>
                      <CompatBadge score={req.compatibility} />
                    </div>
                    <p className="text-xs text-gray-400 truncate">
                      {req.programme} &nbsp;·&nbsp; {req.year}
                    </p>
                  </div>
                  <div className="flex gap-1.5 shrink-0 mt-0.5">
                    <button
                      onClick={() => handleRequest(req.id, "declined")}
                      className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors font-medium"
                      aria-label={`Decline ${req.name}`}
                    >
                      Decline
                    </button>
                    <button
                      onClick={() => handleRequest(req.id, "accepted")}
                      className="text-xs px-3 py-1.5 rounded-lg bg-[#112250] text-white hover:bg-[#1a3370] transition-colors font-medium"
                      aria-label={`Accept ${req.name}`}
                    >
                      Accept
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {/* Resolved requests */}
          {requests.filter((r) => r.status !== "pending").length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs font-medium text-gray-400 mb-2">
                Recently resolved
              </p>
              <ul className="space-y-2">
                {requests
                  .filter((r) => r.status !== "pending")
                  .map((req) => (
                    <li
                      key={req.id}
                      className="flex items-center justify-between px-3 py-2 rounded-lg"
                    >
                      <span className="text-xs text-gray-500">{req.name}</span>
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          req.status === "accepted"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        {req.status === "accepted" ? "Accepted" : "Declined"}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>

        {/* Your Mentees */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-bold text-[#112250]">Your Mentees</h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Students you&apos;re currently mentoring
              </p>
            </div>
            <span className="text-xs font-semibold bg-blue-50 text-[#112250] px-2 py-0.5 rounded-full">
              {activeMentees} active
            </span>
          </div>

          {MENTEES.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-sm text-gray-400">No mentees yet.</p>
              <p className="text-xs text-gray-300 mt-1">
                Accept a request to get started.
              </p>
            </div>
          ) : (
            <ul className="space-y-3">
              {MENTEES.map((mentee) => (
                <li
                  key={mentee.id}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
                >
                  <Avatar initials={mentee.initials} size="sm" />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                      <span className="text-sm font-semibold text-[#112250] truncate">
                        {mentee.name}
                      </span>
                      <CompatBadge score={mentee.compatibility} />
                    </div>
                    <p className="text-xs text-gray-400 truncate">
                      {mentee.programme} &nbsp;·&nbsp; {mentee.year}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs text-gray-400">Last session</p>
                    <p className="text-xs font-medium text-[#112250]">
                      {mentee.lastSession}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-4 pt-4 border-t border-gray-100">
            <button className="w-full text-xs font-semibold text-[#112250] hover:text-[#C9A84C] transition-colors py-1.5">
              View all mentees →
            </button>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}