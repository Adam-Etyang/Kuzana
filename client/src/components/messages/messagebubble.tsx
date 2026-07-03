"use client";

interface MessageBubbleProps {
  message: string;
  sender: "student" | "mentor";
  timestamp: string;
}

export default function MessageBubble({
  message,
  sender,
  timestamp,
}: MessageBubbleProps) {
  const isStudent = sender === "student";

  return (
    <div
      className={`flex ${
        isStudent ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-sm ${
          isStudent
            ? "bg-[#112250] text-white rounded-br-md"
            : "bg-white border border-gray-200 text-gray-700 rounded-bl-md"
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">
          {message}
        </p>

        <p
          className={`text-[11px] mt-2 ${
            isStudent ? "text-white/60" : "text-gray-400"
          }`}
        >
          {timestamp}
        </p>
      </div>
    </div>
  );
}