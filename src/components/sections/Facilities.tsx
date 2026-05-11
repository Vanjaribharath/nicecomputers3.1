import { motion } from "framer-motion";
import { FACILITIES } from "@/lib/site";
import { Monitor, Wifi, Users, Award, Headphones, Briefcase, Sparkles } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Wifi,
  Users,
  Award,
  Headphones,
  Briefcase,
  Sparkles,
};

export function Facilities() {
  return (
    <section className="border-y bg-secondary/30 py-20 sm:py-24" aria-label="Our facilities">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Why Nice Computers</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Facilities Built for Real Learning</h2>
          <p className="mt-4 text-muted-foreground">
            Modern infrastructure and personal mentorship to help every student in Navipet, Nizamabad and nearby areas succeed.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((f, i) => {
            const Icon = iconMap[f.icon] ?? Sparkles;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="rounded-2xl border bg-card p-6 transition-all hover:border-indigo-300 hover:shadow-elegant"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
