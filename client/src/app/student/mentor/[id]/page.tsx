import DashboardShell from "@/components/layout/dashboardshell";
import StudentSidebar from "@/components/layout/studentsidebar";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";
import { Briefcase, Building2, CheckCircle, Star } from "lucide-react";

export default function MentorProfilePage() {
  return (
    <DashboardShell sidebar={<StudentSidebar />}>
      
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-10">

        {/* HERO SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10">

          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-[#112250] text-[#E0C58F]
                          flex items-center justify-center text-3xl font-bold shadow-md">
            DW
          </div>

          {/* Identity */}
          <div className="flex-1">
            
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-3xl font-bold text-[#112250]">
                Dr. Wanjiru
              </h1>

              <div className="flex items-center gap-1 text-xs text-[#E0C58F]">
                <Star className="w-3.5 h-3.5 fill-[#E0C58F]" />
                Verified Mentor
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600 mt-1">
              <Briefcase className="w-4 h-4 text-gray-400" />
              <p>Senior Software Engineer</p>
            </div>

            <div className="flex items-center gap-2 text-gray-500 mt-1">
              <Building2 className="w-4 h-4" />
              <p>Safaricom</p>
            </div>

            <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" />
              Available for mentorship
            </p>
          </div>

          {/* CTA */}
          <div className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-[#112250] hover:bg-[#1B3475] text-white transition">
              Request Mentorship
            </Button>
          </div>
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-10">
          <Badge>Software Engineering</Badge>
          <Badge>Career Growth</Badge>
          <Badge>Leadership</Badge>
          <Badge>Interview Prep</Badge>
        </div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* MAIN CONTENT */}
          <div className="md:col-span-2 space-y-8">

            {/* ABOUT */}
            <div>
              <h2 className="font-semibold text-lg text-[#112250] mb-3">
                About
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Experienced software engineer with 10+ years in the industry,
                specializing in scalable systems, backend architecture, and
                mentoring early-career developers. Passionate about helping
                students transition into real-world engineering roles with
                confidence and clarity.
              </p>
            </div>

            {/* MENTORSHIP AREAS */}
            <div>
              <h2 className="font-semibold text-lg text-[#112250] mb-3">
                Mentorship Areas
              </h2>

              <ul className="space-y-2 text-gray-600">
                <li>• Software Engineering fundamentals & best practices</li>
                <li>• Career development & industry readiness</li>
                <li>• Technical interview preparation</li>
                <li>• System design & backend architecture basics</li>
              </ul>
            </div>
          </div>

          {/* SIDE INFO PANEL */}
          <div className="bg-[#F5F0E9] rounded-xl p-5 h-fit border border-[#E0C58F]/40">

            <h3 className="font-semibold text-[#112250] mb-4">
              Mentor Snapshot
            </h3>

            <div className="space-y-3 text-sm text-gray-700">

              <div>
                <p className="text-gray-500 text-xs">Experience</p>
                <p className="font-medium">10+ Years</p>
              </div>

              <div>
                <p className="text-gray-500 text-xs">Industry</p>
                <p className="font-medium">Tech / Telecommunications</p>
              </div>

              <div>
                <p className="text-gray-500 text-xs">Mentorship Style</p>
                <p className="font-medium">Structured & Practical</p>
              </div>

              <div>
                <p className="text-gray-500 text-xs">Response Rate</p>
                <p className="font-medium text-green-600">Fast</p>
              </div>

            </div>

            <div className="mt-6">
              <Button className="w-full bg-[#112250] hover:bg-[#1B3475] text-white">
                Request Mentorship
              </Button>
            </div>
          </div>

        </div>

      </div>
    </DashboardShell>
  );
}