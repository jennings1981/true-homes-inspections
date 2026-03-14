/**
 * Home Page — "Territorial Authority" Design
 * Hero: cinematic Lake Pend Oreille + inline quote form
 * Sections: Stats, Services, Process, Testimonials, Blog preview, CTA
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import {
  Phone, ArrowRight, CheckCircle, Star, Shield, Award, Clock,
  Home as HomeIcon, FileSearch, Hammer, Wind, ChevronRight
} from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427046845/ToYqQAZz6CCmi4HjBtrLQ7/hero-north-idaho-M9dpChiYReqSTwNmxxV7rj.webp";
const INSPECTOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427046845/ToYqQAZz6CCmi4HjBtrLQ7/hero-house-inspection-63aGz43DbvpCKgC7R3bn5U.webp";
const LANDSCAPE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427046845/ToYqQAZz6CCmi4HjBtrLQ7/north-idaho-landscape-aGtsL65CuHUy9D4qReAaQj.webp";
const INTERIOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427046845/ToYqQAZz6CCmi4HjBtrLQ7/inspection-interior-5kwkj8D2DYcxBYd4VkaTu6.webp";

const services = [
  {
    icon: HomeIcon,
    title: "Buyer Home Inspection",
    desc: "Comprehensive evaluation of all major systems and components before you close. Know exactly what you're buying.",
    href: "/services/buyer-home-inspection",
  },
  {
    icon: FileSearch,
    title: "Pre-Listing Inspection",
    desc: "Sell with confidence. Identify issues before buyers do and price your home accurately.",
    href: "/services/pre-listing-inspection",
  },
  {
    icon: Hammer,
    title: "New Construction Inspection",
    desc: "Even new homes have defects. We inspect at key phases to ensure your builder meets standards.",
    href: "/services/new-construction-inspection",
  },
  {
    icon: Wind,
    title: "Radon Testing",
    desc: "Idaho has elevated radon levels. We test and report so you can protect your family's health.",
    href: "/services/radon-testing",
  },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "3,500+", label: "Inspections Completed" },
  { value: "100%", label: "Certified & Licensed" },
  { value: "48hr", label: "Report Delivery" },
];

const process = [
  { num: "01", title: "Schedule Online", desc: "Book your inspection in minutes using our simple online form or call us directly." },
  { num: "02", title: "On-Site Inspection", desc: "We spend 2–4 hours thoroughly examining every accessible system and component." },
  { num: "03", title: "Detailed Report", desc: "Receive a comprehensive digital report with photos within 24–48 hours." },
  { num: "04", title: "Review & Act", desc: "We walk you through findings and answer every question you have." },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Sandpoint, ID",
    rating: 5,
    text: "Absolutely thorough inspection. The report was incredibly detailed with photos of every issue found. Saved us from a very expensive mistake on a lakefront property.",
  },
  {
    name: "James & Linda K.",
    location: "Coeur d'Alene, ID",
    rating: 5,
    text: "Professional, knowledgeable, and patient. He took the time to explain everything he found and helped us understand what was urgent vs. what could wait.",
  },
  {
    name: "Mike T.",
    location: "Post Falls, ID",
    rating: 5,
    text: "Used True Homes for our new construction inspection. Found several issues the builder had missed. Worth every penny. Will use again for our next purchase.",
  },
];

const blogPosts = [
  {
    title: "Common Issues Found in North Idaho Homes",
    excerpt: "From moisture intrusion to aging electrical panels, here are the most frequent problems we discover during inspections in the Sandpoint and Coeur d'Alene areas.",
    date: "March 2025",
    href: "/blog",
  },
  {
    title: "What Buyers Should Know Before Buying in Sandpoint",
    excerpt: "The Sandpoint real estate market moves fast. Here's what every buyer should understand about home inspections before making an offer.",
    date: "February 2025",
    href: "/blog",
  },
  {
    title: "How Radon Affects Homes in North Idaho",
    excerpt: "Idaho consistently ranks among the highest radon-risk states. Learn why testing matters and what levels are considered dangerous.",
    date: "January 2025",
    href: "/blog",
  },
];

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = ref.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const pageRef = useScrollAnimation();

  return (
    <Layout>
      <div ref={pageRef}>
        {/* ── HERO ── */}
        <section
          className="relative min-h-screen flex items-center overflow-hidden"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="relative z-10 container py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Headline */}
              <div>
                <div className="section-label text-[#D35400] mb-6">
                  North Idaho's Trusted Inspector
                </div>
                <h1 className="font-['Barlow_Condensed'] font-800 text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95] mb-6 tracking-tight">
                  TRUSTED HOME<br />
                  <span className="text-[#D35400]">INSPECTIONS</span><br />
                  IN NORTH IDAHO
                </h1>
                <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed font-['Barlow'] font-300">
                  Serving Sandpoint, Coeur d'Alene, Post Falls, and surrounding communities. Licensed &amp; InterNACHI certified with 20+ years of experience protecting North Idaho home buyers.
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  <Link href="/schedule" className="btn-amber text-sm">
                    Schedule Your Inspection <ArrowRight size={14} />
                  </Link>
                  <a href="tel:+15099984033" className="btn-outline-amber text-sm">
                    <Phone size={14} /> Call Now
                  </a>
                </div>
                {/* Trust badges */}
                <div className="flex flex-wrap gap-6">
                  {[
                    { icon: Shield, label: "InterNACHI Certified" },
                    { icon: Award, label: "Idaho Licensed" },
                    { icon: CheckCircle, label: "20+ Years Experience" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-sm text-white/70">
                      <Icon size={14} className="text-[#D35400]" />
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Quick quote form */}
              <div className="lg:ml-auto w-full max-w-sm">
                <div className="bg-[oklch(0.12_0.005_260)]/90 backdrop-blur-sm border border-white/10 p-6">
                  <h3 className="font-['Barlow_Condensed'] font-700 text-lg text-white tracking-wide mb-1">
                    Request a Quote
                  </h3>
                  <p className="text-xs text-muted-foreground mb-5">We'll respond within 1 business hour.</p>
                  <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white/5 border border-white/10 px-3 py-2.5 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-[#D35400]/60 transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-white/5 border border-white/10 px-3 py-2.5 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-[#D35400]/60 transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Property Address"
                      className="w-full bg-white/5 border border-white/10 px-3 py-2.5 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-[#D35400]/60 transition-colors"
                    />
                    <select className="w-full bg-white/5 border border-white/10 px-3 py-2.5 text-sm text-muted-foreground focus:outline-none focus:border-[#D35400]/60 transition-colors">
                      <option value="">Select Service</option>
                      <option>Buyer Home Inspection</option>
                      <option>Pre-Listing Inspection</option>
                      <option>New Construction Inspection</option>
                      <option>Radon Testing</option>
                    </select>
                    <Link href="/schedule" className="btn-amber w-full justify-center text-xs">
                      Get a Quote <ArrowRight size={13} />
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section className="bg-[#D35400] py-8">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-['Barlow_Condensed'] font-800 text-4xl text-[oklch(0.10_0.005_260)] leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-['Barlow'] font-600 uppercase tracking-wider text-[oklch(0.15_0.005_260)]/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="max-w-xl mb-14 fade-up">
              <div className="section-label mb-4">What We Do</div>
              <h2 className="font-['Barlow_Condensed'] font-800 text-4xl md:text-5xl text-white leading-tight mb-4">
                Comprehensive Inspection Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                From pre-purchase buyer inspections to radon testing, we provide the thorough, unbiased assessments North Idaho home buyers and sellers need to make confident decisions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((svc, i) => (
                <Link
                  key={svc.title}
                  href={svc.href}
                  className={`service-card group fade-up`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 bg-[#D35400]/10 flex items-center justify-center mb-4 group-hover:bg-[#D35400]/20 transition-colors">
                    <svc.icon size={20} className="text-[#D35400]" />
                  </div>
                  <h3 className="font-['Barlow_Condensed'] font-700 text-lg text-white mb-2 leading-tight">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{svc.desc}</p>
                  <div className="flex items-center gap-1 text-xs text-[#D35400] font-['Barlow_Condensed'] font-600 tracking-wide uppercase">
                    Learn More <ChevronRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center fade-up">
              <Link href="/services" className="btn-outline-amber text-xs">
                View All Services <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── ABOUT SPLIT ── */}
        <section className="py-24 bg-[oklch(0.18_0.005_260)]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image with amber frame */}
              <div className="relative fade-up order-2 lg:order-1">
                <div className="amber-frame">
                  <img
                    src={INSPECTOR_IMG}
                    alt="True Homes Inspections — certified home inspector in North Idaho"
                    className="w-full h-[480px] object-cover relative z-10"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="order-1 lg:order-2 fade-up">
                <div className="section-label mb-4">We Work For You</div>
                <h2 className="font-['Barlow_Condensed'] font-800 text-4xl md:text-5xl text-white leading-tight mb-6">
                  North Idaho's Most Trusted Home Inspector
                </h2>
                <div className="amber-divider mb-6" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  True Homes Inspections is a locally owned, licensed, and InterNACHI-certified home inspection company serving the greater North Idaho region since 2004. We understand the unique challenges of homes in our region — from moisture issues caused by heavy snowpack to aging infrastructure in older Sandpoint and Coeur d'Alene neighborhoods.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Every inspection is performed personally by our certified inspector, ensuring consistent quality and attention to detail. We don't rush. We don't cut corners. We deliver the thorough, honest assessment you deserve before making one of the largest investments of your life.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "InterNACHI Certified Professional Inspector",
                    "Idaho State Licensed",
                    "20+ Years Local Experience",
                    "Detailed Digital Reports with Photos",
                    "Same-Week Scheduling Available",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                      <CheckCircle size={15} className="text-[#D35400] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/about" className="btn-amber text-xs">
                  About True Homes <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
              <div className="section-label mb-4 justify-center">How It Works</div>
              <h2 className="font-['Barlow_Condensed'] font-800 text-4xl md:text-5xl text-white leading-tight mb-4">
                Simple. Thorough. Reliable.
              </h2>
              <p className="text-muted-foreground">
                From scheduling to report delivery, we make the inspection process straightforward and stress-free.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, i) => (
                <div
                  key={step.num}
                  className="relative fade-up"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-[#D35400]/20 z-0" style={{ width: "calc(100% - 2rem)" }} />
                  )}
                  <div className="relative z-10 p-6 bg-[oklch(0.20_0.005_260)] border border-white/5 h-full">
                    <div className="font-['Barlow_Condensed'] font-800 text-5xl text-[#D35400]/15 leading-none mb-3">
                      {step.num}
                    </div>
                    <h3 className="font-['Barlow_Condensed'] font-700 text-xl text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center fade-up">
              <Link href="/schedule" className="btn-amber text-sm">
                Schedule Your Inspection <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── QUOTE BANNER ── */}
        <section
          className="relative py-28 overflow-hidden"
          style={{
            backgroundImage: `url(${LANDSCAPE_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 container text-center max-w-3xl mx-auto">
            <div className="section-label justify-center mb-6 text-[#D35400]">Our Promise</div>
            <blockquote className="font-['Barlow_Condensed'] font-700 text-3xl md:text-5xl text-white leading-tight mb-6">
              "We inspect every home as if our own family were moving in."
            </blockquote>
            <p className="text-white/60 text-sm mb-8">— True Homes Inspections, Sandpoint, Idaho</p>
            <Link href="/schedule" className="btn-amber text-sm">
              Book Your Inspection Today <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-24 bg-[oklch(0.18_0.005_260)]">
          <div className="container">
            <div className="max-w-xl mb-14 fade-up">
              <div className="section-label mb-4">Client Reviews</div>
              <h2 className="font-['Barlow_Condensed'] font-800 text-4xl md:text-5xl text-white leading-tight">
                Trusted by North Idaho Home Buyers
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className="testimonial-card fade-up"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex gap-1 mb-4 mt-2">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-[#D35400] fill-[#D35400]" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">"{t.text}"</p>
                  <div>
                    <div className="font-['Barlow_Condensed'] font-700 text-white text-sm">{t.name}</div>
                    <div className="text-xs text-[#D35400]/70">{t.location}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center fade-up">
              <Link href="/reviews" className="btn-outline-amber text-xs">
                Read All Reviews <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── AREAS SERVED ── */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-12 fade-up">
              <div className="section-label justify-center mb-4">Service Area</div>
              <h2 className="font-['Barlow_Condensed'] font-800 text-4xl md:text-5xl text-white leading-tight mb-4">
                Serving All of North Idaho
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                We provide certified home inspections throughout the North Idaho panhandle, from Sandpoint and Bonner County to Coeur d'Alene and Kootenai County.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 fade-up">
              {[
                { city: "Sandpoint", href: "/sandpoint-home-inspector" },
                { city: "Coeur d'Alene", href: "/coeur-dalene-home-inspection" },
                { city: "Post Falls", href: "/post-falls-home-inspector" },
                { city: "Hayden", href: "/areas-served" },
                { city: "Rathdrum", href: "/areas-served" },
                { city: "Sagle", href: "/areas-served" },
                { city: "Dover", href: "/areas-served" },
                { city: "Ponderay", href: "/areas-served" },
                { city: "Priest River", href: "/areas-served" },
                { city: "Bonners Ferry", href: "/areas-served" },
                { city: "Spirit Lake", href: "/areas-served" },
                { city: "Athol", href: "/areas-served" },
              ].map((area) => (
                <Link
                  key={area.city}
                  href={area.href}
                  className="bg-[oklch(0.20_0.005_260)] border border-white/5 px-4 py-3 text-center text-sm text-muted-foreground hover:text-[#D35400] hover:border-[#D35400]/30 transition-all font-['Barlow'] font-500"
                >
                  {area.city}
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center fade-up">
              <Link href="/areas-served" className="btn-outline-amber text-xs">
                View Full Service Area <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── BLOG PREVIEW ── */}
        <section className="py-24 bg-[oklch(0.18_0.005_260)]">
          <div className="container">
            <div className="flex items-end justify-between mb-12 fade-up">
              <div>
                <div className="section-label mb-4">Homeowner Resources</div>
                <h2 className="font-['Barlow_Condensed'] font-800 text-4xl md:text-5xl text-white leading-tight">
                  North Idaho Home Inspection Blog
                </h2>
              </div>
              <Link href="/blog" className="hidden md:flex items-center gap-2 text-sm text-[#D35400] hover:text-[#E8660A] transition-colors font-['Barlow_Condensed'] font-600 tracking-wide uppercase">
                All Posts <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <Link
                  key={post.title}
                  href={post.href}
                  className="group bg-[oklch(0.20_0.005_260)] border border-white/5 hover:border-[#D35400]/20 transition-all fade-up"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="p-6">
                    <div className="text-xs text-[#D35400]/70 font-['Barlow_Condensed'] font-600 tracking-widest uppercase mb-3">
                      {post.date}
                    </div>
                    <h3 className="font-['Barlow_Condensed'] font-700 text-xl text-white mb-3 leading-tight group-hover:text-[#D35400] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-1 text-xs text-[#D35400] font-['Barlow_Condensed'] font-600 tracking-wide uppercase">
                      Read More <ChevronRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-20 bg-[#D35400]">
          <div className="container text-center">
            <h2 className="font-['Barlow_Condensed'] font-800 text-4xl md:text-5xl text-[oklch(0.10_0.005_260)] leading-tight mb-4">
              Ready to Schedule Your Inspection?
            </h2>
            <p className="text-[oklch(0.10_0.005_260)]/70 max-w-xl mx-auto mb-8 leading-relaxed">
              Don't leave the biggest purchase of your life to chance. Schedule your North Idaho home inspection today and get a detailed report within 48 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/schedule"
                className="bg-[oklch(0.10_0.005_260)] text-white font-['Barlow_Condensed'] font-700 text-sm tracking-widest uppercase px-8 py-3 hover:bg-[oklch(0.20_0.005_260)] transition-colors flex items-center gap-2"
              >
                Schedule Online <ArrowRight size={14} />
              </Link>
              <a
                href="tel:+15099984033"
                className="border-2 border-[oklch(0.10_0.005_260)] text-[oklch(0.10_0.005_260)] font-['Barlow_Condensed'] font-700 text-sm tracking-widest uppercase px-8 py-3 hover:bg-[oklch(0.10_0.005_260)] hover:text-white transition-colors flex items-center gap-2"
              >
                <Phone size={14} /> (509) 998-4033
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
