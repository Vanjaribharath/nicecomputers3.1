import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";

const BLOG_POSTS = [
  {
    slug: "best-it-courses-nizamabad",
    title: "Best IT Courses After Degree in Nizamabad, Telangana",
    excerpt:
      "If you've just completed your degree in Nizamabad or nearby areas like Navipet, Basar, or Bodhan, here are the top IT courses that can launch your career in 2026.",
    author: "Nice Computers",
    date: "May 2026",
    readTime: "5 min",
    tags: ["IT Courses", "Nizamabad", "Career"],
  },
  {
    slug: "java-full-stack-roadmap-2026",
    title: "Java Full Stack Development Roadmap 2026",
    excerpt:
      "A complete roadmap to becoming a Java Full Stack Developer. From Core Java to Spring Boot and React — everything you need to land a software job in Hyderabad.",
    author: "Nice Computers",
    date: "April 2026",
    readTime: "8 min",
    tags: ["Java", "Full Stack", "Career Roadmap"],
  },
  {
    slug: "python-vs-java-career",
    title: "Python vs Java: Which is Better for a Career in Telangana?",
    excerpt:
      "A practical comparison of Python and Java for students in Navipet, Nizamabad, and Telangana. Which language should you learn to get a job faster?",
    author: "Nice Computers",
    date: "March 2026",
    readTime: "6 min",
    tags: ["Python", "Java", "Career"],
  },
  {
    slug: "software-jobs-telangana-students",
    title: "Software Jobs for Students in Telangana – Complete Guide",
    excerpt:
      "How students from small towns like Navipet, Basar, Bodhan, and Bhainsa can land software jobs in Hyderabad. Practical steps, skills needed, and salary expectations.",
    author: "Nice Computers",
    date: "February 2026",
    readTime: "7 min",
    tags: ["Jobs", "Telangana", "Software"],
  },
  {
    slug: "become-software-developer-small-town",
    title: "How to Become a Software Developer from a Small Town Like Navipet",
    excerpt:
      "You don't need to live in Hyderabad to become a software developer. Here's how students from Navipet and nearby villages are building successful IT careers.",
    author: "Nice Computers",
    date: "January 2026",
    readTime: "6 min",
    tags: ["Success Story", "Software Developer"],
  },
  {
    slug: "computer-courses-after-10th",
    title: "Best Computer Courses After 10th Class and Degree in Navipet",
    excerpt:
      "Confused about which computer course to join after 10th or graduation? Here are the best options available at Nice Computers Navipet for students in Telangana.",
    author: "Nice Computers",
    date: "December 2025",
    readTime: "5 min",
    tags: ["DCA", "Courses", "10th Pass"],
  },
];

export function BlogPage() {
  useEffect(() => {
    document.title = "Computer Training Blog | Nice Computers Navipet, Nizamabad";
  }, []);

  return (
    <>
      <section className="border-b bg-secondary/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Blog</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Computer Training Tips & Career Guides
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Career advice, course guides, and IT job tips for students in Navipet, Nizamabad, Telangana.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm hover:shadow-elegant hover:-translate-y-1 transition-all"
              >
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-indigo-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-lg font-semibold leading-snug flex-1">{post.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground border-t pt-4">
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" /> {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {post.readTime} read
                  </span>
                  <span>{post.date}</span>
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
