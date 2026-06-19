"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"Mentee" | "Mentor">("Mentee");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    if (mode === "signup") {
      const { error: signUpError } = await authClient.signUp.email({
        email,
        password,
        name,
        role, // only relevant here
        callbackURL: "/",
      });
      if (signUpError) {
        setError(signUpError.message ?? "Signup failed");
      } else {
        setMessage("Check your email to verify your account.");
      }
    } else {
      // role is never read or sent during login
      const { error: signInError } = await authClient.signIn.email({
        email,
        password,
        rememberMe: true,
        callbackURL: "/",
      });
      if (signInError) {
        setError(signInError.message ?? "Login failed");
      } else {
        setMessage("Login successful.");
        router.push("/");
      }
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-12 text-zinc-100">
      <div className="mx-auto flex w-full max-w-md flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Auth check</p>
          <h1 className="text-3xl font-semibold">Login / Signup</h1>
          <p className="text-sm text-zinc-400">Use this to verify the client and backend are talking.</p>
        </div>

        <div className="grid grid-cols-2 rounded-lg border border-white/10 bg-black/20 p-1 text-sm">
          <button
            type="button"
            onClick={() => setMode("login")}
            className={`rounded-md px-3 py-2 transition ${mode === "login" ? "bg-white text-black" : "text-zinc-300"}`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setMode("signup")}
            className={`rounded-md px-3 py-2 transition ${mode === "signup" ? "bg-white text-black" : "text-zinc-300"}`}
          >
            Signup
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {mode === "signup" && (
            <>
              <label className="block space-y-2 text-sm">
                <span className="text-zinc-300">Name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none placeholder:text-zinc-600 focus:border-white/30"
                  placeholder="Ada Lovelace"
                />
              </label>

              <label className="block space-y-2 text-sm">
                <span className="text-zinc-300">Role</span>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as "Mentee" | "Mentor")}
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none focus:border-white/30"
                >
                  <option value="Mentee">Mentee</option>
                  <option value="Mentor">Mentor</option>
                </select>
              </label>
            </>
          )}

          <label className="block space-y-2 text-sm">
            <span className="text-zinc-300">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none placeholder:text-zinc-600 focus:border-white/30"
              placeholder="you@example.com"
            />
          </label>

          <label className="block space-y-2 text-sm">
            <span className="text-zinc-300">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none placeholder:text-zinc-600 focus:border-white/30"
              placeholder="••••••••"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-white px-4 py-2 font-medium text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Working..." : mode === "signup" ? "Create account" : "Sign in"}
          </button>
        </form>

        {message && <p className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300">{message}</p>}
        {error && <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">{error}</p>}
      </div>
    </main>
  );
}
