"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Users,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Star,
  Menu,
  X,
  Clock,
  Briefcase,
  Award,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

// ─── Types ─────────────────────────────────────────────────────────────────────

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  tag?: string;
  dark?: boolean;
}

interface StepProps {
  number: string;
  title: string;
  desc: string;
  isLast?: boolean;
}

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  field: string;
}

interface StatProps {
  value?: string;
  label: string;
  start: boolean;
  numericValue?: number;
  suffix?: string;
}

// ─── Animated Counter ─────────────────────────────────────────────────────────

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, start]);
  return count;
}

// ─── Feature Card ──────────────────────────────────────────────────────────────

function FeatureCard({ icon: Icon, title, desc, tag, dark = false }: FeatureCardProps) {
  return (
    <div
      className={`group relative rounded-2xl p-8 h-full overflow-hidden transition-all duration-300 hover:-translate-y-1.5
        ${
          dark
            ? "bg-[#112250] border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-[#112250]/60"
            : "bg-white border border-[#E8E3DC] hover:shadow-xl hover:shadow-gray-200/80"
        }`}
    >
      {/* Hover sheen */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
          ${dark ? "bg-gradient-to-br from-[#E0C58F]/[0.06] to-transparent" : "bg-gradient-to-br from-[#112250]/[0.025] to-transparent"}`}
      />

      {tag && (
        <span
          className={`absolute top-6 right-6 text-[9px] font-black tracking-[0.15em] uppercase px-2.5 py-1 rounded-full
            ${dark ? "bg-[#E0C58F]/15 text-[#E0C58F]" : "bg-[#112250]/8 text-[#112250]"}`}
        >
          {tag}
        </span>
      )}

      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8 transition-colors duration-300
          ${dark
            ? "bg-[#E0C58F]/10 group-hover:bg-[#E0C58F]/20"
            : "bg-[#112250]/6 group-hover:bg-[#112250]/12"}`}
      >
        <Icon className={`w-5 h-5 ${dark ? "text-[#E0C58F]" : "text-[#112250]"}`} />
      </div>

      <h3 className={`font-bold text-[0.9375rem] tracking-tight leading-snug ${dark ? "text-white" : "text-[#112250]"}`}>
        {title}
      </h3>
      <p className={`text-sm mt-4 leading-[1.8] ${dark ? "text-white/50" : "text-[#6B7280]"}`}>{desc}</p>

      {/* Corner decoration */}
      <div
        className={`absolute bottom-0 right-0 w-24 h-24 rounded-tl-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
          ${dark ? "bg-[#E0C58F]/[0.05]" : "bg-[#112250]/[0.025]"}`}
      />
    </div>
  );
}

// ─── Step ──────────────────────────────────────────────────────────────────────

function Step({ number, title, desc, isLast }: StepProps) {
  return (
    <div className="relative flex gap-8 group">
      <div className="relative flex-shrink-0 pt-1">
        <div className="w-11 h-11 rounded-full bg-[#E0C58F]/10 border border-[#E0C58F]/25 flex items-center justify-center font-bold text-[#E0C58F] text-sm z-10 relative transition-all duration-300 group-hover:bg-[#E0C58F]/20 group-hover:border-[#E0C58F]/50 tabular-nums">
          {number}
        </div>
        {!isLast && (
          <div className="absolute left-[1.375rem] top-11 w-px h-full bg-gradient-to-b from-[#E0C58F]/15 to-transparent" />
        )}
      </div>
      <div className="pb-12">
        <p className="text-[9px] text-[#E0C58F]/55 font-black tracking-[0.22em] uppercase mb-3">
          Step {number}
        </p>
        <h3 className="font-bold text-white text-[1.1875rem] tracking-tight leading-snug group-hover:text-[#E0C58F] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/45 text-sm mt-3 leading-[1.8] max-w-sm">{desc}</p>
      </div>
    </div>
  );
}

// ─── Testimonial ───────────────────────────────────────────────────────────────

function TestimonialCard({ quote, name, role, field }: TestimonialProps) {
  return (
    <div className="group bg-white border border-[#E8E3DC] rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5">
      <div className="text-7xl font-serif leading-none text-[#112250]/[0.06] group-hover:text-[#112250]/[0.1] transition-colors duration-300 select-none -mb-3">
        &ldquo;
      </div>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-[#E0C58F] text-[#E0C58F]" />
        ))}
      </div>
      <p className="text-sm text-[#4B5563] leading-[1.75] flex-1">{quote}</p>
      <div className="flex items-center gap-3 pt-6 border-t border-[#F0EBE3]">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#112250] to-[#1e3a6e] flex items-center justify-center text-[#E0C58F] text-xs font-bold flex-shrink-0">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-xs font-bold text-[#112250]">{name}</p>
          <p className="text-[10px] text-[#9CA3AF] mt-0.5">
            {role} · {field}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Stat Item ─────────────────────────────────────────────────────────────────

function StatItem({ value, label, start, numericValue, suffix }: StatProps) {
  const count = useCountUp(numericValue ?? 0, 1800, start);
  return (
    <div className="text-center group px-3 md:px-8 py-6">
      <p className="text-[3.25rem] md:text-[3.75rem] font-black text-[#112250] tracking-tight tabular-nums leading-none group-hover:text-[#1e3a6e] transition-colors duration-200">
        {numericValue !== undefined ? `${count}${suffix ?? ""}` : value}
      </p>
      <p className="text-[10px] text-[#9CA3AF] mt-4 max-w-[130px] mx-auto leading-snug font-bold uppercase tracking-[0.1em]">
        {label}
      </p>
    </div>
  );
}

// ─── Section Eyebrow ───────────────────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-black tracking-[0.22em] uppercase text-[#E0C58F] mb-5">
      {children}
    </p>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(totalH > 0 ? (window.scrollY / totalH) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) io.observe(statsRef.current);
    return () => io.disconnect();
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how", label: "How it works" },
    { href: "#mentors", label: "Mentors" },
    { href: "#proof", label: "Impact" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');

        /* Base: apply font only via class, not wildcard */
        body { font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; }

        .ku-serif { font-family: 'Instrument Serif', Georgia, serif; }

        @keyframes ku-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ku-gradient {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }
        @keyframes ku-spin-slow {
          to { transform: rotate(360deg); }
        }
        @keyframes ku-shimmer {
          from { transform: translateX(-100%); }
          to   { transform: translateX(200%); }
        }

        .ku-fade-up   { animation: ku-fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .ku-gradient  { animation: ku-gradient 6s ease infinite; background-size: 200% 200%; }
        .ku-spin-slow { animation: ku-spin-slow 32s linear infinite; }

        .ku-d1 { animation-delay: 0.10s; }
        .ku-d2 { animation-delay: 0.22s; }
        .ku-d3 { animation-delay: 0.34s; }
        .ku-d4 { animation-delay: 0.46s; }
        .ku-d5 { animation-delay: 0.58s; }

        /* Card shine */
        .ku-shine { position: relative; overflow: hidden; }
        .ku-shine::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.06) 50%, transparent 75%);
          transform: translateX(-100%);
          pointer-events: none;
        }
        .ku-shine:hover::after { animation: ku-shimmer 0.65s ease; }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <main className="min-h-screen bg-[#F5F0E9] text-[#112250]">

        {/* Scroll progress bar */}
        <div
          aria-hidden
          className="fixed top-0 left-0 z-[100] h-[2px] pointer-events-none transition-all duration-75 will-change-transform"
          style={{
            width: `${scrollPct}%`,
            background: "linear-gradient(90deg, #E0C58F 0%, #f5e4b0 50%, #E0C58F 100%)",
          }}
        />

        {/* ───────────────────── NAV ───────────────────── */}
        <nav
          className={`sticky top-0 z-50 border-b border-white/[0.07] transition-all duration-500 backdrop-blur-2xl
            ${scrolled ? "bg-[#0B1733]/97 shadow-xl shadow-black/20" : "bg-[#112250]/96"}`}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 h-[72px] flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <span className="text-base font-black text-[#E0C58F] tracking-[0.12em]">KUZANA</span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-white/55 hover:text-white hover:bg-white/8 transition-all duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-2">
              <Link
                href="/login"
                className="text-sm font-semibold text-white/50 hover:text-white px-3 py-2 transition-colors duration-200"
              >
                Log in
              </Link>
              <Link
                href="/mentor/apply"
                className="text-sm font-semibold text-white/50 hover:text-white px-3 py-2 transition-colors duration-200"
              >
                Mentor Portal
              </Link>
              <Link
                href="/student/signup"
                className="group bg-[#E0C58F] text-[#112250] px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-1.5 hover:bg-[#f0d89c] hover:shadow-lg hover:shadow-[#E0C58F]/25 hover:-translate-y-px transition-all duration-200"
              >
                Get Started
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/10 transition"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile drawer */}
          {mobileOpen && (
            <div className="md:hidden bg-[#0B1733] border-t border-white/10 px-6 pb-6 pt-3 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-3 text-sm font-semibold text-white/65 hover:text-white rounded-lg transition"
                >
                  {l.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2.5 mt-4 pt-4 border-t border-white/10">
                <Link
                  href="/mentor/apply"
                  className="border border-white/25 text-white py-3 px-4 rounded-xl font-semibold text-sm text-center hover:bg-white/10 transition"
                >
                  Mentor Portal
                </Link>
                <Link
                  href="/student/signup"
                  className="bg-[#E0C58F] text-[#112250] py-3 px-4 rounded-xl font-bold text-sm text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* ───────────────────── HERO ───────────────────── */}
        <section className="relative bg-[#112250] text-white overflow-hidden min-h-[85vh] flex items-center">
          {/* Background texture */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(224,197,143,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(224,197,143,0.9) 1px, transparent 1px)",
                backgroundSize: "52px 52px",
              }}
            />
            <div className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full bg-[#1e3a6e]/50 blur-[140px]" />
            <div className="absolute top-1/3 -right-48 w-[600px] h-[600px] rounded-full bg-[#E0C58F]/[0.05] blur-[110px] ku-spin-slow" />
            <div className="absolute -bottom-24 left-1/3 w-[400px] h-[280px] rounded-full bg-[#112250]/80 blur-[80px]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-24 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left column — copy */}
              <div className="max-w-[640px]">
                
                <h1 className="ku-serif ku-fade-up ku-d2 text-[3.25rem] sm:text-[4rem] xl:text-[4.75rem] font-normal leading-[1.05] tracking-[-0.01em]">
                  The right mentor
                  <br />
                  <em className="ku-gradient bg-gradient-to-r from-[#E0C58F] via-[#f5e4b0] to-[#d4aa6a] bg-clip-text text-transparent not-italic">
                    changes everything.
                  </em>
                </h1>

                <p className="ku-fade-up ku-d3 mt-8 text-white/55 text-[1.125rem] leading-[1.8] max-w-[520px]">
                  Kuzana matches students with verified industry mentors using intelligent compatibility algorithms because the best mentorship is never random.
                </p>

                <div className="ku-fade-up ku-d4 flex flex-col sm:flex-row gap-4 mt-12">
                  <Link
                    href="/student/signup"
                    className="group bg-[#E0C58F] text-[#112250] px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#f0d89c] hover:shadow-2xl hover:shadow-[#E0C58F]/20 hover:-translate-y-0.5 transition-all duration-200 text-sm"
                  >
                    Find A Mentor
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/mentor/apply"
                    className="group border border-white/20 bg-white/5 hover:bg-white/[0.09] hover:border-white/35 px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-200 text-center flex items-center justify-center gap-2"
                  >
                    Become a Mentor
                    <ChevronRight className="w-4 h-4 opacity-45 group-hover:opacity-80 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </div>

              </div>
              {/* Right column — mentor match preview (desktop only) */}
              <div className="hidden lg:block ku-fade-up ku-d3">
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-br from-[#E0C58F]/10 to-transparent rounded-3xl blur-2xl pointer-events-none" />
                  <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-1.5 mb-6">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                      <span className="text-white/25 text-[10px] font-mono ml-2 tracking-tight">
                        kuzana.app/matches
                      </span>
                    </div>

                    <p className="text-white/40 text-[10px] font-black tracking-[0.18em] uppercase mb-4">
                      Your top matches
                    </p>

                    <div className="space-y-3">
                      {[
                        { init: "JM", name: "James Mutua", role: "PM · Safaricom", pct: 94 },
                        { init: "AM", name: "Aisha Mutuku", role: "Eng · Andela", pct: 89 },
                        { init: "FN", name: "Faith Njiru", role: "Data · Cellulant", pct: 82 },
                      ].map((m) => (
                        <div
                          key={m.name}
                          className="flex items-center gap-3 bg-white/[0.04] rounded-xl px-4 py-3.5 hover:bg-white/[0.08] transition-colors cursor-default"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#E0C58F]/15 flex items-center justify-center text-[#E0C58F] text-xs font-bold flex-shrink-0">
                            {m.init}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-xs font-semibold truncate">{m.name}</p>
                            <p className="text-white/35 text-[10px] mt-0.5">{m.role}</p>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <div className="h-1 w-14 bg-white/10 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-[#E0C58F]/60 to-[#E0C58F] rounded-full"
                                style={{ width: `${m.pct}%` }}
                              />
                            </div>
                            <span className="text-[#E0C58F] text-[10px] font-bold tabular-nums">{m.pct}%</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Platform stats strip */}
                    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/[0.08]">
                      <div className="text-center">
                        <p className="text-xl font-black text-[#E0C58F] tabular-nums">94%</p>
                        <p className="text-[9px] text-white/35 font-bold uppercase tracking-wide mt-1.5">
                          Match score
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-black text-[#E0C58F] tabular-nums">24h</p>
                        <p className="text-[9px] text-white/35 font-bold uppercase tracking-wide mt-1.5">
                          Avg. match
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-black text-[#E0C58F] tabular-nums">100%</p>
                        <p className="text-[9px] text-white/35 font-bold uppercase tracking-wide mt-1.5">
                          Verified
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#F5F0E9] to-transparent pointer-events-none" />

          {/* Scroll cue */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 pointer-events-none select-none">
            <span className="text-[9px] font-bold tracking-[0.28em] uppercase">Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </section>

        {/* ───────────────────── STATS ───────────────────── */}
        <section ref={statsRef} className="bg-white border-b border-[#E8E3DC]">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-[#F0EBE3]">
              <StatItem label="Match satisfaction score" start={statsVisible} numericValue={94} suffix="%" />
              <StatItem label="Average time to first match" start={statsVisible} numericValue={24} suffix="h" />
              <StatItem value="1:1" label="Personal dedicated mentor" start={false} />
              <StatItem label="Verified mentor profiles" start={statsVisible} numericValue={100} suffix="%" />
            </div>
          </div>
        </section>

        {/* ───────────────────── FEATURES BENTO ───────────────────── */}
        <section id="features" className="max-w-7xl mx-auto px-6 sm:px-10 py-24">
          <div className="text-center mb-14">
            <Eyebrow>The platform</Eyebrow>
            <h2 className="ku-serif text-[2.5rem] sm:text-[3rem] font-normal tracking-tight leading-[1.1]">
              Built for real career growth
            </h2>
            <p className="mt-5 text-[#6B7280] text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              Every feature exists to get you in front of the right person, faster.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2">
              <FeatureCard
                icon={Sparkles}
                title="Smart Compatibility Matching"
                desc="Our algorithm weighs your field of study, career goals, mentorship style preferences, and availability to surface mentors who will actually move you forward — not just anyone available."
                tag="Core Feature"
                dark
              />
            </div>
            <FeatureCard
              icon={ShieldCheck}
              title="Verified & Safe"
              desc="Every mentor is institution-verified. Every connection on Kuzana starts with trust built in from day one."
            />
            <FeatureCard
              icon={GraduationCap}
              title="Real Industry Mentors"
              desc="Verified professionals from product, engineering, finance, entrepreneurship, and more — not career coaches."
            />
            <div className="lg:col-span-2">
              <FeatureCard
                icon={Users}
                title="Multi-Mentor Support"
                desc="Career growth is rarely linear. Kuzana lets you build relationships across multiple domains — so as your path evolves, your mentorship network can evolve with it."
              />
            </div>
          </div>
        </section>

        {/* ───────────────────── HOW IT WORKS ───────────────────── */}
        <section id="how" className="relative bg-[#0B1733] text-white py-24 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.035]"
            aria-hidden
            style={{
              backgroundImage: "radial-gradient(circle, #E0C58F 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-[#E0C58F]/[0.04] blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#112250]/80 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6 sm:px-10">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 xl:gap-20 items-start">

              {/* Sticky left */}
              <div className="lg:sticky lg:top-24">
                <Eyebrow>Getting started</Eyebrow>
                <h2 className="ku-serif text-[2.5rem] sm:text-[3rem] font-normal tracking-tight leading-[1.07]">
                  Matched in minutes.
                  <br />
                  <span className="text-white/25">Growing for years.</span>
                </h2>
                <p className="mt-7 text-white/45 text-[1rem] leading-[1.8] max-w-xs">
                  From profile to your first mentorship session, the process is designed to be clear and the momentum to keep going.
                </p>
              </div>

              {/* Steps */}
              <div className="pt-1">
                <Step
                  number="01"
                  title="Build your profile"
                  desc="Share your degree programme, career interests, and what kind of guidance matters most. Under five minutes."
                />
                <Step
                  number="02"
                  title="Review your matches"
                  desc="Kuzana surfaces a curated shortlist of mentors ranked by compatibility. Read their backgrounds and pick who resonates."
                />
                <Step
                  number="03"
                  title="Book your first session"
                  desc="Reach out, schedule a call, and show up with clarity. Session guides help you make the most of every meeting."
                />
                <Step
                  number="04"
                  title="Grow with intention"
                  desc="Track goals, gather feedback, and evolve your mentor relationships as your career direction sharpens."
                  isLast
                />
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────── MENTOR SPOTLIGHT ───────────────────── */}
        <section id="mentors" className="max-w-7xl mx-auto px-6 sm:px-10 py-24">
          <div className="text-center mb-14">
            <Eyebrow>The network</Eyebrow>
            <h2 className="ku-serif text-[2.5rem] sm:text-[3rem] font-normal tracking-tight leading-[1.1]">
              Mentors worth learning from
            </h2>
            <p className="mt-5 text-[#6B7280] text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              A growing network of verified professionals, vetted for substance over title.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                initials: "AM",
                name: "Aisha Mutuku",
                role: "Software Engineer",
                company: "Andela",
                tags: ["Backend Dev", "Career Pivots", "Open Source"],
                sessions: 42,
              },
              {
                initials: "KO",
                name: "Kevin Oduya",
                role: "Product Manager",
                company: "M-Pesa",
                tags: ["Product Strategy", "Fintech", "UX Thinking"],
                sessions: 37,
              },
              {
                initials: "FN",
                name: "Faith Njiru",
                role: "Data Scientist",
                company: "Cellulant",
                tags: ["Machine Learning", "Python", "Analytics"],
                sessions: 29,
              },
            ].map((mentor) => (
              <div
                key={mentor.name}
                className="group ku-shine bg-white border border-[#E8E3DC] rounded-2xl p-7 hover:shadow-2xl hover:shadow-gray-200/60 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-7">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#112250] to-[#1e3a6e] flex items-center justify-center text-[#E0C58F] font-bold text-sm flex-shrink-0 shadow-lg shadow-[#112250]/20">
                    {mentor.initials}
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className="font-bold text-[#112250] text-[0.9375rem] truncate">{mentor.name}</p>
                    <p className="text-xs text-[#9CA3AF] truncate mt-1">
                      {mentor.role} · {mentor.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-7">
                  {mentor.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold bg-[#F5F0E9] text-[#112250] px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-[#F0EBE3]">
                  <div className="flex items-center gap-1.5 text-xs text-[#9CA3AF] font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {mentor.sessions} sessions
                  </div>
                  <Link
                    href="/login"
                    className="text-xs font-bold text-[#112250] flex items-center gap-1 group-hover:gap-1.5 group-hover:text-[#1e3a6e] transition-all"
                  >
                    View profile <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/login"
              className="group inline-flex items-center gap-2 border-2 border-[#112250]/12 text-[#112250] px-7 py-4 rounded-xl text-sm font-semibold hover:bg-[#112250] hover:text-white hover:border-[#112250] hover:-translate-y-0.5 transition-all duration-200"
            >
              Browse the full mentor network
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </section>

        {/* ───────────────────── TESTIMONIALS ───────────────────── */}
        <section id="proof" className="bg-[#F5F0E9] border-t border-[#E0DAD0] py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-14">
              <Eyebrow>Student stories</Eyebrow>
              <h2 className="ku-serif text-[2.5rem] sm:text-[3rem] font-normal tracking-tight leading-[1.1]">
                Students are leveling up
              </h2>
              <p className="mt-5 text-[#6B7280] text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                A few of the conversations that started with one good match.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <TestimonialCard
                quote="I finally understood what I want to do in tech after speaking to my mentor. Three sessions in and I have a career plan I actually believe in."
                name="Brian N."
                role="3rd Year"
                field="Computer Science"
              />
              <TestimonialCard
                quote="Kuzana made mentorship feel structured and not intimidating at all. I was terrified of reaching out to professionals — this made it completely natural."
                name="Grace A."
                role="2nd Year"
                field="UX Design"
              />
              <TestimonialCard
                quote="The match accuracy is genuinely impressive. My mentor works in exactly the niche I want to enter. It saved me so much time figuring out who to follow."
                name="Daniel M."
                role="Final Year"
                field="Data Science"
              />
            </div>
          </div>
        </section>

        {/* ───────────────────── MENTOR CTA ───────────────────── */}
        <section className="bg-white border-t border-[#E8E3DC] py-24">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 grid md:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <div>
              <Eyebrow>For professionals</Eyebrow>
              <h2 className="ku-serif text-[2.5rem] sm:text-[3rem] font-normal tracking-tight leading-[1.1]">
                Give back to the next
                <br />
                generation of talent.
              </h2>
              <p className="mt-7 text-[#6B7280] text-[1rem] leading-[1.8] max-w-md">
                Whether you have one hour a month or one hour a week — your experience is exactly what a student needs to avoid costly career mistakes.
              </p>
              <Link
                href="/mentor/apply"
                className="group inline-flex items-center gap-2 mt-10 bg-[#112250] text-white px-7 py-4 rounded-xl text-sm font-bold hover:bg-[#1a2f60] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#112250]/20 transition-all duration-200"
              >
                Apply as a Mentor
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Benefit tiles */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Clock, title: "Flexible hours", desc: "Mentor on your schedule. No fixed commitment required." },
                { icon: Users, title: "Real impact", desc: "Students are matched to you because your path is their target." },
                { icon: Briefcase, title: "Grow your network", desc: "Connect with peers mentoring across industries on the platform." },
                { icon: Award, title: "Recognition", desc: "Top mentors are featured and recognized in the community." },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group bg-[#F5F0E9] hover:bg-[#112250] rounded-2xl p-6 transition-all duration-300 cursor-default"
                >
                  <Icon className="w-5 h-5 text-[#112250] group-hover:text-[#E0C58F] mb-5 transition-colors duration-300" />
                  <p className="text-sm font-bold text-[#112250] group-hover:text-white transition-colors duration-300 mb-2">
                    {title}
                  </p>
                  <p className="text-sm text-[#6B7280] group-hover:text-white/50 leading-relaxed transition-colors duration-300">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────── FINAL CTA ───────────────────── */}
        <section className="relative bg-[#112250] text-white py-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#E0C58F]/8 blur-[110px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-[#1e3a6e]/60 blur-[80px]" />
            <div className="absolute bottom-0 right-0 w-[350px] h-[250px] rounded-full bg-[#E0C58F]/[0.05] blur-[70px]" />
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(224,197,143,1) 1px, transparent 1px), linear-gradient(90deg, rgba(224,197,143,1) 1px, transparent 1px)",
                backgroundSize: "52px 52px",
              }}
            />
          </div>

          <div className="relative max-w-2xl mx-auto px-6 sm:px-10 text-center">
            <h2 className="ku-serif text-[3rem] sm:text-[3.75rem] font-normal tracking-tight leading-[1.07]">
              Your mentor is already
              <br />
              <em className="ku-gradient bg-gradient-to-r from-[#E0C58F] via-[#f5e4b0] to-[#E0C58F] bg-clip-text text-transparent not-italic">
                waiting for you.
              </em>
            </h2>
            <p className="text-white/45 mt-8 text-[1rem] leading-[1.8] max-w-md mx-auto">
                Join students who stopped wondering what their career looks like and started building it with someone who&apos;s already been there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                  <Link
                    href="/login"
                    className="group bg-[#E0C58F] text-[#112250] px-9 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#f0d89c] hover:shadow-2xl hover:shadow-[#E0C58F]/25 hover:-translate-y-0.5 transition-all duration-200 text-sm"
                  >
                    Get Started — it&apos;s free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/mentor/apply"
                className="border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/35 px-9 py-4 rounded-xl text-sm font-semibold transition-all duration-200 text-center"
              >
                Join as a Mentor
              </Link>
            </div>
          </div>
        </section>

        {/* ───────────────────── FOOTER ───────────────────── */}
        <footer className="bg-[#080F20] text-white/35">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-12">

            <div className="sm:col-span-2">
              <div className="flex items-center gap-2.5 mb-5">
                
                <span className="text-[#E0C58F] font-black tracking-[0.12em] text-sm">
                  KUZANA
                </span>
              </div>

              <p className="text-sm max-w-[210px] leading-[1.7]">
                Mentorship that actually aligns with where you&apos;re going.
              </p>

              <p className="text-xs mt-6 text-white/20">
                Built at Strathmore University · Nairobi, Kenya
              </p>
            </div>

            {[
              {
                title: "Platform",
                links: [
                  { href: "/login", label: "Student Login" },
                  { href: "/mentor/apply", label: "Mentor Portal" },
                  { href: "/login", label: "Admin Login" },
                ],
              },
              {
                title: "Company",
                links: [
                  { href: "#", label: "About" },
                  { href: "#", label: "Careers" },
                  { href: "#", label: "Contact" },
                ],
              },
              {
                title: "Legal",
                links: [
                  { href: "#", label: "Privacy Policy" },
                  { href: "#", label: "Terms of Use" },
                  { href: "#", label: "Help Center" },
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <p className="font-bold text-white/45 text-[10px] tracking-[0.2em] uppercase mb-5">
                  {col.title}
                </p>

                <ul className="space-y-4 text-sm">
                  {col.links.map((l, i) => (
                    <li key={`${col.title}-${l.label}-${i}`}>
                      {l.href ? (
                        <Link
                          href={l.href}
                          className="hover:text-white/70 transition-colors duration-200"
                        >
                          {l.label}
                        </Link>
                      ) : (
                        <span className="opacity-50">{l.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

          <div className="border-t border-white/[0.06] px-6 sm:px-10 py-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] text-white/20">
            <p>© {new Date().getFullYear()} Kuzana. All rights reserved.</p>
            <p>Strathmore University · School of Computing and Engineering Sciences</p>
          </div>
        </footer>
      </main>
    </>
  );
}