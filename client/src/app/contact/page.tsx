// app/contact/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Menu,
  X,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="ku-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-[#E0C58F] mb-5">
      {children}
    </p>
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
    <div>
      <label className="ku-mono block text-[9px] tracking-[0.15em] uppercase text-[#112250]/45 mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClasses =
  "w-full bg-transparent border-0 border-b border-[#112250]/25 focus:border-[#E0C58F] pb-2.5 text-[#112250] placeholder:text-[#112250]/30 text-sm outline-none transition-colors duration-200";

export default function ContactPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", role: "student", message: "" });

  const navLinks = [
    { href: "/#clauses", label: "Platform" },
    { href: "/about", label: "About" },
    { href: "/#mentors", label: "Mentors" },
    { href: "/contact", label: "Contact" },
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire this up to your actual endpoint / email service.
    setSubmitted(true);
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');
        body { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
        .ku-serif { font-family: 'Fraunces', Georgia, serif; }
        .ku-mono  { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible {
          outline: 2px solid #E0C58F; outline-offset: 2px;
        }
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
        <section className="bg-[#112250] text-white py-20 md:py-24">
          <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
            <Eyebrow>Correspondence</Eyebrow>
            <h1 className="ku-serif text-[2.75rem] sm:text-[3.25rem] font-normal leading-[1.08] tracking-[-0.01em]">
              Send us
              <br />
              <em className="text-[#E0C58F] not-italic font-normal">a note.</em>
            </h1>
            <p className="mt-6 text-white/55 text-[1.0625rem] leading-[1.8] max-w-md mx-auto">
              Questions about matching, mentor applications, or something else entirely —
              this reaches a real inbox, not a queue.
            </p>
          </div>
        </section>

        {/* ───────────────────── FORM + DIRECTORY ───────────────────── */}
        <section className="max-w-6xl mx-auto px-6 sm:px-10 py-20">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-14">

            {/* Form, styled as an intake record */}
            <div className="bg-white border border-[#112250]/12 p-8 sm:p-10 relative">
              <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#E0C58F]" />
              <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#E0C58F]" />
              <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#E0C58F]" />
              <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#E0C58F]" />

              <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#112250]/15">
                <div>
                  <p className="ku-mono text-[8px] tracking-[0.18em] text-[#112250]/50 uppercase">Kuzana Registry</p>
                  <p className="ku-mono text-[10px] tracking-[0.1em] font-semibold">CORRESPONDENCE INTAKE</p>
                </div>
                <p className="ku-mono text-[8px] text-[#112250]/40">
                  {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }).toUpperCase()}
                </p>
              </div>

              {submitted ? (
                <div className="py-16 text-center">
                  <CheckCircle2 className="w-9 h-9 text-[#E0C58F] mx-auto mb-5" />
                  <p className="ku-serif italic text-2xl text-[#112250]">Message filed.</p>
                  <p className="text-[#112250]/55 text-sm mt-3 max-w-xs mx-auto leading-relaxed">
                    We'll get back to you within a couple of working days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Full name">
                      <input
                        required
                        type="text"
                        placeholder="Aisha Kariuki"
                        className={inputClasses}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </Field>
                    <Field label="Email address">
                      <input
                        required
                        type="email"
                        placeholder="you@strathmore.edu"
                        className={inputClasses}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </Field>
                  </div>

                  <Field label="You are writing as">
                    <div className="flex flex-wrap gap-2 pt-1">
                      {[
                        { id: "student", label: "A student" },
                        { id: "mentor", label: "A mentor" },
                        { id: "other", label: "Something else" },
                      ].map((r) => (
                        <button
                          type="button"
                          key={r.id}
                          onClick={() => setForm({ ...form, role: r.id })}
                          className={`ku-mono text-[10px] px-3.5 py-2 border transition-colors duration-200 ${
                            form.role === r.id
                              ? "border-[#112250] bg-[#112250] text-white"
                              : "border-[#112250]/25 text-[#112250]/60 hover:border-[#112250]/50"
                          }`}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </Field>

                  <Field label="Message">
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us what's on your mind..."
                      className={`${inputClasses} resize-none`}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </Field>

                  <button
                    type="submit"
                    className="group bg-[#112250] text-white px-7 py-4 font-semibold flex items-center justify-center gap-2 hover:bg-[#1a2f60] transition-colors duration-200 text-sm w-full sm:w-auto"
                  >
                    File message
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </div>

            {/* Directory / reach card */}
            <div className="space-y-4">
              <div className="bg-[#112250] text-white p-7">
                <p className="ku-mono text-[9px] tracking-[0.18em] uppercase text-[#E0C58F] mb-6">Directory</p>

                <div className="space-y-6">
                  <div className="flex gap-3.5">
                    <Mail className="w-4 h-4 text-[#E0C58F] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="ku-mono text-[9px] text-white/40 uppercase tracking-wide mb-1">Email</p>
                      <p className="text-sm font-medium">hello@kuzana.app</p>
                    </div>
                  </div>
                  <div className="flex gap-3.5">
                    <MapPin className="w-4 h-4 text-[#E0C58F] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="ku-mono text-[9px] text-white/40 uppercase tracking-wide mb-1">Based at</p>
                      <p className="text-sm font-medium">Strathmore University, Nairobi</p>
                    </div>
                  </div>
                  <div className="flex gap-3.5">
                    <Clock className="w-4 h-4 text-[#E0C58F] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="ku-mono text-[9px] text-white/40 uppercase tracking-wide mb-1">Response time</p>
                      <p className="text-sm font-medium">Within 2 working days</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#112250]/12 p-7">
                <p className="ku-serif italic text-lg text-[#112250] leading-snug">
                  Mentor applications and student sign-ups aren't handled here —
                </p>
                <p className="text-[#112250]/55 text-sm mt-3 leading-relaxed">
                  use the dedicated forms instead, and the message above stays reserved for
                  everything else.
                </p>
                <div className="flex flex-col gap-2.5 mt-6">
                  <Link href="/mentor/apply" className="text-xs font-semibold text-[#112250] hover:text-[#E0C58F] transition-colors">
                    Apply as a mentor →
                  </Link>
                  <Link href="/student/signup" className="text-xs font-semibold text-[#112250] hover:text-[#E0C58F] transition-colors">
                    Sign up as a student →
                  </Link>
                </div>
              </div>
            </div>
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