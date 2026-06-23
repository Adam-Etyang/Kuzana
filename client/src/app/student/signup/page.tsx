"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  Eye,
  EyeOff,
  Sparkles,
} from "lucide-react";

export default function SignupPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // TODO:
    // Create user in backend

    router.push("/student/onboarding");
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-up {
          animation: fade-up 0.6s ease forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-fade-up {
            animation: none !important;
          }
        }
      `}</style>

      <main className="min-h-screen flex bg-[#F5F0E9]">
        {/* LEFT PANEL */}
        <section className="hidden lg:flex w-[45%] bg-[#112250] text-white relative overflow-hidden flex-col justify-between p-14">
          <div className="absolute -top-20 -left-20 w-[350px] h-[350px] rounded-full bg-[#E0C58F]/10 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[280px] h-[280px] rounded-full bg-[#1E3A6E]/60 blur-[80px]" />

          <div className="relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#E0C58F] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#112250]" />
              </div>

              <span className="font-bold tracking-[0.1em] text-[#E0C58F]">
                KUZANA
              </span>
            </div>
          </div>

          <div className="relative z-10 flex-1 flex items-center">
            <div className="animate-fade-up">
              <h1 className="text-4xl font-bold leading-tight">
                Start your
                <br />
                mentorship journey.
              </h1>

              <p className="mt-5 text-white/70 max-w-sm leading-relaxed">
                Create your account, tell us about your goals, and we'll match
                you with mentors who can help you grow academically and
                professionally.
              </p>

              <div className="mt-8 animate-float">
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 max-w-xs">
                  <p className="text-xs text-white/50 mb-2">
                    Next step after signup
                  </p>

                  <p className="font-semibold">
                    Complete your onboarding profile
                  </p>

                  <p className="text-xs text-white/60 mt-1">
                    Interests • Skills • Career Goals
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="relative z-10 text-xs text-white/30">
            Built for students who want direction, not guesswork.
          </p>
        </section>

        {/* RIGHT PANEL */}
        <section className="flex-1 flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-xl border border-[#EAE6DD] p-8 sm:p-10 animate-fade-up">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#112250]">
                  Create your account
                </h2>

                <p className="text-sm text-gray-400 mt-2">
                  Join Kuzana and start building your future.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* FULL NAME */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#112250]">
                    Full Name
                  </label>

                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                    <input
                      type="text"
                      placeholder="John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#112250]/20"
                      required
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#112250]">
                    University Email
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                    <input
                      type="email"
                      placeholder="yourname@strathmore.edu"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      className="w-full border border-gray-200 rounded-xl pl-10 pr-10 py-3 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#112250]/20"
                      required
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* CONFIRM PASSWORD */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#112250]">
                    Confirm Password
                  </label>

                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl pl-10 pr-10 py-3 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#112250]/20"
                      required
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="group w-full bg-[#112250] hover:bg-[#1A2F60] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Continue
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-[#112250] font-semibold hover:underline"
                  >
                    Sign In
                  </Link>
                </p>
              </form>
            </div>

            <p className="text-center text-xs text-gray-400 mt-5">
              Secure access for verified university students.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}