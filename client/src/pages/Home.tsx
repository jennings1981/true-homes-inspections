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
const AHIT_LOGO = "/manus-storage/ahit-logo-transparent_0fa1ff18.png";
const ASHI_LOGO = "/manus-storage/ashi-logo-transparent_5ad9c0ba.png";
const INSPECTOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427046845/ToYqQAZz6CCmi4HjBtrLQ7/hero-house-inspection-63aGz43DbvpCKgC7R3bn5U.webp";
const TIM_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427046845/ToYqQAZz6CCmi4HjBtrLQ7/tim-photo_8065e303.png";
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
  { value: "20+", label: "Years in Construction" },
  { value: "11+", label: "Years Inspecting" },
  { value: "3,500+", label: "Inspections Completed" },
  { value: "24hr", label: "Guaranteed Report" },
];

const process = [
  { num: "01", title: "Call Tim Directly", desc: "Call Tim at 208-243-9706 to book your inspection. Same-week appointments are often available." },
  { num: "02", title: "On-Site Inspection", desc: "We spend 2–4 hours thoroughly examining every accessible system and component." },
  { num: "03", title: "Detailed Report", desc: "Receive a comprehensive digital report with photos within 24 hours — guaranteed." },
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
                  Serving Sandpoint, Coeur d'Alene, Post Falls, and surrounding communities. ASHI certified with 20+ years in construction and 11+ years inspecting homes across North Idaho.
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  <a href="tel:+12082439706" className="btn-amber text-sm">
                    <Phone size={14} /> Call Tim — 208-243-9706
                  </a>
                </div>
                {/* Trust badges */}
                <div className="flex flex-wrap gap-6 mb-6">
                  {[
                    { icon: Shield, label: "ASHI Certified" },
                    { icon: Award, label: "Previously WA Licensed" },
                    { icon: CheckCircle, label: "20+ Yrs Construction" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-sm text-white/70">
                      <Icon size={14} className="text-[#D35400]" />
                      {label}
                    </div>
                  ))}
                </div>
                {/* Certification logos */}
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#1a1a1a] p-1.5 flex items-center justify-center"><img src={AHIT_LOGO} alt="AHIT Certified" className="h-11 w-11 object-contain" /></div>
                  <img src={ASHI_LOGO} alt="ASHI Certified" className="h-14 w-auto object-contain opacity-90" />
                </div>
              </div>

              {/* Right: Call CTA panel */}
              <div className="lg:ml-auto w-full max-w-sm">
                <div className="bg-[oklch(0.12_0.005_260)]/90 backdrop-blur-sm border border-[#D35400]/30 p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#D35400]/10 border-2 border-[#D35400] flex items-center justify-center mx-auto mb-5">
                    <Phone size={28} className="text-[#D35400]" />
                  </div>
                  <h3 className="font-['Barlow_Condensed'] font-800 text-2xl text-white tracking-wide mb-2">
                    Call Tim Directly
                  </h3>
                  <p className="text-sm text-white/60 mb-6 leading-relaxed">
                    Skip the forms. Talk to Tim personally — same-week appointments often available.
                  </p>
                  <a
                    href="tel:+12082439706"
                    className="btn-amber w-full justify-center text-base flex items-center gap-3 py-4"
                  >
                    <Phone size={18} /> 208-243-9706
                  </a>
                  <p className="text-xs text-white/40 mt-4">Mon–Sat 7am–7pm · North Idaho</p>
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

        {/* ── MEET TIM ── */}
        <section className="py-20 bg-[oklch(0.18_0.005_260)]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Photo */}
              <div className="fade-up flex justify-center lg:justify-start">
                <div className="relative">
                  {/* Orange accent border */}
                  <div
                    className="absolute inset-0 border-2 border-[#D35400]"
                    style={{ transform: "translate(12px, 12px)" }}
                  />
                  <img
                    src={TIM_PHOTO}
                    alt="Tim — Certified Home Inspector, True Homes Inspections"
                    className="relative z-10 w-72 h-80 object-cover object-top shadow-2xl"
                    style={{ objectPosition: "center 10%" }}
                  />
                  {/* Badge */}
                  <div className="absolute -bottom-5 -right-5 z-20 bg-[#D35400] px-4 py-3 shadow-xl">
                    <div className="font-['Barlow_Condensed'] font-800 text-white text-xl leading-none">20+</div>
                    <div className="font-['Barlow'] text-white/80 text-xs uppercase tracking-wider">Years Exp.</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="fade-up">
                <div className="section-label mb-4">Meet Your Inspector</div>
                <h2 className="font-['Barlow_Condensed'] font-800 text-4xl md:text-5xl text-white leading-tight mb-2">
                  Hi, I'm Tim
                </h2>
                <div className="font-['Barlow_Condensed'] font-600 text-[#D35400] text-lg tracking-wide uppercase mb-5">
                  Owner &amp; Certified Home Inspector
                </div>
                <div className="amber-divider mb-6" />
                <blockquote className="border-l-2 border-[#D35400] pl-5 mb-6">
                  <p className="font-['Barlow_Condensed'] font-600 text-xl text-white leading-snug italic">
                    "My mission is simple: give every client the honest, thorough inspection I'd want for my own family's home — so you can buy or sell with complete confidence."
                  </p>
                </blockquote>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With over 20 years of hands-on experience in construction and home inspection across North Idaho, I've seen it all — from moisture intrusion in lakefront cabins to aging electrical panels in Sandpoint's historic neighborhoods. I founded True Homes Inspections because I believe every buyer deserves an inspector who works for <em>them</em>, not the deal.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Every inspection I perform is thorough, unhurried, and backed by ASHI certification and Idaho state licensing. You'll receive a detailed digital report with photos within 48 hours — and I'm always available to answer your questions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/about" className="btn-amber text-xs">
                    Read Tim's Full Story <ArrowRight size={13} />
                  </Link>
                  <a href="tel:+12082439706" className="btn-outline-amber text-xs flex items-center gap-2">
                    <Phone size={13} /> Call Tim Now
                  </a>
                </div>
              </div>
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
                  True Homes Inspections is a locally owned, licensed, and ASHI-certified home inspection company serving the greater North Idaho region since 2004. We understand the unique challenges of homes in our region — from moisture issues caused by heavy snowpack to aging infrastructure in older Sandpoint and Coeur d'Alene neighborhoods.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Every inspection is performed personally by our certified inspector, ensuring consistent quality and attention to detail. We don't rush. We don't cut corners. We deliver the thorough, honest assessment you deserve before making one of the largest investments of your life.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "ASHI Certified Professional Inspector",
                    "Previously Licensed in WA - Now Serving North Idaho",
                    "20+ Years in Construction, 11+ Years Inspecting",
                    "Detailed Digital Reports with Photos",
                    "24-Hour Guaranteed Report Delivery",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                      <CheckCircle size={15} className="text-[#D35400] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a href="tel:+12082439706" className="btn-amber text-xs flex items-center gap-2">
                    <Phone size={13} /> Call Tim — 208-243-9706
                  </a>
                  <Link href="/about" className="btn-outline-amber text-xs">
                    About Tim <ArrowRight size={13} />
                  </Link>
                </div>
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
              <a href="tel:+12082439706" className="btn-amber text-sm flex items-center gap-2">
              <Phone size={14} /> Call Tim — 208-243-9706
            </a>
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
            <a href="tel:+12082439706" className="btn-amber text-sm flex items-center gap-2">
              <Phone size={14} /> Call Tim — 208-243-9706
            </a>
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
              <a
                href="tel:+12082439706"
                className="bg-[oklch(0.10_0.005_260)] text-white font-['Barlow_Condensed'] font-700 text-sm tracking-widest uppercase px-8 py-3 hover:bg-[oklch(0.20_0.005_260)] transition-colors flex items-center gap-2"
              >
                <Phone size={14} /> Call Tim Now — 208-243-9706
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
