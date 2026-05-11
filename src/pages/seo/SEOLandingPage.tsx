import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SEO_PAGES, COURSES, FAQS, TESTIMONIALS, SITE } from "@/lib/site";
import { CoursesGrid } from "@/components/sections/CoursesGrid";
import { CTA } from "@/components/sections/CTA";
import { VisitUs } from "@/components/sections/VisitUs";
import { ContactForm } from "@/components/ContactForm";
import { Star, CheckCircle2, MapPin, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface SEOLandingPageProps {
  slug: string;
}

export function SEOLandingPage({ slug }: SEOLandingPageProps) {
  const page = SEO_PAGES.find((p) => p.slug === slug);

  useEffect(() => {
    if (page) {
      document.title = page.title;
      // Update meta description dynamically
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = page.description;
    }
  }, [page]);

  if (!page) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-bold">Page not found</h1>
        <Link to="/" className="mt-4 inline-block text-indigo-600 hover:underline">
          Go back home
        </Link>
      </div>
    );
  }

  // Pick 3 testimonials
  const testimonials = TESTIMONIALS.slice(0, 3);
  // Pick 4 FAQs relevant to the page
  const faqs = FAQS.slice(0, 4);
  // Pick 3 courses to showcase
  const courses = COURSES.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-hero text-white py-16 sm:py-24">
        <div
          className="absolute inset-0 -z-10 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
            <ol className="flex items-center gap-2 text-xs text-white/60" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                <Link to="/" className="hover:text-white" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-white/30">/</li>
              <li className="text-white/80" itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                <span itemProp="name">{page.h1}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium mb-5">
              <MapPin className="h-3.5 w-3.5 text-indigo-300" />
              {page.keywords.split(",")[0]}
            </div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{page.h1}</h1>
            <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">{page.description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
              >
                <Phone className="h-4 w-4" /> Call Now: {SITE.phone}
              </a>
              <a
                href={`https://wa.me/91${SITE.whatsapp}?text=${encodeURIComponent(`Hi Nice Computers, I found your page for ${page.h1} and I want admission details.`)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1db954] transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Why Nice Computers</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Why Students Choose Nice Computers for {page.keywords.split(",")[0]}
              </h2>
              <p className="mt-4 text-muted-foreground">
                Nice Computers in Navipet is the most trusted computer training institute near Nizamabad, Basar, Bhainsa, Bodhan, and Nirmal. With 1000+ students trained, we focus on practical, job-ready skills.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Experienced faculty with industry background",
                  "Modern computer lab with 10+ workstations",
                  "Small batches (max 15 students) for personal attention",
                  "Industry-recognized certificates",
                  "Placement assistance and job guidance",
                  "Flexible timings – morning, evening & weekend batches",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" /> {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Quick Enquiry</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="border-y bg-secondary/30 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-3">Popular Courses Available</h2>
          <p className="text-muted-foreground mb-10">
            All courses include practical training, certificates, and placement support.
          </p>
          <CoursesGrid items={courses} />
          <div className="mt-8 text-center">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-md border border-indigo-600 px-6 py-2.5 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              View All Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-3">What Our Students Say</h2>
          <p className="text-muted-foreground mb-10">
            Real students from Navipet, Nizamabad and nearby areas share their experience.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border bg-card p-6 shadow-sm"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="flex gap-0.5 mb-3" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed" itemProp="reviewBody">
                  {t.text}
                </p>
                <div className="mt-4 flex items-center gap-3 border-t pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white shrink-0">
                    {t.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold" itemProp="author">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.course} · {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-y bg-secondary/30 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10" itemScope itemType="https://schema.org/FAQPage">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="rounded-xl border bg-card p-5"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h3 className="font-semibold" itemProp="name">{f.q}</h3>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p className="mt-2 text-sm text-muted-foreground" itemProp="text">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VisitUs />
      <CTA />
    </>
  );
}
