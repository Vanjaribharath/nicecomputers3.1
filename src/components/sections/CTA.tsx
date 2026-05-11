import { SITE } from "@/lib/site";
import { Phone, MessageCircle, MapPin, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 sm:py-24" aria-label="Call to action">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy-deep p-10 text-white shadow-elegant sm:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-600/30 opacity-30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium">
                <Sparkles className="h-3.5 w-3.5 text-indigo-300" /> Admissions Open
              </div>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Start your career journey today.
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Limited seats available across all batches at Nice Computers, Navipet. Speak to our team and find the right course for your goals.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={`https://wa.me/91${SITE.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1db954] transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={SITE.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <MapPin className="h-4 w-4" /> Visit Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
