interface ChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function Chip({ label, active = false, onClick }: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm border transition ${
        active
          ? "bg-[#112250] text-white border-[#112250]"
          : "bg-white text-[#112250] border-gray-300 hover:border-[#112250]"
      }`}
    >
      {label}
    </button>
  );
}