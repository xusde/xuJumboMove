"use client";
import React, { useState, useEffect, createContext } from "react";

type ThemeContextType = {
  mode: string;
  setMode: (mode: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("");
  // const handleModeChange = () => {
  //   if (
  //     localStorage.getItem("theme") === "dark" &&
  //     !localStorage.getItem("theme") &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ) {
  //     setMode("dark");

  //     document.documentElement.classList.add("dark");
  //   } else {
  //     setMode("light");
  //     document.documentElement.classList.remove("dark");
  //   }
  // };
  const handleThemeChange = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export default ThemeProvider;
