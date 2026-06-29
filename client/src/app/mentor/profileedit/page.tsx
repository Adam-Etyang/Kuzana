"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DashboardShell from "@/components/layout/dashboardshell";
import MentorSidebar from "@/components/layout/mentorsidebar";
import { ArrowLeft, Save, Plus, X } from "lucide-react";

const initialData = {
  name: "James Otieno",
  email: "james@safaricom.com",
  phone: "+254 712 123 456",
  location: "Nairobi, Kenya",
  company: "Safaricom PLC",
  position: "Senior Product Manager",
  experience: "10+ years",
  bio: "Product leader passionate about mentoring young professionals entering technology and product management.",
  expertise: ["Product Management", "Leadership", "Career Growth"],
  availabilityDays: ["Monday", "Wednesday", "Saturday"],
  preferredHours: "Evenings (6PM - 9PM)",
};

export default function MentorEditProfilePage() {
  const router = useRouter();

  const [form, setForm] = useState(initialData);
  const [newExpertise, setNewExpertise] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const addExpertise = () => {
    const trimmed = newExpertise.trim();

    if (!trimmed || form.expertise.includes(trimmed)) return;

    setForm((prev) => ({
      ...prev,
      expertise: [...prev.expertise, trimmed],
    }));

    setNewExpertise("");
  };

  const removeExpertise = (item: string) => {
    setForm((prev) => ({
      ...prev,
      expertise: prev.expertise.filter((e) => e !== item),
    }));
  };

  const toggleDay = (day: string) => {
    if (form.availabilityDays.includes(day)) {
      setForm((prev) => ({
        ...prev,
        availabilityDays: prev.availabilityDays.filter(
          (d) => d !== day
        ),
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        availabilityDays: [...prev.availabilityDays, day],
      }));
    }
  };

  const handleSave = async () => {
    setSaving(true);

    await new Promise((r) => setTimeout(r, 800));

    setSaving(false);
    setSaved(true);

    setTimeout(() => {
      router.push("/mentor/profile");
    }, 1200);
  };

  return (
    <DashboardShell sidebar={<MentorSidebar />}>

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">

        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-lg border border-gray-200 text-gray-400 hover:text-[#112250] hover:bg-gray-50 transition"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div>
            <h1 className="text-2xl font-bold text-[#112250]">
              Edit Profile
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Update your mentor information.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-500 hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            disabled={saving || saved}
            className="flex items-center gap-2 bg-[#112250] hover:bg-[#1B3475] text-white px-4 py-2 rounded-lg text-sm font-medium"
          >
            <Save className="w-4 h-4" />
            {saved ? "Saved!" : saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {/* LEFT COLUMN */}
        <div className="space-y-4">

          <Section title="Personal Information">

            <Field label="Full Name">
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </Field>

            <Field label="Email Address">
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </Field>

            <Field label="Phone Number">
              <Input
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </Field>

            <Field label="Location">
              <Input
                name="location"
                value={form.location}
                onChange={handleChange}
              />
            </Field>

          </Section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-2 space-y-4">

          <Section title="Professional Information">

            <Field label="Organization">
              <Input
                name="company"
                value={form.company}
                onChange={handleChange}
              />
            </Field>

            <Field label="Position">
              <Input
                name="position"
                value={form.position}
                onChange={handleChange}
              />
            </Field>

            <Field label="Years of Experience">
              <select
                name="experience"
                value={form.experience}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
              >
                <option>0-2 years</option>
                <option>3-5 years</option>
                <option>6-10 years</option>
                <option>10+ years</option>
              </select>
            </Field>

          </Section>

          <Section title="Bio">
            <textarea
              rows={4}
              name="bio"
              value={form.bio}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none"
            />
          </Section>

          <Section title="Areas of Expertise">

            <div className="flex flex-wrap gap-2 mb-3">
              {form.expertise.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#F5F0E9] text-[#112250] text-xs font-medium"
                >
                  {item}

                  <button
                    onClick={() => removeExpertise(item)}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                value={newExpertise}
                onChange={(e) =>
                  setNewExpertise(e.target.value)
                }
                placeholder="Add expertise..."
                className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm"
              />

              <button
                onClick={addExpertise}
                className="flex items-center gap-1 bg-[#112250] text-white px-3 py-2 rounded-lg text-sm"
              >
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>

          </Section>

          <Section title="Days of Availability">

            <div className="flex flex-wrap gap-2">
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ].map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => toggleDay(day)}
                  className={`px-4 py-2 rounded-full text-sm transition ${
                    form.availabilityDays.includes(day)
                      ? "bg-[#112250] text-white"
                      : "bg-[#F5F0E9] text-[#112250]"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

          </Section>

          <Section title="Preferred Hours">

            <select
              name="preferredHours"
              value={form.preferredHours}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
            >
              <option>Morning (8AM - 12PM)</option>
              <option>Afternoon (12PM - 5PM)</option>
              <option>Evening (5PM - 9PM)</option>
              <option>Flexible</option>
            </select>

          </Section>

        </div>
      </div>

    </DashboardShell>
  );
}

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
      <label className="block text-xs font-medium text-gray-600">
        {label}
      </label>
      {children}
    </div>
  );
}

function Input({
  name,
  value,
  onChange,
  type = "text",
}: {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#112250]/20 focus:border-[#112250]"
    />
  );
}