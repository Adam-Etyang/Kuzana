"use client";

import DashboardShell from "@/components/layout/dashboardshell";
import MentorSidebar from "@/components/layout/mentorsidebar";
import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Building,
  Clock,
  Calendar,
  Star,
  Pencil,
  Award,
} from "lucide-react";

function LogoutButton() {
  return (
    <button
      type="button"
      className="bg-white border border-gray-200 text-[#112250] px-3 py-1 rounded-lg text-sm font-medium"
      onClick={() => console.log("logout")}
    >
      Logout
    </button>
  );
}

const profile = {
  name: "James Otieno",
  role: "Senior Product Manager",
  company: "Safaricom PLC",
  email: "james@safaricom.co.ke",
  phone: "+254 712 345 678",
  location: "Nairobi, Kenya",

  bio:
    "Experienced product leader passionate about helping university students navigate careers in technology and product management.",

  expertise: [
    "Product Management",
    "Leadership",
    "Career Growth",
    "Agile",
    "UX Strategy",
  ],

  experience: "8 years",

  availability: [
    "Monday",
    "Wednesday",
    "Friday",
  ],

  preferredTime: "Evenings (6PM - 9PM)",

  mentorshipAreas: [
    "Career Guidance",
    "Internship Preparation",
    "CV Reviews",
    "Mock Interviews",
  ],

  avatarInitials: "JO",
};

export default function MentorProfilePage() {
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
            href="/mentor/profile/edit"
            className="flex items-center gap-2 bg-[#112250] hover:bg-[#1B3475] text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            <Pencil className="w-4 h-4" />
            Edit Profile
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* LEFT COLUMN */}
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#112250] flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-[#E0C58F]">
                {profile.avatarInitials}
              </span>
            </div>

            <h2 className="text-lg font-semibold text-[#112250]">
              {profile.name}
            </h2>

            <p className="text-sm text-gray-500">
              {profile.role}
            </p>

            <span className="mt-2 inline-block px-3 py-1 rounded-full bg-[#F5F0E9] text-[#112250] text-xs font-medium">
              Mentor
            </span>

            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              {profile.bio}
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-3">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Contact
            </h3>

            <DetailRow
              icon={<Mail className="w-4 h-4" />}
              value={profile.email}
            />

            <DetailRow
              icon={<Phone className="w-4 h-4" />}
              value={profile.phone}
            />

            <DetailRow
              icon={<MapPin className="w-4 h-4" />}
              value={profile.location}
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
                label="Organization"
                value={profile.company}
              />

              <DetailRow
                icon={<Briefcase className="w-4 h-4" />}
                label="Role"
                value={profile.role}
              />

              <DetailRow
                icon={<Award className="w-4 h-4" />}
                label="Experience"
                value={profile.experience}
              />
            </div>
          </div>

          {/* EXPERTISE */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Areas of Expertise
            </h3>

            <div className="flex flex-wrap gap-2">
              {profile.expertise.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-[#F5F0E9] text-[#112250] text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* MENTORSHIP */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Mentorship Areas
            </h3>

            <ul className="space-y-2">
              {profile.mentorshipAreas.map((goal) => (
                <li
                  key={goal}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <Star className="w-4 h-4 text-[#E0C58F] mt-0.5" />
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          {/* AVAILABILITY */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Availability
            </h3>

            <DetailRow
              icon={<Calendar className="w-4 h-4" />}
              label="Available Days"
              value={profile.availability.join(", ")}
            />

            <div className="mt-4">
              <DetailRow
                icon={<Clock className="w-4 h-4" />}
                label="Preferred Time"
                value={profile.preferredTime}
              />
            </div>
          </div>
        </div>
      </div>
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