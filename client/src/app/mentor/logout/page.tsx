"use client";

import { useRouter } from "next/navigation";
import { LogOut, ArrowLeft, Users } from "lucide-react";

export default function MentorLogoutPage() {
  const router = useRouter();

  const handleLogout = () => {
    /**
     * BACKEND TODO
     *
     * Replace with:
     *
     * await authClient.signOut();
     *
     * or
     *
     * POST /auth/logout
     *
     */

    router.push("/");
  };

  const handleCancel = () => {
    router.push("/mentor/dashboard");
  };

  return (
    <main className="min-h-screen bg-[#F5F0E9] flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white rounded-2xl border border-gray-200 shadow-xl p-8">

        {/* Icon */}

        <div className="w-16 h-16 mx-auto rounded-full bg-[#E0C58F]/20 flex items-center justify-center mb-6">
          <Users className="w-8 h-8 text-[#112250]" />
        </div>

        {/* Heading */}

        <div className="text-center mb-8">

          <h1 className="text-2xl font-bold text-[#112250]">
            Log Out?
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Are you sure you want to log out of your mentor account?
          </p>

        </div>

        {/* Buttons */}

        <div className="space-y-3">

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-[#112250] hover:bg-[#1B3475] text-white py-3 rounded-xl font-medium transition"
          >
            <LogOut className="w-4 h-4" />
            Yes, Log Out
          </button>

          <button
            onClick={handleCancel}
            className="w-full flex items-center justify-center gap-2 border border-gray-200 text-gray-600 hover:bg-gray-50 py-3 rounded-xl font-medium transition"
          >
            <ArrowLeft className="w-4 h-4" />
            No, Go Back
          </button>

        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Your mentorship conversations and requests will remain safely stored.
        </p>

      </div>

    </main>
  );
}