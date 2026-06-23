"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import { User, BookOpen, Target, Sparkles } from "lucide-react";

export default function StudentOnboardingPage() {
  const router = useRouter();

  const [interests, setInterests] = useState("");

  const handleContinue = () => {
    // TODO: save onboarding data to backend

    router.push("/student/dashboard");
  };

  return (
    <main className="min-h-screen bg-[#F5F0E9] flex justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#112250]">
            Build Your Kuzana Profile
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Help us understand your goals so we can match you with the right
            mentors.
          </p>

          
        </div>

        {/* FORM CARD */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 space-y-8">
          {/* BASIC INFO */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <User className="w-4 h-4 text-[#112250]" />
              <h2 className="font-semibold text-[#112250]">
                Basic Information
              </h2>
            </div>

            <div className="space-y-4">
              <input
                placeholder="Full Name"
                className="w-full border border-gray-200 rounded-lg p-3 text-sm
                focus:outline-none focus:ring-2 focus:ring-[#1B3475] transition"
              />

              <input
                placeholder="Course / Degree Program"
                className="w-full border border-gray-200 rounded-lg p-3 text-sm
                focus:outline-none focus:ring-2 focus:ring-[#1B3475] transition"
              />
            </div>
          </div>

          {/* ACADEMIC INTERESTS */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-[#112250]" />
              <h2 className="font-semibold text-[#112250]">
                Academic Interests
              </h2>
            </div>

            <textarea
              placeholder="e.g. Software Engineering, AI, UX Design, Data Science..."
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              className="w-full border border-gray-200 rounded-lg p-3 text-sm h-28 resize-none
              focus:outline-none focus:ring-2 focus:ring-[#1B3475] transition"
            />
          </div>

          {/* CAREER GOALS */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-4 h-4 text-[#112250]" />
              <h2 className="font-semibold text-[#112250]">
                Career Goals
              </h2>
            </div>

            <textarea
              placeholder="Where do you see yourself in the next 2–5 years?"
              className="w-full border border-gray-200 rounded-lg p-3 text-sm h-28 resize-none
              focus:outline-none focus:ring-2 focus:ring-[#1B3475] transition"
            />
          </div>

          {/* CTA */}
          <Button
            onClick={handleContinue}
            className="w-full bg-[#112250] hover:bg-[#1B3475] text-white py-3 transition"
          >
            Save & Continue
          </Button>

          {/* FOOTNOTE */}
          <p className="text-xs text-center text-gray-400">
            Your profile helps us personalize mentor recommendations.
          </p>
        </div>
      </div>
    </main>
  );
}