interface BadgeProps {
  children: React.ReactNode;
  tone?: "gold" | "blue" | "gray";
}

export default function Badge({ children, tone = "gold" }: BadgeProps) {
  const styles = {
    gold: "bg-[#E0C58F] text-[#112250]",
    blue: "bg-[#112250] text-white",
    gray: "bg-gray-200 text-gray-700",
  };

  return (
    <span className={`px-3 py-1 text-xs rounded-full font-medium ${styles[tone]}`}>
      {children}
    </span>
  );
}