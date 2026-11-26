import { antonio, inter } from "@/lib/fonts";

const papers = [
  {
    title:
      "Agreement Is Not Enough: HPC Power Measurements Across Paths and Boundaries",
    topic: "HPC power measurement",
  },
  {
    title: "The Token-Energy Law of LLM Decode",
    topic: "LLM inference energy",
  },
];

export default function Research() {
  return (
    <section
      id="research"
      className={`${inter.className} w-full text-[#2b2b2b] dark:text-white`}
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2
          className={`${antonio.className} text-5xl font-extrabold tracking-tight`}
        >
          RESEARCH
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-[#5a5a5a] dark:text-white/80">
          Measuring how much energy real systems use, from the power meters on
          an HPC rack down to every token a language model generates.
        </p>

        <h3
          className={`${antonio.className} mt-12 text-2xl font-bold tracking-wide text-[#6aa800] dark:text-[#b7ff5a]`}
        >
          UNDER REVIEW
        </h3>

        <ul className="mt-6 space-y-4">
          {papers.map((p) => (
            <li
              key={p.title}
              className="flex flex-col gap-4 rounded-[28px] bg-black/5 p-6 ring-1 ring-black/10 transition hover:ring-[#b7ff5a]/50 dark:bg-white/5 dark:ring-white/10 sm:flex-row sm:items-center sm:justify-between sm:p-8"
            >
              <div>
                <div className="text-lg font-semibold leading-snug sm:text-xl">
                  {p.title}
                </div>
                <div className="mt-2 text-xs text-[#5a5a5a] dark:text-white/60">
                  Co-author · {p.topic}
                </div>
              </div>
              <span className="w-fit shrink-0 rounded-full border border-[#b7ff5a]/60 bg-[#b7ff5a]/10 px-4 py-1 text-xs font-semibold text-[#6aa800] dark:text-[#b7ff5a]">
                Under review
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
