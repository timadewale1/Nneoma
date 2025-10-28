import React from "react";

const publications = [
  {
    title:
      "Living breathless: A journey through asthma gender disparities and environmental health in Nigeria",
    venue: "Policy Brief",
    year: 2024,
  },
  {
    title:
      "Gender and Clean Cooking: Enhancing Health and Environmental Outcomes in Low-Income Areas, Policy Note",
    venue: "Research Report",
    year: 2024,
  },
  {
    title:
      "Embracing Diversity: A journey towards inspired inclusion, Internal Report, Clean Technology Hub",
    venue: "Journal Article",
    year: 2024,
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
