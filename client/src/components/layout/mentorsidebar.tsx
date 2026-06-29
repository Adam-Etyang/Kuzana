"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DoorOpen,
  FileText,
  LayoutDashboard,
  Users,
} from "lucide-react";

export default function MentorSidebar() {
  const pathname = usePathname();

  const links = [
    {
      href: "/mentor/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/mentor/mentees",
      label: "My Mentees",
      icon: Users,
    },
    {
      href: "/mentor/requests",
      label: "Requests",
      icon: FileText,
    },
    {
      href: "/mentor/profile",      label: "Profile",
      icon: Users,
    },
    {
      href: "/mentor/logout",
      label: "Log out",
      icon: DoorOpen,
    },
  ];

  return (
    <div className="h-full flex flex-col p-6">
      <h1 className="text-3xl font-bold text-[#E0C58F]">
        KUZANA
      </h1>

      <p className="text-gray-300 text-sm">
        Mentor Portal
      </p>

      <nav className="space-y-3 mt-12">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl ${
                pathname === link.href
                  ? "bg-[#E0C58F] text-[#112250]"
                  : "text-white hover:bg-[#1B3475]"
              }`}
            >
              <Icon size={20} />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}