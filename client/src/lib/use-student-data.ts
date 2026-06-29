"use client";

import { useApi } from "./use-api";

// ── Types ──────────────────────────────────────────────────────────────

export interface MentorProfileSummary {
  id: string;
  firstName: string;
  lastName: string;
  faculty: string;
  department: string;
  bio: string | null;
  skills: { skill: { id: string; name: string } }[];
  interests: { interest: { id: string; name: string } }[];
  availability: { id: string; dayOfWeek: string; startTime: string; endTime: string }[];
}

export interface MentorWithProfile {
  id: string;
  name: string | null;
  email: string;
  image: string | null;
  profile: MentorProfileSummary | null;
}

// ── Hooks ──────────────────────────────────────────────────────────────

export function useMentors() {
  return useApi<MentorWithProfile[]>("/users/mentors");
}

export interface MatchData {
  id: string;
  menteeId: string;
  mentorId: string;
  status: string;
  matchedAt: string;
  compatibilityScore: number | null;
  mentee: {
    id: string;
    name: string | null;
    email: string;
    profile: {
      firstName: string;
      lastName: string;
      faculty: string;
      department: string;
      yearOfStudy: number | null;
      bio: string | null;
      skills: { skill: { id: string; name: string } }[];
      interests: { interest: { id: string; name: string } }[];
    } | null;
  };
  mentor: {
    id: string;
    name: string | null;
    email: string;
    profile: {
      firstName: string;
      lastName: string;
      faculty: string;
      department: string;
      bio: string | null;
      skills: { skill: { id: string; name: string } }[];
      interests: { interest: { id: string; name: string } }[];
      availability: { id: string; dayOfWeek: string; startTime: string; endTime: string }[];
    } | null;
  };
}

export function useMatches() {
  return useApi<MatchData[]>("/matching/matches");
}

export interface RecommendationData {
  mentor: MentorWithProfile;
  compatibilityScore: number | null;
  skillScore?: number;
  interestScore?: number;
  goalScore?: number;
}

export function useRecommendations() {
  return useApi<RecommendationData[]>("/matching/recommendations");
}

// ── Request types ──────────────────────────────────────────────────────

export interface RequestData {
  id: string;
  menteeId: string;
  mentorId: string;
  status: "PENDING" | "ACCEPTED" | "DECLINED";
  message: string | null;
  createdAt: string;
  updatedAt: string;
  mentee: {
    id: string;
    name: string | null;
    email: string;
    profile: {
      firstName: string;
      lastName: string;
      faculty: string;
      department: string;
      yearOfStudy: number | null;
      bio: string | null;
    } | null;
  };
  mentor: {
    id: string;
    name: string | null;
    email: string;
    profile: {
      firstName: string;
      lastName: string;
      faculty: string;
      department: string;
      bio: string | null;
    } | null;
  };
}

export function useRequests(role: "MENTEE" | "MENTOR" = "MENTEE") {
  return useApi<RequestData[]>(`/requests?role=${role}`);
}

export function useRequest(id: string | undefined) {
  return useApi<RequestData>(id ? `/requests/${id}` : null);
}

export interface RequestCounts {
  pending: number;
  accepted: number;
  declined: number;
  total: number;
}

export function useRequestCounts(role: "MENTEE" | "MENTOR" = "MENTEE") {
  return useApi<RequestCounts>(`/requests/counts?role=${role}`);
}
