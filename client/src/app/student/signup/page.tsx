"use client";

import Link from "next/link";
import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  GraduationCap,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  Users,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { signUpEmail } from "@/app/auth";

export default function StudentSignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);
    const { error: signUpError } = await signUpEmail({
      email,
      password,
      name: `${firstName} ${lastName}`.trim(),
      callbackURL: "http://localhost:3000/student/onboarding",
    });
    setLoading(false);

    if (signUpError) {
      setError(signUpError.message || "Sign up failed. Please try again.");
      return;
    }

    // Server requires email verification before sign-in is allowed.
    setSuccess(true);
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <main className="min-h-screen flex bg-[#F5F0E9]">

        {/* LEFT PANEL */}
        <section className="hidden lg:flex w-[45%] bg-[#112250] text-white relative overflow-hidden flex-col justify-between p-14">

          <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#E0C58F]/10 blur-[100px]" />

          <div className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full bg-[#1E3A6E]/60 blur-[90px]" />

          {/* LOGO */}
          <div className="relative z-10 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#E0C58F] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#112250]" />
            </div>

            <span className="font-bold tracking-[0.1em] text-[#E0C58F]">
              KUZANA
            </span>
          </div>

          {/* HERO */}
          <div className="relative z-10 flex-1 flex items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#E0C58F]/15 text-[#E0C58F] px-3 py-1 rounded-full text-sm mb-5">
                <Users className="w-4 h-4" />
                Student Community
              </div>

              <h1 className="text-4xl font-bold leading-tight">
                Your future starts
                <br />
                <span className="text-[#E0C58F]">
                  with the right mentor.
                </span>
              </h1>

              <p className="mt-5 text-white/70 max-w-sm leading-relaxed">
                Join Kuzana and connect with mentors who can guide your
                academic, personal, and professional journey.
              </p>

              <div className="mt-8 animate-float">
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 max-w-xs">
                  <p className="text-xs text-white/50 mb-2">
                    Next step
                  </p>

                  <p className="font-semibold">
                    Complete your student profile
                  </p>

                  <p className="text-xs text-white/60 mt-1">
                    Interests • Goals • Career Direction
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

          <div className="w-full max-w-xl">

            <div className="bg-white rounded-2xl shadow-xl border border-[#EAE6DD] p-8 sm:p-10">

              {success ? (
                <div className="text-center py-6">
                  <div className="mx-auto w-14 h-14 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-7 h-7 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#112250]">
                    Check your email
                  </h2>
                  <p className="text-sm text-gray-500 mt-3 max-w-sm mx-auto leading-relaxed">
                    We sent a verification link to{" "}
                    <span className="font-semibold text-[#112250]">{email}</span>.
                    Click it to verify your account, then sign in to continue.
                  </p>
                  <Link
                    href="/student/auth"
                    className="inline-flex items-center gap-2 mt-6 bg-[#112250] hover:bg-[#1A2F60] text-white px-6 py-3 rounded-xl font-semibold text-sm transition"
                  >
                    Continue to Sign In
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#112250]">
                  Create your account
                </h2>

                <p className="text-sm text-gray-500 mt-2">
                  Start your mentorship journey today.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* FIRST + LAST */}
                <div className="grid sm:grid-cols-2 gap-4">

                  <InputField
                    icon={User}
                    label="First Name"
                    value={firstName}
                    setValue={setFirstName}
                    placeholder="Hellen"
                  />

                  <InputField
                    icon={User}
                    label="Last Name"
                    value={lastName}
                    setValue={setLastName}
                    placeholder="Mutemi"
                  />

                </div>

                {/* COURSE */}
                <InputField
                  icon={GraduationCap}
                  label="Course"
                  value={course}
                  setValue={setCourse}
                  placeholder="BSc Computer Science"
                />

                {/* EMAIL */}
                <InputField
                  icon={Mail}
                  label="University Email"
                  type="email"
                  value={email}
                  setValue={setEmail}
                  placeholder="yourname@strathmore.edu"
                />

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
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                      className="w-full border border-gray-200 rounded-xl pl-10 pr-10 py-3 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#112250]/20"
                      required
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
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
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      value={confirmPassword}
                      onChange={(e) =>
                        setConfirmPassword(
                          e.target.value
                        )
                      }
                      className="w-full border border-gray-200 rounded-xl pl-10 pr-10 py-3 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#112250]/20"
                      required
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
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

                {/* ERROR */}
                {error && (
                  <div className="flex items-start gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#112250] hover:bg-[#1A2F60] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <Link
                    href="/student/auth"
                    className="text-[#112250] font-semibold hover:underline"
                  >
                    Sign In
                  </Link>
                </p>
              </form>
                </>
              )}
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

function InputField({
  label,
  value,
  setValue,
  placeholder,
  icon: Icon,
  type = "text",
}: {
  label: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  icon: React.ElementType;
  type?: string;
}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-[#112250]">
        {label}
      </label>

      <div className="relative">
        <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          required
          className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#112250]/20"
        />
      </div>
    </div>
  );
}