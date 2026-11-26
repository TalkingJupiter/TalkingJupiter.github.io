import Link from "next/link";

const linkClass =
  "text-xs sm:text-sm text-[#3a3a3a] hover:text-black dark:text-white/90 dark:hover:text-white";

export default function Nav() {
  return (
    <header className="w-full pt-8">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-center px-6">
        <nav className="flex items-center gap-3 rounded-full bg-[#fafafa] px-3 py-2 sm:gap-6 sm:px-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/10 dark:bg-[#141414] dark:ring-white/10">
          <Link className={`${linkClass} hidden sm:inline`} href="/#home">
            Home
          </Link>
          <Link className={linkClass} href="/#about">
            About
          </Link>
          <Link className={linkClass} href="/#research">
            Research
          </Link>
          <Link className={linkClass} href="/#projects">
            Projects
          </Link>
          <Link className={linkClass} href="/story">
            Story
          </Link>
          <Link
            className="ml-1 rounded-full bg-black px-3 py-1.5 text-xs font-medium sm:ml-2 sm:px-4 sm:text-sm text-white hover:bg-black/90 dark:bg-white dark:text-black"
            href="/#contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
