/**
 * Layout — True Homes Inspections
 * Brand: dark nav + orange accents (#D35400) + True Homes logo image
 * Phone: 208-243-9706 (primary CTA — call Tim directly)
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, ChevronDown, MapPin, Clock, Facebook, Star } from "lucide-react";
import TrueHomesLogo from "./TrueHomesLogo";

// Logo is now an inline SVG component — no white box, blends into dark nav
const AHIT_LOGO = "/manus-storage/ahit-logo_514ff516.jpg";
const ASHI_LOGO = "/manus-storage/ashi-logo_11eadb50.png";
const PHONE = "208-243-9706";
const PHONE_HREF = "tel:+12082439706";
const ORANGE = "#D35400";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Buyer Home Inspection", href: "/services/buyer-home-inspection" },
      { label: "Pre-Listing Inspection", href: "/services/pre-listing-inspection" },
      { label: "New Construction Inspection", href: "/services/new-construction-inspection" },
      { label: "Radon Testing", href: "/services/radon-testing" },
      { label: "Well Water Testing", href: "/services/well-water-testing" },
      { label: "Sewer Scope Inspection", href: "/services/sewer-scope" },
      { label: "Lead, Mold & Pest", href: "/services/lead-mold-pest" },
    ],
  },
  { label: "Areas Served", href: "/areas-served" },
  { label: "Sample Reports", href: "/sample-reports" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

function NavDropdown({ item }: { item: typeof navItems[0] }) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const isActive = location.startsWith(item.href) && item.href !== "/";

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={`nav-link flex items-center gap-1 ${isActive ? "active" : ""}`}
        onClick={() => setOpen(false)}
      >
        {item.label}
        <ChevronDown size={11} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </Link>
      {open && item.children && (
        <div className="absolute top-full left-0 pt-2 z-50 min-w-[240px]">
          <div className="bg-[oklch(0.12_0.005_260)] border border-white/10 shadow-2xl py-1">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-4 py-2.5 text-xs font-['Barlow_Condensed'] font-600 tracking-wide uppercase text-muted-foreground hover:text-white hover:bg-white/5 transition-colors"
                onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
                onMouseLeave={e => (e.currentTarget.style.color = "")}
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top bar */}
      <div className="hidden md:block bg-[oklch(0.10_0.005_260)] border-b border-white/5">
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a href={PHONE_HREF} className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors font-['Barlow_Condensed'] font-600 tracking-wide"
              onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
              onMouseLeave={e => (e.currentTarget.style.color = "")}>
              <Phone size={11} style={{ color: ORANGE }} />
              {PHONE}
            </a>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock size={11} style={{ color: ORANGE }} />
              Mon–Sat 7am–7pm
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={10} style={{ color: ORANGE, fill: ORANGE }} />)}
              <span className="text-xs text-muted-foreground ml-1">5.0 · 100+ Reviews</span>
            </div>
            <a
              href="https://www.facebook.com/truehomesinspections"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors"
              onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
              onMouseLeave={e => (e.currentTarget.style.color = "")}
            >
              <Facebook size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[oklch(0.10_0.005_260)]/95 backdrop-blur-sm shadow-2xl border-b border-white/5"
            : "bg-[oklch(0.12_0.005_260)] border-b border-white/5"
        }`}
      >
        <div className="container flex items-center justify-between py-3">
          {/* Logo — inline SVG, transparent, blends into dark nav */}
          <Link href="/" className="flex items-center">
            <TrueHomesLogo height={52} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) =>
              item.children ? (
                <NavDropdown key={item.href} item={item} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${location === item.href ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA — call Tim */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 text-sm font-['Barlow_Condensed'] font-700 tracking-wide transition-colors"
              style={{ color: ORANGE }}
              onMouseEnter={e => (e.currentTarget.style.color = "#E8660A")}
              onMouseLeave={e => (e.currentTarget.style.color = ORANGE)}
            >
              <Phone size={14} />
              {PHONE}
            </a>
            <a href={PHONE_HREF} className="btn-amber text-xs py-2.5 px-5 flex items-center gap-1.5">
              <Phone size={12} /> Call Tim Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-muted-foreground hover:text-white transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[oklch(0.10_0.005_260)] border-t border-white/5">
            <div className="container py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2.5 text-sm font-['Barlow_Condensed'] font-600 tracking-widest uppercase transition-colors text-muted-foreground hover:text-white"
                    style={location === item.href ? { color: ORANGE } : {}}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-xs font-['Barlow_Condensed'] font-600 tracking-widest uppercase text-muted-foreground transition-colors"
                          onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
                          onMouseLeave={e => (e.currentTarget.style.color = "")}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/5 space-y-3">
                <a href={PHONE_HREF} className="btn-amber text-xs w-full justify-center flex items-center gap-2">
                  <Phone size={13} /> Call Tim — {PHONE}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[oklch(0.10_0.005_260)] border-t border-white/5">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="mb-5">
                <TrueHomesLogo height={48} />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                North Idaho's trusted, locally owned home inspection company. ASHI certified and committed to protecting your investment.
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} style={{ color: ORANGE, fill: ORANGE }} />)}
                <span className="text-xs text-muted-foreground ml-1">5.0 · 100+ Reviews</span>
              </div>
              <a
                href={PHONE_HREF}
                className="btn-amber text-xs flex items-center gap-2 w-fit"
              >
                <Phone size={12} /> Call Tim Now
              </a>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-['Barlow_Condensed'] font-700 text-sm tracking-widest uppercase text-white mb-4">Services</h4>
              <ul className="space-y-2">
                {[
                  { label: "Buyer Home Inspection", href: "/services/buyer-home-inspection" },
                  { label: "Pre-Listing Inspection", href: "/services/pre-listing-inspection" },
                  { label: "New Construction Inspection", href: "/services/new-construction-inspection" },
                  { label: "Radon Testing", href: "/services/radon-testing" },
                  { label: "Well Water Testing", href: "/services/well-water-testing" },
                  { label: "Sewer Scope Inspection", href: "/services/sewer-scope" },
                  { label: "Lead, Mold & Pest", href: "/services/lead-mold-pest" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors"
                      onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
                      onMouseLeave={e => (e.currentTarget.style.color = "")}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas */}
            <div>
              <h4 className="font-['Barlow_Condensed'] font-700 text-sm tracking-widest uppercase text-white mb-4">Service Areas</h4>
              <ul className="space-y-2">
                {[
                  { label: "Sandpoint, Idaho", href: "/sandpoint-home-inspector" },
                  { label: "Coeur d'Alene, Idaho", href: "/coeur-dalene-home-inspection" },
                  { label: "Post Falls, Idaho", href: "/post-falls-home-inspector" },
                  { label: "All Areas Served", href: "/areas-served" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors"
                      onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
                      onMouseLeave={e => (e.currentTarget.style.color = "")}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact — call focused */}
            <div>
              <h4 className="font-['Barlow_Condensed'] font-700 text-sm tracking-widest uppercase text-white mb-4">Get In Touch</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The fastest way to reach Tim is by phone. Call or text anytime during business hours.
              </p>
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 mb-3 transition-colors"
                style={{ color: ORANGE }}
                onMouseEnter={e => (e.currentTarget.style.color = "#E8660A")}
                onMouseLeave={e => (e.currentTarget.style.color = ORANGE)}
              >
                <Phone size={16} />
                <span className="font-['Barlow_Condensed'] font-700 text-lg">{PHONE}</span>
              </a>
              <ul className="space-y-2 mb-5">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin size={13} style={{ color: ORANGE }} className="mt-0.5 flex-shrink-0" />
                  North Idaho Panhandle
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Clock size={13} style={{ color: ORANGE }} className="mt-0.5 flex-shrink-0" />
                  Mon–Sat: 7am–7pm
                </li>
              </ul>
              <a href={PHONE_HREF} className="btn-amber text-xs flex items-center gap-2 w-fit">
                <Phone size={12} /> Call Tim Now
              </a>
            </div>
          </div>

          {/* Certification logos */}
          <div className="border-t border-white/5 pt-8 pb-8 flex flex-col md:flex-row items-center justify-center gap-8">
            <p className="text-xs text-muted-foreground font-['Barlow_Condensed'] font-600 tracking-widest uppercase">Certified & Trained By</p>
            <div className="flex items-center gap-8">
              <a href="https://www.ahit.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                <img src={AHIT_LOGO} alt="AHIT Certified Inspector" className="h-20 w-auto object-contain" />
              </a>
              <a href="https://www.homeinspector.org" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                <img src={ASHI_LOGO} alt="ASHI Certified Inspector" className="h-20 w-auto object-contain" />
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} True Homes Inspections. All rights reserved. ASHI Certified Home Inspector.
            </p>
            <div className="flex gap-5">
              {[
                { label: "Privacy Policy", href: "/contact" },
                { label: "Terms of Service", href: "/contact" },
                { label: "ASHI Member", href: "https://www.homeinspector.org", external: true },
              ].map((link) => (
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground transition-colors"
                    onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
                    onMouseLeave={e => (e.currentTarget.style.color = "")}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.label} href={link.href} className="text-xs text-muted-foreground transition-colors"
                    onMouseEnter={e => (e.currentTarget.style.color = ORANGE)}
                    onMouseLeave={e => (e.currentTarget.style.color = "")}>
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
