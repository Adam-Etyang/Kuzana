"use client";

import { useState, useEffect, useMemo, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import {
  User,
  BookOpen,
  Target,
  Sparkles,
  Calendar,
  Handshake,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Check,
  Search,
  X,
  ChevronDown,
} from "lucide-react";

// ─── Tag Taxonomy ─────────────────────────────────────────────────────────────
// 💡 Extract this to lib/tag-taxonomy.ts and share with the mentor page
const TAG_TAXONOMY: Record<string, string[]> = {
  "Technology & Computing": [
    "Python", "Machine Learning", "Web Development", "Data Analysis",
    "Cloud Computing", "Cybersecurity", "Mobile Development", "UI/UX Design",
    "Database Systems", "DevOps", "Blockchain", "AI/NLP",
    "Software Engineering", "Computer Vision", "Embedded Systems",
  ],
  "Business & Entrepreneurship": [
    "Entrepreneurship", "Financial Modeling", "Marketing", "Strategy",
    "Business Analysis", "Product Management", "Consulting", "Operations",
    "Sales", "Accounting", "Supply Chain", "E-commerce",
  ],
  "Academic Skills": [
    "Research Methods", "Academic Writing", "Statistics", "Critical Thinking",
    "Literature Review", "Data Visualization", "Quantitative Analysis",
    "Qualitative Research", "Thesis Writing",
  ],
  "Creative & Design": [
    "Graphic Design", "Branding", "User Research", "Prototyping",
    "Motion Design", "Content Creation", "Photography", "Video Production",
  ],
  "Soft Skills": [
    "Leadership", "Public Speaking", "Networking", "Time Management",
    "Teamwork", "Negotiation", "Problem Solving", "Emotional Intelligence",
  ],
  "Sciences & Engineering": [
    "Biology", "Chemistry", "Physics", "Mathematics",
    "Biomedical Research", "Electrical Engineering",
    "Civil Engineering", "Environmental Science",
  ],
};

// ─── TagPicker ────────────────────────────────────────────────────────────────
// 💡 Extract to components/onboarding/TagPicker.tsx to share with the mentor page
interface TagPickerProps {
  selected: string[];
  onChange: (tags: string[]) => void;
  max?: number;
  searchPlaceholder?: string;
  filterCategories?: string[];
}

function TagPicker({
  selected,
  onChange,
  max = 5,
  searchPlaceholder = "Search tags…",
  filterCategories,
}: TagPickerProps) {
  const [query, setQuery] = useState("");
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  const taxonomy = filterCategories
    ? Object.fromEntries(
        Object.entries(TAG_TAXONOMY).filter(([cat]) => filterCategories.includes(cat))
      )
    : TAG_TAXONOMY;

  const visible = query.trim()
    ? Object.fromEntries(
        Object.entries(taxonomy)
          .map(([cat, tags]) => [cat, tags.filter((t) => t.toLowerCase().includes(query.toLowerCase()))])
          .filter(([, tags]) => (tags as string[]).length > 0)
      )
    : taxonomy;

  const toggle = (tag: string) => {
    if (selected.includes(tag)) {
      onChange(selected.filter((t) => t !== tag));
    } else if (selected.length < max) {
      onChange([...selected, tag]);
    }
  };

  const atMax = selected.length >= max;

  return (
    <div className="space-y-3">
      {/* Selected chips */}
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selected.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                text-xs font-medium bg-[#112250] text-[#E0C58F] border border-[#112250] shadow-sm shadow-[#112250]/20"
            >
              {tag}
              <button
                type="button"
                onClick={() => toggle(tag)}
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Counter */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">{selected.length} / {max} selected</span>
        {atMax && <span className="text-xs text-[#A67C2E] font-medium">Limit reached</span>}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={searchPlaceholder}
          className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-[#112250]/30 focus:border-[#112250] transition bg-white"
        />
      </div>

      {/* Accordion */}
      <div className="rounded-xl border border-gray-100 overflow-hidden max-h-56 overflow-y-auto">
        {Object.entries(visible).map(([cat, tags], index) => {
          const isOpen = query.trim() ? true : !!openCategories[cat];
          return (
            <div key={cat} className={index !== 0 ? "border-t border-gray-100" : ""}>
              <button
                type="button"
                onClick={() =>
                  !query.trim() &&
                  setOpenCategories((prev) => ({ ...prev, [cat]: !prev[cat] }))
                }
                className="w-full flex items-center justify-between px-3 py-2
                  bg-gray-50 hover:bg-gray-100 transition text-xs font-semibold
                  text-gray-500 uppercase tracking-wide"
              >
                {cat}
                {!query.trim() && (
                  <span className="text-gray-400 transition-transform duration-200" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </span>
                )}
              </button>
              {isOpen && (
                <div className="px-3 py-2.5 flex flex-wrap gap-1.5 bg-white">
                  {(tags as string[]).map((tag) => {
                    const isSelected = selected.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggle(tag)}
                        disabled={!isSelected && atMax}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium border transition active:scale-95
                          ${isSelected
                            ? "bg-[#E0C58F] text-[#112250] border-[#E0C58F]"
                            : atMax
                              ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
                              : "bg-white text-gray-600 border-gray-200 hover:border-[#112250] hover:text-[#112250] cursor-pointer"
                          }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
        {Object.keys(visible).length === 0 && (
          <div className="px-4 py-6 text-center text-sm text-gray-400">
            No tags match &ldquo;{query}&rdquo;
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Loading Overlay ──────────────────────────────────────────────────────────
const LOADING_MESSAGES = [
  "Looking at your skills and interests…",
  "Finding your most compatible mentors…",
  "Personalising your recommendations…",
  "Almost there…",
];

function LoadingOverlay() {
  const [msgIndex, setMsgIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let changeTimeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setVisible(false);
      changeTimeout = setTimeout(() => {
        setMsgIndex((i) => (i + 1) % LOADING_MESSAGES.length);
        setVisible(true);
      }, 350);
    }, 2000);
    return () => {
      clearInterval(interval);
      clearTimeout(changeTimeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-[#F5F0E9] flex flex-col items-center justify-center z-50">
      {/* Spinner */}
      <div className="relative w-20 h-20 mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-[#112250]/10" />
        <div
          className="absolute inset-0 rounded-full border-4 border-transparent animate-spin"
          style={{ borderTopColor: "#E0C58F" }}
        />
        <div className="absolute inset-2 rounded-full bg-[#112250] flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-[#E0C58F]" />
        </div>
      </div>

      <p className="text-xs font-semibold uppercase tracking-widest text-[#112250]/30 mb-6">
        Kuzana
      </p>

      {/* Cycling message */}
      <p
        className="text-[#112250] font-medium text-center text-sm max-w-xs"
        style={{
          transition: "opacity 0.3s ease, transform 0.3s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(6px)",
        }}
      >
        {LOADING_MESSAGES[msgIndex]}
      </p>

      {/* Progress dots */}
      <div className="flex gap-2 mt-6">
        {LOADING_MESSAGES.map((_, i) => (
          <div
            key={i}
            style={{
              transition: "all 0.3s ease",
              height: "6px",
              borderRadius: "3px",
              width: i === msgIndex ? "20px" : "6px",
              backgroundColor: i === msgIndex ? "#E0C58F" : "rgba(17, 34, 80, 0.15)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Ambient background ───────────────────────────────────────────────────────
// Soft sapphire/gold glow + a faint node grid, evoking the mentor-network the
// form is actually building toward. Kept very low-opacity so it reads as
// texture, not decoration competing with the card.
function BackgroundDecor() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute -top-32 -left-24 w-80 h-80 rounded-full bg-[#112250] opacity-[0.05] blur-3xl" />
      <div className="absolute top-1/4 -right-32 w-[26rem] h-[26rem] rounded-full bg-[#E0C58F] opacity-[0.08] blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-[#112250] opacity-[0.04] blur-3xl" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" aria-hidden="true">
        <defs>
          <pattern id="dotgrid-student" width="34" height="34" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" fill="#112250" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotgrid-student)" />
      </svg>
    </div>
  );
}

// ─── Profile Thread (progress) ────────────────────────────────────────────────
// A literal thread that fills as the profile fills in — the same connective
// motif used for mentor matches elsewhere in Kuzana, doing double duty here
// as real, functional progress feedback rather than decoration.
function ProfileThread({ percent }: { percent: number }) {
  return (
    <div className="mb-9">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#112250]/40">
          Profile thread
        </span>
        <span className="text-[11px] font-semibold text-[#112250]">{percent}% complete</span>
      </div>
      <div className="relative h-1.5 rounded-full bg-[#112250]/[0.08]">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#112250] to-[#E0C58F] transition-all duration-500 ease-out"
          style={{ width: `${Math.max(percent, 3)}%` }}
        />
        <div
          className="absolute top-1/2 w-3 h-3 rounded-full bg-[#E0C58F] border-2 border-[#F5F0E9] shadow-sm transition-all duration-500 ease-out"
          style={{ left: `calc(${Math.max(percent, 3)}% - 6px)`, transform: "translateY(-50%)" }}
        />
      </div>
    </div>
  );
}

// ─── Section Helper ────────────────────────────────────────────────────────────
function Section({
  index,
  icon,
  title,
  subtitle,
  children,
}: {
  index?: number;
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="flex items-start gap-3 mb-1">
        {icon && (
          <div className="w-9 h-9 rounded-xl bg-[#112250]/[0.06] flex items-center justify-center shrink-0">
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0 pt-0.5">
          {typeof index === "number" && (
            <p className="text-[10px] font-bold tracking-widest text-[#C9A961] uppercase mb-0.5">
              Step {String(index).padStart(2, "0")}
            </p>
          )}
          <h2 className="font-semibold text-[#112250] text-sm leading-tight">{title}</h2>
        </div>
      </div>
      {subtitle && <p className="text-xs text-gray-400 mb-3 ml-12">{subtitle}</p>}
      <div className="ml-12">{children}</div>
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />;
}

const inputClass =
  "w-full border border-gray-200 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none " +
  "focus:ring-2 focus:ring-[#112250]/20 focus:border-[#112250] transition bg-white text-gray-900 placeholder:text-gray-400";

const selectClass = inputClass + " appearance-none pr-10 cursor-pointer";

function FieldIcon({ children }: { children: ReactNode }) {
  return (
    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#112250]/35 pointer-events-none [&>svg]:w-4 [&>svg]:h-4">
      {children}
    </div>
  );
}

function SelectChevron() {
  return (
    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#112250]/35 pointer-events-none">
      <ChevronDown className="w-4 h-4" />
    </div>
  );
}

// ─── Constants ────────────────────────────────────────────────────────────────
const DEGREE_PROGRAMS = [
  "Computer Science", "Information Technology", "Software Engineering",
  "Data Science", "Business Administration", "Commerce", "Actuarial Science",
  "Economics", "Finance", "Communication", "Law",
  "Tourism Management", "Hospitality Management", "Other",
];

const MENTORSHIP_TYPES = [
  "Academic Support", "Career Guidance", "Technical Skills",
  "Industry Connections", "Research", "Entrepreneurship",
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function StudentOnboardingPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [program, setProgram] = useState("");
  const [year, setYear] = useState("");
  const [academicInterests, setAcademicInterests] = useState<string[]>([]);
  const [professionalInterests, setProfessionalInterests] = useState<string[]>([]);
  const [skillsToLearn, setSkillsToLearn] = useState<string[]>([]);
  const [mentorshipTypes, setMentorshipTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState("");

  const toggleMentorshipType = (type: string) =>
    setMentorshipTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );

  const percent = useMemo(() => {
    const signals = [
      fullName.trim() !== "",
      program !== "",
      year !== "",
      academicInterests.length > 0,
      professionalInterests.length > 0,
      mentorshipTypes.length > 0,
      bio.trim().length > 10,
    ];
    const filled = signals.filter(Boolean).length;
    return Math.round((filled / signals.length) * 100);
  }, [fullName, program, year, academicInterests, professionalInterests, skillsToLearn, mentorshipTypes, bio]);

  const canContinue = fullName.trim() !== "" && program !== "";

  const handleContinue = async () => {
    if (!canContinue) return;
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3001/profile/submit", {
        method: "POST",
        headers: { "content-type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          firstName: fullName.split(" ")[0] ?? fullName,
          lastName: fullName.split(" ").slice(1).join(" ") || "",
          yearOfStudy: year ? parseInt(year.replace(/\D/g, ""), 10) || 1 : 1,
 //         faculty: "ICS",//TODO:change this
          department: program,
          goalStatement: bio.trim(),
          skills: skillsToLearn,
          interests: academicInterests.concat(professionalInterests),
          availability: [],
          role: "MENTEE",
        }),
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => null);
        throw new Error(errBody?.message || `Failed to save profile (${res.status})`);
      }

      router.push("/student/dashboard");
    } catch (err) {
      setLoading(false);
      alert(err instanceof Error ? err.message : "Failed to save profile. Please try again.");
    }
  };

  if (loading) return <LoadingOverlay />;

  return (
    <main className="relative min-h-screen bg-[#F5F0E9] flex justify-center px-4 py-10">
      <BackgroundDecor />
      <div className="w-full max-w-2xl">

        {/* Header */}
        <div className="text-center mb-7">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-2xl bg-[#112250] flex items-center justify-center shadow-lg shadow-[#112250]/20">
              <GraduationCap className="w-6 h-6 text-[#E0C58F]" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-[#112250] tracking-tight">
            Build Your Kuzana Profile
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
            Help us understand your goals so we can match you with the right mentors.
          </p>
        </div>

        <ProfileThread percent={percent} />

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-[#112250]/[0.07] ring-1 ring-black/[0.03] overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-[#112250] via-[#1B3475] to-[#E0C58F]" />
          <div className="p-8 space-y-8">

            {/* 1 · Basic Info */}
            <Section index={1} icon={<User className="w-4 h-4 text-[#112250]" />} title="Basic Information">
              <div className="space-y-3">
                <div className="relative">
                  <FieldIcon><User /></FieldIcon>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    className={inputClass}
                  />
                </div>
                <div className="relative">
                  <FieldIcon><BookOpen /></FieldIcon>
                  <select
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    className={`${selectClass} ${!program ? "text-gray-400" : "text-gray-900"}`}
                  >
                    <option value="" disabled>Course / Degree Program</option>
                    {DEGREE_PROGRAMS.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                  <SelectChevron />
                </div>
                <div className="relative">
                  <FieldIcon><Calendar /></FieldIcon>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className={`${selectClass} ${!year ? "text-gray-400" : "text-gray-900"}`}
                  >
                    <option value="" disabled>Year of Study</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="pg">Postgraduate</option>
                  </select>
                  <SelectChevron />
                </div>
              </div>
            </Section>

            <Divider />

            {/* 2 · Academic Interests */}
            <Section
              index={2}
              icon={<BookOpen className="w-4 h-4 text-[#112250]" />}
              title="Academic Interests"
              subtitle="Pick up to 5 areas you study or want to explore academically."
            >
              <TagPicker
                selected={academicInterests}
                onChange={setAcademicInterests}
                filterCategories={[
                  "Technology & Computing",
                  "Sciences & Engineering",
                  "Business & Entrepreneurship",
                  "Academic Skills",
                ]}
                searchPlaceholder="Search academic interests…"
              />
            </Section>

            <Divider />

            {/* 3 · Professional Interests */}
            <Section
              index={3}
              icon={<Target className="w-4 h-4 text-[#112250]" />}
              title="Professional Interests"
              subtitle="Industries or career paths you're drawn to."
            >
              <TagPicker
                selected={professionalInterests}
                onChange={setProfessionalInterests}
                filterCategories={[
                  "Business & Entrepreneurship",
                  "Technology & Computing",
                  "Creative & Design",
                  "Soft Skills",
                ]}
                searchPlaceholder="Search professional interests…"
              />
            </Section>

            <Divider />
            <Divider />

<Section
  index={4}
  icon={<Target className="w-4 h-4 text-[#112250]" />}
  title="Your Goal Statement"
  subtitle="Tell mentors what you're hoping to achieve. Be specific — it helps with matching."
>
  <div className="relative">
    <textarea
      value={bio}
      onChange={(e) => setBio(e.target.value)}
      placeholder="I'm looking for guidance on breaking into product management..."
      rows={4}
      className="w-full border border-gray-200 rounded-xl p-4 text-sm
        focus:outline-none focus:ring-2 focus:ring-[#112250]/20 focus:border-[#112250]
        transition bg-white text-gray-900 placeholder:text-gray-400 resize-none"
    />
    <div className="flex justify-end mt-1">
      <span className={`text-xs ${bio.trim().length < 10 ? "text-[#A67C2E]" : "text-gray-400"}`}>
        {bio.trim().length} / 280
      </span>
    </div>
  </div>
</Section>


            <Divider />

            {/* 5 · Mentorship Type */}
            <Section
              index={5}
              icon={<Handshake className="w-4 h-4 text-[#112250]" />}
              title="What kind of mentorship are you looking for?"
              subtitle="Select all that apply."
            >
              <div className="flex flex-wrap gap-2">
                {MENTORSHIP_TYPES.map((type) => {
                  const isSelected = mentorshipTypes.includes(type);
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => toggleMentorshipType(type)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition active:scale-95
                        ${isSelected
                          ? "bg-[#112250] text-[#E0C58F] border-[#112250] shadow-sm shadow-[#112250]/20"
                          : "bg-white text-gray-600 border-gray-200 hover:border-[#112250] hover:text-[#112250]"
                        }`}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        {isSelected && <Check className="w-3 h-3" />}
                        {type}
                      </span>
                    </button>
                  );
                })}
              </div>
            </Section>

            {/* CTA */}
            <div className="space-y-2 pt-1">
              <Button
                onClick={() => canContinue && handleContinue()}
                disabled={!canContinue}
                className={`w-full py-3.5 rounded-xl text-white transition-all duration-200 font-medium
                  ${canContinue
                    ? "bg-[#112250] hover:bg-[#1B3475] hover:-translate-y-0.5 shadow-lg shadow-[#112250]/20 active:translate-y-0"
                    : "bg-[#112250]/30 cursor-not-allowed"
                  }`}
              >
                <span className="inline-flex items-center justify-center gap-2">
                  Save & Continue
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
              {!canContinue && (
                <p className="text-xs text-center text-[#A67C2E]">
                  Add your name, course, and at least one skill to continue
                </p>
              )}
            </div>

            <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#112250]/30 shrink-0" />
              <span>Your profile helps us personalise mentor recommendations.</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
