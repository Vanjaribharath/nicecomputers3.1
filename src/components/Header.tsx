import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${SITE.phone}`}
            className="text-sm font-medium text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5"
            aria-label={`Call us at ${SITE.phone}`}
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <span className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-green-700">
            <span className="h-1.5 w-1.5 rounded-full bg-green-600 animate-pulse" /> Admissions Open
          </span>
          <Button asChild variant="outline" size="sm" className="border-green-500 text-green-700 hover:bg-green-50">
            <a href={`https://wa.me/91${SITE.whatsapp}`} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </Button>
          <Button asChild size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <Link to="/contact">Enroll Now</Link>
          </Button>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t bg-background md:hidden">
          <div className="space-y-1 px-4 py-3">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive ? "bg-secondary text-foreground" : "text-foreground hover:bg-secondary"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <a
              href={`tel:${SITE.phone}`}
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
            >
              <Phone className="inline h-4 w-4 mr-2" />
              {SITE.phone}
            </a>
            <Button asChild className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Enroll Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
