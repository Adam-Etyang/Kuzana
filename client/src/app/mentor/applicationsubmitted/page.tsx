import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ApplicationSubmittedPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E9] flex items-center justify-center p-8">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-xl">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#112250]/10">
          <CheckCircle2 className="h-7 w-7 text-[#112250]" />
        </div>

        <h1 className="mt-6 text-2xl font-semibold text-[#112250]">
          Application Received
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          Our team will review your application and contact shortlisted
          applicants.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-[#112250] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0c1a3d]"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}