import { useState } from "react";
import { toast } from "sonner";
import { SITE, COURSES } from "@/lib/site";
import { MessageCircle, Send } from "lucide-react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const phone = fd.get("phone") as string;
    const course = fd.get("course") as string;
    const message = fd.get("message") as string;

    if (!name || !/^\d{10}$/.test(phone)) {
      toast.error("Please enter a valid name and 10-digit phone number.");
      setLoading(false);
      return;
    }

    const text = encodeURIComponent(
      `Hi Nice Computers,\n\nName: ${name}\nPhone: ${phone}\nCourse: ${course || "Not sure"}\n\n${message || ""}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/91${SITE.whatsapp}?text=${text}`, "_blank");
      toast.success("Thank you! Redirecting to WhatsApp to confirm your enquiry.");
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 400);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 rounded-2xl border bg-card p-6 sm:p-8 shadow-sm"
      aria-label="Contact and admission enquiry form"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium">Full Name</label>
          <input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="h-10 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="phone" className="text-sm font-medium">Phone</label>
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            inputMode="numeric"
            pattern="[0-9]{10}"
            maxLength={10}
            placeholder="10-digit mobile"
            className="h-10 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="course" className="text-sm font-medium">Interested Course</label>
        <select
          id="course"
          name="course"
          className="h-10 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="">Select a course</option>
          {COURSES.map((c) => (
            <option key={c.slug} value={c.name}>
              {c.name} — {c.full}
            </option>
          ))}
          <option value="Other">Not sure / Other</option>
        </select>
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your goals…"
          className="rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
        />
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <button
          type="submit"
          disabled={loading}
          className="flex flex-1 items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-60 transition-colors"
        >
          <Send className="h-4 w-4" /> {loading ? "Sending…" : "Send Enquiry"}
        </button>
        <a
          href={`https://wa.me/91${SITE.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1db954] transition-colors"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </form>
  );
}
