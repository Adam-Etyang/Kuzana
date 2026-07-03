"use client";

import { useState } from "react";
import DashboardShell from "@/components/layout/dashboardshell";
import MentorSidebar from "@/components/layout/mentorsidebar";

// ─── Types ────────────────────────────────────────────────────────────────────

type RequestStatus = "pending" | "approved" | "rejected";

interface MentorRequest {
  id: number;
  name: string;
  initials: string;
  major: string;
  year: string;
  compatibility: number;
  status: RequestStatus;
  sentDate: string;
  bio: string;
  interests: string[];
}

// ─── Seed data ────────────────────────────────────────────────────────────────

const INITIAL_REQUESTS: MentorRequest[] = [
  {
    id: 1,
    name: "Aisha Mwangi",
    initials: "AM",
    major: "BSc Computer Science",
    year: "Year 2",
    compatibility: 91,
    status: "pending",
    sentDate: "Jun 25, 2025",
    bio: "Interested in backend systems and cloud infrastructure. Looking for guidance on internship applications.",
    interests: ["Backend dev", "Cloud", "Internships"],
  },
  {
    id: 2,
    name: "Kamau Njoroge",
    initials: "KN",
    major: "BSc Information Technology",
    year: "Year 3",
    compatibility: 84,
    status: "pending",
    sentDate: "Jun 24, 2025",
    bio: "Focused on cybersecurity and network systems. Wants to explore research opportunities before graduating.",
    interests: ["Cybersecurity", "Research", "Networking"],
  },
  {
    id: 3,
    name: "Zawadi Oloo",
    initials: "ZO",
    major: "BSc Software Engineering",
    year: "Year 1",
    compatibility: 78,
    status: "pending",
    sentDate: "Jun 23, 2025",
    bio: "Early-stage student eager to build strong foundations in software craftsmanship and agile practices.",
    interests: ["Agile", "Clean code", "Open source"],
  },
  {
    id: 4,
    name: "Fatuma Hassan",
    initials: "FH",
    major: "BSc Computer Science",
    year: "Year 4",
    compatibility: 87,
    status: "pending",
    sentDate: "Jun 22, 2025",
    bio: "Final year student working on a capstone in machine learning. Needs mentorship on research writing and post-graduation plans.",
    interests: ["Machine learning", "Research", "Grad school"],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function compatColor(score: number): string {
  if (score >= 90) return "text-emerald-700";
  if (score >= 80) return "text-[#112250]";
  return "text-amber-700";
}

function compatBg(score: number): string {
  if (score >= 90) return "bg-emerald-50 border-emerald-200";
  if (score >= 80) return "bg-blue-50 border-blue-100";
  return "bg-amber-50 border-amber-200";
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="w-12 h-12 rounded-full bg-[#112250]/10 text-[#112250] font-bold text-base flex items-center justify-center shrink-0">
      {initials}
    </div>
  );
}

function CompatScore({ score }: { score: number }) {
  return (
    <div
      className={`flex flex-col items-center justify-center w-16 h-16 rounded-2xl border ${compatBg(score)} shrink-0`}
    >
      <span className={`text-xl font-bold tabular-nums ${compatColor(score)}`}>
        {score}
      </span>
      <span className="text-[10px] font-semibold text-gray-400 leading-tight">
        match
      </span>
    </div>
  );
}

function RequestCard({
  request,
  onApprove,
  onReject,
}: {
  request: MentorRequest;
  onApprove: (id: number) => void;
  onReject: (id: number) => void;
}) {
  const isPending = request.status === "pending";
  const isApproved = request.status === "approved";
  const isRejected = request.status === "rejected";

  return (
    <div
      className={`bg-white rounded-2xl border shadow-sm p-5 flex flex-col gap-4 transition-all duration-300 ${
        isApproved
          ? "border-emerald-200 bg-emerald-50/30"
          : isRejected
            ? "border-gray-100 opacity-60"
            : "border-gray-100 hover:shadow-md hover:border-gray-200"
      }`}
    >
      {/* Top row: avatar + name + compat score */}
      <div className="flex items-start gap-3">
        <Avatar initials={request.initials} />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-0.5">
            <h3 className="text-sm font-bold text-[#112250]">{request.name}</h3>
            {isApproved && (
              <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">
                Approved
              </span>
            )}
            {isRejected && (
              <span className="text-xs font-semibold bg-gray-100 text-gray-500 border border-gray-200 px-2 py-0.5 rounded-full">
                Rejected
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500">{request.major}</p>
          <p className="text-xs text-gray-400">{request.year}</p>
        </div>
        <CompatScore score={request.compatibility} />
      </div>

      {/* Bio */}
      <p className="text-xs text-gray-500 leading-relaxed border-l-2 border-[#C9A84C]/40 pl-3">
        {request.bio}
      </p>

      {/* Interests */}
      <div className="flex flex-wrap gap-1.5">
        {request.interests.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-[#112250]/6 text-[#112250] px-2.5 py-1 rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
        <p className="text-xs text-gray-300">Sent {request.sentDate}</p>

        {isPending && (
          <div className="flex gap-2">
            <button
              onClick={() => onReject(request.id)}
              className="text-xs font-semibold px-4 py-2 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
            >
              Reject
            </button>
            <button
              onClick={() => onApprove(request.id)}
              className="text-xs font-semibold px-4 py-2 rounded-xl bg-[#112250] text-white hover:bg-[#1a3370] transition-colors"
            >
              Approve
            </button>
          </div>
        )}

        {isApproved && (
          <p className="text-xs font-semibold text-emerald-600">
            ✓ Request approved
          </p>
        )}

        {isRejected && (
          <p className="text-xs font-semibold text-gray-400">
            Request rejected
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RequestsPage() {
  const [requests, setRequests] = useState<MentorRequest[]>(INITIAL_REQUESTS);
  const [filter, setFilter] = useState<RequestStatus | "All">("All");
  const [search, setSearch] = useState("");

  function handleApprove(id: number) {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "approved" } : r)),
    );
  }

  function handleReject(id: number) {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "rejected" } : r)),
    );
  }

  const pendingCount = requests.filter((r) => r.status === "pending").length;
  const approvedCount = requests.filter((r) => r.status === "approved").length;
  const rejectedCount = requests.filter((r) => r.status === "rejected").length;

  const filtered = requests.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.major.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "All" || r.status === filter;

    return matchesSearch && matchesFilter;
  });

  type FilterLabel = "All" | "pending" | "approved" | "rejected";

  const filterLabels: Array<{
    key: FilterLabel;
    label: string;
    count: number;
  }> = [
    { key: "All", label: "All", count: requests.length },
    { key: "pending", label: "Pending", count: pendingCount },
    { key: "approved", label: "Approved", count: approvedCount },
    { key: "rejected", label: "Rejected", count: rejectedCount },
  ];

  return (
    <DashboardShell sidebar={<MentorSidebar />}>
      {/* ── Header ──────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl font-bold text-[#112250]">
            Mentorship Requests
          </h1>
          <p className="text-sm text-gray-400 mt-0.5">
            Review and respond to students who want to be your mentees.
          </p>
        </div>

        {/* Search */}
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
          <p className="text-2xl font-bold text-amber-600">
            {pendingCount}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">Pending</p>
        </div>

        <div className="bg-[#112250] rounded-xl p-4 text-center shadow-sm">
          <p className="text-2xl font-bold text-white">
            {approvedCount}
          </p>
          <p className="text-xs text-blue-200 mt-0.5">
            Approved
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
          <p className="text-2xl font-bold text-gray-400">
            {rejectedCount}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">
            Rejected
          </p>
        </div>
      </div>

      {/* ── Filters ─────────────────────────────────────────────── */}
      <div className="flex gap-2 flex-wrap mb-5">
        {filterLabels.map(({ key, label, count }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`text-xs font-semibold px-3 py-2 rounded-xl border transition-colors flex items-center gap-1.5 ${
              filter === key
                ? "bg-[#112250] text-white border-[#112250]"
                : "bg-white text-gray-500 border-gray-200 hover:border-[#112250]/30 hover:text-[#112250]"
            }`}
          >
            {label}

            <span
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                filter === key
                  ? "bg-white/20 text-white"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {count}
            </span>
          </button>
        ))}
      </div>

      {/* ── Pending alert ───────────────────────────────────────── */}
      {pendingCount > 0 &&
        filter !== "approved" &&
        filter !== "rejected" && (
          <div className="mb-5 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />

            <p className="text-xs text-amber-800 font-medium">
              You have{" "}
              <span className="font-bold">
                {pendingCount} pending
              </span>{" "}
              {pendingCount === 1 ? "request" : "requests"} waiting
              for your response.
            </p>
          </div>
        )}

      {/* ── Request cards ───────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
          <p className="text-sm font-semibold text-gray-400">
            No requests found.
          </p>
          <p className="text-xs text-gray-300 mt-1">
            Try adjusting your search or filter.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {filtered.map((req) => (
            <RequestCard
              key={req.id}
              request={req}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          ))}
        </div>
      )}
    </DashboardShell>
  );
}