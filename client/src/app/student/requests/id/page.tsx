"use client";

import DashboardShell from "@/components/layout/dashboardshell";
import StudentSidebar from "@/components/layout/studentsidebar";
import { CheckCircle, Clock, Hourglass, Loader2, AlertCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRequest } from "@/lib/use-student-data";

export default function RequestTrackingPage() {
  const params = useParams();
  const id = params?.id as string | undefined;
  const { data: request, loading, error } = useRequest(id);

  if (loading) {
    return (
      <DashboardShell sidebar={<StudentSidebar />}>
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-[#112250]" />
        </div>
      </DashboardShell>
    );
  }

  if (error || !request) {
    return (
      <DashboardShell sidebar={<StudentSidebar />}>
        <div className="flex items-start gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{error || "Request not found."}</span>
        </div>
        <Link
          href="/student/requests"
          className="mt-4 inline-flex items-center gap-1 text-sm text-[#112250] hover:underline"
        >
          ← Back to requests
        </Link>
      </DashboardShell>
    );
  }

  const mentorName = request.mentor.profile
    ? `${request.mentor.profile.firstName} ${request.mentor.profile.lastName}`
    : request.mentor.name ?? "Mentor";

  const steps = [
    {
      title: "Request Sent",
      desc: "You successfully sent a mentorship request.",
      icon: CheckCircle,
      iconClass: "text-green-600",
      done: true,
    },
    {
      title: "Mentor Reviewed",
      desc: "The mentor has viewed your request and profile.",
      icon: CheckCircle,
      iconClass: "text-green-600",
      done: request.status !== "PENDING",
    },
    {
      title: "Request Accepted",
      desc: request.status === "ACCEPTED"
        ? "Your mentorship has been approved."
        : request.status === "DECLINED"
          ? "Your request was declined."
          : "Awaiting mentor response.",
      icon: request.status === "ACCEPTED" ? CheckCircle : Hourglass,
      iconClass: request.status === "ACCEPTED" ? "text-green-600" : "text-gray-400",
      done: request.status === "ACCEPTED",
    },
    {
      title: "Preparing First Session",
      desc: "Your mentor will schedule your first session soon.",
      icon: Clock,
      iconClass: "text-[#E0C58F]",
      done: false,
      pending: request.status === "ACCEPTED",
    },
    {
      title: "First Mentorship Session",
      desc: "Pending scheduling confirmation.",
      icon: Hourglass,
      iconClass: "text-gray-400",
      done: false,
    },
  ];

  return (
    <DashboardShell sidebar={<StudentSidebar />}>
      
      {/* HEADER */}
      <div className="mb-8">
        <Link
          href="/student/requests"
          className="text-sm text-gray-400 hover:text-[#112250] transition flex items-center gap-1 mb-4"
        >
          ← Back to requests
        </Link>
        <h1 className="text-2xl font-bold text-[#112250]">
          Request Tracking
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Track the progress of your mentorship request in real time.
        </p>
      </div>

      {/* CARD */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

        {/* CONTEXT HEADER */}
        <div className="mb-6">
          <p className="text-xs text-gray-400">CURRENT REQUEST</p>
          <h2 className="font-semibold text-[#112250] mt-1">
            Mentorship Request — {mentorName}
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Sent on {new Date(request.createdAt).toLocaleDateString()}
          </p>
          {request.message && (
            <p className="text-sm text-gray-600 mt-3 bg-gray-50 rounded-xl p-4">
              &ldquo;{request.message}&rdquo;
            </p>
          )}
        </div>

        {/* TIMELINE */}
        <div className="space-y-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className={`flex gap-3 ${step.done === false && !step.pending ? "opacity-60" : ""}`}>
                <Icon className={`w-5 h-5 ${step.iconClass} mt-0.5 ${step.pending ? "animate-pulse" : ""}`} />
                <div>
                  <p className="font-medium text-[#112250]">{step.title}</p>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ACTION AREA */}
        <div className="mt-8 bg-[#F5F0E9] border border-[#E0C58F]/40 rounded-xl p-4">
          <p className="text-sm text-[#112250] font-medium">
            Need help with this request?
          </p>
          <p className="text-xs text-gray-600 mt-1">
            You can message your mentor or update your request details.
          </p>
          <Link
            href={`/student/mentor/${request.mentorId}`}
            className="mt-3 inline-flex items-center gap-1 bg-[#112250] hover:bg-[#1B3475] text-white px-4 py-2 rounded-lg text-sm transition"
          >
            View Mentor Profile
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </DashboardShell>
  );
}
