"use client";

import { Send } from "lucide-react";
import { useState } from "react";

interface Props {
  onSend?: (message: string) => void;
}

export default function ChatInput({
  onSend,
}: Props) {
  const [message, setMessage] = useState("");

  function handleSend() {
    if (!message.trim()) return;

    onSend?.(message);

    setMessage("");
  }

  return (
    <div className="border-t border-gray-200 bg-white p-4">

      <div className="flex gap-3">

        <textarea
          rows={2}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write a message..."
          className="
            flex-1
            resize-none
            rounded-xl
            border
            border-gray-200
            px-4
            py-3
            text-sm
            outline-none
            focus:border-[#112250]
          "
        />

        <button
          onClick={handleSend}
          className="
            h-12
            w-12
            rounded-xl
            bg-[#112250]
            hover:bg-[#1B3475]
            text-white
            flex
            items-center
            justify-center
            transition
          "
        >
          <Send className="w-5 h-5"/>
        </button>

      </div>

    </div>
  );
}

/* ===================================================

BACKEND TODO

Replace

onSend(message)

with

POST /messages/send

Body:

{
conversationId,
message
}

Return

{
id,
message,
sender,
timestamp
}

Append returned message into state.

=================================================== */