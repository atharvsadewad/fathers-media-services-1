import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

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
    return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 500 });
  }
}
