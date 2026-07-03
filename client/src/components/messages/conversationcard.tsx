"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface ConversationCardProps {
  id: string;

  /** Person you're talking to */
  name: string;

  /** Initials shown in avatar */
  initials: string;

  /** Latest message preview */
  lastMessage: string;

  /** "2m ago", "Yesterday", etc */
  time: string;

  /** Blue unread dot */
  unread?: boolean;

  /** Student or mentor route */
  role?: "student" | "mentor";
}

export default function ConversationCard({
  id,
  name,
  initials,
  lastMessage,
  time,
  unread = false,
  role = "student",
}: ConversationCardProps) {
  return (
    <Link
      href={`/${role}/messages/${id}`}
      className="
        group
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-4
        hover:border-[#112250]/20
        hover:shadow-md
        transition-all
      "
    >
      {/* Avatar */}

      <div className="relative">

        <div
          className="
            w-12
            h-12
            rounded-full
            bg-[#112250]
            flex
            items-center
            justify-center
            text-[#E0C58F]
            font-bold
            text-sm
            flex-shrink-0
          "
        >
          {initials}
        </div>

        {unread && (
          <span
            className="
              absolute
              -top-1
              -right-1
              w-3
              h-3
              rounded-full
              bg-[#E0C58F]
              border-2
              border-white
            "
          />
        )}

      </div>

      {/* Conversation */}

      <div className="flex-1 min-w-0">

        <div className="flex justify-between items-center">

          <h3
            className="
              font-semibold
              text-[#112250]
              truncate
            "
          >
            {name}
          </h3>

          <span
            className="
              text-xs
              text-gray-400
              flex-shrink-0
            "
          >
            {time}
          </span>

        </div>

        <p
          className="
            text-sm
            text-gray-500
            truncate
            mt-1
          "
        >
          {lastMessage}
        </p>

      </div>

      <ChevronRight
        className="
          w-5
          h-5
          text-gray-300
          group-hover:text-[#112250]
          transition
        "
      />

    </Link>
  );
}

/* ======================================================

BACKEND NOTES

No backend work needed.

Just pass props.

Example:

<ConversationCard

id={conversation.id}

name={conversation.mentor.name}

initials="JM"

lastMessage={conversation.lastMessage}

time={conversation.lastMessageTime}

unread={conversation.unread}

/>

====================================================== */