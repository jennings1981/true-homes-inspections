/**
 * Layout — True Homes Inspections
 * Brand: Burnt orange/red #C0392B + dark charcoal #2C2C2C
 * Logo: True Homes Home Inspections (house + H icon)
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Mail, Menu, X, ChevronDown, MapPin, Clock, Facebook, Star } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427046845/ToYqQAZz6CCmi4HjBtrLQ7/TrueHomesLogo_ce5433c8.jpeg";

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
      <button
        className={`nav-link flex items-center gap-1 ${isActive ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {item.label}
        <ChevronDown size={11} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && item.children && (
        <div className="absolute top-full left-0 pt-2 z-50 min-w-[230px]">
          <div className="bg-[#1a1a1a] border border-white/10 shadow-2xl py-1">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-4 py-2.5 text-xs font-['Barlow_Condensed'] font-600 tracking-wide uppercase text-white/60 hover:text-[#C0392B] hover:bg-white/5 transition-colors"
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
      <div className="hidden md:block bg-[#111111] border-b border-white/5">
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a href="tel:+15099984033" className="flex items-center gap-1.5 text-xs text-white/50 hover:text-[#C0392B] transition-colors">
              <Phone size={11} className="text-[#C0392B]" />
              (509) 998-4033
            </a>
            <a href="mailto:info@truehomesinspections.com" className="flex items-center gap-1.5 text-xs text-white/50 hover:text-[#C0392B] transition-colors">
              <Mail size={11} className="text-[#C0392B]" />
              info@truehomesinspections.com
            </a>
            <div className="flex items-center gap-1.5 text-xs text-white/50">
              <Clock size={11} className="text-[#C0392B]" />
              Mon–Sat 7am–7pm
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={10} className="text-[#D35400] fill-[#D35400]" />)}
              <span className="text-xs text-white/50 ml-1">5.0 · 100+ Reviews</span>
            </div>
            <a
              href="https://www.facebook.com/truehomesinspections"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#C0392B] transition-colors"
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
            ? "bg-[#111111]/96 backdrop-blur-sm shadow-2xl border-b border-white/5"
            : "bg-[#141414] border-b border-white/5"
        }`}
      >
        <div className="container flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src={LOGO_URL}
              alt="True Homes Home Inspections"
              className="h-12 w-auto object-contain"
              style={{ filter: "brightness(1.05)" }}
            />
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

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+15099984033" className="flex items-center gap-1.5 text-xs text-white/60 hover:text-[#C0392B] transition-colors font-['Barlow_Condensed'] font-600 tracking-wide">
              <Phone size={13} className="text-[#C0392B]" />
              (509) 998-4033
            </a>
            <Link href="/schedule" className="btn-primary text-xs py-2.5 px-5">
              Schedule
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white/60 hover:text-white transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#111111] border-t border-white/5">
            <div className="container py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={`block py-2.5 text-sm font-['Barlow_Condensed'] font-600 tracking-widest uppercase transition-colors ${
                      location === item.href ? "text-[#C0392B]" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-xs font-['Barlow_Condensed'] font-600 tracking-widest uppercase text-white/50 hover:text-[#C0392B] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/5 space-y-3">
                <a href="tel:+15099984033" className="flex items-center gap-2 text-sm text-white/60">
                  <Phone size={14} className="text-[#C0392B]" /> (509) 998-4033
                </a>
                <Link href="/schedule" className="btn-primary text-xs w-full justify-center">
                  Schedule Inspection
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#111111] border-t border-white/5">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="mb-5">
                <img
                  src={LOGO_URL}
                  alt="True Homes Home Inspections"
                  className="h-14 w-auto object-contain"
                  style={{ filter: "brightness(1.05)" }}
                />
              </div>
              <p className="text-sm text-white/50 leading-relaxed mb-5">
                North Idaho's trusted, locally owned home inspection company. Licensed, InterNACHI certified, and committed to protecting your investment.
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-[#D35400] fill-[#D35400]" />)}
                <span className="text-xs text-white/50 ml-1">5.0 · 100+ Reviews</span>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/truehomesinspections"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/5 flex items-center justify-center hover:bg-[#C0392B]/20 transition-colors"
                >
                  <Facebook size={14} className="text-white/50 hover:text-[#C0392B]" />
                </a>
              </div>
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
                  { label: "Sample Reports", href: "/sample-reports" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/50 hover:text-[#C0392B] transition-colors">
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
                    <Link href={link.href} className="text-sm text-white/50 hover:text-[#C0392B] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-['Barlow_Condensed'] font-700 text-sm tracking-widest uppercase text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+15099984033" className="flex items-start gap-2 text-sm text-white/50 hover:text-[#C0392B] transition-colors">
                    <Phone size={13} className="text-[#C0392B] mt-0.5 flex-shrink-0" />
                    (509) 998-4033
                  </a>
                </li>
                <li>
                  <a href="mailto:info@truehomesinspections.com" className="flex items-start gap-2 text-sm text-white/50 hover:text-[#C0392B] transition-colors">
                    <Mail size={13} className="text-[#C0392B] mt-0.5 flex-shrink-0" />
                    info@truehomesinspections.com
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm text-white/50">
                  <MapPin size={13} className="text-[#C0392B] mt-0.5 flex-shrink-0" />
                  North Idaho Panhandle
                </li>
                <li className="flex items-start gap-2 text-sm text-white/50">
                  <Clock size={13} className="text-[#C0392B] mt-0.5 flex-shrink-0" />
                  Mon–Sat: 7am–7pm
                </li>
              </ul>
              <div className="mt-5">
                <Link href="/schedule" className="btn-primary text-xs">
                  Schedule Inspection
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} True Homes Inspections. All rights reserved. Idaho Licensed Home Inspector.
            </p>
            <div className="flex gap-5">
              {[
                { label: "Privacy Policy", href: "/contact" },
                { label: "Terms of Service", href: "/contact" },
                { label: "InterNACHI Member", href: "https://www.nachi.org", external: true },
              ].map((link) => (
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white/40 hover:text-[#C0392B] transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.label} href={link.href} className="text-xs text-white/40 hover:text-[#C0392B] transition-colors">
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
