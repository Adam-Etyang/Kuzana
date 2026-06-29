"use client";

import { useEffect, useState } from "react";

const API_BASE = "http://localhost:3001";

export interface ProfileData {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  yearOfStudy: number | null;
  faculty: string;
  department: string;
  goalStatement: string;
  bio: string | null;
  maxMentees: number | null;
  currentMentees: number | null;
  isAvailable: boolean | null;
  skills: { profileId: string; skillId: string; skill: { id: string; name: string } }[];
  interests: { profileId: string; interestId: string; interest: { id: string; name: string } }[];
  availability: { id: string; profileId: string; dayOfWeek: string; startTime: string; endTime: string }[];
  user: { id: string; name: string; email: string; role: string; image: string | null };
}

export function useProfile(userId: string | undefined) {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;
    let cancelled = false;
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${API_BASE}/profile/${userId}`, {
          credentials: "include",
          signal: controller.signal,
        });
        if (cancelled) return;
        if (res.status === 404) {
          setProfile(null);
          return;
        }
        if (!res.ok) throw new Error(`Failed to fetch profile (${res.status})`);
        const data = (await res.json()) as ProfileData;
        if (!cancelled) setProfile(data);
      } catch (err) {
        if (!cancelled && err instanceof Error && err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [userId]);

  return { profile, loading, error };
}
