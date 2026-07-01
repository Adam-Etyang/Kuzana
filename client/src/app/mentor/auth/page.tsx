"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { FormEvent } from "react";
import {
  PenLine,
  MessageCircle,
  BadgeCheck,
  Sparkles,
  Info,
  Loader2,
  AlertCircle,
} from "lucide-react";

const API_BASE = "http://localhost:3001";

const steps = [
  {
    title: "Apply",
    description: "Tell us about your background and experience.",
    icon: PenLine,
  },
  {
    title: "Interview",
    description: "Selected applicants meet the Kuzana team.",
    icon: MessageCircle,
  },
  {
    title: "Approval",
    description: "Your mentor profile is reviewed and activated.",
    icon: BadgeCheck,
  },
  {
    title: "Start Mentoring",
    description: "Connect with matched students.",
    icon: Sparkles,
  },
];

export default function MentorApplyPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [position, setPosition] = useState("");
  const [yearsExperience, setYearsExperience] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [expertise, setExpertise] = useState("");
  const [motivation, setMotivation] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/applications`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          organization,
          position,
          yearsExperience,
          linkedin: linkedin || undefined,
          expertise,
          motivation,
        }),
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => null);
        throw new Error(
          errBody?.message || `Failed to submit application (${res.status})`,
        );
      }

      router.push("/mentor/applicationsubmitted");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    } finally {
      setLoading(false);
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
              Mentors help university students navigate academics, careers,
              and personal growth.
            </p>

            <div className="mt-12">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isLast = i === steps.length - 1;

                return (
                  <div
                    key={step.title}
                    className="relative flex gap-4 pb-8 last:pb-0"
                  >
                    {!isLast && (
                      <span className="absolute left-[19px] top-10 h-[calc(100%-16px)] w-px bg-gradient-to-b from-[#E0C58F]/50 to-[#E0C58F]/10" />
                    )}

                    <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#E0C58F]/40 bg-[#112250]">
                      <Icon className="h-4 w-4 text-[#E0C58F]" />
                    </div>

                    <div className="pt-2">
                      <p className="text-sm font-semibold text-white">
                        {step.title}
                      </p>

                      <p className="mt-0.5 text-xs text-[#F5F0E9]/60">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#E0C58F]" />

              <p className="text-xs leading-relaxed text-[#F5F0E9]/70">
                Applications are reviewed by the Kuzana team.
                Shortlisted applicants may be contacted for an interview.
              </p>
            </div>
          </div>

          <p className="mt-10 text-xs italic text-[#E0C58F]/70">
            Great mentors create great futures.
          </p>
        </div>

        {/* RIGHT PANEL */}
        <div className="px-8 py-10 lg:px-12 lg:py-16">
          <h2 className="text-2xl font-semibold text-[#112250]">
            Become a Mentor
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Submit your application to join the Kuzana mentorship community.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <InputField
                label="Full Name"
                value={fullName}
                setValue={setFullName}
                placeholder="Jane Mwangi"
                required
              />

              <InputField
                label="Professional Email"
                type="email"
                value={email}
                setValue={setEmail}
                placeholder="jane@company.com"
                required
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <InputField
                label="Current Organization"
                value={organization}
                setValue={setOrganization}
                placeholder="Safaricom PLC"
                required
              />

              <InputField
                label="Current Role / Position"
                value={position}
                setValue={setPosition}
                placeholder="Product Manager"
                required
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#112250]">
                  Years of Experience
                </label>

                <select
                  required
                  value={yearsExperience}
                  onChange={(e) => setYearsExperience(e.target.value)}
                  className="w-full rounded-lg border px-4 py-3 text-sm text-[#112250] focus:border-[#112250] focus:outline-none focus:ring-1 focus:ring-[#112250]"
                >
                  <option value="" disabled>
                    Select range
                  </option>

                  <option value="0-2">0–2 years</option>
                  <option value="3-5">3–5 years</option>
                  <option value="6-10">6–10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <InputField
                label="LinkedIn Profile"
                value={linkedin}
                setValue={setLinkedin}
                placeholder="linkedin.com/in/janemwangi"
                hint="Optional"
              />
            </div>

            <InputField
              label="Areas of Expertise"
              value={expertise}
              setValue={setExpertise}
              placeholder="Software Engineering, Product Management, UI/UX"
              hint="Separate multiple areas with commas."
              required
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-[#112250]">
                Why do you want to become a mentor?
              </label>

              <textarea
                required
                rows={4}
                value={motivation}
                onChange={(e) => setMotivation(e.target.value)}
                placeholder="Tell us what draws you to mentoring Kuzana students."
                className="w-full resize-none rounded-lg border px-4 py-3 text-sm text-[#112250] placeholder:text-gray-400 focus:border-[#112250] focus:outline-none focus:ring-1 focus:ring-[#112250]"
              />
            </div>

            {error && (
              <div className="flex items-start gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[#112250] py-3 font-medium text-white transition hover:bg-[#0c1a3d] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            Already an approved mentor?
            <Link
              href="/login"
              className="ml-1 font-medium text-[#112250] hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function InputField({
  label,
  type = "text",
  value,
  setValue,
  placeholder,
  hint,
  required,
}: {
  label: string;
  type?: string;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  hint?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[#112250]">
        {label}
      </label>

      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border px-4 py-3 text-sm text-[#112250] placeholder:text-gray-400 focus:border-[#112250] focus:outline-none focus:ring-1 focus:ring-[#112250]"
      />

      {hint && (
        <p className="mt-1 text-xs text-gray-400">{hint}</p>
      )}
    </div>
  );
}
