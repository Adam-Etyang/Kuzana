"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Search,
  Users,
  FileText,
  DoorOpen,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useProfile } from "@/lib/use-profile";

export default function StudentSidebar() {
  const pathname = usePathname();
  const { data: session } = authClient.useSession();
  const { profile } = useProfile(session?.user?.id);

  const studentName = profile
    ? `${profile.firstName} ${profile.lastName}`
    : (session?.user?.name ?? "Student");
  const course = profile?.department ?? "—";

  const links = [
    {
      href: "/student/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/student/discover",
      label: "Discover",
      icon: Search,
    },
    {
      href: "/student/matches",
      label: "Matches",
      icon: Users,
    },
    {
      href: "/student/requests",
      label: "Requests",
      icon: FileText,
    },
    {
  href: "/student/profile",
  label: "Profile",
  icon: Users,
},
{
      href: "/student/logout",
      label: "Log out",
      icon: DoorOpen,
    }
  ];

  return (
    <div className="h-full flex flex-col p-6">
      <div>
        <h1 className="text-3xl font-bold text-[#E0C58F]">
          KUZANA
        </h1>

        <p className="text-gray-300 text-sm mt-2">
          Student Portal
        </p>
      </div>

      <nav className="mt-12 space-y-3">
        {links.map((link) => {
          const Icon = link.icon as any;

          const active =
            pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition ${
                active
                  ? "bg-[#E0C58F] text-[#112250]"
                  : "text-white hover:bg-[#1B3475]"
              }`}
            >
              {Icon && <Icon size={20} />}
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto bg-[#1B3475] rounded-xl p-4 text-white">
        <p className="font-semibold">
          {studentName}
        </p>

        <p className="text-sm text-gray-300">
          {course}
        </p>
      </div>
    </div>
  );
}