"use client";

import { useState } from "react";
import { antonio } from "@/lib/fonts";

export default function LimanCard() {
  // Bumping the key remounts the boat, so every click replays the voyage.
  const [voyage, setVoyage] = useState(0);
  const sailing = voyage > 0;

  return (
    <button
      type="button"
      onClick={() => setVoyage((v) => v + 1)}
      aria-label="Liman, an iOS app. Coming soon."
      className="group flex h-full w-full cursor-pointer flex-col justify-start overflow-hidden rounded-3xl bg-black text-left shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b7ff5a]"
    >
      {/* Sea */}
      <div className="liman-sea relative h-48 w-full shrink-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a2350] via-[#3b2f78] to-[#1b2a4a]" />
        <div className="absolute right-8 top-6 h-10 w-10 rounded-full bg-[#ffe9b0]/80 blur-[1px]" />

        {/* Boat */}
        <div
          key={voyage}
          className={`absolute bottom-[38px] ${sailing ? "liman-boat-sail" : "liman-boat-idle left-[12%]"}`}
        >
          <Boat />
        </div>

        {/* Waves */}
        <Wave className="liman-wave-back bottom-[22px] opacity-40" />
        <Wave className="liman-wave-front -bottom-[2px] opacity-80" />

        {/* Coming soon */}
        {sailing && (
          <div
            key={`soon-${voyage}`}
            className="liman-soon absolute inset-x-0 top-1/2 text-center"
          >
            <span
              className={`${antonio.className} text-4xl font-bold tracking-wide text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]`}
            >
              COMING SOON
            </span>
          </div>
        )}
      </div>

      <div className="px-6 pb-6 pt-5">
        <span className="mb-3 inline-block rounded-full bg-[#b7ff5a] px-4 py-1 text-xs font-semibold text-black">
          iOS App
        </span>
        <h3 className="text-2xl font-extrabold text-white">LIMAN</h3>
        <p className="mt-2 text-sm text-white/75">
          A calm, iOS-native home for your life: work, sport, and the things
          you love, all stored on your device.
        </p>
        <p className="mt-3 text-xs font-semibold text-[#b7ff5a]">
          {sailing ? "Setting sail soon ⛵" : "Tap to set sail →"}
        </p>
      </div>
    </button>
  );
}

function Boat() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
      <line x1="30" y1="6" x2="30" y2="48" stroke="#f5f5f5" strokeWidth="2" />
      <path d="M32 8 L54 44 L32 44 Z" fill="#b7ff5a" />
      <path d="M28 14 L12 42 L28 42 Z" fill="#ffffff" opacity="0.9" />
      <path d="M6 48 L58 48 L50 58 L14 58 Z" fill="#14121a" stroke="#f5f5f5" strokeWidth="1.5" />
    </svg>
  );
}

function Wave({ className }: { className: string }) {
  return (
    <svg
      className={`absolute left-0 h-10 w-[200%] ${className}`}
      viewBox="0 0 800 40"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 20 Q50 5 100 20 T200 20 T300 20 T400 20 T500 20 T600 20 T700 20 T800 20 V40 H0 Z"
        fill="#6f78ff"
      />
    </svg>
  );
}
