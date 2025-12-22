import { antonio, inter } from "@/lib/fonts";
import Link from "next/link";
import { text } from "stream/consumers";


export default function Story() {
  return (
    <section
      id="story"
      className={`${inter.className} w-full text-[#2b2b2b] dark:text-white`}
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2
              className={`${antonio.className} text-5xl font-extrabold tracking-tight`}
            >
              MY STORY
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-[#5a5a5a] dark:text-white/70">
              A short, honest narrative — the kind recruiters actually read.
              Research + systems + taste for clean design.
            </p>
          </div>

          {/* little tag */}
          <div className="inline-flex w-fit items-center rounded-full border border-[#b7ff5a]/60 bg-[#b7ff5a]/10 px-4 py-2 text-xs font-semibold text-[#6aa800] dark:text-[#b7ff5a]">
            Research • HPC • LLM Distillation
          </div>
        </div>

        {/* Main grid */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left: timeline */}
          <div className="lg:col-span-7">
            <div className="rounded-[28px] bg-black/5 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.15)] ring-1 ring-black/10 dark:bg-white/5 dark:ring-white/10">
              <h3 className={`${antonio.className} text-2xl font-bold`}>
                Timeline
              </h3>

              <div className="mt-8 space-y-8">
                <TimelineItem
                  year="Now"
                  title="Energy-aware ML systems + Knowledge Distillation"
                  desc="I build reproducible KD pipelines, measure GPU/CPU power, and connect performance retention to energy-per-token. I like research that ships."
                />
                {/* <TimelineItem
                  year="2024-2025"
                  title="HPC + telemetry obsession"
                  desc="SLURM workflows, GPU telemetry logging, cluster realities (the fun kind). I learned that clean experiments beat clever plots."
                /> */}
                <TimelineYear
                  year="2024-2025"
                  items={[
                    {
                      title: "Single Board Cluster Competition",
                      desc: "A Single Board Cluster Competition challenges student teams to design, tune, and operate a parallel SBC-based HPC system by running standard benchmarks like HPL and HPCG, alongside optimizing a mystery parallel simulation application that tests real-world performance, scalability, and system engineering skills. Placed 2nd",
                    },
                    {
                      title: "2025 Winter Classic Invitational Student Cluster Competition",
                      desc: "The Winter Classic Invitational Student Cluster Competition is a virtual, mentor-guided HPC competition where top student teams optimize real scientific applications on national-lab-scale systems and showcase both performance and presentation skills. Team Matador: Placed 3rd",
                    },
                  ]}
                />

                <TimelineItem
                  year="Before"
                  title="Software engineering foundations"
                  desc="Web tooling, internal apps, and learning to design interfaces that feel intentional — not accidental."
                />
              </div>
            </div>
          </div>

          {/* Right: highlights + values */}
          <div className="lg:col-span-5">
            <div className="rounded-[28px] bg-black/5 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.15)] ring-1 ring-black/10 dark:bg-white/5 dark:ring-white/10">
              <h3 className={`${antonio.className} text-2xl font-bold`}>
                What I optimize for
              </h3>

              <div className="mt-6 space-y-4">
                {/* <Pill title="Benchmarking" text="Test the supercomputing systems so see its limits." /> */}
                <Pill title="Clarity" text="Readable code, readable results." />
                <Pill title="Systems thinking" text="Measure reality, not vibes." />
                <Pill title="Craft" text="Design that looks calm and intentional." />
              </div>

              <div className="mt-10">
                <h4 className={`${antonio.className} text-xl font-bold`}>
                  Current focus - Knowledge Distillation Methods on LLMs
                </h4>
                <p className="mt-3 text-sm text-[#5a5a5a] dark:text-white/70">
                  Publishing strong results around energy-efficient distillation
                  that proves I can do both: research
                  rigor and production-quality engineering.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Tag>TypeScript</Tag>
                  <Tag>SLURM</Tag>
                  <Tag>PyTorch</Tag>
                  <Tag>Telemetry</Tag>
                </div>
              </div>
              <div className="mt-10">
                <h4 className={`${antonio.className} text-x1 font-bold`}>
                  Side Project - Reliable Cluster Managment
                </h4>
                <p className="mt-3 text-sm text-[#5a5a5a] dark:text-white/70">
                  Publishing robust results in reliable cluster management while designing, 
                  esting, and deploying a custom monitoring system—demonstrating both research 
                  rigor and production-grade engineering through end-to-end system design, 
                  hardware-level coding with 20+ I²C devices, and full system deployment.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Tag>C#</Tag>
                  <Tag>Radxa X4</Tag>
                  <Tag>I2C</Tag>
                  <Tag>Network</Tag>
                  <Tag>System Design</Tag>
                  <Tag>Monitoring Systems</Tag>
                </div>
              </div>

            </div>

            {/* Quote card */}
            <div className="mt-10 rounded-[28px] bg-[#b7ff5a]/15 p-8 ring-1 ring-[#b7ff5a]/40">
              <div className={`${antonio.className} text-xl font-bold text-black dark:text-white`}>
                “Small models. Big measurements.”
              </div>
              <p className="mt-3 text-sm text-black/70 dark:text-white/70">
                I'm most interested in work where performance claims come with
                real system evidence.
              </p>
            </div>
          </div>
          <div className="rounded-[28px] bg-[#b7ff5a]/15 p-8 ring-1 ring-[#b7ff5a]/40">
              <div className={`${antonio.className} text-xl font-bold text-black dark:text-white`}>
                “Real systems. Real measurements.”
              </div>
              <p className="mt-3 text-sm text-black/70 dark:text-white/70">
                I also play a role in reliable cluster management where operational claims are backed by concrete, 
                end-to-end system evidence.
              </p>
            </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-[28px] bg-black/5 p-8 ring-1 ring-black/10 dark:bg-white/5 dark:ring-white/10 sm:flex-row sm:items-center">
          <div>
            <div className={`${antonio.className} text-2xl font-bold`}>
              Want the long version?
            </div>
            <div className="mt-2 text-sm text-[#5a5a5a] dark:text-white/70">
              I can share a 1-page research summary + links to code and results.
            </div>
          </div>

          <a
            href="/#contact"
            className={`${antonio.className} inline-flex rounded-full border border-[#b7ff5a] px-10 py-2 text-sm font-semibold text-[#6aa800] transition hover:bg-[#b7ff5a] hover:text-black dark:text-[#b7ff5a]`}
          >
            LET'S TALK
          </a>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  year,
  title,
  desc,
}: {
  year: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-[#b7ff5a] shadow-[0_10px_30px_rgba(183,255,90,0.35)]" />
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold text-[#6aa800] dark:text-[#b7ff5a]">
          {year}
        </span>
        <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
      </div>
      <div className={`${antonio.className} mt-3 text-xl font-bold`}>
        {title}
      </div>
      <p className="mt-2 text-sm text-[#5a5a5a] dark:text-white/70">{desc}</p>
    </div>
  );
}

function TimelineYear({
  year,
  items,
}: {
  year: string;
  items: { title: string; desc: string }[];
}) {
  return (
    <div className="relative pl-8">
      {/* Dot */}
      <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-[#b7ff5a] shadow-[0_10px_30px_rgba(183,255,90,0.35)]" />

      {/* Year header */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold text-[#6aa800] dark:text-[#b7ff5a]">
          {year}
        </span>
        <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
      </div>

      {/* Items */}
      <div className="mt-6 space-y-6">
        {items.map((item, i) => (
          <div key={i}>
            <div className={`${antonio.className} text-xl font-bold`}>
              {item.title}
            </div>
            <p className="mt-1 text-sm text-[#5a5a5a] dark:text-white/70">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}


function Pill({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-black/5 px-5 py-4 ring-1 ring-black/10 dark:bg-white/5 dark:ring-white/10">
      <div className={`${antonio.className} text-lg font-bold`}>{title}</div>
      <div className="mt-1 text-sm text-[#5a5a5a] dark:text-white/70">{text}</div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-[#4a4a4a] dark:border-white/10 dark:bg-white/5 dark:text-white/70">
      {children}
    </span>
  );
}
