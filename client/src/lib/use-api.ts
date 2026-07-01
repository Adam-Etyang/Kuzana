"use client";

import { useEffect, useState } from "react";

const API_BASE = "http://localhost:3001";

export interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  mutate: () => Promise<void>;
}

export function useApi<T>(endpoint: string | null): ApiState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(endpoint !== null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!endpoint) return;
    let cancelled = false;
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${API_BASE}${endpoint}`, {
          credentials: "include",
          signal: controller.signal,
        });
        if (cancelled) return;
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        const json = (await res.json()) as T;
        if (!cancelled) setData(json);
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
  }, [endpoint]);

  const mutate = async () => {
    if (!endpoint) return;
    try {
      const res = await fetch(`${API_BASE}${endpoint}`, {
        credentials: "include",
      });
      if (res.ok) {
        const json = (await res.json()) as T;
        setData(json);
      }
    } catch {
      // refetch errors are silent; the original data/error stays
    }
  };

  return { data, loading, error, mutate };
}
