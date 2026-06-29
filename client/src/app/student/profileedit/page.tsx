"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardShell from "@/components/layout/dashboardshell";
import StudentSidebar from "@/components/layout/studentsidebar";
import { ArrowLeft, Save, Plus, X, Loader2, AlertCircle } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useProfile } from "@/lib/use-profile";

const API_BASE = "http://localhost:3001";

export default function EditProfilePage() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const { profile, loading } = useProfile(session?.user?.id);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    faculty: "",
    department: "",
    yearOfStudy: 1,
    goalStatement: "",
    bio: "",
    skills: [] as string[],
  });
  const [newSkill, setNewSkill] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (profile) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setForm({
        firstName: profile.firstName,
        lastName: profile.lastName,
        faculty: profile.faculty,
        department: profile.department,
        yearOfStudy: profile.yearOfStudy ?? 1,
        goalStatement: profile.goalStatement,
        bio: profile.bio ?? "",
        skills: profile.skills.map((s) => s.skill.name),
      });
    }
  }, [profile]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const val = e.target.name === "yearOfStudy" ? Number(e.target.value) : e.target.value;
    setForm((prev) => ({ ...prev, [e.target.name]: val }));
  };

  const addSkill = () => {
    const trimmed = newSkill.trim();
    if (!trimmed || form.skills.includes(trimmed)) return;
    setForm((prev) => ({ ...prev, skills: [...prev.skills, trimmed] }));
    setNewSkill("");
  };
  const removeSkill = (skill: string) =>
    setForm((prev) => ({ ...prev, skills: prev.skills.filter((s) => s !== skill) }));

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/profile/update/${session?.user?.id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          faculty: form.faculty,
          department: form.department,
          yearOfStudy: form.yearOfStudy,
          goalStatement: form.goalStatement,
          skills: form.skills,
        }),
      });
      if (!res.ok) throw new Error(`Failed to save (${res.status})`);
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        router.push("/student/profile");
      }, 1200);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save profile");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <DashboardShell sidebar={<StudentSidebar />}>
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-[#112250]" />
        </div>
      </DashboardShell>
    );
  }

  return (
    <DashboardShell sidebar={<StudentSidebar />}>

      {/* PAGE HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-lg border border-gray-200 text-gray-400 hover:text-[#112250] hover:bg-gray-50 transition"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-[#112250]">Edit Profile</h1>
            <p className="text-sm text-gray-500 mt-0.5">
              Changes are visible to mentors after saving.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving || saved}
            className="flex items-center gap-2 bg-[#112250] hover:bg-[#1B3475] disabled:opacity-60 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            <Save className="w-4 h-4" />
            {saved ? "Saved!" : saving ? "Saving…" : "Save changes"}
          </button>
        </div>
      </div>

      {error && (
        <div className="flex items-start gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 mb-6">
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">

        {/* LEFT — personal info */}
        <div className="md:col-span-1 space-y-4">
          <Section title="Personal information">

            <Field label="First name">
              <Input name="firstName" value={form.firstName} onChange={handleChange} />
            </Field>

            <Field label="Last name">
              <Input name="lastName" value={form.lastName} onChange={handleChange} />
            </Field>

            <Field label="Email address">
              <Input name="email" type="email" value={session?.user?.email ?? ""} onChange={() => {}} />
            </Field>
          </Section>
        </div>

        {/* RIGHT — academic + bio + skills */}
        <div className="md:col-span-2 space-y-4">

          <Section title="Academic background">
            <Field label="Faculty">
              <Input name="faculty" value={form.faculty} onChange={handleChange} />
            </Field>
            <Field label="Department">
              <Input name="department" value={form.department} onChange={handleChange} />
            </Field>
            <Field label="Year of study">
              <select
                name="yearOfStudy"
                value={form.yearOfStudy}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#112250]/20 focus:border-[#112250] transition"
              >
                {[1, 2, 3, 4, 5].map((y) => (
                  <option key={y} value={y}>
                    Year {y}
                  </option>
                ))}
                <option value={6}>Postgraduate</option>
              </select>
            </Field>
          </Section>

          <Section title="Goal statement">
            <textarea
              name="goalStatement"
              value={form.goalStatement}
              onChange={handleChange}
              rows={4}
              placeholder="Tell mentors about your goals…"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-[#112250]/20 focus:border-[#112250] transition"
            />
            <p className="text-xs text-gray-400 mt-1 text-right">
              {form.goalStatement.length} / 300 characters
            </p>
          </Section>

          <Section title="Bio (optional)">
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              rows={3}
              placeholder="Tell mentors a bit about yourself…"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-[#112250]/20 focus:border-[#112250] transition"
            />
          </Section>

          <Section title="Skills">
            <div className="flex flex-wrap gap-2 mb-3">
              {form.skills.map((skill) => (
                <span
                  key={skill}
                  className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#F5F0E9] text-[#112250] text-xs font-medium"
                >
                  {skill}
                  <button
                    onClick={() => removeSkill(skill)}
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                placeholder="Add a skill…"
                className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#112250]/20 focus:border-[#112250] transition"
              />
              <button
                onClick={addSkill}
                className="flex items-center gap-1 px-3 py-2 bg-[#112250] text-white rounded-lg text-sm hover:bg-[#1B3475] transition"
              >
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
          </Section>
        </div>
      </div>
    </DashboardShell>
  );
}

// ---------------------------------------------------------------------------
// Local sub-components
// ---------------------------------------------------------------------------

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-4">
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-medium text-gray-600">{label}</label>
      {children}
    </div>
  );
}

function Input({
  name,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#112250]/20 focus:border-[#112250] transition"
    />
  );
}
