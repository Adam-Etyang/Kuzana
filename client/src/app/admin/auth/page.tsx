"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Shield,
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
  Activity,
  Users,
  CheckCircle,
} from "lucide-react";

export default function AdminAuthPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validate = () => {
    let valid = true;

    setEmailError("");
    setPasswordError("");

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setEmailError("Email is required.");
      valid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email address.");
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError("Password is required.");
      valid = false;
    }

    return valid;
  };

  const handleLogin = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!validate()) return;

    // TEMP AUTH
    localStorage.setItem("role", "admin");
    localStorage.setItem("token", "mock-token");

    router.push("/admin/dashboard");
  };

  return (
    <main className="min-h-screen flex bg-[#F5F0E9]">

      {/* LEFT PANEL */}
      <section className="hidden lg:flex w-[45%] bg-[#112250] text-white relative overflow-hidden flex-col justify-between p-14">

        <div className="absolute -top-20 -left-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#E0C58F]/10 rounded-full blur-3xl" />

        {/* Brand */}
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 rounded-xl bg-[#E0C58F] flex items-center justify-center">
            <Shield className="w-5 h-5 text-[#112250]" />
          </div>

          <div>
            <h2 className="font-bold tracking-wider text-[#E0C58F]">
              KUZANA ADMIN
            </h2>
          </div>
        </div>

        {/* Hero */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold leading-tight">
            Administrative
            <br />
            <span className="text-[#E0C58F]">
              Control Center
            </span>
          </h1>

          <p className="mt-5 text-white/70 max-w-sm">
            Monitor platform activity, verify mentors,
            manage mentorship relationships, and maintain
            the integrity of the Kuzana ecosystem.
          </p>

          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-[#E0C58F]" />
              <span className="text-sm text-white/80">
                Real-time platform monitoring
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-[#E0C58F]" />
              <span className="text-sm text-white/80">
                Manage mentors and students
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#E0C58F]" />
              <span className="text-sm text-white/80">
                Review and approve applications
              </span>
            </div>

          </div>
        </div>

        <p className="text-xs text-white/30 relative z-10">
          Restricted access • Authorized personnel only
        </p>
      </section>

      {/* RIGHT PANEL */}
      <section className="flex-1 flex items-center justify-center p-6 sm:p-10">

        <div className="w-full max-w-md">

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">

            <div className="text-center mb-8">

              <div className="w-14 h-14 rounded-2xl bg-[#112250]/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-[#112250]" />
              </div>

              <h1 className="text-2xl font-bold text-[#112250]">
                Admin Login
              </h1>

              <p className="text-sm text-gray-500 mt-2">
                Access the Kuzana administration panel.
              </p>
            </div>

            <form
              onSubmit={handleLogin}
              className="space-y-5"
            >

              {/* EMAIL */}
              <div>
                <label className="block mb-2 text-sm font-medium text-[#112250]">
                  Admin Email
                </label>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                  <input
                    type="email"
                    placeholder="admin@kuzana.com"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#112250]/20
                    ${
                      emailError
                        ? "border-red-400"
                        : "border-gray-200"
                    }`}
                  />
                </div>

                {emailError && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {emailError}
                  </p>
                )}
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block mb-2 text-sm font-medium text-[#112250]">
                  Password
                </label>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    className={`w-full pl-10 pr-10 py-3 rounded-xl border text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#112250]/20
                    ${
                      passwordError
                        ? "border-red-400"
                        : "border-gray-200"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {passwordError && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {passwordError}
                  </p>
                )}
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-[#112250] hover:bg-[#1B3475] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
              >
                Access Dashboard
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>

            <div className="mt-6 p-3 rounded-xl bg-red-50 border border-red-100">
              <p className="text-xs text-red-600 text-center">
                Unauthorized access attempts are monitored
                and logged.
              </p>
            </div>

          </div>

          <p className="text-center text-xs text-gray-400 mt-5">
            Kuzana Administration Portal
          </p>

        </div>
      </section>

    </main>
  );
}