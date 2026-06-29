"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
  Users,
  Sparkles,
  Eye,
  EyeOff,
  TrendingUp,
  Loader2,
  AlertCircle,
  CheckCircle2,
  MailCheck,
} from "lucide-react";
import { signInEmail, resendVerificationEmail } from "@/app/auth";

export default function StudentAuthPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [showResend, setShowResend] = useState(false);
  const [resendEmail, setResendEmail] = useState("");
  const [resendLoading, setResendLoading] = useState(false);
  const [resendError, setResendError] = useState<string | null>(null);
  const [resendSuccess, setResendSuccess] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error: signInError } = await signInEmail({
      email,
      password,
      callbackURL: "/student/dashboard",
    });

    setLoading(false);

    if (signInError) {
      setError(signInError.message || "Sign in failed. Please try again.");
      return;
    }

    router.push("/student/dashboard");
  };

  const handleResend = async (e: React.FormEvent) => {
    e.preventDefault();
    setResendError(null);
    setResendSuccess(false);
    setResendLoading(true);

    const { error: resendErr } = await resendVerificationEmail({
      email: resendEmail,
      callbackURL: "http://localhost:3000/student/onboarding",
    });

    setResendLoading(false);

    if (resendErr) {
      setResendError(resendErr.message || "Failed to resend. Please try again.");
      return;
    }

    setResendSuccess(true);
  };


  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .animate-float    { animation: float 6s ease-in-out infinite; }
        .animate-fade-up  { animation: fade-up 0.6s ease forwards; }
        .animate-spin-slow { animation: spin-slow 22s linear infinite; }
        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        @media (prefers-reduced-motion: reduce) {
          .animate-float, .animate-fade-up, .animate-spin-slow { animation: none !important; opacity: 1 !important; }
        }
      `}</style>

      <main className="min-h-screen flex bg-[#F5F0E9]">

        {/* ── LEFT PANEL ── */}
        <section className="hidden lg:flex w-[45%] bg-[#112250] text-white relative overflow-hidden flex-col justify-between p-14">

          {/* Ambient orbs */}
          <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#E0C58F]/8 blur-[100px] animate-spin-slow pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#1e3a6e]/60 blur-[80px] pointer-events-none" />

          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#E0C58F 1px, transparent 1px), linear-gradient(90deg, #E0C58F 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          {/* Top: brand */}
          <div className="relative z-10 animate-fade-up">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#E0C58F] flex items-center justify-center">

              <span className="text-lg font-bold text-[#E0C58F] tracking-[0.08em]">KUZANA</span>
            </div>
          </div>
          </div>
          {/* Middle: hero copy */}
          <div className="relative z-10 flex-1 flex flex-col justify-center gap-8">

            <div className="animate-fade-up delay-100">
              <h2 className="text-3xl font-bold leading-tight tracking-tight">
                Your career clarity
                <br />
                <span className="text-[#E0C58F]">starts here.</span>
              </h2>
              <p className="mt-4 text-white/65 text-sm leading-relaxed max-w-xs">
                Connect with mentors who know the path you&apos;re about to walk — and will walk it with you.
              </p>
            </div>

            {/* Trust list */}
            <div className="space-y-3.5 animate-fade-up delay-200">
              {[
                { icon: Users, label: "1:1 mentorship with verified industry professionals" },
                { icon: Sparkles, label: "Matched by goal, field, and career direction" },
                { icon: ShieldCheck, label: "Secure, university-verified community" },
                { icon: TrendingUp, label: "Track your growth across every session" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-start gap-3 text-sm text-white/70">
                  <div className="w-6 h-6 rounded-md bg-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-[#E0C58F]" />
                  </div>
                  {label}
                </div>
              ))}
            </div>

            {/* Floating match card */}
            <div className="animate-float animate-fade-up delay-300">
              <div className="bg-white/8 border border-white/15 backdrop-blur-sm rounded-2xl p-4 max-w-xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-white/50 font-medium tracking-wide">Your match is ready</span>
                  <span className="text-xs bg-green-400/20 text-green-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    94% fit
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E0C58F] to-[#c9a96e] flex items-center justify-center text-[#112250] font-bold text-xs flex-shrink-0">
                    JM
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">James Mutua</p>
                    <p className="text-white/50 text-xs">Senior PM · Safaricom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <p className="relative z-10 text-xs text-white/30 animate-fade-up delay-300">
            Built for students who want direction, not guesswork.
          </p>
        </section>

        {/* ── RIGHT PANEL (Form) ── */}
        <section className="flex-1 flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md">

            <div className="bg-white rounded-2xl shadow-xl border border-[#EAE6DD] p-8 sm:p-10 animate-fade-up">

              {/* Header */}
              <div className="text-center mb-8">
                
                <h2 className="text-2xl font-bold text-[#112250] tracking-tight">
                  Welcome back
                </h2>
                <p className="text-sm text-gray-400 mt-2">
                  Sign in to continue your mentorship journey.
                </p>
              </div>

      

              {/* Form */}
              <form className="space-y-5" onSubmit={handleLogin}>

                

                {/* Email */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#112250]">
                    University Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="yourname@strathmore.edu"
                      className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-[#112250] placeholder:text-gray-400
                        focus:outline-none focus:ring-2 focus:ring-[#112250]/20 focus:border-[#112250]
                        hover:border-gray-300 transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-[#112250]">Password</label>
                    <Link href="#" className="text-xs text-[#112250]/60 hover:text-[#112250] transition">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full border border-gray-200 rounded-xl pl-10 pr-11 py-3 text-sm text-[#112250] placeholder:text-gray-400
                        focus:outline-none focus:ring-2 focus:ring-[#112250]/20 focus:border-[#112250]
                        hover:border-gray-300 transition-all duration-200 bg-gray-50 focus:bg-white"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* ERROR */}
                {error && (
                  <div className="flex items-start gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full bg-[#112250] hover:bg-[#1a2f60] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-xl
                    font-semibold flex items-center justify-center gap-2 transition-all duration-200
                    hover:shadow-lg hover:shadow-[#112250]/20 hover:-translate-y-0.5 active:scale-[0.99] text-sm"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign in
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>

                {/* Footer link */}
                <p className="text-center text-sm text-gray-500">
                  New here?{" "}
                  <Link
  href="/student/signup"
  className="text-[#112250] font-semibold hover:underline underline-offset-2"
>
  Sign Up
</Link>
                </p>

                {/* Resend verification email */}
                <div className="pt-3 border-t border-gray-100">
                  {!showResend ? (
                    <button
                      type="button"
                      onClick={() => {
                        setResendEmail(email);
                        setShowResend(true);
                        setResendSuccess(false);
                        setResendError(null);
                      }}
                      className="w-full flex items-center justify-center gap-1.5 text-xs text-gray-400 hover:text-[#112250] transition"
                    >
                      <MailCheck className="w-3.5 h-3.5" />
                      Didn&apos;t get a verification email?
                    </button>
                  ) : resendSuccess ? (
                    <div className="flex items-start gap-2 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>
                        Verification email sent to{" "}
                        <span className="font-semibold">{resendEmail}</span>.
                        Check your inbox (and spam folder).
                      </span>
                    </div>
                  ) : (
                    <form onSubmit={handleResend} className="space-y-3">
                      <div>
                        <label className="block mb-1.5 text-xs font-medium text-[#112250]">
                          Resend verification email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                          <input
                            type="email"
                            value={resendEmail}
                            onChange={(e) => setResendEmail(e.target.value)}
                            placeholder="yourname@strathmore.edu"
                            required
                            className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#112250] placeholder:text-gray-400
                              focus:outline-none focus:ring-2 focus:ring-[#112250]/20 focus:border-[#112250] bg-gray-50 focus:bg-white"
                          />
                        </div>
                      </div>

                      {resendError && (
                        <div className="flex items-start gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-2.5 text-xs text-red-700">
                          <AlertCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                          <span>{resendError}</span>
                        </div>
                      )}

                      <div className="flex gap-2">
                        <button
                          type="submit"
                          disabled={resendLoading}
                          className="flex-1 bg-[#112250] hover:bg-[#1a2f60] disabled:opacity-60 disabled:cursor-not-allowed text-white py-2.5 rounded-xl font-semibold flex items-center justify-center gap-1.5 transition text-sm"
                        >
                          {resendLoading ? (
                            <>
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Resend
                              <MailCheck className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowResend(false)}
                          className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm font-medium transition"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </form>
            </div>

            <p className="text-center text-xs text-gray-400 mt-5">
              Secure access for verified Strathmore University students only.
            </p>
          </div>
        </section>

      </main>
    </>
  );
}