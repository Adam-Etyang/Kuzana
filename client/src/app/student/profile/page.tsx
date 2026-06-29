"use client";

import DashboardShell from "@/components/layout/dashboardshell";
import StudentSidebar from "@/components/layout/studentsidebar";
import LogoutButton from "../logout/page";
import Link from "next/link";
import {
  User,
  Mail,
  BookOpen,
  Target,
  Pencil,
  GraduationCap,
  Loader2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useProfile } from "@/lib/use-profile";

export default function StudentProfilePage() {
  const { data: session, isPending: sessionLoading } = authClient.useSession();
  const { profile, loading: profileLoading, error: profileError } = useProfile(session?.user?.id);

  const isLoading = sessionLoading || profileLoading;
  const name = profile ? `${profile.firstName} ${profile.lastName}` : session?.user?.name ?? "—";
  const email = session?.user?.email ?? "—";
  const initials = profile
    ? `${profile.firstName[0] ?? ""}${profile.lastName[0] ?? ""}`
    : (session?.user?.name?.split(" ").map((n) => n[0]).join("").slice(0, 2) ?? "S");
  const bio = profile?.goalStatement ?? "No goal statement set yet. Complete your profile to add one.";
  const skills = profile?.skills.map((s) => s.skill.name) ?? [];
  const goals = profile ? [profile.goalStatement].filter(Boolean) : [];

  return (
    <DashboardShell sidebar={<StudentSidebar />}>

      {/* PAGE HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#112250]">My Profile</h1>
          <p className="text-sm text-gray-500 mt-1">
            How mentors see you on Kuzana.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <LogoutButton />
          <Link
            href="/student/profileedit"
            className="flex items-center gap-2 bg-[#112250] hover:bg-[#1B3475] text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            <Pencil className="w-4 h-4" />
            Edit profile
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
            You haven&apos;t set up your profile yet.
          </p>
          <Link
            href="/student/onboarding"
            className="inline-flex items-center gap-2 bg-[#112250] hover:bg-[#1B3475] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition"
          >
            Complete your profile
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
      <div className="grid md:grid-cols-3 gap-6">

        {/* LEFT COLUMN — identity card */}
        <div className="md:col-span-1 space-y-4">

          {/* Avatar + name */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#112250] flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-[#E0C58F]">
                {initials}
              </span>
            </div>
            <h2 className="text-lg font-semibold text-[#112250]">
              {name}
            </h2>
            <span className="mt-1 inline-block px-3 py-0.5 rounded-full bg-[#F5F0E9] text-[#112250] text-xs font-medium">
              Student
            </span>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              {bio}
            </p>
          </div>

          {/* Contact details */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-3">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
              Contact
            </h3>
            <DetailRow icon={<Mail className="w-4 h-4" />} value={email} />
          </div>
        </div>

        {/* RIGHT COLUMN — academic + goals */}
        <div className="md:col-span-2 space-y-4">

          {/* Academic info */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Academic background
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <DetailRow
                icon={<GraduationCap className="w-4 h-4" />}
                label="Faculty"
                value={profile.faculty}
              />
              <DetailRow
                icon={<BookOpen className="w-4 h-4" />}
                label="Department"
                value={profile.department}
              />
              <DetailRow
                icon={<User className="w-4 h-4" />}
                label="Year of Study"
                value={profile.yearOfStudy ? `Year ${profile.yearOfStudy}` : "—"}
              />
            </div>
          </div>

          {/* Goals */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Mentorship goals
            </h3>
            {goals.length > 0 ? (
              <ul className="space-y-2">
                {goals.map((goal) => (
                  <li key={goal} className="flex items-start gap-2 text-sm text-gray-600">
                    <Target className="w-4 h-4 text-[#E0C58F] mt-0.5 shrink-0" />
                    {goal}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-400">No goals set yet.</p>
            )}
          </div>

          {/* Skills */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Skills
            </h3>
            {skills.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-[#F5F0E9] text-[#112250] text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400">No skills added yet.</p>
            )}
          </div>
        </div>
      </div>
      )}
    </DashboardShell>
  );
}

// ---------------------------------------------------------------------------
// Sub-component — reusable label/value row
// ---------------------------------------------------------------------------
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
      <span className="text-[#112250] mt-0.5 shrink-0">{icon}</span>
      <div>
        {label && (
          <p className="text-xs text-gray-400 mb-0.5">{label}</p>
        )}
        <p className="text-sm text-gray-700">{value}</p>
      </div>
    </div>
  );
}