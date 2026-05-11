import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { SITE, SEO_PAGES } from "@/lib/site";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Nice Computers is a modern computer training institute in Navipet, Nizamabad, Telangana. Practical, career-oriented learning for students and job seekers across Navipet, Basar, Bodhan, Bhainsa, Nirmal and Nizamabad.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Facebook" className="rounded-full border p-2 text-muted-foreground transition-colors hover:bg-background hover:text-foreground">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="rounded-full border p-2 text-muted-foreground transition-colors hover:bg-background hover:text-foreground">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Youtube" className="rounded-full border p-2 text-muted-foreground transition-colors hover:bg-background hover:text-foreground">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/courses" className="hover:text-foreground">Courses</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Local Areas</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {SEO_PAGES.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link to={`/${p.slug}`} className="hover:text-foreground">
                  {p.slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                {SITE.address.line1}, {SITE.address.line2}, {SITE.address.line3}
              </span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4" />
              <span>
                <a href={`tel:${SITE.phone}`} className="hover:text-foreground">{SITE.phone}</a>
                {" · "}
                <a href={`tel:${SITE.altPhone}`} className="hover:text-foreground">{SITE.altPhone}</a>
              </span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4" />
              <a href={`mailto:${SITE.email}`} className="hover:text-foreground">{SITE.email}</a>
            </li>
          </ul>
          <div className="mt-4 text-xs text-muted-foreground">
            <p className="font-medium">Open Hours</p>
            <p>Mon – Sat · 9:00 AM – 7:00 PM</p>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Nice Computers, Navipet, Nizamabad. All rights reserved.</p>
          <p>Best Computer Training Institute in Telangana</p>
        </div>
      </div>
    </footer>
  );
}
