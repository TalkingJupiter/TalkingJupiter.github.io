"use client";

import Image from "next/image";
import { useState } from "react";
import { antonio, inter } from "@/lib/fonts";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className={`${inter.className} w-full text-[#2b2b2b] dark:text-white`}
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-start">
          {/* LEFT: photo card + Hi bubble */}
          <div className="relative">
            <div className="relative h-[420px] w-[320px] overflow-hidden rounded-[28px] bg-[#6f78ff]/60 shadow-[0_30px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
              <Image
                src="/me.JPG"
                alt="Portrait"
                fill
                className="object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#6f78ff]/25 via-transparent to-black/35" />
            </div>

            {/* Hi bubble */}
            <div className="absolute -left-6 bottom-8">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#b7ff5a] shadow-[0_18px_50px_rgba(183,255,90,0.35)]">
                <span className={`${antonio.className} text-4xl text-black`}>
                  Hi
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="w-full">
            <h2
              className={`${antonio.className} text-5xl font-extrabold tracking-tight text-center lg:text-left`}
            >
              LET'S CONNECT
            </h2>

            <form className="mt-10 space-y-6" onSubmit={onSubmit}>
              {/* Name / Email */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="Name">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="John Smith"
                    className="w-full rounded-full bg-black/10 px-5 py-2 text-sm text-black placeholder:text-black/40 outline-none ring-1 ring-black/10 focus:ring-[#b7ff5a] dark:bg-white/10 dark:text-white dark:placeholder:text-white/40 dark:ring-white/10"
                    required
                  />
                </Field>

                <Field label="Email">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="john.smith@gmail.com"
                    className="w-full rounded-full bg-black/10 px-5 py-2 text-sm text-black placeholder:text-black/40 outline-none ring-1 ring-black/10 focus:ring-[#b7ff5a] dark:bg-white/10 dark:text-white dark:placeholder:text-white/40 dark:ring-white/10"
                    required
                  />
                </Field>
              </div>

              {/* Message */}
              <Field label="How Can I Help You?">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hello, I’d like to enquire about ..."
                  rows={7}
                  className="w-full resize-none rounded-2xl bg-black/10 px-5 py-4 text-sm text-black placeholder:text-black/40 outline-none ring-1 ring-black/10 focus:ring-[#b7ff5a] dark:bg-white/10 dark:text-white dark:placeholder:text-white/40 dark:ring-white/10"
                  required
                />
              </Field>

              {/* Submit + status */}
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`${antonio.className} inline-flex rounded-full border border-[#b7ff5a] px-10 py-2 text-sm font-semibold text-[#6aa800] transition hover:bg-[#b7ff5a] hover:text-black disabled:opacity-60 disabled:hover:bg-transparent disabled:hover:text-[#6aa800] dark:text-[#b7ff5a] dark:disabled:hover:text-[#b7ff5a]`}
                >
                  {status === "sending" ? "SENDING..." : "SUBMIT"}
                </button>

                {status === "sent" && (
                  <span className="text-sm text-[#6aa800] dark:text-[#b7ff5a]">
                    Sent ✅
                  </span>
                )}
                {status === "error" && (
                  <span className="text-sm text-red-500">
                    Failed — try again.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* FOOTER BAR (neon strip) */}
      <footer className="w-full bg-[#b7ff5a] text-black">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex items-center justify-between text-xs font-medium">
            <div>
              <div>Email:</div>
              <div className="font-semibold">batuhan.sencer@ttu.edu</div>
            </div>

            <div className="text-right">
              <div>Social:</div>
              <div className="font-semibold">—</div>
            </div>
          </div>

          <div className="mt-4 h-px w-full bg-black/25" />

          <div className="mt-4 text-center text-[11px] text-black/70">
            Copyright 2025. All Rights Reserved by Batuhan Sencer
          </div>
        </div>
      </footer>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 text-xs font-semibold text-[#6aa800] dark:text-[#b7ff5a]">
        {label}
      </div>
      {children}
    </div>
  );
}
