import { HomePageFilters } from "@/constants/filters";
import React from "react";

const HomeFiltertags = () => {
  const active = "newest";
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      {HomePageFilters.map((filter) => (
        <button
          className={`btn ${
            active === filter.value
              ? "bg-primary-100 text-orange-400"
              : "bg-light-800 text-slate-500"
          }`}
          key={filter.value}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};

export default HomeFiltertags;
