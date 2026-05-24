/**
 * About Page — True Homes Inspections
 * Tim's full story: background, credentials, values, and personal mission
 * Brand: dark slate + orange #D35400
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import {
  Shield, Award, CheckCircle, ArrowRight, Phone,
  Star, Users, Home as HomeIcon, Clock
} from "lucide-react";

const TIM_PHOTO = "/manus-storage/tim-headshot-pro_7b94626e.jpg";
const AHIT_LOGO = "/manus-storage/ahit-logo-transparent_0fa1ff18.png";
const ASHI_LOGO = "/manus-storage/ashi-logo-transparent_5ad9c0ba.png";
const LANDSCAPE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427046845/ToYqQAZz6CCmi4HjBtrLQ7/ni-mountain-cabin-jdBz6UgXHUdpXSF4RfL7fu.webp";
const INTERIOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427046845/ToYqQAZz6CCmi4HjBtrLQ7/ni-inspection-overlay-LWivZzmpRAfYMZvPMAa2rS.webp";

const credentials = [
  { icon: Shield, label: "AHIT Trained & Certified Inspector" },
  { icon: Award, label: "Previously Licensed in WA — Now Serving North Idaho & Eastern WA" },
  { icon: CheckCircle, label: "20+ Years in Construction, 11+ Years Inspecting" },
  { icon: HomeIcon, label: "2,500+ Inspections Completed" },
  { icon: Clock, label: "24-Hour Guaranteed Report Delivery" },
  { icon: Users, label: "Locally Owned & Operated in North Idaho" },
];

const values = [
  {
    title: "Honesty Above All",
    desc: "I will never soften a finding to help a deal close. My job is to tell you the truth about a home — every time, without exception.",
  },
  {
    title: "Thoroughness You Can Count On",
    desc: "I don't rush inspections. Every accessible system, component, and surface gets my full attention, because the details matter when you're making a major investment.",
  },
  {
    title: "Education, Not Just Reports",
    desc: "I walk every client through the findings personally. You'll leave understanding your home — what needs immediate attention, what can wait, and what's perfectly normal.",
  },
  {
    title: "Local Knowledge",
    desc: "North Idaho homes have unique challenges: heavy snowpack, moisture intrusion, older infrastructure. I know what to look for because I've lived and worked here for decades.",
  },
];

const timeline = [
  {
    year: "Early Career",
    title: "Roots in Construction",
    desc: "Tim began his career in residential and commercial construction, working across multiple trades and developing a deep, hands-on understanding of how homes are built — and where they fail. That foundation became the backbone of everything he does as an inspector today.",
  },
  {
    year: "2015",
    title: "Caribou Ridge Construction",
    desc: "After years working in both residential and commercial construction, Tim started Caribou Ridge Construction — running the company and managing projects across the region. It was this experience as a business owner and builder that gave him an unmatched perspective on construction quality, contractor workmanship, and what buyers truly need to know before purchasing a home.",
  },
  {
    year: "The Shift",
    title: "From Builder to Inspector",
    desc: "After running Caribou Ridge Construction, Tim made a deliberate choice to shift his career toward home inspections — bringing his builder's eye and deep construction knowledge to serve buyers and sellers directly. He earned his AHIT certification and began inspecting full-time across North Idaho and Eastern Washington.",
  },
  {
    year: "True Homes",
    title: "True Homes Inspections Founded",
    desc: "Tim founded True Homes Inspections to build something he could be proud of: a locally owned company with a reputation for honesty, thoroughness, and genuine care for every client. The name reflects the mission — true information about your home.",
  },
  {
    year: "Today",
    title: "North Idaho's Trusted Inspector",
    desc: "With over 2,500 inspections completed across Sandpoint, Coeur d'Alene, Post Falls, and surrounding North Idaho and Eastern Washington communities, Tim continues to personally perform every inspection — because he believes that's the only way to guarantee the quality his clients deserve.",
  },
];

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
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

export default function About() {
  const pageRef = useScrollAnimation();

  return (
    <Layout>
      <div ref={pageRef}>

        {/* ── PAGE HERO ── */}
        <section
          className="relative py-28 overflow-hidden"
          style={{
            backgroundImage: `url(${LANDSCAPE_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
          <div className="relative z-10 container">
            <div className="section-label mb-4">About True Homes</div>
            <h1 className="font-['Barlow_Condensed'] font-800 text-5xl md:text-7xl text-white leading-[0.95] tracking-tight mb-4">
              BUILT ON HONESTY.<br />
              <span className="text-[#D35400]">BACKED BY EXPERIENCE.</span>
            </h1>
            <p className="text-white/70 max-w-xl text-lg leading-relaxed">
              True Homes Inspections is a locally owned, ASHI-certified home inspection company serving North Idaho since 2004. Every inspection is performed personally by Tim — because quality can't be delegated.
            </p>
          </div>
        </section>

        {/* ── MEET TIM — FULL INTRO ── */}
        <section className="py-24 bg-[oklch(0.18_0.005_260)]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Photo column */}
              <div className="fade-up">
                <div className="relative inline-block">
                  <div
                    className="absolute inset-0 border-2 border-[#D35400]"
                    style={{ transform: "translate(14px, 14px)" }}
                  />
                  <img
                    src={TIM_PHOTO}
                    alt="Tim — Owner and Certified Home Inspector at True Homes Inspections"
                    className="relative z-10 w-full max-w-md h-[520px] object-cover shadow-2xl"
                    style={{ objectPosition: "center 10%" }}
                  />
                  {/* Credential badge */}
                  <div className="absolute -bottom-6 -right-6 z-20 bg-[#D35400] p-5 shadow-2xl">
                    <div className="flex gap-1 mb-1">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} size={12} className="text-white fill-white" />
                      ))}
                    </div>
                    <div className="font-['Barlow_Condensed'] font-800 text-white text-2xl leading-none">5.0</div>
                    <div className="font-['Barlow'] text-white/80 text-xs uppercase tracking-wider">100+ Reviews</div>
                  </div>
                </div>

                {/* Credentials list below photo */}
                <div className="mt-14 space-y-3">
                  {credentials.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-[#D35400]/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={14} className="text-[#D35400]" />
                      </div>
                      <span className="text-sm text-white/80">{label}</span>
                    </div>
                  ))}
                </div>
                {/* Certification logos */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs text-muted-foreground font-['Barlow_Condensed'] font-600 tracking-widest uppercase mb-4">Certified By</p>
                  <div className="flex items-center gap-6">
                    <a href="https://www.ahit.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                      <div className="rounded-full bg-[#1a1a1a] p-2 flex items-center justify-center"><img src={AHIT_LOGO} alt="AHIT Certified Inspector" className="h-16 w-16 object-contain" /></div>
                    </a>
                    <a href="https://www.homeinspector.org" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                      <img src={ASHI_LOGO} alt="ASHI Certified Inspector" className="h-20 w-auto object-contain" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Story column */}
              <div className="fade-up">
                <div className="section-label mb-4">Meet Your Inspector</div>
                <h2 className="font-['Barlow_Condensed'] font-800 text-4xl md:text-5xl text-white leading-tight mb-2">
                  Tim
                </h2>
                <div className="font-['Barlow_Condensed'] font-600 text-[#D35400] text-lg tracking-wide uppercase mb-6">
                  Owner &amp; Certified Home Inspector
                </div>
                <div className="amber-divider mb-8" />

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    I grew up around construction. From an early age I was fascinated by how buildings work — the systems behind the walls, the structure beneath the floors, the details that separate a well-built home from one that's just waiting for problems to surface. That curiosity turned into a career, and that career eventually led me to home inspection.
                  </p>
                  <p>
                    After spending years in residential construction across the Pacific Northwest, I made the move to North Idaho — and I fell in love with this place. The mountains, the lakes, the community. I also quickly learned that homes here face challenges you don't see everywhere else: the weight of heavy snowpack on roofs, moisture intrusion from our wet winters, older infrastructure in Sandpoint's historic neighborhoods, and radon levels that rank among the highest in the nation.
                  </p>
                  <p>
                    I founded True Homes Inspections because I saw a gap: buyers needed someone who truly understood construction — not just a checklist-checker, but someone who could look at a home and understand its story. Someone who would tell them the truth, even when the truth was uncomfortable.
                  </p>
                  <p>
                    That's what I do. Every single inspection I perform is personal. I don't send employees. I don't rush to fit more jobs into a day. I show up, I take my time, and I give you the honest, thorough assessment you deserve before making one of the biggest financial decisions of your life.
                  </p>
                  <p>
                    When I'm not inspecting homes, you'll find me outdoors — hiking the Selkirks, fishing the Pend Oreille, or spending time with my family. North Idaho isn't just where I work. It's home. And I take that seriously.
                  </p>
                </div>

                <blockquote className="mt-8 border-l-2 border-[#D35400] pl-5">
                  <p className="font-['Barlow_Condensed'] font-600 text-xl text-white leading-snug italic">
                    "I inspect every home as if my own family were moving in. That standard doesn't change — no matter the price point, no matter the timeline pressure."
                  </p>
                  <footer className="mt-3 text-sm text-[#D35400]">— Tim, True Homes Inspections</footer>
                </blockquote>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a href="tel:+12082439706" className="btn-amber text-xs flex items-center gap-2"><Phone size={13} /> Call Tim Now</a>
                  <a href="tel:+12082439706" className="btn-outline-amber text-xs">
                    <Phone size={13} /> 208-243-9706
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="max-w-xl mb-16 fade-up">
              <div className="section-label mb-4">The Journey</div>
              <h2 className="font-['Barlow_Condensed'] font-800 text-4xl md:text-5xl text-white leading-tight">
                Two Decades of Protecting Home Buyers
              </h2>
            </div>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-[#D35400]/20 hidden md:block" />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div
                    key={item.year}
                    className="fade-up relative md:pl-20"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {/* Dot */}
                    <div className="hidden md:flex absolute left-0 top-1 w-12 h-12 bg-[#D35400]/10 border border-[#D35400]/30 items-center justify-center">
                      <div className="w-2 h-2 bg-[#D35400] rounded-full" />
                    </div>
                    <div className="bg-[oklch(0.20_0.005_260)] border border-white/5 p-6 hover:border-[#D35400]/20 transition-colors">
                      <div className="font-['Barlow_Condensed'] font-700 text-[#D35400] text-sm tracking-widest uppercase mb-2">
                        {item.year}
                      </div>
                      <h3 className="font-['Barlow_Condensed'] font-700 text-xl text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="py-24 bg-[oklch(0.18_0.005_260)]">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
              <div className="section-label justify-center mb-4">What We Stand For</div>
              <h2 className="font-['Barlow_Condensed'] font-800 text-4xl md:text-5xl text-white leading-tight">
                The Values Behind Every Inspection
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="fade-up bg-[oklch(0.20_0.005_260)] border border-white/5 p-8 hover:border-[#D35400]/20 transition-colors"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="amber-divider mb-5" />
                  <h3 className="font-['Barlow_Condensed'] font-700 text-2xl text-white mb-3">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ARCHITECTURAL DIAGRAM — full width ── */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="text-center mb-10 fade-up">
              <div className="section-label justify-center mb-4">What We Inspect</div>
              <h2 className="font-['Barlow_Condensed'] font-800 text-4xl md:text-5xl text-white leading-tight">
                Every System. Every Component.
              </h2>
            </div>
            {/* Full-width diagram — use auto height to preserve 16:9 aspect ratio */}
            <div className="fade-up w-full mb-14">
              <img
                src={INTERIOR_IMG}
                alt="Architectural Inspection — Exterior Overview diagram showing all inspection points"
                className="w-full h-auto block"
                style={{ maxWidth: "100%" }}
              />
            </div>
            {/* Stats row below the diagram */}
            <div className="fade-up">
              <div className="section-label mb-4">By the Numbers</div>
              <h2 className="font-['Barlow_Condensed'] font-800 text-3xl md:text-4xl text-white leading-tight mb-8">
                Experience You Can Measure
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "20+", label: "Years of Experience" },
                  { value: "2,500+", label: "Inspections Completed" },
                  { value: "100+", label: "Five-Star Reviews" },
                  { value: "24hr", label: "Report Turnaround" },
                ].map((stat) => (
                  <div key={stat.label} className="border-l-2 border-[#D35400] pl-5">
                    <div className="font-['Barlow_Condensed'] font-800 text-4xl text-white leading-none mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/reviews" className="btn-outline-amber text-xs">
                  Read Client Reviews <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-[#D35400]">
          <div className="container text-center">
            <h2 className="font-['Barlow_Condensed'] font-800 text-4xl md:text-5xl text-[oklch(0.10_0.005_260)] leading-tight mb-4">
              Ready to Work with Tim?
            </h2>
            <p className="text-[oklch(0.10_0.005_260)]/70 max-w-xl mx-auto mb-8 leading-relaxed">
              Schedule your North Idaho home inspection today. Tim will personally perform your inspection and deliver a comprehensive report within 48 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+12082439706" className="bg-[oklch(0.10_0.005_260)] text-white font-['Barlow_Condensed'] font-700 text-sm tracking-widest uppercase px-8 py-3 hover:bg-[oklch(0.20_0.005_260)] transition-colors flex items-center gap-2">
                <Phone size={14} /> Call Tim Now — 208-243-9706
              </a>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
