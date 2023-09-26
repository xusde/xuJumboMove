"use client";
import React, { useRef } from "react";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import { themes } from "@/constants";
const Theme = () => {
  //   const themeRef = useRef<HTMLDetailsElement>(null);
  const { mode, setMode } = useTheme();
  console.log(mode);

  //   const handleClick = () => {
  //     console.log(themeRef.current);
  //     if (themeRef.current) {
  //       themeRef.current.removeAttribute("open");
  //     }
  //   };
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn">
        {mode === "light" ? (
          <Image
            src={"/assets/icons/sun.svg"}
            alt="sun"
            width={20}
            height={20}
            className="active-theme"
          />
        ) : (
          <Image
            src={"/assets/icons/moon.svg"}
            alt="moon"
            width={20}
            height={20}
            className="active-theme"
          />
        )}
      </label>
      <ul
        tabIndex={0}
        className="menu dropdown-content rounded-box z-[1] w-fit bg-base-100 p-2 pr-4 shadow"
      >
        {themes.map((theme) => (
          <li key={theme.value}>
            <button
              className="flex-between gap-2"
              onClick={() => {
                setMode(theme.value);
                if (theme.value !== "system") {
                  localStorage.setItem("theme", theme.value);
                } else {
                  localStorage.removeItem("theme");
                }
              }}
            >
              <Image
                src={theme.icon}
                width={18}
                height={18}
                alt={theme.value}
              />
              <p
              // className={`${
              //   mode === theme.value
              //     ? "text-primary-500"
              //     : "text-dark100_light900"
              // }`}
              >
                {theme.label}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Theme;
