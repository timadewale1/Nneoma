import React from "react";

const publications = [
  {
    title: "Nigeria's Energy Transition: Opportunities and Finance Gaps",
    venue: "Policy Brief",
    year: 2024,
  },
  {
    title: "Climate Finance Landscape in West Africa",
    venue: "Research Report",
    year: 2023,
  },
  {
    title: "Adaptation Strategies for Coastal Communities",
    venue: "Journal Article",
    year: 2022,
  },
];

const Publications = () => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Selected Publications</h3>
      <ul className="flex flex-col gap-3">
        {publications.map((p, i) => (
          <li key={i} className="text-sm text-white/80">
            <span className="font-semibold">{p.title}</span>
            <div className="text-xs text-white/60">
              {p.venue} — {p.year}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;
