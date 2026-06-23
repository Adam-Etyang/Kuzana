"use client";

import { useState } from "react";
import Chip from "../ui/chip";

const interests = [
  "Software Engineering",
  "AI",
  "Data Science",
  "Cybersecurity",
  "UX Design",
  "Business",
];

export default function AcademicInterestSelector() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    if (selected.includes(interest)) {
      setSelected(
        selected.filter((item) => item !== interest)
      );
    } else {
      setSelected([...selected, interest]);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-3">
        Academic Interests
      </label>

      <div className="flex flex-wrap gap-3">
        {interests.map((interest) => (
          <Chip
            key={interest}
            label={interest}
            active={selected.includes(interest)}
            onClick={() => toggleInterest(interest)}
          />
        ))}
      </div>
    </div>
  );
}