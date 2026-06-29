"use client";

import DashboardShell from "@/components/layout/dashboardshell";
import MentorSidebar from "@/components/layout/mentorsidebar";
import Link from "next/link";
import {
  Mail,
  Briefcase,
  Building,
  Calendar,
  Pencil,
  Award,
  Loader2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import LogoutButton from "../logout/page";
import { authClient } from "@/lib/auth-client";
import { useProfile } from "@/lib/use-profile";

export default function MentorProfilePage() {
  const { data: session, isPending: sessionLoading } = authClient.useSession();
  const { profile, loading: profileLoading, error: profileError } = useProfile(session?.user?.id);

  const isLoading = sessionLoading || profileLoading;
  const name = profile ? `${profile.firstName} ${profile.lastName}` : session?.user?.name ?? "—";
  const email = session?.user?.email ?? "—";
  const initials = profile
    ? `${profile.firstName[0] ?? ""}${profile.lastName[0] ?? ""}`
    : (session?.user?.name?.split(" ").map((n) => n[0]).join("").slice(0, 2) ?? "M");
  const bio = profile?.bio ?? "No bio set yet.";
  const expertise = profile?.skills.map((s) => s.skill.name) ?? [];
  const availability = profile?.availability ?? [];

  return (
    <DashboardShell sidebar={<MentorSidebar />}>
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#112250]">
            My Profile
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            This is how students see your mentor profile.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <LogoutButton />

          <Link
            href="/mentor/profileedit"
            className="flex items-center gap-2 bg-[#112250] hover:bg-[#1B3475] text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            <Pencil className="w-4 h-4" />
            Edit Profile
          </Link>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-[#112250]" />
        </div>
      ) : profileError ? (
        <div className="flex items-start gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{profileError}</span>
        </div>
      ) : !profile ? (
        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
          <p className="text-sm text-gray-500 mb-4">
            You haven&apos;t set up your mentor profile yet.
          </p>
          <Link
            href="/mentor/onboarding"
            className="inline-flex items-center gap-2 bg-[#112250] hover:bg-[#1B3475] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition"
          >
            Complete your profile
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
      <div className="grid md:grid-cols-3 gap-6">
        {/* LEFT COLUMN */}
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#112250] flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-[#E0C58F]">
                {initials}
              </span>
            </div>

            <h2 className="text-lg font-semibold text-[#112250]">
              {name}
            </h2>

            <p className="text-sm text-gray-500">
              {profile.department}
            </p>

            <span className="mt-2 inline-block px-3 py-1 rounded-full bg-[#F5F0E9] text-[#112250] text-xs font-medium">
              Mentor
            </span>

            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              {bio}
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-3">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Contact
            </h3>

            <DetailRow
              icon={<Mail className="w-4 h-4" />}
              value={email}
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-2 space-y-4">
          {/* PROFESSIONAL */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Professional Background
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <DetailRow
                icon={<Building className="w-4 h-4" />}
                label="Faculty"
                value={profile.faculty}
              />

              <DetailRow
                icon={<Briefcase className="w-4 h-4" />}
                label="Department"
                value={profile.department}
              />

              <DetailRow
                icon={<Award className="w-4 h-4" />}
                label="Max Mentees"
                value={String(profile.maxMentees ?? "—")}
              />
            </div>
          </div>

          {/* EXPERTISE */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Areas of Expertise
            </h3>

            {expertise.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-[#F5F0E9] text-[#112250] text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400">No expertise areas added yet.</p>
            )}
          </div>

          {/* AVAILABILITY */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Availability
            </h3>

            {availability.length > 0 ? (
              <div className="space-y-3">
                {availability.map((slot) => (
                  <DetailRow
                    key={slot.id}
                    icon={<Calendar className="w-4 h-4" />}
                    label={slot.dayOfWeek}
                    value={`${slot.startTime} – ${slot.endTime}`}
                  />
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400">No availability set yet.</p>
            )}
          </div>
        </div>
      </div>
      )}
    </DashboardShell>
  );
}

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label?: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-[#112250] mt-0.5 shrink-0">
        {icon}
      </span>

      <div>
        {label && (
          <p className="text-xs text-gray-400 mb-0.5">
            {label}
          </p>
        )}

        <p className="text-sm text-gray-700">
          {value}
        </p>
      </div>
    </div>
  );
}