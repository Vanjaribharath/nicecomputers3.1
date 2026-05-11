import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { CoursesGrid } from "@/components/sections/CoursesGrid";
import { About } from "@/components/sections/About";
import { Facilities } from "@/components/sections/Facilities";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { FAQ } from "@/components/sections/FAQ";
import { VisitUs } from "@/components/sections/VisitUs";
import { CTA } from "@/components/sections/CTA";
import { Link } from "react-router-dom";
import { LOCATIONS, COURSES } from "@/lib/site";
import { ArrowRight, MapPin } from "lucide-react";

export function Home() {
  return (
    <>
      <Hero />
      <Stats />

      {/* Courses preview */}
      <section className="py-20 sm:py-24" aria-label="Our courses">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Our Courses</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Job-Ready Computer Courses in Navipet, Telangana
            </h2>
            <p className="mt-4 text-muted-foreground">
              From DCA to Java Full Stack — we have courses for students at every level in Navipet, Nizamabad, Basar, and nearby areas.
            </p>
          </div>
          <div className="mt-12">
            <CoursesGrid limit={6} />
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
            >
              View All {COURSES.length} Courses <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <About />
      <Facilities />
      <Testimonials />
      <Gallery />

      {/* Local SEO area section */}
      <section className="border-y bg-secondary/30 py-16 sm:py-20" aria-label="Areas we serve">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Serving Students From</p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Computer Training Accessible from Navipet, Nizamabad & Nearby Areas
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Students from Nizamabad, Basar, Bhainsa, Bodhan, Nirmal and dozens of villages come to Nice Computers Navipet for quality training.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.name}
                className="flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-medium shadow-sm"
              >
                <MapPin className="h-3.5 w-3.5 text-brand" />
                {loc.name}
                <span className="text-xs text-muted-foreground">{loc.distance}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <VisitUs />
      <CTA />
    </>
  );
}
