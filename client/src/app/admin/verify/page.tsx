"use client";

import DashboardShell from "@/components/layout/dashboardshell";
import AdminSidebar from "@/components/layout/adminsidebar";
import { useApi } from "@/lib/use-api";
import { useState } from "react";
import {
  CheckCircle,
  Eye,
  XCircle,
  Loader2,
  KeyRound,
  Copy,
  Check,
} from "lucide-react";

interface Application {
  id: string;
  fullName: string;
  email: string;
  organization: string;
  position: string;
  yearsExperience: string;
  linkedin: string | null;
  expertise: string;
  motivation: string;
  status: string;
  createdAt: string;
}

const API_BASE = "http://localhost:3001";

function timeAgo(iso: string): string {
  const then = new Date(iso).getTime();
  const diff = Date.now() - then;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export default function VerifyMentorsPage() {
  const { data, loading, error, mutate } = useApi<Application[]>(
    "/applications/pending",
  );
  const [actionId, setActionId] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [issuedKey, setIssuedKey] = useState<{
    name: string;
    key: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const handleApprove = async (id: string) => {
    setActionId(id);
    setActionError(null);
    try {
      const res = await fetch(`${API_BASE}/applications/${id}/approve`, {
        method: "POST",
        credentials: "include",
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.message || `Failed to approve (${res.status})`);
      }
      const result = (await res.json()) as { accessKey: string };
      const app = data?.find((a) => a.id === id);
      setIssuedKey({ name: app?.fullName ?? "Mentor", key: result.accessKey });
      await mutate();
    } catch (err) {
      setActionError(err instanceof Error ? err.message : "Failed to approve.");
    } finally {
      setActionId(null);
    }
  };

  const handleReject = async (id: string) => {
    setActionId(id);
    setActionError(null);
    try {
      const res = await fetch(`${API_BASE}/applications/${id}/reject`, {
        method: "POST",
        credentials: "include",
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.message || `Failed to reject (${res.status})`);
      }
      await mutate();
    } catch (err) {
      setActionError(err instanceof Error ? err.message : "Failed to reject.");
    } finally {
      setActionId(null);
    }
  };

  const copyKey = () => {
    if (issuedKey) {
      void navigator.clipboard.writeText(issuedKey.key);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const applications = data ?? [];

  return (
    <DashboardShell sidebar={<AdminSidebar />}>
      <h1 className="text-2xl font-bold text-[#112250] mb-2">
        Verify Mentors
      </h1>

      <p className="text-gray-500 mb-6">
        Review and approve mentor applications.
      </p>

      {issuedKey && (
        <div className="mb-6 rounded-2xl border-2 border-[#E0C58F] bg-[#FFF9EC] p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <KeyRound className="w-5 h-5 text-[#112250] mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-[#112250]">
                  Access key issued for {issuedKey.name}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Share this key with the mentor. It has also been
                  emailed to them.
                </p>
                <p className="mt-2 font-mono text-lg tracking-wider text-[#112250]">
                  {issuedKey.key}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={copyKey}
                className="border border-[#E0C58F] rounded-lg px-3 py-1.5 text-sm flex items-center gap-1.5 text-[#112250] hover:bg-[#E0C58F]/10"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> Copy
                  </>
                )}
              </button>
              <button
                onClick={() => setIssuedKey(null)}
                className="text-sm text-gray-400 hover:text-gray-600"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

      {actionError && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 text-sm">
          {actionError}
        </div>
      )}

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 text-sm">
          Failed to load applications: {error}
        </div>
      )}

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-4 text-left">Mentor</th>
              <th className="text-left">Organization</th>
              <th className="text-left">Expertise</th>
              <th className="text-left">Submitted</th>
              <th className="text-left">Status</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr className="border-t">
                <td colSpan={6} className="p-4 text-gray-400">
                  <Loader2 className="w-4 h-4 animate-spin inline mr-2" />
                  Loading applications…
                </td>
              </tr>
            ) : applications.length === 0 ? (
              <tr className="border-t">
                <td colSpan={6} className="p-4 text-gray-400">
                  No pending applications.
                </td>
              </tr>
            ) : (
              applications.map((app) => (
                <tr key={app.id} className="border-t">
                  <td className="p-4">
                    <p className="font-medium text-[#112250]">
                      {app.fullName}
                    </p>
                    <p className="text-gray-500 text-xs">{app.email}</p>
                  </td>

                  <td>
                    {app.organization}
                    <p className="text-xs text-gray-500">{app.position}</p>
                  </td>

                  <td>{app.expertise}</td>

                  <td>{timeAgo(app.createdAt)}</td>

                  <td>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">
                      Pending
                    </span>
                  </td>

                  <td>
                    <div className="flex gap-2">
                      <button
                        disabled
                        className="border px-3 py-1 rounded-lg flex items-center gap-1 text-gray-400 cursor-not-allowed"
                      >
                        <Eye className="w-4 h-4" />
                        Review
                      </button>

                      <button
                        onClick={() => handleApprove(app.id)}
                        disabled={actionId === app.id}
                        className="bg-[#112250] text-white px-3 py-1 rounded-lg flex items-center gap-1 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {actionId === app.id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <CheckCircle className="w-4 h-4" />
                        )}
                        Approve
                      </button>

                      <button
                        onClick={() => handleReject(app.id)}
                        disabled={actionId === app.id}
                        className="border border-red-200 text-red-600 px-3 py-1 rounded-lg flex items-center gap-1 hover:bg-red-50 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        <XCircle className="w-4 h-4" />
                        Reject
                      </button>
                    </div>
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
