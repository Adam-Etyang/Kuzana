import React from "react";

interface DashboardShellProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export default function DashboardShell({
  sidebar,
  children,
}: DashboardShellProps) {
  return (
    <div className="min-h-screen flex bg-[#F5F0E9]">
      <aside className="w-72 bg-[#112250] shadow-2xl">
        {sidebar}
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}