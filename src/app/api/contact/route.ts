import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const message = String(formData.get("message") || "");

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  // TODO: Send to email/CRM. For now, just log.
  console.log("Contact submission:", { name, email, message });

  return NextResponse.redirect(new URL("/contact?sent=1", request.url), 303);
}



