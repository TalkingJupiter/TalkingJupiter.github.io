import { Resend } from "resend";


const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 100, email: 200, message: 5000 };

// Simple per-instance rate limit: 5 messages per IP per 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export function GET() {
  return json({ ok: true, hint: "Use POST /api/contact" }, 200);
}

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return json({ error: "Invalid request" }, 400);
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();
  const website = String(data.website ?? "").trim();

  // Honeypot filled in: pretend it worked so bots don't retry.
  if (website) return json({ success: true }, 200);

  if (
    !name ||
    !message ||
    !EMAIL_RE.test(email) ||
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    message.length > LIMITS.message
  ) {
    return json({ error: "Please check your name, email, and message." }, 400);
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return json({ error: "Too many messages. Try again later." }, 429);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return json({ error: "Contact form is not configured" }, 500);
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Batuhan Sencer <contact@batuhansencer.com>",
      to: ["batuhan.sencer@ttu.edu"],
      replyTo: email,
      subject: `New contact from ${name.replace(/[\r\n]+/g, " ")}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    return json({ success: true }, 200);
  } catch (error) {
    console.error("Contact form send failed:", error);
    return json({ error: "Failed to send email" }, 500);
  }
}
