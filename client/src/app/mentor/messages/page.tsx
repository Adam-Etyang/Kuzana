"use client";

import DashboardShell from "@/components/layout/dashboardshell";
import MentorSidebar from "@/components/layout/mentorsidebar";
import ConversationList from "@/components/messages/conversationlist";
import { MessageCircle, Search, Inbox } from "lucide-react";
import { useMemo, useState } from "react";

export default function MentorMessagesPage() {

  /*
  =======================================================
  BACKEND TODO

  Replace this with:

  const { data: conversations, loading } = useMentorMessages();

  or

  GET /mentor/messages

  [
    {
      id,
      studentName,
      lastMessage,
      lastUpdated,
      unread
    }
  ]
  =======================================================
  */

  const [conversations, setConversations] = useState<
    {
      id: string;
      name: string;
      lastMessage: string;
      lastUpdated: string;
      // backend Conversation.unread is a number (count of unread messages)
      unread: number;
    }[]
  >([]);

  const [filter, setFilter] = useState<"all" | "unread">("all");
  const [query, setQuery] = useState("");

  // total number of unread messages across all conversations
  const unreadCount = conversations.reduce((acc, c) => acc + (c.unread || 0), 0);

  const visibleConversations = useMemo(() => {
    return conversations
      .filter((c) => (filter === "unread" ? c.unread > 0 : true))
      .filter((c) =>
        c.name.toLowerCase().includes(query.toLowerCase())
      );
  }, [conversations, filter, query]);

  return (
    <DashboardShell sidebar={<MentorSidebar />}>

      {/* HEADER */}

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-[#112250] flex items-center justify-center shrink-0">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-[#112250]">
              Messages
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Respond to mentorship requests and continue conversations.
            </p>

          </div>

        </div>

        {conversations.length > 0 && (

          <div className="flex items-center gap-2">

            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search students"
                className="pl-9 pr-4 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#112250]/20 focus:border-[#112250] w-full sm:w-56"
              />
            </div>

          </div>

        )}

      </div>

      {/* FILTER TABS */}

      {conversations.length > 0 && (

        <div className="flex items-center gap-2 mb-5">

          {(["all", "unread"] as const).map((tab) => (

            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                filter === tab
                  ? "bg-[#112250] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab === "all" ? "All" : `Unread${unreadCount ? ` (${unreadCount})` : ""}`}
            </button>

          ))}

        </div>

      )}

      {/* LIST / EMPTY STATE */}

      {conversations.length === 0 ? (

        <div className="bg-white rounded-2xl border border-dashed border-gray-200 py-20 flex flex-col items-center justify-center text-center px-6">

          <div className="w-14 h-14 rounded-full bg-[#F5F0E9] flex items-center justify-center mb-4">
            <Inbox className="w-6 h-6 text-[#112250]" />
          </div>

          <h3 className="font-semibold text-[#112250] text-lg">
            No messages yet
          </h3>

          <p className="text-sm text-gray-500 mt-2 max-w-sm">
            When a student sends you a mentorship request, it'll show up here so you can accept it and start chatting.
          </p>

        </div>

      ) : (

        <ConversationList conversations={visibleConversations} />

      )}

    </DashboardShell>
  );
}