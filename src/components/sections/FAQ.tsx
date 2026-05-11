import { useState } from "react";
import { FAQS } from "@/lib/site";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="border-y bg-secondary/30 py-20 sm:py-24" aria-label="Frequently asked questions">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-muted-foreground">Everything you need to know before you enroll at Nice Computers.</p>
        </div>
        <div className="mt-10 rounded-2xl border bg-card px-2" itemScope itemType="https://schema.org/FAQPage">
          {FAQS.map((f, i) => (
            <div
              key={i}
              className="border-b last:border-0"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="flex w-full items-center justify-between px-4 py-4 text-left text-base font-semibold hover:text-brand transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span itemProp="name">{f.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed" itemProp="text">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
