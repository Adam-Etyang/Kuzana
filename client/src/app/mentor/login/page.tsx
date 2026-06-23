"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles } from "lucide-react";

export default function MentorAuthPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: connect backend auth (NestJS later)

    router.push("/mentor/dashboard");
  };

  return (
    <main className="min-h-screen flex bg-[#F5F0E9]">

      {/* LEFT PANEL */}
      <section className="hidden lg:flex w-[45%] bg-[#112250] text-white relative overflow-hidden flex-col justify-between p-14">

        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#E0C58F]/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#1e3a6e]/60 blur-[80px]" />

        <div className="relative z-10 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#E0C58F] flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-[#112250]" />
          </div>
          <span className="font-bold tracking-[0.1em] text-[#E0C58F]">
            KUZANA
          </span>
        </div>

        <div className="relative z-10 flex-1 flex items-center">
          <div>
            <h1 className="text-4xl font-bold leading-tight">
              Mentor Login
              <br />
              <span className="text-[#E0C58F]">Welcome back.</span>
            </h1>

            <p className="mt-5 text-white/70 max-w-sm">
              Continue guiding students, sharing experience, and shaping careers through Kuzana.
            </p>
          </div>
        </div>

        <p className="relative z-10 text-xs text-white/30">
          Mentorship is impact at scale.
        </p>
      </section>

      {/* RIGHT PANEL */}
      <section className="flex-1 flex items-center justify-center p-6 sm:p-10">

        <div className="w-full max-w-md">

          <div className="bg-white rounded-2xl shadow-xl border border-[#EAE6DD] p-8 sm:p-10">

            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#112250]">
                Mentor Sign In
              </h2>

              <p className="text-sm text-gray-400 mt-2">
                Access your mentorship dashboard
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">

              {/* EMAIL */}
              <div>
                <label className="block mb-2 text-sm font-medium text-[#112250]">
                  Email
                </label>

                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="mentor@company.com"
                    className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#112250]/20"
                    required
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block mb-2 text-sm font-medium text-[#112250]">
                  Password
                </label>

                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full border border-gray-200 rounded-xl pl-10 pr-10 py-3 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#112250]/20"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full bg-[#112250] hover:bg-[#1a2f60] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
              >
                Sign In
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* SIGNUP LINK */}
              <p className="text-center text-sm text-gray-500">
                New mentor?{" "}
                <Link
                  href="/mentor/signup"
                  className="text-[#112250] font-semibold hover:underline"
                >
                  Create account
                </Link>
              </p>

            </form>
          </div>

        </div>
      </section>
    </main>
  );
}