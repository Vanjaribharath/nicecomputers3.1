import { useState } from "react";
import { SITE } from "@/lib/site";
import { MapPin, Phone, MessageCircle, Navigation, Building2, Clock, Copy, Check } from "lucide-react";

export function VisitUs() {
  const [copied, setCopied] = useState(false);
  const fullAddress = `${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.line3}`;

  const copyAddress = async () => {
    await navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="visit-us" className="relative py-20 sm:py-24" aria-label="Visit us">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Visit Our Institute</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Find us in the heart of Navipet, Nizamabad
          </h2>
          <p className="mt-3 text-muted-foreground">
            Easy to reach, right above Union Bank of India on the Main Road, Navipet. Walk in any time during working hours.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Map */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl border bg-card shadow-elegant">
              <iframe
                src={SITE.mapsEmbed}
                title="Nice Computers Navipet Location on Google Maps"
                className="h-[460px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Maps showing Nice Computers location in Navipet"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2 sm:flex-row">
                <a
                  href={SITE.directionsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
                >
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
                <a
                  href={SITE.mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-md border bg-background/90 px-4 py-2.5 text-sm font-semibold hover:bg-secondary backdrop-blur transition-colors"
                >
                  <MapPin className="h-4 w-4" /> Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Address card */}
          <div className="lg:col-span-2">
            <div className="relative h-full overflow-hidden rounded-3xl bg-navy-deep p-8 text-white shadow-elegant">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-indigo-600/25 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium">
                  <MapPin className="h-3.5 w-3.5 text-indigo-300" /> Our Location
                </div>
                <h3 className="mt-4 text-2xl font-bold">{SITE.name}</h3>
                <p className="mt-1 text-sm text-white/60">Best Computer Institute in Navipet, Telangana</p>

                <div className="mt-6 space-y-5 text-sm">
                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <MapPin className="h-4 w-4 text-indigo-300" />
                    </div>
                    <div className="text-white/80">
                      <p>{SITE.address.line1}</p>
                      <p>{SITE.address.line2}</p>
                      <p>{SITE.address.line3}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Building2 className="h-4 w-4 text-indigo-300" />
                    </div>
                    <div className="text-white/80">
                      <p className="text-xs uppercase tracking-wider text-white/50">Landmark</p>
                      <p>{SITE.landmark}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Phone className="h-4 w-4 text-indigo-300" />
                    </div>
                    <div className="text-white/80">
                      <a href={`tel:${SITE.phone}`} className="block hover:text-white">{SITE.phone}</a>
                      <a href={`tel:${SITE.altPhone}`} className="block hover:text-white">{SITE.altPhone}</a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Clock className="h-4 w-4 text-indigo-300" />
                    </div>
                    <div className="text-white/80">
                      <p className="text-xs uppercase tracking-wider text-white/50">Open Hours</p>
                      <p>Mon – Sat · 9:00 AM – 7:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 grid gap-2 sm:grid-cols-2">
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
                  >
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                  <a
                    href={`https://wa.me/91${SITE.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1db954] transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                  <a
                    href={SITE.directionsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-md border border-white/15 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors sm:col-span-2"
                  >
                    <Navigation className="h-4 w-4" /> Get Directions
                  </a>
                  <button
                    onClick={copyAddress}
                    className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? "Copied!" : "Copy Full Address"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
