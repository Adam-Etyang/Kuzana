import DashboardShell from "@/components/layout/dashboardshell";
import AdminSidebar from "@/components/layout/adminsidebar";
import PairingCard from "@/components/cards/pairingcard";
import SectionTitle from "@/components/ui/sectiontitle";

export default function PairsPage() {
  return (
    <DashboardShell sidebar={<AdminSidebar />}>
      <SectionTitle
        title="Mentorship Pairings"
        subtitle="Manage active mentorship relationships."
      />

      <div className="grid md:grid-cols-2 gap-6">
        <PairingCard
          student="Aisha Mwangi"
          mentor="Dr. Wanjiru"
        />

        <PairingCard
          student="Brian Otieno"
          mentor="James Otieno"
        />

        <PairingCard
          student="Mercy Achieng"
          mentor="Grace Njeri"
        />

        <PairingCard
          student="David Kimani"
          mentor="John Kamau"
        />
      </div>
    </DashboardShell>
  );
}