"use client";

import DashboardShell from "@/components/layout/dashboardshell";
import StudentSidebar from "@/components/layout/studentsidebar";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";
import { Briefcase, Building2, CheckCircle, Star, Loader2, AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useProfile } from "@/lib/use-profile";

export default function MentorProfilePage() {
  const params = useParams();
  const mentorId = params?.id as string | undefined;
  const { profile, loading, error } = useProfile(mentorId);

  if (loading) {
    return (
      <DashboardShell sidebar={<StudentSidebar />}>
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-[#112250]" />
        </div>
      </DashboardShell>
    );
  }

  if (error || !profile) {
    return (
      <DashboardShell sidebar={<StudentSidebar />}>
        <div className="flex items-start gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{error || "Mentor profile not found."}</span>
        </div>
        <Link
          href="/student/discover"
          className="mt-4 inline-flex items-center gap-1 text-sm text-[#112250] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to discover
        </Link>
      </DashboardShell>
    );
  }

  const fullName = `${profile.firstName} ${profile.lastName}`;
  const initials = `${profile.firstName[0] ?? ""}${profile.lastName[0] ?? ""}`;
  const skills = profile.skills.map((s) => s.skill.name);
  const interests = profile.interests.map((i) => i.interest.name);

  return (
    <DashboardShell sidebar={<StudentSidebar />}>
      
      <Link
        href="/student/discover"
        className="text-sm text-gray-400 hover:text-[#112250] transition flex items-center gap-1 mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Back to discover
      </Link>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-10">

        {/* HERO SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10">

          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-[#112250] text-[#E0C58F]
                          flex items-center justify-center text-3xl font-bold shadow-md">
            {initials}
          </div>

          {/* Identity */}
          <div className="flex-1">
            
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-3xl font-bold text-[#112250]">
                {fullName}
              </h1>

              <div className="flex items-center gap-1 text-xs text-[#E0C58F]">
                <Star className="w-3.5 h-3.5 fill-[#E0C58F]" />
                Verified Mentor
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600 mt-1">
              <Briefcase className="w-4 h-4 text-gray-400" />
              <p>{profile.department}</p>
            </div>

            <div className="flex items-center gap-2 text-gray-500 mt-1">
              <Building2 className="w-4 h-4" />
              <p>{profile.faculty}</p>
            </div>

            {profile.isAvailable && (
              <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" />
                Available for mentorship
              </p>
            )}
          </div>

          {/* CTA */}
          <div className="w-full sm:w-auto">
            <Link href={`/student/requestmentorship/${mentorId}`}>
              <Button className="w-full sm:w-auto bg-[#112250] hover:bg-[#1B3475] text-white transition">
                Request Mentorship
              </Button>
            </Link>
          </div>
        </div>

        {/* TAGS */}
        {(skills.length > 0 || interests.length > 0) && (
          <div className="flex flex-wrap gap-2 mb-10">
            {skills.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
            {interests.map((i) => (
              <Badge key={i}>{i}</Badge>
            ))}
          </div>
        )}

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* MAIN CONTENT */}
          <div className="md:col-span-2 space-y-8">

            {/* ABOUT */}
            <div>
              <h2 className="font-semibold text-lg text-[#112250] mb-3">
                About
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {profile.bio || profile.goalStatement || "No bio available."}
              </p>
            </div>

            {/* AVAILABILITY */}
            {profile.availability.length > 0 && (
              <div>
                <h2 className="font-semibold text-lg text-[#112250] mb-3">
                  Availability
                </h2>

                <ul className="space-y-2 text-gray-600">
                  {profile.availability.map((slot) => (
                    <li key={slot.id}>
                      • {slot.dayOfWeek}: {slot.startTime} – {slot.endTime}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* SIDE INFO PANEL */}
          <div className="bg-[#F5F0E9] rounded-xl p-5 h-fit border border-[#E0C58F]/40">

            <h3 className="font-semibold text-[#112250] mb-4">
              Mentor Snapshot
            </h3>

            <div className="space-y-3 text-sm text-gray-700">

              <div>
                <p className="text-gray-500 text-xs">Department</p>
                <p className="font-medium">{profile.department}</p>
              </div>

              <div>
                <p className="text-gray-500 text-xs">Faculty</p>
                <p className="font-medium">{profile.faculty}</p>
              </div>

              <div>
                <p className="text-gray-500 text-xs">Max Mentees</p>
                <p className="font-medium">{profile.maxMentees ?? "—"}</p>
              </div>

              <div>
                <p className="text-gray-500 text-xs">Current Mentees</p>
                <p className="font-medium">{profile.currentMentees ?? 0}</p>
              </div>

            </div>

            <div className="mt-6">
              <Link href={`/student/requestmentorship/${mentorId}`}>
              <Button className="w-full sm:w-auto bg-[#112250] hover:bg-[#1B3475] text-white transition">
                Request Mentorship
              </Button>
            </Link>
            </div>
          </div>

        </div>

      </div>
    </DashboardShell>
  );
}
