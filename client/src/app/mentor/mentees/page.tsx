"use client";

import { useState } from "react";
import DashboardShell from "@/components/layout/dashboardshell";
import MentorSidebar from "@/components/layout/mentorsidebar";

// ─── Types ────────────────────────────────────────────────────────────────────

type MenteeStatus = "Active" | "Inactive" | "Completed";

interface Mentee {
  id: number;
  name: string;
  initials: string;
  programme: string;
  year: string;
  compatibility: number;
  status: MenteeStatus;
  joinedDate: string;
  lastSession: string;
  totalSessions: number;
  goals: string[];
}

// ─── Seed data ────────────────────────────────────────────────────────────────

const MENTEES: Mentee[] = [
  {
    id: 1,
    name: "Brian Otieno",
    initials: "BO",
    programme: "BSc Computer Science",
    year: "Year 3",
    compatibility: 88,
    status: "Active",
    joinedDate: "Feb 2025",
    lastSession: "2 days ago",
    totalSessions: 8,
    goals: ["Backend dev", "Career guidance"],
  },
  {
    id: 2,
    name: "Lydia Wanjiku",
    initials: "LW",
    programme: "BSc Information Technology",
    year: "Year 2",
    compatibility: 82,
    status: "Active",
    joinedDate: "Mar 2025",
    lastSession: "1 week ago",
    totalSessions: 5,
    goals: ["UI/UX design", "Internship prep"],
  },
  {
    id: 3,
    name: "David Kiprono",
    initials: "DK",
    programme: "BSc Software Engineering",
    year: "Year 4",
    compatibility: 95,
    status: "Active",
    joinedDate: "Jan 2025",
    lastSession: "3 days ago",
    totalSessions: 14,
    goals: ["System design", "Grad school prep"],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function statusStyles(status: MenteeStatus) {
  switch (status) {
    case "Active":
      return "bg-emerald-50 text-emerald-700 border border-emerald-200";
    case "Inactive":
      return "bg-gray-100 text-gray-500 border border-gray-200";
    case "Completed":
      return "bg-blue-50 text-[#112250] border border-blue-100";
  }
}

function compatColor(score: number) {
  if (score >= 90) return "text-emerald-700";
  if (score >= 80) return "text-[#112250]";
  return "text-amber-700";
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="w-12 h-12 rounded-full bg-[#112250]/10 text-[#112250] font-bold text-base flex items-center justify-center shrink-0">
      {initials}
    </div>
  );
}

function StatusBadge({ status }: { status: MenteeStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyles(status)}`}
    >
      {status === "Active" && (
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
      )}
      {status}
    </span>
  );
}

function CompatBar({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-[#C9A84C] transition-all duration-500"
          style={{ width: `${score}%` }}
        />
      </div>
      <span className={`text-xs font-bold tabular-nums ${compatColor(score)}`}>
        {score}%
      </span>
    </div>
  );
}

function MenteeCard({ mentee }: { mentee: Mentee }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-4 hover:shadow-md hover:border-gray-200 transition-all duration-200">
      {/* Top row */}
      <div className="flex items-start gap-3">
        <Avatar initials={mentee.initials} />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-0.5">
            <h3 className="text-sm font-bold text-[#112250] truncate">
              {mentee.name}
            </h3>
            <StatusBadge status={mentee.status} />
          </div>
          <p className="text-xs text-gray-500 truncate">{mentee.programme}</p>
          <p className="text-xs text-gray-400">{mentee.year}</p>
        </div>
      </div>

      {/* Compatibility */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-gray-400 font-medium">
            Compatibility
          </span>
          <span className="text-xs text-gray-400">Match score</span>
        </div>
        <CompatBar score={mentee.compatibility} />
      </div>

      {/* Goals */}
      <div className="flex flex-wrap gap-1.5">
        {mentee.goals.map((g) => (
          <span
            key={g}
            className="text-xs bg-[#112250]/6 text-[#112250] px-2.5 py-1 rounded-full font-medium"
          >
            {g}
          </span>
        ))}
      </div>

      {/* Footer stats */}
      <div className="pt-3 border-t border-gray-100 grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="text-base font-bold text-[#112250]">
            {mentee.totalSessions}
          </p>
          <p className="text-xs text-gray-400">Sessions</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-[#112250] mt-1">
            {mentee.joinedDate}
          </p>
          <p className="text-xs text-gray-400">Joined</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-[#112250] mt-1 leading-tight">
            {mentee.lastSession}
          </p>
          <p className="text-xs text-gray-400">Last session</p>
        </div>
      </div>

      {/* Action */}
      <button className="w-full text-xs font-semibold text-[#112250] border border-[#112250]/20 rounded-xl py-2 hover:bg-[#112250] hover:text-white transition-colors duration-200">
        View profile →
      </button>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MenteesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<MenteeStatus | "All">("All");

  const filtered = MENTEES.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.programme.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "All" || m.status === filter;

    return matchesSearch && matchesFilter;
  });

  const activeCount = MENTEES.filter((m) => m.status === "Active").length;

  const avgCompat = Math.round(
    MENTEES.reduce((acc, m) => acc + m.compatibility, 0) / MENTEES.length,
  );

  const totalSessions = MENTEES.reduce(
    (acc, m) => acc + m.totalSessions,
    0,
  );

  const filters: Array<MenteeStatus | "All"> = [
    "All",
    "Active",
    "Inactive",
    "Completed",
  ];

  return (
    <DashboardShell sidebar={<MentorSidebar />}>
      {/* ── Header ──────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl font-bold text-[#112250]">
            Your Mentees
          </h1>
          <p className="text-sm text-gray-400 mt-0.5">
            Students currently assigned to you.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search by name or programme..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 text-sm rounded-xl border-2 border-gray-200 bg-white shadow-sm text-[#112250] placeholder:text-gray-400 focus:outline-none focus:border-[#112250] focus:ring-4 focus:ring-[#112250]/10 transition-all"
          />
        </div>
      </div>

      {/* ── Summary strip ───────────────────────────────────────── */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-[#112250]">
            {activeCount}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">
            Active mentees
          </p>
        </div>

        <div className="bg-[#112250] rounded-xl p-4 text-center shadow-sm">
          <p className="text-2xl font-bold text-white">
            {totalSessions}
          </p>
          <p className="text-xs text-blue-200 mt-0.5">
            Total sessions
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-[#C9A84C]">
            {avgCompat}%
          </p>
          <p className="text-xs text-gray-400 mt-0.5">
            Avg compatibility
          </p>
        </div>
      </div>

      {/* ── Filters ─────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 mb-5">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-xs font-semibold px-3 py-2 rounded-xl border transition-colors ${
              filter === f
                ? "bg-[#112250] text-white border-[#112250]"
                : "bg-white text-gray-500 border-gray-200 hover:border-[#112250]/30 hover:text-[#112250]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ── Mentee cards ────────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
          <p className="text-sm font-semibold text-gray-400">
            No mentees found.
          </p>
          <p className="text-xs text-gray-300 mt-1">
            Try adjusting your search or filter.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((mentee) => (
            <MenteeCard key={mentee.id} mentee={mentee} />
          ))}
        </div>
      )}
    </DashboardShell>
  );
}