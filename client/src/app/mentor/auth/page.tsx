import Link from "next/link";
export default function MentorAuthPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E9] flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#112250]">
            KUZANA
          </h1>

          <div className="mt-3 inline-block bg-[#F5F0E9] px-3 py-1 rounded-full text-sm">
            MENTOR PORTAL
          </div>

          <h2 className="mt-4 text-2xl font-semibold text-[#112250]">
            Become a Mentor
          </h2>
        </div>

        <form className="mt-8 space-y-4">
          <input
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            placeholder="Professional Email"
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            placeholder="Organization / Role"
            className="w-full border rounded-lg px-4 py-3"
          />
          <input
            placeholder=" Reason for applying"
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3"
          />

          <button className="w-full bg-[#112250] text-white py-3 rounded-lg">
            Submit Application
          </button>
        </form>
      </div>
      <div className="mt-6 text-center text-sm text-gray-500">
  Already approved?

  <Link
    href="/mentor/login"
    className="ml-1 text-[#112250] font-medium"
  >
    Sign In
  </Link>
</div>
    </main>
  );
}