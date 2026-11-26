import Image from "next/image";
import Nav from "@/components/ui/Nav";
import { antonio, inter } from "@/lib/fonts";

export default function Hero() {
  return (
    <div
      className={`${inter.className} min-h-screen w-full text-[#2b2b2b] dark:text-white`}
    >
      <Nav />

      {/* STAGE */}
      <main id="home" className="mx-auto w-full max-w-6xl px-6 pb-16 pt-12">
        <div className="relative mx-auto h-[520px] w-full">
          {/* Card (behind text) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[52%] z-0">
            <div className="relative">
              <div className="relative h-[420px] w-[330px] overflow-hidden rounded-[28px] bg-[#6f78ff]/60 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:h-[460px] sm:w-[360px]">
                <Image
                  src="/me.JPG"
                  alt="Batuhan Sencer"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Hi bubble */}
              <div className="absolute -left-6 -bottom-6 sm:-left-8 sm:-bottom-8">
                <div className="h-24 w-24 rounded-full bg-[#b7ff5a] shadow-[0_18px_50px_rgba(183,255,90,0.35)] flex items-center justify-center">
                  <span
                    className={`${antonio.className} text-4xl font-semibold text-black`}
                  >
                    Hi
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* LEFT TEXT — NAME + RESEARCH (UPPER) */}
          <div className="absolute left-0 top-[38%] -translate-y-1/2 z-20">
            <div className="mb-3 text-xs tracking-[0.35em] text-[#5a5a5a] dark:text-white/70">
              BATUHAN SENCER
            </div>
            <div
              className={`${antonio.className} text-[64px] font-extrabold leading-[0.9] sm:text-[84px]`}
            >
              Research
            </div>
          </div>

          {/* RIGHT TEXT — ASSISTANT (LOWER) */}
          <div className="absolute right-0 top-[56%] -translate-y-1/2 z-10">
            <div className="flex flex-col items-end">
              <div
                className={`${antonio.className} text-[56px] font-extrabold leading-[0.95] sm:text-[72px]`}
              >
                Assistant
              </div>
              <div className="mt-3 max-w-[260px] text-right text-xs text-[#5a5a5a] dark:text-white/70">
                I&apos;m a US-based research assistant and a BS/MS Computer Science student at Texas Tech
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
