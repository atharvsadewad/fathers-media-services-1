"use client";

import { useState } from "react";

export default function ContactForm() {
const [form, setForm] = useState({ name: "", email: "", message: "" });
const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();
setStatus("loading");

```
try {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  if (res.ok) {
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  } else throw new Error("Failed");
} catch {
  setStatus("error");
}
```

};

return ( <div id="contact-form" className="mt-10 max-w-xl mx-auto text-left">
{status === "success" ? ( <div className="text-center space-y-4"> <p className="text-green-600 text-lg font-medium">✅ Message sent successfully!</p>
<button
onClick={() => setStatus("idle")}
className="btn-outline w-full"
>
Send Another Message </button> </div>
) : ( <form onSubmit={handleSubmit} className="space-y-4"> <input
         type="text"
         name="name"
         placeholder="Your Name"
         value={form.name}
         onChange={handleChange}
         required
         className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
       /> <input
         type="email"
         name="email"
         placeholder="Your Email"
         value={form.email}
         onChange={handleChange}
         required
         className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
       /> <textarea
         name="message"
         rows={4}
         placeholder="Your Message"
         value={form.message}
         onChange={handleChange}
         required
         className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
       />
<button
type="submit"
disabled={status === "loading"}
className="btn-primary w-full"
>
{status === "loading" ? "Sending..." : "Send Message"} </button> </form>
)}

```
  {status === "error" && (
    <p className="text-red-500 mt-4 text-center">
      ❌ Something went wrong. Please try again.
    </p>
  )}
</div>
```

);
}
