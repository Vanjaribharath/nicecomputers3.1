import { motion } from "framer-motion";
import { COURSES } from "@/lib/site";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

type CourseType = typeof COURSES[number];

export function CoursesGrid({ limit, items }: { limit?: number; items?: CourseType[] }) {
  const base = items ?? COURSES;
  const list = limit ? base.slice(0, limit) : base;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((c, i) => (
        <motion.article
          key={c.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant"
        >
          <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${c.color}`} />
          <div className="flex items-start justify-between">
            <div
              className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} text-white shadow-sm`}
            >
              <BookOpen className="h-5 w-5" />
            </div>
            <span className="rounded-full bg-green-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-green-700">
              Beginner Friendly
            </span>
          </div>
          <h3 className="mt-5 text-xl font-semibold">{c.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{c.full}</p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Clock className="h-3.5 w-3.5" /> {c.duration}
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {c.topics.slice(0, 5).map((t) => (
              <span
                key={t}
                className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-4 border-t pt-4 text-xs text-muted-foreground">
            <div>
              <span className="font-semibold text-foreground">Careers:</span> {c.careers}
            </div>
            <div className="mt-1">
              <span className="font-semibold text-foreground">Fee:</span> {c.fee}
            </div>
          </div>
          <Link
            to="/contact"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
          >
            Enroll Now <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
