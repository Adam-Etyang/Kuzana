"use client";

import DashboardShell from "@/components/layout/dashboardshell";
import MentorSidebar from "@/components/layout/mentorsidebar";
import MessageBubble from "@/components/messages/messagebubble";
import ChatInput from "@/components/messages/chatinput";
import Link from "next/link";
import { ArrowLeft, Check, X, Quote, Lock } from "lucide-react";
import { useState } from "react";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function MentorConversationPage() {

  /*
  ========================================================

  BACKEND TODO

  GET

  /mentor/messages/:id

  return

  {
      conversationId,
      studentName,
      status,

      messages:[
          {
              id,
              sender,
              message,
              createdAt
          }
      ],

      mentorshipRequest:{
          id,
          note,
          status
      }

  }

  ========================================================
  */

  const student = "Jane Doe";

  const [accepted, setAccepted] = useState(false);
  const [declined, setDeclined] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "student",
      text: "Hi! I've admired your journey in software engineering. I'd love to learn from your experience and receive mentorship.",
      time: "2 hours ago"
    }
  ]);

  function sendMessage(message: string) {

    setMessages((prev) => [
      ...prev,
      {
        sender: "mentor",
        text: message,
        time: "Now"
      }
    ]);

    /*
    ==================================================

    BACKEND

    POST

    /messages/send

    {
      conversationId,
      message
    }

    ==================================================
    */

  }

  return (

    <DashboardShell sidebar={<MentorSidebar />}>

      <Link
        href="/mentor/messages"
        className="text-sm text-gray-500 hover:text-[#112250] flex items-center gap-1 mb-6 w-fit transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Messages
      </Link>

      <div className="bg-white rounded-2xl border border-gray-200 h-[78vh] flex flex-col overflow-hidden">

        {/* HEADER */}

        <div className="border-b border-gray-200 px-6 py-4 flex items-center gap-3">

          <div className="relative shrink-0">

            <div className="w-11 h-11 rounded-full bg-[#112250] flex items-center justify-center text-white text-sm font-semibold">
              {getInitials(student)}
            </div>

            <span
              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                accepted ? "bg-emerald-500" : "bg-gray-300"
              }`}
            />

          </div>

          <div>

            <h1 className="font-semibold text-[#112250] text-lg leading-tight">
              {student}
            </h1>

            <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1.5">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  accepted ? "bg-emerald-500" : "bg-[#E0C58F]"
                }`}
              />
              {declined
                ? "Request declined"
                : accepted
                ? "Active mentorship"
                : "Pending your response"}
            </p>

          </div>

        </div>

        {/* REQUEST CARD */}

        {!accepted && !declined && (

          <div className="m-5 rounded-xl bg-[#F5F0E9] border border-[#E0C58F]/40 p-5">

            <div className="flex items-center gap-2">
              <Quote className="w-4 h-4 text-[#112250]/50" />
              <h3 className="font-semibold text-[#112250]">
                New Mentorship Request
              </h3>
            </div>

            <p className="text-gray-600 mt-3 leading-relaxed italic">
              "Hi! I've admired your journey in software engineering. I'd love to learn from your experience and receive mentorship."
            </p>

            <div className="flex gap-3 mt-6">

              <button

                onClick={() => {

                  setAccepted(true);

                  /*
                  ======================================

                  BACKEND

                  PATCH

                  /mentor/request/accept

                  body

                  {
                     conversationId
                  }

                  ======================================
                  */

                }}

                className="flex items-center gap-1.5 bg-[#112250] hover:bg-[#1B3475] text-white px-5 py-2 rounded-lg transition text-sm font-medium"
              >
                <Check className="w-4 h-4" />
                Accept Request
              </button>

              <button

                onClick={() => {

                  setDeclined(true);

                  /*
                  ====================================

                  BACKEND

                  PATCH

                  /mentor/request/decline

                  ====================================

                  */

                }}

                className="flex items-center gap-1.5 border border-red-200 text-red-600 hover:bg-red-50 px-5 py-2 rounded-lg transition text-sm font-medium"
              >
                <X className="w-4 h-4" />
                Decline
              </button>

            </div>

          </div>

        )}

        {/* CHAT */}

        <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-gray-50">

          {messages.map((msg, index) => (

            <MessageBubble
              key={index}
              sender={msg.sender as "student" | "mentor"}
              message={msg.text}
              timestamp={msg.time}
            />

          ))}

        </div>

        {/* INPUT / LOCKED STATE */}

        {accepted ? (

          <ChatInput onSend={sendMessage} />

        ) : (

          <div className="border-t border-gray-200 px-6 py-4 flex items-center gap-2 text-sm text-gray-400 bg-gray-50">
            <Lock className="w-4 h-4" />
            {declined
              ? "You declined this request. Messaging is closed."
              : "Accept this request to start messaging Jane."}
          </div>

        )}

      </div>

    </DashboardShell>

  );

}