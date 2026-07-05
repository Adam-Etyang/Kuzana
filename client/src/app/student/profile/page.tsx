"use client";

import DashboardShell from "@/components/layout/dashboardshell";
import StudentSidebar from "@/components/layout/studentsidebar";
// Swap StudentSidebar for MentorSidebar when reusing for mentor dashboard
// Fallback local LogoutButton — original import was missing in the project

import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Target,
  Star,
  Pencil,
  GraduationCap,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Static placeholder — replace with real data fetched from your API / context
// ---------------------------------------------------------------------------
const profile = {
  name: "Diane Heathcote",
  role: "Student",                    // "Student" | "Mentor" — drives label copy
  email: "diane@students.strathmore.edu",
  phone: "+254 712 345 678",
  location: "Nairobi, Kenya",
  institution: "Strathmore University",
  course: "Computer Science",
  year: "Year 3",
  bio: "Third-year CS student passionate about building products that solve real problems in East Africa. Currently working on Kuzana, a mentor-matching platform for university students.",
  goals: ["Land a software engineering internship", "Improve system design skills", "Build in public"],
  skills: ["React", "TypeScript", "NestJS", "Python", "PostgreSQL"],
  avatarInitials: "DH",
};
// ---------------------------------------------------------------------------

export default function StudentProfilePage() {
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
         
          <Link
            href="/student/profileedit"
            className="flex items-center gap-2 bg-[#112250] hover:bg-[#1B3475] text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            <Pencil className="w-4 h-4" />
            Edit profile
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {/* LEFT COLUMN — identity card */}
        <div className="md:col-span-1 space-y-4">

          {/* Avatar + name */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#112250] flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-[#E0C58F]">
                {profile.avatarInitials}
              </span>
            </div>
            <h2 className="text-lg font-semibold text-[#112250]">
              {profile.name}
            </h2>
            <span className="mt-1 inline-block px-3 py-0.5 rounded-full bg-[#F5F0E9] text-[#112250] text-xs font-medium">
              {profile.role}
            </span>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Contact details */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-3">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
              Contact
            </h3>
            <DetailRow icon={<Mail className="w-4 h-4" />} value={profile.email} />
            <DetailRow icon={<Phone className="w-4 h-4" />} value={profile.phone} />
            <DetailRow icon={<MapPin className="w-4 h-4" />} value={profile.location} />
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
                label="Institution"
                value={profile.institution}
              />
              <DetailRow
                icon={<BookOpen className="w-4 h-4" />}
                label="Course"
                value={profile.course}
              />
              <DetailRow
                icon={<User className="w-4 h-4" />}
                label="Year"
                value={profile.year}
              />
            </div>
          </div>

          {/* Goals */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Mentorship goals
            </h3>
            <ul className="space-y-2">
              {profile.goals.map((goal) => (
                <li key={goal} className="flex items-start gap-2 text-sm text-gray-600">
                  <Target className="w-4 h-4 text-[#E0C58F] mt-0.5 shrink-0" />
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-[#F5F0E9] text-[#112250] text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
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