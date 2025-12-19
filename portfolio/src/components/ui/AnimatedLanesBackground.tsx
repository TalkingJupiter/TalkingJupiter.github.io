"use client";

export default function AnimatedLanesBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base wash (lavender paper / deep ink) */}
      <div className="absolute inset-0 bg-[#f6f3ff] dark:bg-[#14121a]" />

      {/* Soft color fog (adds purple presence) */}
      <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-40 dark:opacity-50
                      bg-[radial-gradient(circle_at_center,rgba(160,80,255,0.45),transparent_60%)]" />
      <div className="absolute -right-48 top-24 h-[560px] w-[560px] rounded-full blur-3xl opacity-30 dark:opacity-45
                      bg-[radial-gradient(circle_at_center,rgba(120,70,255,0.35),transparent_60%)]" />
      <div className="absolute left-1/4 bottom-[-220px] h-[620px] w-[620px] rounded-full blur-3xl opacity-25 dark:opacity-35
                      bg-[radial-gradient(circle_at_center,rgba(200,160,255,0.30),transparent_65%)]" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_55%)]
                      dark:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.45),transparent_55%)]" />

      {/* Purple lanes group */}
      <div className="absolute inset-0">
        <div className="lane lane-1" />
        <div className="lane lane-2" />
        <div className="lane lane-3" />
        <div className="lane lane-4" />
      </div>

      {/* Grain (optional) */}
      {/* Remove this line if you don’t have /public/noise.png */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay dark:opacity-[0.06] bg-[url('/noise.png')] bg-repeat" />
    </div>
  );
}
