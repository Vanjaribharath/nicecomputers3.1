import { useEffect } from "react";
import { ContactForm } from "@/components/ContactForm";
import { VisitUs } from "@/components/sections/VisitUs";
import { SITE } from "@/lib/site";
import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";

export function ContactPage() {
  useEffect(() => {
    document.title = "Contact Nice Computers – Enroll Now | Navipet, Nizamabad";
  }, []);

  return (
    <>
      <section className="border-b bg-secondary/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Contact Us</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Enroll at Nice Computers, Navipet</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Ready to start your computer training journey? Contact us today. We serve students from Navipet, Nizamabad, Basar, Bhainsa, Bodhan and Nirmal.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              <p className="mt-3 text-muted-foreground">
                Fill the form or reach us directly on WhatsApp, phone, or visit us at Navipet. Admissions are open for all batches.
              </p>
              <div className="mt-8 space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Phone</p>
                    <a href={`tel:${SITE.phone}`} className="text-muted-foreground hover:text-foreground">
                      {SITE.phone}
                    </a>
                    {" · "}
                    <a href={`tel:${SITE.altPhone}`} className="text-muted-foreground hover:text-foreground">
                      {SITE.altPhone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">WhatsApp</p>
                    <a
                      href={`https://wa.me/91${SITE.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      +91 {SITE.whatsapp}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <a href={`mailto:${SITE.email}`} className="text-muted-foreground hover:text-foreground">
                      {SITE.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Address</p>
                    <p className="text-muted-foreground">
                      {SITE.address.line1},<br />
                      {SITE.address.line2},<br />
                      {SITE.address.line3}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Working Hours</p>
                    <p className="text-muted-foreground">Monday – Saturday<br />9:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Send Admission Enquiry</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <VisitUs />
    </>
  );
}
