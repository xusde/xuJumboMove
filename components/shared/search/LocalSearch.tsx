import React from "react";
import Image from "next/image";

type LocalSearchProps = {
  iconSrc: string;
  iconPosition: string;
  placeholder: string;
  route: string;
  otherclasses?: string;
};
const LocalSearch = ({
  iconSrc,
  iconPosition,
  placeholder,
  route,
  otherclasses,
}: LocalSearchProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-lg px-4 ${otherclasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={iconSrc}
          alt="search icon"
          width={25}
          height={25}
          className="cursor-pointer"
        />
      )}
      <input
        type="text"
        placeholder={placeholder}
        className=" background-light800_darkgradient placeholder outline-none"
      />
      {iconPosition === "right" && (
        <Image
          src={iconSrc}
          alt="search icon"
          width={25}
          height={25}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearch;
