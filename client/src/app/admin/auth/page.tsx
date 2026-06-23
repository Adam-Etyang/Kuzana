"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminAuthPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TEMP MOCK AUTH (replace with NestJS later)
    if (email && password) {
      localStorage.setItem("role", "admin");
      localStorage.setItem("token", "mock-token");

      router.push("/admin/dashboard");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F5F0E9]">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-[#112250] mb-6">
          Admin Access
        </h1>

        <input
          className="w-full border p-3 rounded mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border p-3 rounded mb-6"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-[#112250] text-white py-3 rounded">
          Login
        </button>
      </form>
    </main>
  );
}