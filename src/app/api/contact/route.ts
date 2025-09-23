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
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    // Send email via Resend
    const data = await resend.emails.send({
      from: "Father’s Media <onboarding@resend.dev>", // change later to your domain email after verification
      to: "fathersmediaservices@gmail.com", // 👉 Replace with the email you want to receive enquiries
      subject: `New Enquiry from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });

    console.log("Email sent:", data);

    return NextResponse.redirect(new URL("/contact?sent=1", request.url), 303);
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
