import { useEffect } from "react";
import { CoursesGrid } from "@/components/sections/CoursesGrid";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";

export function CoursesPage() {
  useEffect(() => {
    document.title = "All Computer Courses | Nice Computers Navipet, Nizamabad";
  }, []);

  return (
    <>
      <section className="border-b bg-secondary/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Our Courses</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Computer Courses in Navipet, Nizamabad
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Choose from our wide range of practical, job-ready computer courses. Serving students from Navipet, Nizamabad, Basar, Bhainsa, Bodhan, Nirmal and nearby villages.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CoursesGrid />
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  );
}
