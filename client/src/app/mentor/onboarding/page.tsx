"use client";

import ProfilePhotoUpload from "@/components/onboarding/profilephotoupload";
import CapacitySelector from "@/components/onboarding/capacityselector";
import Button from "@/components/ui/button";

export default function MentorOnboardingPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E9] py-12 flex justify-center">
      <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-[#112250] mb-6">
          Mentor Profile Setup
        </h1>

        <div className="space-y-5">
          <ProfilePhotoUpload />

          <input
            placeholder="Full Name"
            className="w-full border rounded-lg p-3"
          />

          <input
            placeholder="Company"
            className="w-full border rounded-lg p-3"
          />

          <input
            placeholder="Position"
            className="w-full border rounded-lg p-3"
          />

          <textarea
            placeholder="Professional experience"
            className="w-full border rounded-lg p-3"
          />

          <textarea
            placeholder="Areas of expertise"
            className="w-full border rounded-lg p-3"
          />

          <CapacitySelector />

          <Button className="w-full">
            Submit Profile
          </Button>
        </div>
      </div>
    </main>
  );
}