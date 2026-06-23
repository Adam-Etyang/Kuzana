import DashboardShell from "@/components/layout/dashboardshell";
import StudentSidebar from "@/components/layout/studentsidebar";
import { CheckCircle, Clock, Hourglass, Send } from "lucide-react";

export default function RequestTrackingPage() {
  return (
    <DashboardShell sidebar={<StudentSidebar />}>
      
      {/* HEADER */}
      <div className="mb-8">
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
            Mentorship Request — Dr. Wanjiru
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="space-y-6">

          {/* Step 1 */}
          <div className="flex gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <p className="font-medium text-[#112250]">Request Sent</p>
              <p className="text-sm text-gray-500">
                You successfully sent a mentorship request.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <p className="font-medium text-[#112250]">Mentor Reviewed</p>
              <p className="text-sm text-gray-500">
                The mentor has viewed your request and profile.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <p className="font-medium text-[#112250]">Request Accepted</p>
              <p className="text-sm text-gray-500">
                Your mentorship has been approved.
              </p>
            </div>
          </div>

          {/* Step 4 (Active) */}
          <div className="flex gap-3">
            <Clock className="w-5 h-5 text-[#E0C58F] mt-0.5 animate-pulse" />
            <div>
              <p className="font-medium text-[#112250]">
                Preparing First Session
              </p>
              <p className="text-sm text-gray-500">
                Your mentor will schedule your first session soon.
              </p>
            </div>
          </div>

          {/* Step 5 (Upcoming) */}
          <div className="flex gap-3 opacity-60">
            <Hourglass className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="font-medium text-[#112250]">
                First Mentorship Session
              </p>
              <p className="text-sm text-gray-500">
                Pending scheduling confirmation.
              </p>
            </div>
          </div>

        </div>

        {/* ACTION AREA */}
        <div className="mt-8 bg-[#F5F0E9] border border-[#E0C58F]/40 rounded-xl p-4">
          <p className="text-sm text-[#112250] font-medium">
            Need help with this request?
          </p>

          <p className="text-xs text-gray-600 mt-1">
            You can message your mentor or update your request details.
          </p>

          <button className="mt-3 bg-[#112250] hover:bg-[#1B3475] text-white px-4 py-2 rounded-lg text-sm transition">
            View Request Details
          </button>
        </div>

      </div>
    </DashboardShell>
  );
}