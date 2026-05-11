import { useEffect } from "react";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Facilities } from "@/components/sections/Facilities";
import { CTA } from "@/components/sections/CTA";
import { SITE } from "@/lib/site";

export function AboutPage() {
  useEffect(() => {
    document.title = "About Nice Computers – Best Institute in Navipet, Nizamabad";
  }, []);

  return (
    <>
      <section className="border-b bg-secondary/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">About Us</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">About Nice Computers, Navipet</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Established in {SITE.established}, Nice Computers has trained 1000+ students from Navipet, Nizamabad, Basar, Bhainsa, Bodhan, Nirmal and across Telangana.
          </p>
        </div>
      </section>

      <About />
      <Stats />
      <Facilities />
      <CTA />
    </>
  );
}
