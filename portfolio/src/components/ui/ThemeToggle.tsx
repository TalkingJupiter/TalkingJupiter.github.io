"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  // Apply theme to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") setDark(false);
  }, []);

  return (
    <button
      onClick={() => setDark(!dark)}
      className={`relative h-7 w-12 rounded-full p-1 transition-colors
        ${dark ? "bg-[#b7ff5a]" : "bg-neutral-300"}`}
      aria-label="Toggle theme"
    >
      <span
        className={`block h-5 w-5 rounded-full transition-transform
          ${dark ? "translate-x-5 bg-black" : "translate-x-0 bg-white"}`}
      />
    </button>
  );
}
