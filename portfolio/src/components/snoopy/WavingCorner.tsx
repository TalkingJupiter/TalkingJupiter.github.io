"use client";

import { useSyncExternalStore } from "react";

type Season = {
  gif: string;
  /** Inclusive [month, day] range. Ranges may wrap the new year. */
  from: [number, number];
  to: [number, number];
};

// First match wins. Months are 1-12.
const SEASONS: Season[] = [
  { gif: "snoopy-tree.gif", from: [12, 1], to: [12, 19] },
  { gif: "snoopy-newyears.gif", from: [12, 20], to: [1, 2] },
  { gif: "snoopy-plane.gif", from: [3, 20], to: [5, 31] },
  { gif: "snoopy-fishing.gif", from: [6, 1], to: [8, 31] },
];

const WEEKEND_GIF = "SnoopyHat.gif";
const DEFAULT_GIF = "snoopy-working.gif";

const ALL = new Set([
  ...SEASONS.map((s) => s.gif),
  WEEKEND_GIF,
  DEFAULT_GIF,
]);

function inRange(m: number, d: number, s: Season) {
  const v = m * 100 + d;
  const a = s.from[0] * 100 + s.from[1];
  const b = s.to[0] * 100 + s.to[1];
  return a <= b ? v >= a && v <= b : v >= a || v <= b;
}

export function pickSnoopy(date: Date) {
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const season = SEASONS.find((s) => inRange(m, d, s));
  if (season) return season.gif;
  const day = date.getDay();
  return day === 0 || day === 6 ? WEEKEND_GIF : DEFAULT_GIF;
}

function clientSnoopy() {
  // Preview any Snoopy with ?snoopy=tree, ?snoopy=fishing, etc.
  const q = new URLSearchParams(window.location.search).get("snoopy");
  const forced = q
    ? [...ALL].find((g) => g.toLowerCase().includes(q.toLowerCase()))
    : undefined;
  return forced ?? pickSnoopy(new Date());
}

const noopSubscribe = () => () => {};

export default function SnoopyWave() {
  // Rendered on the client only, so it uses the visitor's date, not the build date.
  const gif = useSyncExternalStore(noopSubscribe, clientSnoopy, () => null);

  if (!gif) return null;

  return (
    <div className="snoopy">
      {/* eslint-disable-next-line @next/next/no-img-element -- tiny animated GIF, no optimization needed */}
      <img src={`/snoopy/${gif}`} alt="" aria-hidden="true" />
    </div>
  );
}
