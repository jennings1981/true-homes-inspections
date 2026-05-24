/**
 * Well Water Testing — True Homes Inspections
 * CTA: call Tim at 208-243-9706
 */
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, CheckCircle, ArrowRight, Droplets } from "lucide-react";

const PHONE = "208-243-9706";
const PHONE_HREF = "tel:+12082439706";

const faqs = [
  {
    q: "Why should I test my well water?",
    a: "Private wells are not regulated by the EPA and can be contaminated by bacteria, nitrates, arsenic, and other harmful substances without any visible signs. Testing is the only way to know your water is safe.",
  },
  {
    q: "How often should well water be tested?",
    a: "The CDC recommends testing at least once a year for bacteria and nitrates, and more frequently if you notice changes in taste, color, or smell — or if there has been flooding or nearby construction.",
  },
  {
    q: "What contaminants are tested?",
    a: "A basic panel covers coliform bacteria, E. coli, nitrates, and pH. Extended panels can include arsenic, lead, iron, manganese, hardness, and many other parameters depending on your concerns and location.",
  },
  {
    q: "How long does it take to get results?",
    a: "Turnaround time depends on the lab and the tests ordered. Basic panels typically return results in 3–5 business days. Extended panels may take 7–10 days.",
  },
  {
    q: "Can well water testing be added to a home inspection?",
    a: "Yes. We can coordinate water sampling at the same time as your home inspection, making the process convenient and efficient.",
  },
];

export default function WellWaterTesting() {
  return (
    <Layout>
      {/* Header */}
      <div className="relative bg-[oklch(0.12_0.005_260)] border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1400&auto=format&fit=crop" alt="North Idaho well water testing" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.10_0.005_260)] via-[oklch(0.10_0.005_260)]/80 to-transparent" />
        </div>
        <div className="relative container py-24">
          <div className="section-label mb-4">Specialty Service</div>
          <h1 className="font-['Barlow_Condensed'] font-800 text-5xl md:text-6xl text-white leading-tight mb-4">
            Well Water Testing
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Know what's in your water. Many North Idaho properties rely on private wells — we coordinate certified lab testing to ensure your water is safe for your family.
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="py-12 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#D35400]/10 flex items-center justify-center flex-shrink-0">
                <Droplets size={16} className="text-[#D35400]" />
              </div>
              <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-white leading-tight">
                Private Well Water Safety
              </h2>
            </div>
            <div className="amber-divider mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Unlike municipal water systems, private wells are not regulated or monitored by any government agency. The responsibility for testing and maintaining water quality falls entirely on the homeowner. In North Idaho, common concerns include coliform bacteria from surface runoff, nitrates from agricultural activity, and naturally occurring arsenic and iron.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We coordinate water sampling at the time of your home inspection and work with certified labs to provide a full range of testing options. Results are typically delivered within 3–7 business days with clear explanations of what the numbers mean.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "Coliform & E. coli bacteria",
                "Nitrate and nitrite levels",
                "Arsenic and heavy metals",
                "pH and mineral content",
                "Iron and manganese",
                "Hardness and TDS",
                "Extended contaminant panels",
                "Lab referrals and coordination",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle size={13} className="text-[#D35400] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {/* Lab links */}
            <div className="bg-[oklch(0.20_0.005_260)] border border-[#D35400]/20 p-5 mb-8">
              <div className="font-['Barlow_Condensed'] font-700 text-sm text-white mb-2">Certified Lab Testing Options</div>
              <p className="text-xs text-muted-foreground mb-3">We work with certified labs to provide a full range of water quality testing panels. You can also order directly:</p>
              <div className="flex flex-col gap-2">
                <a href="https://www.nslabs.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#D35400] hover:underline font-['Barlow_Condensed'] font-600 tracking-wide flex items-center gap-2">
                  <ArrowRight size={12} /> National Testing Labs (nslabs.com)
                </a>
                <a href="https://www.tap-score.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#D35400] hover:underline font-['Barlow_Condensed'] font-600 tracking-wide flex items-center gap-2">
                  <ArrowRight size={12} /> Tap Score Water Testing (tap-score.com)
                </a>
                <a href="https://www.ideq.idaho.gov/drinking-water/source-water-protection/" target="_blank" rel="noopener noreferrer" className="text-sm text-[#D35400] hover:underline font-['Barlow_Condensed'] font-600 tracking-wide flex items-center gap-2">
                  <ArrowRight size={12} /> Idaho DEQ Drinking Water Resources
                </a>
              </div>
            </div>

            <a href={PHONE_HREF} className="btn-amber text-sm flex items-center gap-2 w-fit">
              <Phone size={14} /> Call Tim — {PHONE}
            </a>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="font-['Barlow_Condensed'] font-700 text-2xl text-white mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="border border-white/10 p-5 bg-[oklch(0.15_0.005_260)]">
                  <h4 className="font-['Barlow_Condensed'] font-700 text-white text-lg mb-2">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#D35400]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-[oklch(0.10_0.005_260)] leading-tight mb-1">
              Add Well Water Testing to Your Inspection
            </h2>
            <p className="text-[oklch(0.10_0.005_260)]/70 text-sm">Call Tim to coordinate sampling at the time of your home inspection.</p>
          </div>
          <a href={PHONE_HREF} className="bg-[oklch(0.10_0.005_260)] text-white font-['Barlow_Condensed'] font-700 text-sm tracking-widest uppercase px-8 py-4 hover:bg-[oklch(0.20_0.005_260)] transition-colors flex items-center gap-2 flex-shrink-0">
            <Phone size={14} /> {PHONE}
          </a>
        </div>
      </section>
    </Layout>
  );
}
