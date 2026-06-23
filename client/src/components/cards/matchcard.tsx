import Badge from "../ui/badge";

interface MatchCardProps {
  mentor: string;
  score: number;
}

export default function MatchCard({
  mentor,
  score,
}: MatchCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-[#112250]">
            {mentor}
          </h3>

          <p className="text-gray-500 text-sm">
            Compatibility Match
          </p>
        </div>
<div className="mt-4">
  <div className="w-full bg-gray-200 rounded-full h-3">
    <div
      className="bg-[#112250] h-3 rounded-full"
      style={{ width: `${score}%` }}
    />
  </div>
</div>
        <Badge>
          {score}% Match
        </Badge>
        
      </div>
    </div>
  );
}