// app/about/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Fingerprint,
  ShieldCheck,
  Users,
  GraduationCap,
} from "lucide-react";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="ku-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-[#E0C58F] mb-5">
      {children}
    </p>
  );
}

interface PrincipleProps {
  num: string;
  icon: React.ElementType;
  title: string;
  desc: string;
}

function Principle({ num, icon: Icon, title, desc }: PrincipleProps) {
  return (
    <div className="group grid md:grid-cols-[88px_1fr] gap-5 py-9 first:pt-0 last:pb-0">
      <div className="flex md:flex-col items-center md:items-start gap-3">
        <span className="ku-mono text-[11px] tracking-[0.1em] text-[#E0C58F] font-semibold">§ {num}</span>
        <Icon className="w-[18px] h-[18px] text-[#112250]/35 group-hover:text-[#112250] transition-colors duration-300" />
      </div>
      <div>
        <h3 className="ku-serif italic text-[1.5rem] text-[#112250] leading-snug">{title}</h3>
        <p className="text-[#112250]/55 text-sm mt-3 leading-[1.75] max-w-xl">{desc}</p>
      </div>
    </div>
  );
}

interface SignatoryProps {
  initials: string;
  name: string;
  role: string;
  note: string;
}

function Signatory({ initials, name, role, note }: SignatoryProps) {
  return (
    <div className="bg-white border border-[#112250]/12 p-7">
      <div className="w-14 h-14 border border-[#112250]/20 flex items-center justify-center text-[#112250] font-semibold text-sm ku-mono mb-6">
        {initials}
      </div>
      <p className="ku-serif italic text-[#112250] text-xl leading-snug">{name}</p>
      <p className="ku-mono text-[9px] text-[#112250]/45 tracking-[0.15em] uppercase mt-2">{role}</p>
      <p className="text-[#112250]/55 text-sm mt-4 leading-[1.7]">{note}</p>
      <div className="mt-6 pt-5 border-t border-dashed border-[#112250]/20">
        <p className="ku-mono text-[8px] text-[#112250]/35 tracking-[0.15em] uppercase">Signed · Founding Record</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/#clauses", label: "Platform" },
    { href: "/about", label: "About" },
    { href: "/#mentors", label: "Mentors" },
    { href: "/contact", label: "Contact" },
  ];

  const principles: PrincipleProps[] = [
    {
      num: "1",
      icon: Fingerprint,
      title: "Matching is a discipline, not a directory",
      desc: "Kuzana began as a final-year project at Strathmore University's School of Computing and Engineering Sciences, built on a simple observation: most mentorship platforms are search engines wearing a mentorship label. We built ours around a real compatibility model instead.",
    },
    {
      num: "2",
      icon: ShieldCheck,
      title: "Trust has to be earned before day one",
      desc: "Every mentor is verified before they ever enter a student's match results. We'd rather have a smaller registry than an unverified one.",
    },
    {
      num: "3",
      icon: GraduationCap,
      title: "Built for the person, not the platform",
      desc: "Kuzana narrowed its own scope on purpose — cutting social features that didn't serve the actual goal — to stay focused on one thing: getting a student in front of the right mentor.",
    },
    {
      num: "4",
      icon: Users,
      title: "A record that grows with you",
      desc: "Career direction shifts. The platform is built to let a mentorship record hold more than one active relationship as that direction changes.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');
        body { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
        .ku-serif { font-family: 'Fraunces', Georgia, serif; }
        .ku-mono  { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        a:focus-visible, button:focus-visible { outline: 2px solid #E0C58F; outline-offset: 2px; }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      <main className="min-h-screen bg-[#F5F0E9] text-[#112250]">

        {/* ───────────────────── NAV ───────────────────── */}
        <nav className="sticky top-0 z-50 bg-[#112250] border-b border-[#E0C58F]/25">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 h-[68px] flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-7 h-7 rounded-full border border-[#E0C58F] flex items-center justify-center">
                <span className="ku-serif italic text-[#E0C58F] text-[13px]">K</span>
              </div>
              <div className="leading-none">
                <p className="text-sm font-bold text-white tracking-[0.08em]">KUZANA</p>
                <p className="ku-mono hidden sm:block text-[8px] text-white/35 tracking-[0.2em] uppercase mt-0.5">
                  Mentorship Registry
                </p>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} className="px-4 py-2 text-sm font-medium text-white/55 hover:text-white transition-colors duration-200">
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <Link href="/login" className="text-sm font-medium text-white/50 hover:text-white px-3 py-2 transition-colors duration-200">Log in</Link>
              <Link href="/student/signup" className="group bg-[#E0C58F] text-[#112250] px-4 py-2 text-sm font-semibold flex items-center gap-1.5 hover:bg-[#eed6a8] transition-colors duration-200">
                Get Started
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <button onClick={() => setMobileOpen((v) => !v)} className="md:hidden text-white/70 hover:text-white p-2" aria-label="Toggle menu">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {mobileOpen && (
            <div className="md:hidden bg-[#0B1733] border-t border-white/10 px-6 pb-6 pt-3 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="py-3 px-3 text-sm font-medium text-white/65 hover:text-white transition">
                  {l.label}
                </Link>
              ))}
              <Link href="/student/signup" className="bg-[#E0C58F] text-[#112250] py-3 px-4 font-semibold text-sm text-center mt-3">
                Get Started
              </Link>
            </div>
          )}
        </nav>

        {/* ───────────────────── HERO ───────────────────── */}
        <section className="bg-[#112250] text-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
            <Eyebrow>Founding Record · Est. Strathmore University</Eyebrow>
            <h1 className="ku-serif text-[2.75rem] sm:text-[3.5rem] font-normal leading-[1.08] tracking-[-0.01em]">
              Built by students,
              <br />
              <em className="text-[#E0C58F] not-italic font-normal">for students.</em>
            </h1>
            <p className="mt-7 text-white/55 text-[1.0625rem] leading-[1.8] max-w-xl mx-auto">
              Kuzana started as an ICS coursework project with a specific complaint: mentorship
              platforms are built like search engines. We built ours like a matching system instead.
            </p>
          </div>
        </section>

        {/* ───────────────────── PRINCIPLES ───────────────────── */}
        <section className="max-w-4xl mx-auto px-6 sm:px-10 py-24">
          <Eyebrow>Terms of the record</Eyebrow>
          <h2 className="ku-serif text-[2.25rem] sm:text-[2.75rem] font-normal tracking-tight leading-[1.1]">
            What Kuzana stands on
          </h2>
          <div className="divide-y divide-[#112250]/10 mt-10">
            {principles.map((p) => (
              <Principle key={p.num} {...p} />
            ))}
          </div>
        </section>

        {/* ───────────────────── SIGNATORIES (team) ───────────────────── */}
        <section className="bg-[#EFE8DA] border-t border-[#112250]/10 py-24">
          <div className="max-w-6xl mx-auto px-6 sm:px-10">
            <Eyebrow>Signatories</Eyebrow>
            <h2 className="ku-serif text-[2.25rem] sm:text-[2.75rem] font-normal tracking-tight leading-[1.1]">
              The founding team
            </h2>
            <p className="mt-4 text-[#112250]/55 text-sm sm:text-base max-w-md leading-relaxed">
              Two students, one shared frustration with how mentorship platforms are usually built.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
              <Signatory
                initials="HN"
                name="Hellen"
                role="UI/UX & Frontend"
                note="Designed and built Kuzana's interface — the matching flows, dashboards, and the visual system tying the whole registry together."
              />
              <Signatory
                initials="AO"
                name="Adam Okware"
                role="Backend & Systems"
                note="Built the matching engine and data layer powering compatibility scoring across the platform."
              />
            </div>
          </div>
        </section>

        {/* ───────────────────── CTA ───────────────────── */}
        <section className="bg-[#112250] text-white py-24 text-center">
          <div className="max-w-xl mx-auto px-6 sm:px-10">
            <Eyebrow>Join the registry</Eyebrow>
            <h2 className="ku-serif text-[2.25rem] sm:text-[2.75rem] font-normal tracking-tight leading-[1.1]">
              Have a question for us?
            </h2>
            <p className="mt-5 text-white/45 text-sm leading-[1.8]">
              We read every message that comes through.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 mt-9 bg-[#E0C58F] text-[#112250] px-7 py-4 text-sm font-semibold hover:bg-[#eed6a8] transition-colors duration-200"
            >
              Get in touch
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </section>

        {/* ───────────────────── FOOTER ───────────────────── */}
        <footer className="bg-[#080F20] text-white/35">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 py-14 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full border border-[#E0C58F]/50 flex items-center justify-center">
                <span className="ku-serif italic text-[#E0C58F] text-[11px]">K</span>
              </div>
              <span className="text-white font-bold tracking-[0.08em] text-sm">KUZANA</span>
            </div>
            <p className="ku-mono text-[10px] text-white/20 tracking-wide">
              © {new Date().getFullYear()} KUZANA · STRATHMORE UNIVERSITY, NAIROBI
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}