import { motion } from "framer-motion";
import lab1 from "@/assets/lab-1.jpg";
import lab2 from "@/assets/lab-2.jpg";

export function Gallery() {
  const images = [
    { src: lab1, alt: "Nice Computers Navipet - Modern computer lab with students" },
    { src: lab2, alt: "Nice Computers Navipet - Practical training session in progress" },
    { src: lab1, alt: "Nice Computers Navipet - Java programming class" },
    { src: lab2, alt: "Nice Computers Navipet - Python training session" },
  ];

  return (
    <section className="py-20 sm:py-24" aria-label="Gallery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Our Institute</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Inside Nice Computers, Navipet</h2>
          <p className="mt-4 text-muted-foreground">
            Modern facilities, practical labs, and a great learning environment for students from Navipet, Nizamabad and nearby areas.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl border shadow-sm aspect-video"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
