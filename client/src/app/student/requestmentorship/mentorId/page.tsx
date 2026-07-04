"use client";

import DashboardShell from "@/components/layout/dashboardshell";
import StudentSidebar from "@/components/layout/studentsidebar";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useProfile } from "@/lib/use-profile";

import {
  ArrowLeft,
  Loader2,
  Send,
  User,
} from "lucide-react";

import { useState } from "react";

export default function RequestMentorshipPage() {
  const params = useParams();
  const router = useRouter();

  const mentorId = params?.mentorId as string;

  const { profile, loading } = useProfile(mentorId);

  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  if (loading) {
    return (
      <DashboardShell sidebar={<StudentSidebar />}>
        <div className="flex justify-center py-24">
          <Loader2 className="w-8 h-8 animate-spin text-[#112250]" />
        </div>
      </DashboardShell>
    );
  }

  if (!profile) {
    return (
      <DashboardShell sidebar={<StudentSidebar />}>
        Mentor not found.
      </DashboardShell>
    );
  }

  const fullName = `${profile.firstName} ${profile.lastName}`;

  async function submitRequest() {
    setSending(true);

    /*
=====================================================

BACKEND TODO

Replace this entire function once backend is ready.

Endpoint:

POST /api/student/requestMentorship

Body

{
    mentorId,
    message
}

Backend should:

1. Create MentorshipRequest

2. Create Conversation

conversation.studentId
conversation.mentorId

3. Create first Message

sender = STUDENT

text = message

4. Return

{
    requestId,
    conversationId
}

Then redirect

router.push(`/student/requests/${requestId}`)

=====================================================
*/

   setTimeout(() => {

  // Temporary frontend behaviour.
  // Backend will replace this with the POST request above.

  router.push("/student/requests");

},1500);
  }

  return (
    <DashboardShell sidebar={<StudentSidebar />}>

      <Link
        href={`/student/mentor/${mentorId}`}
        className="inline-flex items-center gap-2 text-gray-500 hover:text-[#112250] mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>

      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl">

        {/* Header */}

        <div className="border-b border-gray-200 p-8">

          <div className="flex gap-4 items-center">

            <div className="w-16 h-16 rounded-full bg-[#112250] flex items-center justify-center">

              <User className="text-[#E0C58F]" />

            </div>

            <div>

              <h1 className="text-2xl font-bold text-[#112250]">

                Request mentorship

              </h1>

              <p className="text-gray-500 mt-1">

                Send a personal note to{" "}
                <span className="font-semibold">
                  {fullName}
                </span>

              </p>

            </div>

          </div>

        </div>

        {/* Body */}

<div className="p-8">

  {/* Intro Card */}

  <div className="bg-[#F5F0E9] rounded-xl border border-[#E0C58F]/40 p-5 mb-6">

    <h3 className="font-semibold text-[#112250] mb-2">
      Introduce yourself
    </h3>

    <p className="text-sm text-gray-600 leading-relaxed">
      A thoughtful introduction increases your chances of getting a response.
      Share what you're studying, your career interests, what you hope to learn,
      and why you chose this mentor.
    </p>

  </div>

  {/* Information Banner */}

  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">

    <p className="text-sm text-[#112250] leading-relaxed">
      <span className="font-semibold">Good to know:</span> Your note will become
      the <span className="font-semibold">first message</span> in your
      conversation if this mentor accepts your mentorship request.
    </p>

  </div>

  {/* Message */}

  <div>

    <label className="block text-sm font-medium text-[#112250] mb-2">
      Personal message
    </label>

    <textarea
      rows={8}
      maxLength={500}
      placeholder={`Hi ${profile.firstName},

My name is ...

I'm currently studying ...

I admire your experience in ...

I'm hoping to learn more about ...

Thank you for considering my request!`}
      className="w-full rounded-xl border border-gray-200 p-5 resize-none outline-none transition focus:border-[#112250] focus:ring-2 focus:ring-[#112250]/20"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />

    <div className="flex justify-between mt-2">

      <p className="text-xs text-gray-400">
        Be genuine and specific. Avoid sending generic messages.
      </p>

      <span
        className={`text-xs font-medium ${
          message.length > 450
            ? "text-red-500"
            : "text-gray-400"
        }`}
      >
        {message.length}/500
      </span>

    </div>

  </div>

  {/* Footer */}

  <div className="flex items-center justify-between mt-8 border-t border-gray-100 pt-6">

    <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
      By sending this request, your mentor will receive your profile and this
      message. You'll be able to continue the conversation once they respond.
    </p>

    <button
      disabled={!message.trim() || sending}
      onClick={submitRequest}
      className="bg-[#112250] hover:bg-[#1B3475] disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl flex items-center gap-2 transition"
    >
      {sending ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="w-4 h-4" />
          Send Request
        </>
      )}
    </button>

  </div>

</div>

      </div>

    </DashboardShell>
  );
}