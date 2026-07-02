import Link from "next/link";

export default function MarketingNavbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-[#112250] text-white">
      <div className="font-bold text-[#E0C58F] text-xl">KUZANA</div>

      <div className="flex gap-8 text-sm">
        <Link href="/">Home</Link>
        <Link href="/login">Student</Link>
        <Link href="/mentor/apply">Mentor</Link>
      </div>
    </nav>
  );
}