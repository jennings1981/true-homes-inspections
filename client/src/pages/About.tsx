/**
 * About Page — True Homes Inspections
 * "Territorial Authority" design: dark slate + amber
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { CheckCircle, Shield, Award, Star, ArrowRight, Phone } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427046845/ToYqQAZz6CCmi4HjBtrLQ7/about-inspector-TRATKnoBszH9m4P7w9HXag.webp";
const INTERIOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427046845/ToYqQAZz6CCmi4HjBtrLQ7/inspection-interior-5kwkj8D2DYcxBYd4VkaTu6.webp";

const credentials = [
  "InterNACHI Certified Professional Inspector (CPI)",
  "Idaho State Licensed Home Inspector",
  "20+ Years Residential Construction Experience",
  "Radon Measurement Certified",
  "Continuing Education — 24 hours annually",
  "Member: International Association of Certified Home Inspectors",
];

const values = [
  {
    icon: Shield,
    title: "Unbiased Integrity",
    desc: "We work exclusively for you — the client. We have no financial relationship with real estate agents, contractors, or repair companies.",
  },
  {
    icon: Award,
    title: "Certified Expertise",
    desc: "InterNACHI certified and Idaho licensed, we stay current with the latest inspection standards and North Idaho building codes.",
  },
  {
    icon: Star,
    title: "Thorough Reports",
    desc: "Our digital reports include hundreds of photos, clear explanations, and priority rankings so you know exactly what matters most.",
  },
  {
    icon: CheckCircle,
    title: "Local Knowledge",
    desc: "20+ years inspecting North Idaho homes means we know the region's specific issues — from snowload to moisture, radon to aging infrastructure.",
  },
];

export default function About() {
  return (
    <Layout>
      <div className="bg-[oklch(0.12_0.005_260)] py-16 border-b border-white/5">
        <div className="container">
          <div className="section-label mb-4">About Us</div>
          <h1 className="font-['Barlow_Condensed'] font-800 text-5xl md:text-6xl text-white leading-tight mb-4">
            About True Homes Inspections
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            North Idaho's trusted, locally owned home inspection company. Licensed, certified, and committed to protecting your investment.
          </p>
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">Our Story</div>
              <h2 className="font-['Barlow_Condensed'] font-800 text-4xl text-white leading-tight mb-6">
                20+ Years Protecting North Idaho Home Buyers
              </h2>
              <div className="amber-divider mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                True Homes Inspections was founded with a single mission: to give North Idaho home buyers and sellers the honest, thorough information they need to make confident real estate decisions. Based in Coeur d'Alene and serving the entire North Idaho panhandle, we've built our reputation one inspection at a time.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our inspector brings over 20 years of residential construction and inspection experience to every job. That background means we don't just identify problems — we understand why they occur, how serious they are, and what it takes to fix them.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We inspect every home with the same thoroughness we'd apply if our own family were moving in. That standard has earned us hundreds of five-star reviews and the trust of North Idaho's real estate community.
              </p>
              <Link href="/schedule" className="btn-primary text-xs">
                Schedule Your Inspection <ArrowRight size={13} />
              </Link>
            </div>
            <div className="relative">
              <div className="amber-frame">
                <img
                  src={ABOUT_IMG}
                  alt="True Homes Inspections — certified home inspector"
                  className="w-full h-[520px] object-cover relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.18_0.005_260)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">Credentials</div>
              <h2 className="font-['Barlow_Condensed'] font-800 text-4xl text-white leading-tight mb-6">
                Licensed, Certified &amp; Experienced
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our inspector holds all required Idaho state licenses and maintains active InterNACHI certification — the gold standard in the home inspection industry.
              </p>
              <ul className="space-y-3">
                {credentials.map((cred) => (
                  <li key={cred} className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle size={15} className="text-[#C0392B] flex-shrink-0 mt-0.5" />
                    {cred}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={INTERIOR_IMG}
                alt="Home inspection in progress — North Idaho"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label justify-center mb-4">Our Values</div>
            <h2 className="font-['Barlow_Condensed'] font-800 text-4xl text-white leading-tight">
              Why Clients Choose True Homes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="service-card">
                <div className="w-10 h-10 bg-[#C0392B]/10 flex items-center justify-center mb-4">
                  <v.icon size={20} className="text-[#C0392B]" />
                </div>
                <h3 className="font-['Barlow_Condensed'] font-700 text-xl text-white mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#C0392B]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-[oklch(0.10_0.005_260)] leading-tight mb-1">
              Ready to Work With North Idaho's Best?
            </h2>
            <p className="text-[oklch(0.10_0.005_260)]/70 text-sm">Schedule your inspection today or call us with any questions.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/schedule" className="bg-[oklch(0.10_0.005_260)] text-white font-['Barlow_Condensed'] font-700 text-xs tracking-widest uppercase px-6 py-3 hover:bg-[oklch(0.20_0.005_260)] transition-colors flex items-center gap-2">
              Schedule Now <ArrowRight size={13} />
            </Link>
            <a href="tel:+15099984033" className="border-2 border-[oklch(0.10_0.005_260)] text-[oklch(0.10_0.005_260)] font-['Barlow_Condensed'] font-700 text-xs tracking-widest uppercase px-6 py-3 hover:bg-[oklch(0.10_0.005_260)] hover:text-white transition-colors flex items-center gap-2">
              <Phone size={13} /> Call Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
