/* ======================================================================

BACKEND TODO (DO NOT CHANGE THE UI)

The frontend is currently using placeholder data.
Only replace the data source.

──────────────────────────────────────────────────────────────────────────

1. Conversation List

Current:

const [conversations] = useState<Conversation[]>([]);

Replace with something like:

const { data: conversations, loading } = useMessages();

OR

useEffect(() => {
  fetch("/api/student/messages")
    .then((res) => res.json())
    .then(setConversations);
}, []);

Expected response:

[
  {
    id: "...",
    mentorId: "...",
    mentorName: "James Mutua",
    mentorInitials: "JM",
    lastMessage: "Looking forward to mentoring you.",
    lastMessageTime: "2026-07-01T10:20:00Z",
    unreadCount: 2,
    status: "PENDING" | "ACTIVE"
  }
]

──────────────────────────────────────────────────────────────────────────

2. Conversation Page

Current:

const [messages] = useState<Message[]>([]);

Replace with:

const { data: messages, loading } =
useConversation(conversationId);

OR

fetch(`/api/student/messages/${conversationId}`);

Expected response:

[
  {
    id: "...",
    sender: "student" | "mentor",
    text: "Hello!",
    createdAt: "2026-07-01T09:30:00Z"
  }
]

──────────────────────────────────────────────────────────────────────────

3. Send Message

Current:

console.log(message);

Replace with:

POST /api/student/messages/{conversationId}

Body:

{
  text: message
}

After success:
- clear textbox
- append returned message
- auto-scroll to bottom

──────────────────────────────────────────────────────────────────────────

4. Request Mentorship Page

Current:

console.log(note);

Replace with:

POST /api/student/requestmentorship

Body:

{
  mentorId,
  note
}

Expected backend behaviour:

✓ Create mentorship request
✓ Store note as first chat message
✓ Create conversation
✓ Return conversationId

Then navigate to:

/student/messages/{conversationId}

OR

/student/requests

depending on preferred UX.

──────────────────────────────────────────────────────────────────────────

5. Read Receipts (Optional)

When conversation opens:

PATCH /api/student/messages/{conversationId}/read

Backend should mark unread messages as read.

──────────────────────────────────────────────────────────────────────────

6. Typing Indicator (Future)

Can later use WebSockets or Socket.io.

Events:

student_typing
mentor_typing

====================================================================== */
"use client";

import DashboardShell from "@/components/layout/dashboardshell";
import StudentSidebar from "@/components/layout/studentsidebar";
import ConversationList, {
  Conversation,
} from "@/components/messages/conversationlist";

import {
  Search,
  MessageCircle,
  Inbox,
  Loader2,
} from "lucide-react";

import { useState } from "react";

export default function MessagesPage() {

  /*
  ======================================================
  TODO (Backend)

  Replace this dummy array with your API.

  GET /student/messages

  Expected response:

  [
    {
      id: "conversationId",
      mentorName: "James Mutua",
      lastMessage: "Looking forward to mentoring you.",
      lastUpdated: "2h ago",
      unread: 2
    }
  ]

  ======================================================
  */

  const [loading] = useState(false);

  const [conversations] = useState<Conversation[]>([
    /*
    Example

    {
      id: "123",
      mentorName: "James Mutua",
      lastMessage:
        "Thanks for reaching out. I'd love to mentor you!",
      lastUpdated: "3h ago",
      unread: 1,
    }

    */
  ]);

  const [search, setSearch] = useState("");

  const filtered = conversations.filter((conversation) =>
    conversation.mentorName
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <DashboardShell sidebar={<StudentSidebar />}>

      {/* ===========================
          HEADER
      ============================ */}

      <div className="mb-8">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-[#112250] flex items-center justify-center">

            <MessageCircle className="w-6 h-6 text-[#E0C58F]" />

          </div>

          <div>

            <h1 className="text-3xl font-bold text-[#112250]">
              Messages
            </h1>

            <p className="text-gray-500 text-sm mt-1">
              Continue conversations with your mentors.
            </p>

          </div>

        </div>

      </div>

      {/* ===========================
          SEARCH BAR
      ============================ */}

      <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-6">

        <div className="relative">

          <Search className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />

          <input
            placeholder="Search mentor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-[#112250]"
          />

        </div>

      </div>

      {/* ===========================
          STATS
      ============================ */}

      <div className="grid md:grid-cols-3 gap-4 mb-8">

        <div className="bg-white border border-gray-200 rounded-xl p-5">

          <p className="text-xs uppercase tracking-wider text-gray-400">
            Conversations
          </p>

          <h2 className="text-3xl font-bold text-[#112250] mt-2">
            {conversations.length}
          </h2>

        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">

          <p className="text-xs uppercase tracking-wider text-gray-400">
            Unread
          </p>

          <h2 className="text-3xl font-bold text-[#112250] mt-2">
            {conversations.reduce(
              (sum, c) => sum + c.unread,
              0
            )}
          </h2>

        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">

          <p className="text-xs uppercase tracking-wider text-gray-400">
            Active Mentors
          </p>

          <h2 className="text-3xl font-bold text-[#112250] mt-2">
            {conversations.length}
          </h2>

        </div>

      </div>

      {/* ===========================
          CONVERSATIONS
      ============================ */}

      {loading ? (

        <div className="flex justify-center py-24">

          <Loader2 className="w-8 h-8 animate-spin text-[#112250]" />

        </div>

      ) : filtered.length === 0 ? (

        <div className="bg-white border border-gray-200 rounded-2xl p-14 text-center">

          <Inbox className="mx-auto w-14 h-14 text-[#112250]/25" />

          <h2 className="mt-5 text-2xl font-semibold text-[#112250]">
            No conversations yet
          </h2>

          <p className="mt-3 text-gray-500 max-w-lg mx-auto">

            Once you send a mentorship request,
            your request note becomes the very first
            message in your conversation with that mentor.

          </p>

          <div className="mt-8 inline-flex rounded-xl bg-[#F5F0E9] border border-[#E0C58F]/40 px-5 py-3">

            <p className="text-sm text-[#112250]">

              💡 Tip: Discover a mentor and click
              <span className="font-semibold">
                {" "}Request Mentorship
              </span>{" "}
              to begin chatting.

            </p>

          </div>

        </div>

      ) : (

        <ConversationList conversations={filtered} />

      )}

    </DashboardShell>
  );
}