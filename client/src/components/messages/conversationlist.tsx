"use client";

import ConversationCard from "./conversationcard";

export interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  lastUpdated: string;
  unread: number;
}
interface Props {
  conversations: Conversation[];
}

export default function ConversationList({
  conversations,
}: Props) {

  if (conversations.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center">

        <img
          src="/empty-messages.svg"
          className="w-40 mx-auto mb-6 opacity-70"
          alt=""
        />

        <h2 className="text-xl font-semibold text-[#112250]">
          No conversations yet
        </h2>

        <p className="text-gray-500 mt-2 max-w-md mx-auto">
          Conversations begin once you send a mentorship request.
          Your request note becomes the first message in the chat.
        </p>

      </div>
    );
  }

  return (
    <div className="space-y-4">

      {conversations.map((conversation) => (

       <ConversationCard
    id={conversation.id}
    name={conversation.name}
    initials={getInitials(conversation.name)}
    lastMessage={conversation.lastMessage}
    time={conversation.lastUpdated}
    unread={conversation.unread > 0}
/>
      ))}

    </div>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0].toUpperCase())
    .slice(0, 2)
    .join("");
}


// TODO:
// Replace this dummy data with GET /student/messages
//
// Expected response:
//
// [
//   {
//      id,
//      mentorName,
//      lastMessage,
//      lastUpdated,
//      unread
//   }
// ]