import DashboardShell from "@/components/layout/dashboardshell";
import AdminSidebar from "@/components/layout/adminsidebar";
import Link from "next/link";

const pairs = [
  {
    student: "Mary Wambui",
    mentor: "James Mutua",
    date: "June 2026",
    score: "92%",
    status: "Active",
  },
  {
    student: "Brian Otieno",
    mentor: "Rose Wanjiku",
    date: "May 2026",
    score: "84%",
    status: "Flagged",
  },
];

export default function MentorshipPairsPage() {
  return (
    <DashboardShell sidebar={<AdminSidebar />}>
      <h1 className="text-2xl font-bold text-[#112250] mb-6">
        Mentorship Pairs
      </h1>

      <div className="flex gap-3 mb-6">
        <button className="bg-[#112250] text-white px-4 py-2 rounded-lg">
          Active
        </button>

        <button className="border px-4 py-2 rounded-lg">
          Completed
        </button>

        <button className="border px-4 py-2 rounded-lg">
          Flagged
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {pairs.map((pair) => (
          <div
            key={pair.student}
            className="bg-white border rounded-xl p-6"
          >
            <h3 className="font-semibold text-[#112250]">
              {pair.student} ↔ {pair.mentor}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Started: {pair.date}
            </p>

            <p className="text-sm text-gray-500">
              Match Score: {pair.score}
            </p>

            <span
              className={`inline-block mt-4 px-3 py-1 rounded-full text-xs ${
                pair.status === "Flagged"
                  ? "bg-red-100 text-red-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              {pair.status}
            </span>

            <div className="mt-5">
              <Link
                href="#"
                className="text-[#112250] font-medium"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}