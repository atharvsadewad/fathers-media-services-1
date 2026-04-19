import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    // 🚫 DEMO MODE (NO API KEY)
    if (!process.env.RESEND_API_KEY) {
      console.log("Demo submission:", { name, email, message });

      return NextResponse.json({ ok: true, demo: true });
    }

    // ✅ ONLY LOAD RESEND IF KEY EXISTS
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: "fathersmediaservices <onboarding@resend.dev>",
      to: "fathersmediaservices@gmail.com",
      subject: `New Enquiry from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });

    console.log("Email sent:", data);

    return NextResponse.json({ ok: true });

  } catch (error) {
    console.error("Resend Error:", error);

    return NextResponse.json(
      { ok: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}