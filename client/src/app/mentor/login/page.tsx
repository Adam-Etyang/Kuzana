"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles, Loader2, AlertCircle, CheckCircle2, MailCheck } from "lucide-react";
import { signInEmail, resendVerificationEmail } from "@/app/auth";

export default function MentorAuthPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [showResend, setShowResend] = useState(false);
  const [resendEmail, setResendEmail] = useState("");
  const [resendLoading, setResendLoading] = useState(false);
  const [resendError, setResendError] = useState<string | null>(null);
  const [resendSuccess, setResendSuccess] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error: signInError } = await signInEmail({
      email,
      password,
      callbackURL: "/mentor/dashboard",
    });

    setLoading(false);

    if (signInError) {
      setError(signInError.message || "Sign in failed. Please try again.");
      return;
    }

    router.push("/mentor/dashboard");
  };

  const handleResend = async (e: React.FormEvent) => {
    e.preventDefault();
    setResendError(null);
    setResendSuccess(false);
    setResendLoading(true);

    const { error: resendErr } = await resendVerificationEmail({
      email: resendEmail,
      callbackURL: "http://localhost:3000/mentor/onboarding",
    });

    setResendLoading(false);

    if (resendErr) {
      setResendError(resendErr.message || "Failed to resend. Please try again.");
      return;
    }

    setResendSuccess(true);
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

              {/* ERROR */}
              {error && (
                <div className="flex items-start gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#112250] hover:bg-[#1a2f60] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
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
                          placeholder="mentor@company.com"
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

        </div>
      </section>
    </main>
  );
}