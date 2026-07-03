"use client";

import ConversationCard, {
  ConversationCardProps,
} from "./conversationcard";

export default function MentorConversationCard(
  props: ConversationCardProps
) {
  return (
    <ConversationCard
      {...props}
      role="mentor"
    />
  );
}