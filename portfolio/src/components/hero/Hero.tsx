import Image from "next/image";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { antonio, inter } from "@/lib/fonts";

export default function Hero() {
  return (
    <div
      className={`${inter.className} min-h-screen w-full bg-[#f2f2f2] text-[#2b2b2b] dark:bg-[#2f2f2f] dark:text-white`}
    >
      {/* Top nav */}
      <header className="w-full pt-8">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-center px-6">
          <nav className="flex items-center gap-6 rounded-full bg-[#fafafa] px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/10 dark:bg-[#141414] dark:ring-white/10">
            <div className="h-6 w-6 rounded-full bg-black/20 dark:bg-white/80" />

            <a className="text-sm text-[#3a3a3a] hover:text-black dark:text-white/90 dark:hover:text-white" href="#home">
              Home
            </a>
            <a className="text-sm text-[#3a3a3a] hover:text-black dark:text-white/90 dark:hover:text-white" href="#about">
              About
            </a>
            <a className="text-sm text-[#3a3a3a] hover:text-black dark:text-white/90 dark:hover:text-white" href="#projects">
              Projects
            </a>

            <a
              className="ml-2 rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white hover:bg-black/90 dark:bg-white dark:text-black"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* STAGE */}
      <main id="home" className="mx-auto w-full max-w-6xl px-6 pb-16 pt-12">
        <div className="relative mx-auto h-[520px] w-full">
          {/* Card */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[52%]">
            <div className="relative">
              <div className="relative h-[420px] w-[330px] overflow-hidden rounded-[28px] bg-[#6f78ff]/60 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:h-[460px] sm:w-[360px]">
                <Image
                  src="/me.jpg"
                  alt="Portrait"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Hi bubble */}
              <div className="absolute -left-6 -bottom-6 sm:-left-8 sm:-bottom-8">
                <div className="h-24 w-24 rounded-full bg-[#b7ff5a] shadow-[0_18px_50px_rgba(183,255,90,0.35)] flex items-center justify-center">
                  <span className={`${antonio.className} text-4xl text-black`}>
                    Hi
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Left text */}
          <div className="absolute left-0 top-1/2 -translate-y-[55%]">
            <div className="mb-3 text-xs tracking-[0.35em] text-[#5a5a5a] dark:text-white/70">
              BATUHAN SENCER
            </div>
            <div className={`${antonio.className} text-[64px] font-extrabold leading-[0.9] sm:text-[84px]`}>
              Research
            </div>
          </div>

          {/* Right text */}
          <div className="absolute right-0 top-1/2 -translate-y-[35%]">
            <div className="flex flex-col items-end">
              <div className={`${antonio.className} text-[64px] font-extrabold leading-[0.9] sm:text-[84px]`}>
                Assistant
              </div>
              <div className="mt-3 max-w-[260px] text-right text-xs text-[#5a5a5a] dark:text-white/70">
                I’m a US-based research assistant and an undergrad student
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 flex justify-center">
          <ThemeToggle />
        </div>
      </main>
    </div>
  );
}
