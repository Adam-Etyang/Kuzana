"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  LogOut,
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();

  const links = [
    {
      href: "/admin/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/admin/verify",
      label: "Verify Mentors",
      icon: Users,
    },
    {
      href: "/admin/pairs",
      label: "Mentorship Pairs",
      icon: Users,
    },
    {
      href: "/admin/reports",
      label: "Reports",
      icon: LayoutDashboard,
    },
    {
      href: "/admin/users",
      label: "Users",
      icon: Users,
    },
    {
      href: "/admin/profile",
      label: "Profile",
      icon: Users,
    },
    {
      href: "/admin/logout",
      label: "Logout",
      icon: LogOut,
    },
  ];

  return (
    <div className="h-full flex flex-col p-6">
      {/* Logo */}
      <div>
        <h1 className="text-3xl font-bold text-[#E0C58F]">
          KUZANA
        </h1>

        <p className="text-gray-300 text-sm mt-2">
          Admin Portal
        </p>
      </div>

      {/* Navigation */}
      <nav className="mt-12 space-y-3">
        {links.map((link) => {
          const Icon = link.icon;

          const active =
            pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                active
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