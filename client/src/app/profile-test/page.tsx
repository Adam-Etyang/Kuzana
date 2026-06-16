"use client";

import { useEffect, useState } from "react";

type ProfileResponse = {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  faculty: string;
  department: string;
  yearOfStudy: number | null;
  goalStatement: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export default function ProfileTestPage() {
  const [userId, setUserId] = useState("");
  const [profileId, setProfileId] = useState("");
  const [firstName, setFirstName] = useState("Test");
  const [lastName, setLastName] = useState("User");
  const [faculty, setFaculty] = useState("Engineering");
  const [department, setDepartment] = useState("Computer Science");
  const [goalStatement, setGoalStatement] = useState("Build something useful");
  const [yearOfStudy, setYearOfStudy] = useState("1");
  const [result, setResult] = useState<string>("");
  const [profile, setProfile] = useState<ProfileResponse | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/users/me`, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        setResult(JSON.stringify(data, null, 2));
      })
      .catch(() => undefined);
  }, []);

  async function request(path: string, init?: RequestInit) {
    setResult("Loading...");
    const response = await fetch(`${API_URL}${path}`, {
      ...init,
      credentials: "include",
      headers: {
        "content-type": "application/json",
        ...(init?.headers ?? {}),
      },
    });

    const body = await response.text();
    setResult(body);
    return response;
  }

  async function submitProfile() {
    await request("/profile/submit", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        yearOfStudy: Number(yearOfStudy),
        faculty,
        department,
        goalStatement,
        skills: [],
        interests: [],
        availability: [],
      }),
    });
  }

  async function updateProfile() {
    if (!profileId) return;
    await request(`/profile/update/${profileId}`, {
      method: "PUT",
      body: JSON.stringify({
        firstName,
        lastName,
        yearOfStudy: Number(yearOfStudy),
        faculty,
        department,
        goalStatement,
      }),
    });
  }

  async function getProfile() {
    if (!userId) return;
    const response = await request(`/profile/${userId}`);
    try {
      setProfile(JSON.parse(await response.text()));
    } catch {
      setProfile(null);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-10 text-zinc-100">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">Profile module test</p>
          <h1 className="mt-2 text-3xl font-semibold">Profile API playground</h1>
        </div>

        <section className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm">
            <span className="text-zinc-300">User Id</span>
            <input className="rounded-lg border border-white/10 bg-black/30 px-3 py-2" value={userId} onChange={(e) => setUserId(e.target.value)} />
          </label>
          <label className="grid gap-2 text-sm">
            <span className="text-zinc-300">Profile Id</span>
            <input className="rounded-lg border border-white/10 bg-black/30 px-3 py-2" value={profileId} onChange={(e) => setProfileId(e.target.value)} />
          </label>
          <label className="grid gap-2 text-sm">
            <span className="text-zinc-300">First name</span>
            <input className="rounded-lg border border-white/10 bg-black/30 px-3 py-2" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </label>
          <label className="grid gap-2 text-sm">
            <span className="text-zinc-300">Last name</span>
            <input className="rounded-lg border border-white/10 bg-black/30 px-3 py-2" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </label>
          <label className="grid gap-2 text-sm">
            <span className="text-zinc-300">Faculty</span>
            <input className="rounded-lg border border-white/10 bg-black/30 px-3 py-2" value={faculty} onChange={(e) => setFaculty(e.target.value)} />
          </label>
          <label className="grid gap-2 text-sm">
            <span className="text-zinc-300">Department</span>
            <input className="rounded-lg border border-white/10 bg-black/30 px-3 py-2" value={department} onChange={(e) => setDepartment(e.target.value)} />
          </label>
          <label className="grid gap-2 text-sm md:col-span-2">
            <span className="text-zinc-300">Goal statement</span>
            <input className="rounded-lg border border-white/10 bg-black/30 px-3 py-2" value={goalStatement} onChange={(e) => setGoalStatement(e.target.value)} />
          </label>
          <label className="grid gap-2 text-sm">
            <span className="text-zinc-300">Year of study</span>
            <input type="number" className="rounded-lg border border-white/10 bg-black/30 px-3 py-2" value={yearOfStudy} onChange={(e) => setYearOfStudy(e.target.value)} />
          </label>
        </section>

        <div className="flex flex-wrap gap-3">
          <button className="rounded-lg bg-white px-4 py-2 font-medium text-black" onClick={submitProfile}>Submit profile</button>
          <button className="rounded-lg border border-white/15 px-4 py-2 font-medium" onClick={updateProfile}>Update profile</button>
          <button className="rounded-lg border border-white/15 px-4 py-2 font-medium" onClick={getProfile}>Get profile</button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <pre className="min-h-48 overflow-auto rounded-xl border border-white/10 bg-black/40 p-4 text-xs text-zinc-300">{result || "No response yet"}</pre>
          <pre className="min-h-48 overflow-auto rounded-xl border border-white/10 bg-black/40 p-4 text-xs text-zinc-300">{profile ? JSON.stringify(profile, null, 2) : "Profile response will appear here"}</pre>
        </div>
      </div>
    </main>
  );
}
