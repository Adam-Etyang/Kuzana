"use client";

import { useState } from "react";

export default function CapacitySelector() {
  const [capacity, setCapacity] = useState("5");

  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        Mentorship Capacity
      </label>

      <select
        value={capacity}
        onChange={(e) => setCapacity(e.target.value)}
        className="w-full border rounded-lg p-3"
      >
        <option value="1">
          1 Student
        </option>

        <option value="3">
          3 Students
        </option>

        <option value="5">
          5 Students
        </option>

        <option value="10">
          10 Students
        </option>
      </select>
    </div>
  );
}