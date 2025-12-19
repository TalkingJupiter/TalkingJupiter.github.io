import { antonio, inter } from "@/lib/fonts";

export default function About() {
  return (
    <section
      id="about"
      className={`${inter.className} min-h-screen w-full bg-[#f2f2f2] text-[#2b2b2b] dark:bg-[#2f2f2f] dark:text-white`}
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Title */}
        <h2
          className={`${antonio.className} text-5xl font-extrabold tracking-tight`}
        >
          ABOUT ME
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-xl text-sm text-[#5a5a5a] dark:text-white/80">
          Hi, I’m Batuhan, a research assistant and undergraduate–master’s
          student with a strong passion for my work.
        </p>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <Stat value="0.5" label="Years of Experience" />
          <Stat value="2" label="On Going Projects" />
          <Stat value="1" label="Completed Projects" />
        </div>

        {/* Email */}
        <div className="mt-10 text-sm">
          <div className="font-medium">Email:</div>
          <div className="text-[#5a5a5a] dark:text-white/50">
            batuhan.sencer@ttu.edu
          </div>
        </div>

        {/* CTA */}
        <button className="mt-6 rounded-full border border-[#b7ff5a] px-8 py-2 text-sm font-semibold text-[#6aa800] transition hover:bg-[#b7ff5a] hover:text-black dark:text-[#b7ff5a]">
          MY STORY
        </button>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-start">
      {/* Number — Antonio */}
      <div
        className={`${antonio.className} text-[52px] sm:text-[60px] font-medium leading-none text-[#b7ff5a]`}
      >
        {value}
      </div>

      {/* Label — Antonio, 25px, NO underline */}
      <div
        className={`${antonio.className} mt-3 text-[25px] leading-tight tracking-wide text-[#5a5a5a] dark:text-white/90`}
      >
        {label}
      </div>
    </div>
  );
}
