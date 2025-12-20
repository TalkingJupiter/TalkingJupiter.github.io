// "use client";

// import { useEffect, useState } from "react";

// type Theme = "dark" | "light";

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState<Theme>("dark");

//   // Load saved theme on first mount
//   useEffect(() => {
//     const saved = (localStorage.getItem("theme") as Theme | null) ?? null;
//     const initial: Theme = saved ?? "dark";
//     setTheme(initial);
//   }, []);

//   // Apply theme to <html> whenever theme changes
//   useEffect(() => {
//     const root = document.documentElement;

//     if (theme === "dark") {
//       root.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       root.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [theme]);

//   const isDark = theme === "dark";

//   return (
//     <button
//       type="button"
//       aria-label="Toggle theme"
//       onClick={() => setTheme(isDark ? "light" : "dark")}
//       className={`relative h-7 w-12 rounded-full p-1 transition-colors
//         ${isDark ? "bg-[#b7ff5a]/90" : "bg-[#d7d7d7]"}`}
//     >
//       <span
//         className={`block h-5 w-5 rounded-full transition-transform
//           ${isDark ? "translate-x-5 bg-black/90" : "translate-x-0 bg-white"}`}
//       />
//     </button>
//   );
// }
