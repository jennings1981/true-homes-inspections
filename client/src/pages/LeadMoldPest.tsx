/**
 * Lead, Mold & Pest Inspections — True Homes Inspections
 * Sub-contracted to qualified specialists
 * CTA: call Tim at 208-243-9706
 */
import Layout from "@/components/Layout";
import { Phone, CheckCircle, Bug } from "lucide-react";

const PHONE = "208-243-9706";
const PHONE_HREF = "tel:+12082439706";

const services = [
  {
    title: "Lead Paint Testing",
    desc: "Homes built before 1978 may contain lead-based paint, which is a serious health hazard — especially for children. We coordinate lead paint testing through qualified specialists who use XRF analyzers or paint chip sampling to identify the presence and condition of lead paint.",
    items: [
      "Pre-1978 home assessment",
      "XRF or paint chip sampling",
      "Room-by-room documentation",
      "Risk assessment and recommendations",
      "Required for FHA/VA loans in some cases",
    ],
  },
  {
    title: "Mold Sampling & Assessment",
    desc: "Mold can grow anywhere moisture is present and may not be visible. It can cause serious health problems and indicates underlying moisture issues. We coordinate mold sampling and assessment through qualified environmental specialists.",
    items: [
      "Air sampling for mold spores",
      "Surface swab sampling",
      "Moisture mapping",
      "Lab analysis of samples",
      "Remediation recommendations",
    ],
  },
  {
    title: "Pest & Termite Inspection",
    desc: "Termites, carpenter ants, and other wood-destroying insects can cause significant structural damage that may not be visible during a standard home inspection. Rodent activity can also compromise insulation and create health hazards. We coordinate pest inspections with licensed specialists.",
    items: [
      "Termite and wood-destroying insect inspection",
      "Carpenter ant assessment",
      "Rodent activity signs",
      "Wood damage documentation",
      "Treatment recommendations",
    ],
  },
];

const faqs = [
  {
    q: "Are these inspections part of the standard home inspection?",
    a: "No. Lead, mold, and pest inspections require specialized equipment and licensing. They are sub-contracted to qualified specialists and can be coordinated at the same time as your home inspection.",
  },
  {
    q: "When is lead paint testing required?",
    a: "Lead paint testing is strongly recommended for any home built before 1978. It may also be required by lenders for FHA or VA loans. Sellers of pre-1978 homes are required by federal law to disclose known lead paint hazards.",
  },
  {
    q: "How do I know if my home has a mold problem?",
    a: "Visible mold growth, musty odors, water stains, or a history of flooding or leaks are all signs that mold may be present. Air sampling can detect mold spores even when no visible growth is apparent.",
  },
  {
    q: "Can these be bundled with a home inspection?",
    a: "Yes. Tim can coordinate scheduling so all inspections happen on the same day, minimizing disruption and giving you a complete picture of the property before you close.",
  },
];

export default function LeadMoldPest() {
  return (
    <Layout>
      {/* Header */}
      <div className="bg-[oklch(0.12_0.005_260)] py-16 border-b border-white/5">
        <div className="container">
          <div className="section-label mb-4">Specialty Services</div>
          <h1 className="font-['Barlow_Condensed'] font-800 text-5xl md:text-6xl text-white leading-tight mb-4">
            Lead, Mold & Pest Inspections
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Specialized testing and inspections sub-contracted to qualified experts — coordinated by Tim to happen on the same day as your home inspection.
          </p>
        </div>
      </div>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container space-y-16">
          {services.map((svc) => (
            <div key={svc.title} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start border-b border-white/5 pb-16 last:border-0 last:pb-0">
              <div className="lg:col-span-2">
                <div className="w-10 h-10 bg-[#D35400]/10 flex items-center justify-center mb-4">
                  <Bug size={20} className="text-[#D35400]" />
                </div>
                <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-white mb-3">{svc.title}</h2>
                <div className="amber-divider mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6">{svc.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {svc.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle size={13} className="text-[#D35400] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[oklch(0.15_0.005_260)] border border-white/5 p-6">
                <div className="font-['Barlow_Condensed'] font-700 text-sm text-[#D35400] tracking-widest uppercase mb-3">Add to Your Inspection</div>
                <p className="text-sm text-muted-foreground mb-4">Call Tim to coordinate this service alongside your home inspection.</p>
                <a href={PHONE_HREF} className="btn-amber text-xs flex items-center gap-2 w-full justify-center">
                  <Phone size={13} /> {PHONE}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[oklch(0.12_0.005_260)]">
        <div className="container max-w-3xl">
          <h2 className="font-['Barlow_Condensed'] font-800 text-4xl text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-white/10 p-5 bg-[oklch(0.15_0.005_260)]">
                <h4 className="font-['Barlow_Condensed'] font-700 text-white text-lg mb-2">{faq.q}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#D35400]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-[oklch(0.10_0.005_260)] leading-tight mb-1">
              Bundle Specialty Inspections with Your Home Inspection
            </h2>
            <p className="text-[oklch(0.10_0.005_260)]/70 text-sm">Call Tim to coordinate everything on the same day.</p>
          </div>
          <a href={PHONE_HREF} className="bg-[oklch(0.10_0.005_260)] text-white font-['Barlow_Condensed'] font-700 text-sm tracking-widest uppercase px-8 py-4 hover:bg-[oklch(0.20_0.005_260)] transition-colors flex items-center gap-2 flex-shrink-0">
            <Phone size={14} /> {PHONE}
          </a>
        </div>
      </section>
    </Layout>
  );
}
