import { TESTIMONIALS } from "@/lib/site";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="py-20 sm:py-24" aria-label="Student testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Student Stories</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What Our Students Say</h2>
          <p className="mt-4 text-muted-foreground">
            Real voices from learners who started their journey at Nice Computers, Navipet.
          </p>
        </div>
        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              className="rounded-2xl border bg-card p-6 shadow-sm"
              itemScope
              itemType="https://schema.org/Review"
            >
              <Quote className="h-6 w-6 text-brand/40" />
              <p className="mt-3 text-sm leading-relaxed text-foreground/90" itemProp="reviewBody">
                {t.text}
              </p>
              <div className="mt-5 flex items-center gap-3 border-t pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white shrink-0">
                  {t.name
                    .split(" ")
                    .map((s) => s[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold truncate" itemProp="author">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t.course} Student · {t.location}
                  </div>
                </div>
                <div className="flex gap-0.5 shrink-0" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
