import { antonio, inter } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";


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
            title="Reliable Managment of REPACSS Cluster"
            description="End-to-end cluster management through a custom, externally deployed monitoring and validation system."
            image="/projects/reliable.jpg"
            githubUrl="https://github.com/TalkingJupiter/RRMRC"
          />
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
            priority
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
