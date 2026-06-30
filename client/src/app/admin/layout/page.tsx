"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    // TODO: replace with real auth check (JWT / session)
    const userRole = localStorage.getItem("role");

    if (userRole !== "admin") {
      router.push("/login");
    }
  }, []);

  return <>{children}</>;
}