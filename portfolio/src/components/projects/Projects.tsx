import { antonio, inter } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import LimanCard from "./LimanCard";


export default function Projects() {
  return (
    <section
      id="projects"
      className={`${inter.className} min-h-screen w-full text-[#2b2b2b] dark:text-white`}
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Section header */}
        <h2
          className={`${antonio.className} text-5xl font-extrabold tracking-tight`}
        >
          FEATURED PROJECTS
        </h2>

        <p className="mt-4 max-w-2xl text-sm text-[#5a5a5a] dark:text-white/80">
          These selected projects reflect my passion for blending strategy with
          creativity — solving real problems through thoughtful system design
          and impactful experiences.
        </p>

        {/* Projects list */}
        <div className="mt-14 space-y-16">
          <ProjectCard
            tag="Research"
            title="KNOWLEDGE DISTILLATION ON LLMS"
            description="Designed and ran knowledge distillation experiments for large language models, analyzing performance-efficiency trade-offs between teacher and student models."
            image="/projects/kd.jpg"
            githubUrl="https://github.com/TalkingJupiter/Energy-Aware-Knowledge-Distillation"
          />
          <ProjectCard
            tag="Research / Operations"
            title="Reliable Management of REPACSS Cluster"
            description="End-to-end cluster management through a custom, externally deployed monitoring and validation system."
            image="/projects/reliable.jpg"
            githubUrl="https://github.com/nsfcac/ReliableRemoteManagement"
          />
        </div>

        {/* More projects */}
        <h3
          className={`${antonio.className} mt-20 text-3xl font-extrabold tracking-tight`}
        >
          MORE PROJECTS
        </h3>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <MiniCard
            tag="SC26 / Hardware"
            title="SCINET CLUSTER LIGHTING"
            description="LED lighting for the SCinet NOC racks at SC26. Racks show live power as kW meters and light up the exact units a visitor asks about from the kiosk."
            href="https://github.com/TalkingJupiter/SCiNET-Cluster-Lighting"
            stack={["Python", "FastAPI", "WLED", "WS2815"]}
            art={<RackArt />}
          />
          <MiniCard
            tag="HPC Tooling"
            title="REPACSS JOB SCRIPT GENERATOR"
            description="A web tool that builds ready-to-run Slurm job scripts for REPACSS users, live on the cluster's website."
            href="https://repacss.org/job-script-generator"
            stack={["Astro", "TypeScript", "Slurm"]}
            art={<ScriptArt />}
          />
          <LimanCard />
        </div>
      </div>
    </section>
  );
}


function ProjectCard({
  tag,
  title,
  description,
  image,
  githubUrl,
}: {
  tag: string;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
}) {
  return (
    <Link
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="relative cursor-pointer overflow-hidden rounded-3xl bg-black shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
        {/* Image */}
        <div className="relative h-[420px] w-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1152px) 100vw, 1104px"
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end px-8 pb-8">
          <span className="mb-4 inline-block w-fit rounded-full bg-[#b7ff5a] px-5 py-1 text-xs font-semibold text-black">
            {tag}
          </span>

          <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
            {title}
          </h3>

          <p className="mt-2 max-w-2xl text-sm text-white/80">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

function MiniCard({
  tag,
  title,
  description,
  href,
  stack,
  art,
}: {
  tag: string;
  title: string;
  description: string;
  href: string;
  stack: string[];
  art: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-black shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b7ff5a]"
    >
      <div className="relative h-48 w-full shrink-0 overflow-hidden">{art}</div>
      <div className="px-6 pb-6 pt-5">
        <span className="mb-3 inline-block rounded-full bg-[#b7ff5a] px-4 py-1 text-xs font-semibold text-black">
          {tag}
        </span>
        <h3 className="text-2xl font-extrabold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/75">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/80"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

/** Eight racks with animated power meters, like the NOC racks at SC26. */
function RackArt() {
  const racks = [
    { lo: "25%", hi: "60%", dur: "2.1s" },
    { lo: "40%", hi: "85%", dur: "2.7s" },
    { lo: "15%", hi: "45%", dur: "1.9s" },
    { lo: "55%", hi: "95%", dur: "3.1s" },
    { lo: "30%", hi: "70%", dur: "2.4s" },
    { lo: "20%", hi: "55%", dur: "2.2s" },
    { lo: "45%", hi: "80%", dur: "2.9s" },
    { lo: "10%", hi: "40%", dur: "2.0s" },
  ];
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-3 bg-gradient-to-b from-[#1a1626] to-[#0d0b12] px-6 pb-6 pt-8">
      {racks.map((r, i) => (
        <div
          key={i}
          className="relative h-full w-6 overflow-hidden rounded-md bg-white/5 ring-1 ring-white/10"
        >
          <div
            className="rack-meter absolute bottom-0 w-full bg-gradient-to-t from-[#4ade80] via-[#facc15] to-[#ef4444] bg-[length:100%_9rem] bg-bottom shadow-[0_0_18px_rgba(183,255,90,0.35)]"
            style={
              {
                "--lo": r.lo,
                "--hi": r.hi,
                "--dur": r.dur,
              } as React.CSSProperties
            }
          />
        </div>
      ))}
    </div>
  );
}

/** A Slurm script in a terminal window. */
function ScriptArt() {
  const lines = [
    ["#!/bin/bash", "text-white/50"],
    ["#SBATCH --job-name=train", "text-[#b7ff5a]"],
    ["#SBATCH --nodes=1", "text-[#b7ff5a]"],
    ["#SBATCH --gpus-per-node=4", "text-[#b7ff5a]"],
    ["#SBATCH --time=02:00:00", "text-[#b7ff5a]"],
    ["srun python train.py", "text-white/80"],
  ];
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#2a2350] to-[#14121a] p-4">
      <div className="h-full overflow-hidden rounded-xl bg-[#0d0b12] ring-1 ring-white/10">
        <div className="flex gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#facc15]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4ade80]/80" />
        </div>
        <pre className="px-4 py-2.5 font-mono text-[11px] leading-[18px]">
          {lines.map(([t, c]) => (
            <div key={t} className={c}>
              {t}
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}
