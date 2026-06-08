/**
 * Services Page — True Homes Inspections
 * All services including new additions: Well Water, Sewer Scope, Lead/Mold/Pest
 * New Construction updated with full phase list
 * All CTAs → call Tim at 208-243-9706
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import {
  Home, FileSearch, Hammer, Wind, ArrowRight, CheckCircle,
  Phone, Droplets, Eye, Bug, Layers
} from "lucide-react";

// One unique Unsplash image per service section
const IMG_BUYER       = "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&auto=format&fit=crop"; // House exterior
const IMG_PRELISTING  = "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=900&auto=format&fit=crop"; // Home for sale
const IMG_NEWCONST    = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&auto=format&fit=crop"; // New construction framing
const IMG_RADON       = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&auto=format&fit=crop"; // Inspector testing
const IMG_WELLWATER   = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&auto=format&fit=crop"; // Water/well testing
const IMG_SEWER       = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&auto=format&fit=crop"; // Pipe/sewer inspection
const IMG_LEADMOLD    = "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&auto=format&fit=crop"; // Home interior
const PHONE = "208-243-9706";
const PHONE_HREF = "tel:+12082439706";

const services = [
  {
    icon: Home,
    img: IMG_BUYER,
    title: "Buyer Home Inspection",
    href: "/services/buyer-home-inspection",
    desc: "Our most comprehensive service — a thorough evaluation of every accessible system and component in the home before you close. We examine the roof, foundation, electrical, plumbing, HVAC, insulation, windows, doors, and much more.",
    pricing: "Starting at $450 — price subject to location, size, and style",
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
    img: IMG_PRELISTING,
    title: "Pre-Listing (Seller) Inspection",
    href: "/services/pre-listing-inspection",
    desc: "Sell your home faster and for more money. A pre-listing inspection identifies issues before buyers discover them, giving you the opportunity to make repairs, price accurately, and negotiate from a position of strength.",
    pricing: "Starting at $450 — price subject to location, size, and style",
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
    img: IMG_NEWCONST,
    title: "New Construction Inspection",
    href: "/services/new-construction-inspection",
    desc: "New homes aren't perfect. Builder errors, code violations, and installation defects are common. We inspect at every key phase of construction — from excavation through finished product — to ensure your new home meets standards before you take possession.",
    includes: [
      "Excavation & site drainage",
      "Foundation inspection",
      "Framing inspection",
      "Electrical rough-in",
      "Plumbing rough-in",
      "HVAC rough-in",
      "Pre-drywall inspection",
      "Finished product / final walkthrough",
    ],
    note: "Phase inspections can be scheduled individually or as a complete package. Call Tim to discuss what's right for your project.",
    pricing: "Call for pricing and details — standalone phases also available",
  },
  {
    icon: Wind,
    img: IMG_RADON,
    title: "Radon Testing",
    href: "/services/radon-testing",
    desc: "Idaho has some of the highest radon levels in the nation. Radon is a colorless, odorless radioactive gas that is the second leading cause of lung cancer in the US. We perform certified radon testing with clear results and mitigation recommendations.",
    pricing: "Starting at $175 with a home inspection",
    includes: [
      "Certified radon measurement",
      "Short-term and long-term testing",
      "EPA-standard protocols",
      "Clear results report",
      "Mitigation recommendations",
      "Can be added to any inspection",
    ],
    radonLink: true,
  },
  {
    icon: Droplets,
    img: IMG_WELLWATER,
    title: "Well Water Testing",
    href: "/services/well-water-testing",
    desc: "Many North Idaho properties rely on private wells. Well water quality can vary significantly and may contain bacteria, nitrates, arsenic, or other contaminants. We coordinate water sampling and provide links to certified labs for comprehensive testing options.",
    pricing: "$150–$500 depending on the scope of testing",
    includes: [
      "Water sampling coordination",
      "Coliform & E. coli bacteria testing",
      "Nitrate and nitrite levels",
      "Arsenic and heavy metals",
      "pH and mineral content",
      "Lab referrals for extended panels",
    ],
    labLink: true,
  },
  {
    icon: Eye,
    img: IMG_SEWER,
    title: "Sewer Scope Inspection",
    href: "/services/sewer-scope",
    desc: "A camera inspection of the sewer lateral from the home to the main line can reveal root intrusion, pipe collapse, offset joints, and other costly issues invisible from the surface. Sewer scope inspections are sub-contracted to Lateral Concepts, a trusted local specialist.",
    pricing: "$250–$300 depending on scope and service",
    includes: [
      "Camera inspection of sewer lateral",
      "Root intrusion detection",
      "Pipe collapse and offset joints",
      "Grease and debris buildup",
      "Video recording of findings",
      "Sub-contracted to Lateral Concepts",
    ],
  },
  {
    icon: Bug,
    img: IMG_LEADMOLD,
    title: "Lead & Mold Inspections",
    href: "/services/lead-mold-pest",
    desc: "Older homes may contain lead paint. Moisture issues can lead to mold growth that affects air quality and structural integrity. These specialized inspections are sub-contracted to qualified specialists and can be coordinated alongside your home inspection.",
    includes: [
      "Lead paint testing (pre-1978 homes)",
      "Mold sampling and assessment",
      "Air quality testing",
      "Moisture source identification",
      "Sub-contracted to qualified specialists",
      "Can be bundled with home inspection",
    ],
    pricing: "Call for pricing",
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
        <div className="container space-y-20">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="w-12 h-12 bg-[#D35400]/10 flex items-center justify-center mb-5">
                  <svc.icon size={24} className="text-[#D35400]" />
                </div>
                <h2 className="font-['Barlow_Condensed'] font-800 text-4xl text-white leading-tight mb-4">
                  {svc.title}
                </h2>
                <div className="amber-divider mb-5" />
                <p className="text-muted-foreground leading-relaxed mb-6">{svc.desc}</p>

                {/* Phase list for New Construction */}
                {svc.title === "New Construction Inspection" ? (
                  <div className="mb-6">
                    <div className="font-['Barlow_Condensed'] font-700 text-sm text-[#D35400] tracking-widest uppercase mb-3">
                      Phase Inspections Available
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                      {svc.includes.map((item) => (
                        <div key={item} className="bg-[oklch(0.20_0.005_260)] border border-white/5 px-3 py-2 text-xs text-white/80 text-center font-['Barlow_Condensed'] font-600">
                          {item}
                        </div>
                      ))}
                    </div>
                    {svc.note && (
                      <p className="text-xs text-muted-foreground italic border-l-2 border-[#D35400]/40 pl-3">{svc.note}</p>
                    )}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {svc.includes.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-white/70">
                        <CheckCircle size={13} className="text-[#D35400] flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                {/* Radon info link */}
                {svc.radonLink && (
                  <div className="mb-6 bg-[oklch(0.20_0.005_260)] border border-[#D35400]/20 p-4">
                    <div className="font-['Barlow_Condensed'] font-700 text-sm text-white mb-1">Learn More About Radon in Idaho</div>
                    <p className="text-xs text-muted-foreground mb-2">The EPA and Idaho DEQ provide detailed information on radon risks and mitigation options.</p>
                    <div className="flex flex-wrap gap-3">
                      <a href="https://www.epa.gov/radon" target="_blank" rel="noopener noreferrer" className="text-xs text-[#D35400] hover:underline font-['Barlow_Condensed'] font-600 tracking-wide uppercase">
                        EPA Radon Guide →
                      </a>
                      <a href="https://healthandwelfare.idaho.gov/health/environmental-health/radon" target="_blank" rel="noopener noreferrer" className="text-xs text-[#D35400] hover:underline font-['Barlow_Condensed'] font-600 tracking-wide uppercase">
                        Idaho DEQ Radon Info →
                      </a>
                    </div>
                  </div>
                )}

                {/* Well water lab links */}
                {svc.labLink && (
                  <div className="mb-6 bg-[oklch(0.20_0.005_260)] border border-[#D35400]/20 p-4">
                    <div className="font-['Barlow_Condensed'] font-700 text-sm text-white mb-1">Certified Lab Testing Options</div>
                    <p className="text-xs text-muted-foreground mb-2">We work with certified labs to provide a full range of water quality testing panels.</p>
                    <div className="flex flex-wrap gap-3">
                      <a href="https://www.nslabs.com" target="_blank" rel="noopener noreferrer" className="text-xs text-[#D35400] hover:underline font-['Barlow_Condensed'] font-600 tracking-wide uppercase">
                        National Testing Labs →
                      </a>
                      <a href="https://www.tap-score.com" target="_blank" rel="noopener noreferrer" className="text-xs text-[#D35400] hover:underline font-['Barlow_Condensed'] font-600 tracking-wide uppercase">
                        Tap Score Water Testing →
                      </a>
                    </div>
                  </div>
                )}

                {/* Pricing badge */}
                {(svc as any).pricing && (
                  <div className="mb-5 inline-flex items-center gap-2 bg-[#D35400]/10 border border-[#D35400]/30 px-4 py-2">
                    <span className="text-[#D35400] font-['Barlow_Condensed'] font-700 text-sm tracking-wide uppercase">Pricing:</span>
                    <span className="text-white/80 text-sm font-['Barlow']">{(svc as any).pricing}</span>
                  </div>
                )}
                <a href={PHONE_HREF} className="btn-amber text-xs flex items-center gap-2 w-fit">
                  <Phone size={13} /> Call Tim — {PHONE}
                </a>
              </div>
              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="w-full h-[360px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#D35400]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-[oklch(0.10_0.005_260)] leading-tight mb-1">
              Questions? Call Tim Directly.
            </h2>
            <p className="text-[oklch(0.10_0.005_260)]/70 text-sm">The fastest way to get answers and schedule your inspection.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href={PHONE_HREF} className="bg-[oklch(0.10_0.005_260)] text-white font-['Barlow_Condensed'] font-700 text-sm tracking-widest uppercase px-6 py-3 hover:bg-[oklch(0.20_0.005_260)] transition-colors flex items-center gap-2">
              <Phone size={14} /> {PHONE}
            </a>
            <a href="tel:+12082439706" className="border-2 border-[oklch(0.10_0.005_260)] text-[oklch(0.10_0.005_260)] font-['Barlow_Condensed'] font-700 text-xs tracking-widest uppercase px-6 py-3 hover:bg-[oklch(0.10_0.005_260)] hover:text-white transition-colors flex items-center gap-2 flex items-center gap-2"><Phone size={13} /> Call Tim — 208-243-9706</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
