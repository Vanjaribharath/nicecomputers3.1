import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Sparkles, MapPin, CheckCircle2, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, COURSES } from "@/lib/site";
import { toast } from "sonner";

export function Hero() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim().slice(0, 80);
    const phone = String(fd.get("phone") || "").trim().slice(0, 15);
    const course = String(fd.get("course") || "").trim();
    const message = String(fd.get("message") || "").trim().slice(0, 500);
    if (!name || !/^\d{10}$/.test(phone)) {
      toast.error("Please enter a valid name and 10-digit phone number.");
      setLoading(false);
      return;
    }
    const text = encodeURIComponent(
      `Hi Nice Computers,\n\nI'd like admission details.\n\nName: ${name}\nPhone: ${phone}\nCourse: ${course || "Not sure"}${message ? `\n\n${message}` : ""}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/91${SITE.whatsapp}?text=${text}`, "_blank");
      toast.success("Thank you! Redirecting to WhatsApp to confirm your enquiry.");
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 300);
  }

  return (
    <section className="relative isolate overflow-hidden bg-hero text-white" aria-label="Hero section">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl -z-10" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl -z-10" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-8 lg:py-20">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-indigo-300" />
            Admissions Open · Limited Seats
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Build Your Career With{" "}
            <span className="bg-gradient-to-r from-sky-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
              Practical Computer Skills
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/70 sm:text-lg">
            Join <strong className="text-white">Nice Computers, Navipet</strong> — the best computer training institute in Nizamabad district, Telangana. Learn job-ready skills with practical training, modern labs, and expert guidance.
          </p>

          <ul className="mt-6 grid max-w-lg grid-cols-1 gap-2 sm:grid-cols-2">
            {[
              "1000+ Students Trained",
              "100% Practical Training",
              "Modern Computer Lab",
              "Certificate Provided",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-white/85">
                <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0" /> {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white">
              <Link to="/courses">
                Explore Courses <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#1db954] text-white">
              <a
                href={`https://wa.me/91${SITE.whatsapp}?text=${encodeURIComponent("Hi Nice Computers, I want admission details.")}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-4 w-4 mr-1" /> WhatsApp Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <a href={`tel:${SITE.phone}`}>
                <Phone className="h-4 w-4 mr-1" /> Call Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <a href={SITE.mapsLink} target="_blank" rel="noreferrer">
                <MapPin className="h-4 w-4 mr-1" /> Visit Institute
              </a>
            </Button>
          </div>

          {/* Location pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["Navipet", "Nizamabad", "Basar", "Bhainsa", "Bodhan", "Nirmal"].map((loc) => (
              <span key={loc} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                📍 {loc}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — Admission form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-glow backdrop-blur-md sm:p-7">
            <div className="absolute -top-3 left-6 rounded-full bg-indigo-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-glow">
              Apply in 30 seconds
            </div>
            <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">Get Admission Details</h2>
            <p className="mt-1 text-sm text-white/60">Fill the form — we'll reach out on WhatsApp instantly.</p>

            <form onSubmit={onSubmit} className="mt-5 grid gap-3.5" aria-label="Admission enquiry form">
              <div className="grid gap-1.5">
                <label htmlFor="hf-name" className="text-sm font-medium text-white/80">Full Name</label>
                <input
                  id="hf-name"
                  name="name"
                  required
                  maxLength={80}
                  placeholder="Your name"
                  className="h-10 rounded-md border border-white/15 bg-white/5 px-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="hf-phone" className="text-sm font-medium text-white/80">Phone Number</label>
                <input
                  id="hf-phone"
                  name="phone"
                  required
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  placeholder="10-digit mobile"
                  className="h-10 rounded-md border border-white/15 bg-white/5 px-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="hf-course" className="text-sm font-medium text-white/80">Course Interested In</label>
                <select
                  id="hf-course"
                  name="course"
                  className="h-10 rounded-md border border-white/15 bg-[#0f172a] px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  defaultValue=""
                >
                  <option value="">Select a course</option>
                  {COURSES.map((c) => (
                    <option key={c.slug} value={c.name}>
                      {c.name} — {c.full}
                    </option>
                  ))}
                  <option value="Not sure">Not sure / Other</option>
                </select>
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="hf-message" className="text-sm font-medium text-white/80">
                  Message <span className="text-white/40">(optional)</span>
                </label>
                <textarea
                  id="hf-message"
                  name="message"
                  rows={2}
                  maxLength={500}
                  placeholder="Anything you'd like to know?"
                  className="rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                />
              </div>
              <div className="mt-1 flex flex-col gap-2 sm:flex-row">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex flex-1 items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-60 transition-colors"
                >
                  <Send className="h-4 w-4" /> {loading ? "Sending…" : "Apply Now"}
                </button>
                <a
                  href={`https://wa.me/91${SITE.whatsapp}?text=${encodeURIComponent("Hi Nice Computers, I want admission details.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1db954] transition-colors"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              </div>
              <p className="text-[11px] text-white/50">By submitting, you agree to be contacted regarding admissions.</p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
