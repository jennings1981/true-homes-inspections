import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Home, FileSearch, Hammer, Wind, ArrowRight, CheckCircle, Phone } from "lucide-react";

const INSPECTOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427046845/ToYqQAZz6CCmi4HjBtrLQ7/hero-house-inspection-63aGz43DbvpCKgC7R3bn5U.webp";

const services = [
  {
    icon: Home,
    title: "Buyer Home Inspection",
    href: "/services/buyer-home-inspection",
    desc: "Our most comprehensive service — a thorough evaluation of every accessible system and component in the home before you close. We examine the roof, foundation, electrical, plumbing, HVAC, insulation, windows, doors, and much more.",
    includes: [
      "Roof, gutters, and drainage",
      "Foundation and structural components",
      "Electrical systems and panels",
      "Plumbing and water heater",
      "HVAC systems and ductwork",
      "Insulation and ventilation",
      "Windows, doors, and exterior",
      "Interior rooms and finishes",
    ],
  },
  {
    icon: FileSearch,
    title: "Pre-Listing (Seller) Inspection",
    href: "/services/pre-listing-inspection",
    desc: "Sell your home faster and for more money. A pre-listing inspection identifies issues before buyers discover them, giving you the opportunity to make repairs, price accurately, and negotiate from a position of strength.",
    includes: [
      "Same scope as buyer inspection",
      "Identify deal-breakers before listing",
      "Accurate pricing support",
      "Reduce buyer negotiation leverage",
      "Faster, smoother closing",
      "Seller disclosure documentation",
    ],
  },
  {
    icon: Hammer,
    title: "New Construction Inspection",
    href: "/services/new-construction-inspection",
    desc: "New homes aren't perfect. Builder errors, code violations, and installation defects are common. We inspect at key phases — pre-drywall and final walkthrough — to ensure your new home meets standards before you take possession.",
    includes: [
      "Pre-drywall phase inspection",
      "Final walkthrough inspection",
      "Builder punch-list support",
      "Code compliance review",
      "Structural and mechanical systems",
      "Warranty documentation support",
    ],
  },
  {
    icon: Wind,
    title: "Radon Testing",
    href: "/services/radon-testing",
    desc: "Idaho has some of the highest radon levels in the nation. Radon is a colorless, odorless radioactive gas that is the second leading cause of lung cancer. We perform certified radon testing and provide clear results and mitigation recommendations.",
    includes: [
      "Certified radon measurement",
      "Short-term and long-term testing",
      "EPA-standard protocols",
      "Clear results report",
      "Mitigation recommendations",
      "Can be added to any inspection",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      <div className="bg-[oklch(0.12_0.005_260)] py-16 border-b border-white/5">
        <div className="container">
          <div className="section-label mb-4">What We Offer</div>
          <h1 className="font-['Barlow_Condensed'] font-800 text-5xl md:text-6xl text-white leading-tight mb-4">
            Home Inspection Services
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Comprehensive, certified home inspection services for buyers, sellers, and new construction in Sandpoint, Coeur d'Alene, Post Falls, and all of North Idaho.
          </p>
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container space-y-16">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="w-12 h-12 bg-[#C0392B]/10 flex items-center justify-center mb-5">
                  <svc.icon size={24} className="text-[#C0392B]" />
                </div>
                <h2 className="font-['Barlow_Condensed'] font-800 text-4xl text-white leading-tight mb-4">
                  {svc.title}
                </h2>
                <div className="amber-divider mb-5" />
                <p className="text-muted-foreground leading-relaxed mb-6">{svc.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {svc.includes.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle size={13} className="text-[#C0392B] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href={svc.href} className="btn-primary text-xs">
                  Learn More <ArrowRight size={13} />
                </Link>
              </div>
              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <img
                  src={INSPECTOR_IMG}
                  alt={svc.title}
                  className="w-full h-[360px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#C0392B]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-white leading-tight mb-1">
              Questions About Our Services?
            </h2>
            <p className="text-white/70 text-sm">Call us or schedule online — we're happy to help.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/schedule" className="bg-[#1a1a1a] text-white font-['Barlow_Condensed'] font-700 text-xs tracking-widest uppercase px-6 py-3 hover:bg-black transition-colors flex items-center gap-2">
              Schedule Now <ArrowRight size={13} />
            </Link>
            <a href="tel:+15099984033" className="border-2 border-white text-white font-['Barlow_Condensed'] font-700 text-xs tracking-widest uppercase px-6 py-3 hover:bg-[#1a1a1a] hover:text-white transition-colors flex items-center gap-2">
              <Phone size={13} /> (509) 998-4033
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
