import { motion } from "framer-motion";
import { CheckCircle2, Users, Monitor, Target, Lightbulb } from "lucide-react";
import labImage from "@/assets/lab-2.jpg";

const POINTS = [
  { Icon: Users, k: "1000+", v: "Students Trained" },
  { Icon: Monitor, k: "Modern", v: "Computer Lab" },
  { Icon: Target, k: "Career", v: "Oriented Courses" },
  { Icon: Lightbulb, k: "Practical", v: "Learning Approach" },
];

export function About() {
  return (
    <section className="py-20 sm:py-24" aria-label="About Nice Computers">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl border shadow-elegant">
            <img
              src={labImage}
              alt="Students training at Nice Computers Navipet computer lab"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border bg-card p-5 shadow-elegant sm:block">
            <div className="text-3xl font-bold text-brand">8+</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Professional Courses</div>
          </div>
        </motion.div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">About Nice Computers</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Practical, career-focused computer training in Navipet, Telangana
          </h2>
          <p className="mt-5 text-muted-foreground">
            Nice Computers is a leading computer training institute in Navipet, Nizamabad District, Telangana. We are dedicated to providing practical, career-focused education for students and job seekers across Navipet, Basar, Bodhan, Bhainsa, Nirmal, and Nizamabad.
          </p>
          <p className="mt-4 text-muted-foreground">
            With experienced faculty, practical lab sessions, and modern teaching methods, we prepare students for a successful future in technology and office productivity. Our courses are designed to make you job-ready, not just exam-ready.
          </p>
          <ul className="mt-6 space-y-2.5">
            {[
              "Beginner-friendly curriculum for all skill levels",
              "Individual attention in small batches (max 15 students)",
              "Industry-recognized certificates",
              "Career and placement guidance for IT jobs",
            ].map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" /> {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {POINTS.map(({ Icon, k, v }) => (
              <div key={v} className="rounded-2xl border bg-card p-4">
                <Icon className="h-5 w-5 text-brand" />
                <div className="mt-2 text-xl font-bold">{k}</div>
                <div className="text-xs text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
