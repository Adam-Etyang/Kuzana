"use client";

import DashboardShell from "@/components/layout/dashboardshell";
import StudentSidebar from "@/components/layout/studentsidebar";
import MessageBubble from "@/components/messages/messagebubble";

import {
  ArrowLeft,
  Send,
  Circle,
} from "lucide-react";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

/* =========================================================

BACKEND TODO

Replace ALL mock state below with

const { data: conversation } = useConversation(id)

conversation should return

{
 mentor:{
   id,
   name,
   initials,
   online
 },

 messages:[
   {
      id,
      sender:"MENTEE",
      text,
      createdAt
   }
 ]
}

Sending

Replace handleSend()

with

POST /messages

========================================================= */

export interface ChatMessage {

  id:string;

  sender:"mentor"|"student";

  text:string;

  createdAt:string;

}

export default function ConversationPage(){

    const params=useParams();

    const id=params?.id as string;

    const [message,setMessage]=useState("");

    const [messages,setMessages]=useState<ChatMessage[]>([

        {
            id:"1",
            sender:"student",
            text:"Hi James! I'd really appreciate the opportunity to learn from your experience in Product Management. Your journey really inspired me.",
            createdAt:"10:30 AM"
        },

        {
            id:"2",
            sender:"mentor",
            text:"Hi Hellen! Thank you for reaching out. I'd love to learn more about your goals before we begin.",
            createdAt:"11:02 AM"
        }

    ]);

    function handleSend(){

        if(!message.trim()) return;

        setMessages(prev=>[
            ...prev,
            {
                id:Date.now().toString(),
                sender:"student",
                text:message,
                createdAt:"Now"
            }
        ]);

        setMessage("");

        /*
        Backend TODO

        POST /messages

        */
    }

    return(

<DashboardShell sidebar={<StudentSidebar/>}>

<div className="mb-6">

<Link
href="/student/messages"
className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#112250]"
>

<ArrowLeft className="w-4 h-4"/>

Back to Messages

</Link>

</div>

<div className="bg-white rounded-2xl border border-gray-200 overflow-hidden h-[80vh] flex flex-col">

{/* HEADER */}

<div className="border-b border-gray-200 px-6 py-5 flex items-center gap-4">

<div className="w-12 h-12 rounded-full bg-[#112250] flex items-center justify-center">

<span className="text-[#E0C58F] font-bold">

JM

</span>

</div>

<div className="flex-1">

<h2 className="font-semibold text-[#112250]">

James Mutua

</h2>

<div className="flex items-center gap-2 text-xs text-green-600">

<Circle className="w-2 h-2 fill-green-500"/>

Online

</div>

</div>

</div>

{/* CHAT */}

<div className="flex-1 overflow-y-auto bg-[#F8F8F8] p-6 space-y-5">

{messages.map(msg=>

<MessageBubble

        key={msg.id}

        sender={msg.sender}

        message={msg.text} timestamp={""}
/>

)}

</div>

{/* INPUT */}

<div className="border-t border-gray-200 bg-white p-5">

<div className="flex gap-3">

<textarea

rows={2}

value={message}

onChange={(e)=>setMessage(e.target.value)}

placeholder="Write a message..."

className="flex-1 resize-none rounded-xl border border-gray-200 p-3 focus:ring-2 focus:ring-[#112250] outline-none"

/>

<button

onClick={handleSend}

className="bg-[#112250] hover:bg-[#1B3475] px-5 rounded-xl text-white flex items-center justify-center transition"

>

<Send className="w-5 h-5"/>

</button>

</div>

</div>

</div>

</DashboardShell>

)

}