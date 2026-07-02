"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, type FormEvent } from "react";
import {
  PenLine,
  MessageCircle,
  BadgeCheck,
  Sparkles,
  Info,
  User,
  Mail,
  Lock,
  KeyRound,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const API_BASE = "http://localhost:3001";

const steps = [
  { title: "Apply", description: "Tell us about your background and experience.", icon: PenLine },
  { title: "Interview", description: "Selected applicants meet the Kuzana team.", icon: MessageCircle },
  { title: "Approval", description: "Your mentor profile is reviewed and activated.", icon: BadgeCheck },
  { title: "Start Mentoring", description: "Connect with matched students.", icon: Sparkles },
];

interface KeyInfo {
  key: string;
  email: string;
  fullName: string;
  isUsed: boolean;
}

export default function MentorApplyPage() {
  const searchParams = useSearchParams();
  const initialKey = searchParams.get("key") ?? "";

  const [mode, setMode] = useState<"apply" | "activate">(
    initialKey ? "activate" : "apply",
  );

  // ─── Apply state ───
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [position, setPosition] = useState("");
  const [yearsExperience, setYearsExperience] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [expertise, setExpertise] = useState("");
  const [motivation, setMotivation] = useState("");
  const [applyLoading, setApplyLoading] = useState(false);
  const [applyError, setApplyError] = useState<string | null>(null);
  const [applySuccess, setApplySuccess] = useState(false);

  // ─── Activate state ───
  const [accessKey, setAccessKey] = useState(initialKey);
  const [keyInfo, setKeyInfo] = useState<KeyInfo | null>(null);
  const [keyLoading, setKeyLoading] = useState(Boolean(initialKey));
  const [keyError, setKeyError] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activateLoading, setActivateLoading] = useState(false);
  const [activateError, setActivateError] = useState<string | null>(null);
  const [activateSuccess, setActivateSuccess] = useState(false);

  // Fetch application details when a key is present (activate mode)
  useEffect(() => {
    if (mode !== "activate" || !accessKey) return;
    let cancelled = false;
    fetch(`${API_BASE}/applications/by-key/${encodeURIComponent(accessKey)}`)
      .then(async (res) => {
        if (!res.ok) {
          const body = await res.json().catch(() => null);
          throw new Error(body?.message || "Invalid or expired key.");
        }
        return res.json() as Promise<KeyInfo>;
      })
      .then((info) => {
        if (!cancelled) {
          setKeyInfo(info);
          setKeyError(null);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setKeyError(err instanceof Error ? err.message : "Failed to validate key.");
          setKeyInfo(null);
        }
      })
      .finally(() => {
        if (!cancelled) setKeyLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [accessKey, mode]);

  const handleApply = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setApplyError(null);
    setApplyLoading(true);
    try {
      const res = await fetch(`${API_BASE}/applications`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          fullName, email, organization, position, yearsExperience,
          linkedin: linkedin || undefined, expertise, motivation,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.message || `Failed to submit (${res.status})`);
      }
      setApplySuccess(true);
    } catch (err) {
      setApplyError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setApplyLoading(false);
    }
  };

  const handleActivate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setActivateError(null);
    if (password !== confirmPassword) {
      setActivateError("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      setActivateError("Password must be at least 8 characters.");
      return;
    }
    setActivateLoading(true);
    try {
      const res = await fetch(`${API_BASE}/users/register-mentor`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: keyInfo?.email ?? email,
          password,
          name: keyInfo?.fullName ?? fullName,
          accessKey,
          callbackURL: "http://localhost:3000/mentor/onboarding",
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.message || "Activation failed. Please try again.");
      }
      setActivateSuccess(true);
    } catch (err) {
      setActivateError(err instanceof Error ? err.message : "Activation failed.");
    } finally {
      setActivateLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F0E9] flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl lg:grid lg:grid-cols-[44%_1fr]">
        {/* LEFT PANEL */}
        <div className="flex flex-col justify-between bg-[#112250] px-8 py-10 text-[#F5F0E9] lg:px-12 lg:py-16">
          <div>
            <h1 className="mt-6 text-3xl font-bold leading-tight text-white lg:text-4xl">
              Share your experience.
              <br />
              Shape a student&apos;s future.
            </h1>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#F5F0E9]/80">
              Mentors help university students navigate academics, careers, and personal growth.
            </p>
            <div className="mt-12">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isLast = i === steps.length - 1;
                return (
                  <div key={step.title} className="relative flex gap-4 pb-8 last:pb-0">
                    {!isLast && (
                      <span className="absolute left-[19px] top-10 h-[calc(100%-16px)] w-px bg-gradient-to-b from-[#E0C58F]/50 to-[#E0C58F]/10" />
                    )}
                    <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#E0C58F]/40 bg-[#112250]">
                      <Icon className="h-4 w-4 text-[#E0C58F]" />
                    </div>
                    <div className="pt-2">
                      <p className="text-sm font-semibold text-white">{step.title}</p>
                      <p className="mt-0.5 text-xs text-[#F5F0E9]/60">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#E0C58F]" />
              <p className="text-xs leading-relaxed text-[#F5F0E9]/70">
                Applications are reviewed by the Kuzana team. Shortlisted applicants may be contacted for an interview.
              </p>
            </div>
          </div>
          <p className="mt-10 text-xs italic text-[#E0C58F]/70">Great mentors create great futures.</p>
        </div>

        {/* RIGHT PANEL */}
        <div className="px-8 py-10 lg:px-12 lg:py-16">
          {/* Mode toggle */}
          <div className="mb-6 flex gap-2 rounded-xl bg-gray-100 p-1">
            <button
              onClick={() => setMode("apply")}
              className={`flex-1 rounded-lg py-2 text-sm font-medium transition ${
                mode === "apply" ? "bg-white text-[#112250] shadow-sm" : "text-gray-500"
              }`}
            >
              Apply
            </button>
            <button
              onClick={() => setMode("activate")}
              className={`flex-1 rounded-lg py-2 text-sm font-medium transition ${
                mode === "activate" ? "bg-white text-[#112250] shadow-sm" : "text-gray-500"
              }`}
            >
              Activate
            </button>
          </div>

          {mode === "apply" ? (
            applySuccess ? (
              <div className="text-center py-8">
                <div className="mx-auto w-14 h-14 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-7 h-7 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-[#112250]">Application Received</h2>
                <p className="text-sm text-gray-500 mt-3 max-w-sm mx-auto leading-relaxed">
                  Our team will review your application and contact shortlisted applicants.
                </p>
                <button
                  onClick={() => {
                    setApplySuccess(false);
                    setMode("activate");
                  }}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#112250] hover:underline"
                >
                  Already have an access key? Activate your account
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-[#112250]">Become a Mentor</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Submit your application to join the Kuzana mentorship community.
                </p>
                <form onSubmit={handleApply} className="mt-8 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <InputField label="Full Name" value={fullName} setValue={setFullName} placeholder="Jane Mwangi" required />
                    <InputField label="Professional Email" type="email" value={email} setValue={setEmail} placeholder="jane@company.com" required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <InputField label="Current Organization" value={organization} setValue={setOrganization} placeholder="Safaricom PLC" required />
                    <InputField label="Current Role / Position" value={position} setValue={setPosition} placeholder="Product Manager" required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#112250]">Years of Experience</label>
                      <select
                        required
                        value={yearsExperience}
                        onChange={(e) => setYearsExperience(e.target.value)}
                        className="w-full rounded-lg border px-4 py-3 text-sm text-[#112250] focus:border-[#112250] focus:outline-none focus:ring-1 focus:ring-[#112250]"
                      >
                        <option value="" disabled>Select range</option>
                        <option value="0-2">0–2 years</option>
                        <option value="3-5">3–5 years</option>
                        <option value="6-10">6–10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                    <InputField label="LinkedIn Profile" value={linkedin} setValue={setLinkedin} placeholder="linkedin.com/in/janemwangi" hint="Optional" />
                  </div>
                  <InputField label="Areas of Expertise" value={expertise} setValue={setExpertise} placeholder="Software Engineering, Product Management, UI/UX" hint="Separate multiple areas with commas." required />
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#112250]">Why do you want to become a mentor?</label>
                    <textarea
                      required
                      rows={4}
                      value={motivation}
                      onChange={(e) => setMotivation(e.target.value)}
                      placeholder="Tell us what draws you to mentoring Kuzana students."
                      className="w-full resize-none rounded-lg border px-4 py-3 text-sm text-[#112250] placeholder:text-gray-400 focus:border-[#112250] focus:outline-none focus:ring-1 focus:ring-[#112250]"
                    />
                  </div>
                  {applyError && (
                    <div className="flex items-start gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{applyError}</span>
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={applyLoading}
                    className="w-full rounded-lg bg-[#112250] py-3 font-medium text-white transition hover:bg-[#0c1a3d] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {applyLoading ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </form>
              </>
            )
          ) : (
            activateSuccess ? (
              <div className="text-center py-8">
                <div className="mx-auto w-14 h-14 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-7 h-7 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-[#112250]">Check your email</h2>
                <p className="text-sm text-gray-500 mt-3 max-w-sm mx-auto leading-relaxed">
                  We sent a verification link to{" "}
                  <span className="font-semibold text-[#112250]">{keyInfo?.email ?? email}</span>.
                  Click it to verify your mentor account, then sign in.
                </p>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 mt-6 bg-[#112250] hover:bg-[#1A2F60] text-white px-6 py-3 rounded-xl font-semibold text-sm transition"
                >
                  Continue to Sign In
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-[#112250]">Activate Your Account</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Enter your access key to create your mentor account.
                </p>

                {/* Access key field */}
                <div className="mt-6 rounded-2xl border-2 border-[#E0C58F] bg-[#FFF9EC] p-4">
                  <label className="block mb-2 text-sm font-semibold text-[#112250]">Mentor Access Key</label>
                  <div className="relative">
                    <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#112250]" />
                    <input
                      type="text"
                      value={accessKey}
                      onChange={(e) => {
                        setAccessKey(e.target.value);
                        setKeyInfo(null);
                        setKeyError(null);
                      }}
                      placeholder="KUZ-MEN-XXXXXX"
                      className="w-full border border-[#E0C58F] rounded-xl pl-10 pr-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#E0C58F]"
                      required
                    />
                  </div>
                  {keyLoading && (
                    <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                      <Loader2 className="w-3 h-3 animate-spin" /> Validating key…
                    </p>
                  )}
                  {keyError && (
                    <p className="text-xs text-red-600 mt-2 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {keyError}
                    </p>
                  )}
                  {keyInfo && (
                    <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Key verified for {keyInfo.fullName} ({keyInfo.email})
                    </p>
                  )}
                </div>

                {/* Pre-filled info from key */}
                {keyInfo && (
                  <form onSubmit={handleActivate} className="mt-5 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <ReadOnlyField icon={User} label="Name" value={keyInfo.fullName} />
                      <ReadOnlyField icon={Mail} label="Email" value={keyInfo.email} />
                    </div>
                    <PasswordField
                      label="Password"
                      value={password}
                      setValue={setPassword}
                      show={showPassword}
                      toggle={() => setShowPassword(!showPassword)}
                    />
                    <PasswordField
                      label="Confirm Password"
                      value={confirmPassword}
                      setValue={setConfirmPassword}
                      show={showConfirmPassword}
                      toggle={() => setShowConfirmPassword(!showConfirmPassword)}
                    />
                    {activateError && (
                      <div className="flex items-start gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                        <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{activateError}</span>
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={activateLoading}
                      className="w-full bg-[#112250] hover:bg-[#1A2F60] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                    >
                      {activateLoading ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Creating account...</>
                      ) : (
                        <>Create Account <ArrowRight className="w-4 h-4" /></>
                      )}
                    </button>
                  </form>
                )}

                <div className="mt-6 text-center">
                  <button
                    onClick={() => setMode("apply")}
                    className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-[#112250]"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Don&apos;t have a key yet? Apply first
                  </button>
                </div>
              </>
            )
          )}

          <div className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-[#112250] hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function InputField({
  label, type = "text", value, setValue, placeholder, hint, required,
}: {
  label: string; type?: string; value: string; setValue: (v: string) => void;
  placeholder?: string; hint?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[#112250]">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border px-4 py-3 text-sm text-[#112250] placeholder:text-gray-400 focus:border-[#112250] focus:outline-none focus:ring-1 focus:ring-[#112250]"
      />
      {hint && <p className="mt-1 text-xs text-gray-400">{hint}</p>}
    </div>
  );
}

function ReadOnlyField({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-400">{label}</label>
      <div className="relative">
        <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          readOnly
          value={value}
          className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm bg-gray-50 text-gray-600"
        />
      </div>
    </div>
  );
}

function PasswordField({
  label, value, setValue, show, toggle,
}: {
  label: string; value: string; setValue: (v: string) => void;
  show: boolean; toggle: () => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[#112250]">{label}</label>
      <div className="relative">
        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full border border-gray-200 rounded-xl pl-10 pr-10 py-3 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#112250]/20"
          required
        />
        <button type="button" onClick={toggle} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
