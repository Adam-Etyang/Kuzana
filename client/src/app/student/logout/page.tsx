"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

interface LogoutButtonProps {
  variant?: "icon" | "full";
  className?: string;
}

export default function LogoutButton({
  variant = "full",
  className = "",
}: LogoutButtonProps) {
  const router = useRouter();

  const handleLogout = () => {
    // Clear auth tokens / session here before redirecting
    // e.g. localStorage.removeItem("token") or signOut()
    router.push("/");
  };

  if (variant === "icon") {
    return (
      <button
        onClick={handleLogout}
        title="Log out"
        className={`p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition ${className}`}
      >
        <LogOut className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      onClick={handleLogout}
      className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-red-500 hover:bg-red-50 transition ${className}`}
    >
      <LogOut className="w-4 h-4" />
      Log out
    </button>
  );
}