import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export function GET() {
  return new Response(
    JSON.stringify({ ok: true, hint: "Use POST /api/contact" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
export async function POST(req: Request) {
  console.log("POST /api/contact hit");
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "Batuhan Sencer <contact@batuhansencer.com>",
      to: ["batuhan.sencer@ttu.edu"], // or your Gmail
      replyTo: email,
      subject: `New contact from ${name}`,
      text: message,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      { status: 500 }
    );
  }
}
