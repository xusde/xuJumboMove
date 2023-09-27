import React from "react";
import Image from "next/image";

const GlobalSearch = () => {
  return (
    // <div className="relative w-full max-w-[600px] max-lg:hidden">
    //   <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
    //     <Image
    //       src={"/assets/icons/search.svg"}
    //       alt="search"
    //       width={24}
    //       height={24}
    //       className="cursor-pointer"
    //     />
    //     <input
    //       type="text"
    //       placeholder="Search"
    //       value=""
    //       className="paragraph-regular no-focus background-light800_darkgradient placeholder outline-none"
    //     />
    //   </div>
    // </div>
    <div className="join max-lg:hidden ">
      <div>
        <input
          className="background-light800_darkgradient input join-item input-bordered dark:text-slate-300"
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
