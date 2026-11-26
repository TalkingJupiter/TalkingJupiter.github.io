import { antonio, inter } from "@/lib/fonts";

type Entry = { title: string; detail: string; meta?: string };

const service: Entry[] = [
  {
    title: "PEARC26 Planning Committee",
    detail: "Helping organize and host the conference.",
  },
  {
    title: "PEARC26 Reviewer",
    detail: "Reviewing technical papers.",
  },
  {
    title: "AAAI Reviewer",
    detail: "Reviewing papers for the AAAI Conference on Artificial Intelligence.",
  },
  {
    title: "SCinet Volunteer, SC26",
    detail:
      "Fiber build, access point placement, PDU power data with DevOps, and the NOC rack lighting.",
  },
];

const awards: Entry[] = [
  {
    title: "2nd Place",
    detail: "Single Board Cluster Competition",
    meta: "2024-2025",
  },
  {
    title: "3rd Place",
    detail: "Winter Classic Invitational Student Cluster Competition, Team Matador",
    meta: "2025",
  },
];

const education: Entry[] = [
  {
    title: "M.S. Computer Science",
    detail: "Texas Tech University",
    meta: "Expected Dec 2028",
  },
  {
    title: "B.S. Computer Science",
    detail:
      "Texas Tech University, concentration in Data Science, AI & Machine Learning",
    meta: "Expected Dec 2026",
  },
  {
    title: "Amarillo College",
    detail: "Where my CS coursework started",
  },
];

export default function Recognition() {
  return (
    <section
      id="recognition"
      className={`${inter.className} w-full text-[#2b2b2b] dark:text-white`}
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2
          className={`${antonio.className} text-5xl font-extrabold tracking-tight`}
        >
          SERVICE, AWARDS & EDUCATION
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <Column title="Service" entries={service} />
          <Column title="Awards" entries={awards} highlight />
          <Column title="Education" entries={education} />
        </div>
      </div>
    </section>
  );
}

function Column({
  title,
  entries,
  highlight = false,
}: {
  title: string;
  entries: Entry[];
  highlight?: boolean;
}) {
  return (
    <div className="rounded-[28px] bg-black/5 p-8 ring-1 ring-black/10 dark:bg-white/5 dark:ring-white/10">
      <h3 className={`${antonio.className} text-2xl font-bold`}>{title}</h3>
      <ul className="mt-6 space-y-6">
        {entries.map((e) => (
          <li key={e.title + e.detail} className="border-l-2 border-[#b7ff5a]/60 pl-4">
            <div
              className={`font-semibold ${
                highlight
                  ? `${antonio.className} text-3xl leading-none text-[#6aa800] dark:text-[#b7ff5a]`
                  : "text-base"
              }`}
            >
              {e.title}
            </div>
            <div className="mt-1 text-sm text-[#5a5a5a] dark:text-white/70">
              {e.detail}
            </div>
            {e.meta && (
              <div className="mt-1 text-xs text-[#5a5a5a] dark:text-white/50">
                {e.meta}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
