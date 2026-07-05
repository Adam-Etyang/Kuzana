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

const ROLE_HOME: Record<string, string> = {
  MENTEE: "/student/dashboard",
  MENTOR: "/mentor/dashboard",
  ADMIN: "/admin/dashboard",
};

type SignInData = {
  user?: { role?: string } | null;
} | null;

export default function LoginPage() {
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

    try {
      const { data, error: signInError } = await signInEmail({
        email,
        password,
      });

      if (signInError) {
        setLoading(false);
        setError(signInError.message || "Sign in failed. Please try again.");
        return;
      }

      const role = ((data as SignInData)?.user?.role as string | undefined) ?? "MENTEE";
      const destination = ROLE_HOME[role] ?? ROLE_HOME.MENTEE;

      router.push(destination);
    } catch (err) {
      setLoading(false);
      setError(
        err instanceof Error
          ? err.message
          : "Sign in failed. Please try again."
      );
    }
  };

  const handleResend = async (e: React.FormEvent) => {
    e.preventDefault();
    setResendError(null);
    setResendSuccess(false);
    setResendLoading(true);

    const { error: resendErr } = await resendVerificationEmail({
      email: resendEmail,
      callbackURL: "http://localhost:3000/login",
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
<section className="hidden lg:flex w-[45%] text-white relative overflow-hidden flex-col justify-between p-14">

  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-60"
    style={{
      backgroundImage: "url('/images/teamhuddle.jpg')",
    }}
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-[#112250]/80" />

  {/* Ambient orbs */}
  <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#E0C58F]/8 blur-[100px] animate-spin-slow pointer-events-none" />
  


  {/* Top: Brand */}
  <div className="relative z-10 animate-fade-up">
    <div className="flex items-center gap-2 mb-2">
       {/* Logo */}
<Link href="/" className="group flex items-center flex-shrink-0">

  <span
    className="
      text-[1.45rem]
      font-black
      tracking-[0.14em]
      bg-gradient-to-r
      from-[#D4AA6A]
      via-[#F5E4B0]
      to-[#E0C58F]
      bg-clip-text
      text-transparent
      transition-all
      duration-300
      group-hover:drop-shadow-[0_0_12px_rgba(224,197,143,0.35)]
    "
  >
    KUZANA
  </span>

</Link>
    </div>
  </div>

  {/* Middle: Hero copy */}
  <div className="relative z-10 flex-1 flex flex-col justify-center gap-8">

    <div className="animate-fade-up delay-100">
      <h2 className="text-3xl font-bold leading-tight tracking-tight">
        Your Community
        <br />
        <span className="text-[#E0C58F]">awaits</span>
      </h2>

      <p className="mt-4 text-white/75 text-sm leading-relaxed max-w-xs">
        Whether you're learning, mentoring, or leading, your next
  conversation starts here. Sign in to continue your mentorship journey. Connect with students,
        mentors, and admins all in one place.
      </p>
    </div>

    {/* Trust list */}
    <div className="space-y-3.5 animate-fade-up delay-200">
      {[
        {
          icon: Users,
          label: "1:1 mentorship with verified industry professionals",
        },
        {
          icon: Sparkles,
          label: "Matched by goal, field, and career direction",
        },
        {
          icon: ShieldCheck,
          label: "Secure, university-verified community",
        },
        {
          icon: TrendingUp,
          label: "Track your growth across every session",
        },
      ].map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex items-start gap-3 text-sm text-white/80"
        >
          <div className="w-6 h-6 rounded-md bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
            <Icon className="w-3.5 h-3.5 text-[#E0C58F]" />
          </div>
          {label}
        </div>
      ))}
    </div>
  </div>

  {/* Bottom note */}
  <p className="relative z-10 text-xs text-white/40 animate-fade-up delay-300">
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
                  Sign in to continue to your dashboard.
                </p>
              </div>

              {/* Form */}
              <form className="space-y-5" onSubmit={handleLogin}>

                {/* Email */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#112250]">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
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
                      required
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

                {/* Footer links */}
                <div className="text-center text-sm text-gray-500">
  New to Kuzana?
  <div className="mt-2 flex justify-center gap-2">
    <Link
      href="/student/signup"
      className="font-semibold text-[#112250] hover:underline"
    >
      Student Registration
    </Link>

    <span className="text-gray-300">•</span>

    <Link
      href="/mentor/apply"
      className="font-semibold text-[#112250] hover:underline"
    >
      Mentor Application
    </Link>
  </div>
</div>
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
                  <div className="space-y-3">
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
        placeholder="you@example.com"
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
      type="button"
      onClick={handleResend}
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
</div>
                  )}
                </div>
              </form>
            </div>

            <p className="text-center text-xs text-gray-400 mt-5">
              Secure access for verified Kuzana community members.
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
