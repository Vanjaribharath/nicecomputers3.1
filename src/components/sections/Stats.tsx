import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 1000, suffix: "+", label: "Students Trained" },
  { value: 95, suffix: "%", label: "Student Satisfaction" },
  { value: 8, suffix: "+", label: "Professional Courses" },
  { value: 100, suffix: "%", label: "Practical Learning" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-16 text-white sm:py-20" aria-label="Our achievements">
      <div
        className="absolute inset-0 -z-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(99,102,241,0.5), transparent 50%), radial-gradient(circle at 80% 70%, rgba(139,92,246,0.4), transparent 50%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <div className="text-4xl font-bold tracking-tight sm:text-5xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm uppercase tracking-wider text-white/70">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
