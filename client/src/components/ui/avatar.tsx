interface AvatarProps {
  name: string;
}

export default function Avatar({ name }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="w-10 h-10 rounded-full bg-[#112250] text-[#E0C58F] flex items-center justify-center font-semibold">
      {initials}
    </div>
  );
}