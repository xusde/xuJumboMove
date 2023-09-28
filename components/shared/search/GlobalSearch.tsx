import React from "react";
import Image from "next/image";

const GlobalSearch = () => {
  return (
    <div className="join w-full max-w-[600px] flex-1 max-lg:hidden">
      <div className="flex-1">
        <input
          className="background-light800_darkgradient input join-item input-bordered w-full dark:text-slate-300"
          placeholder="Search Globally"
        />
      </div>

      <div className="indicator">
        <span className="badge indicator-item badge-accent dark:text-slate-200">
          Jumbo
        </span>
        <button className="btn join-item dark:text-slate-400">Search</button>
      </div>
    </div>
  );
};
export default GlobalSearch;
