/**
 * Sewer Scope Inspection — True Homes Inspections
 * Sub-contracted to Lateral Concepts
 * CTA: call Tim at 208-243-9706
 */
import Layout from "@/components/Layout";
import { Phone, CheckCircle, Eye } from "lucide-react";

const PHONE = "208-243-9706";
const PHONE_HREF = "tel:+12082439706";

const faqs = [
  {
    q: "What is a sewer scope inspection?",
    a: "A sewer scope inspection uses a small camera inserted into the sewer lateral — the pipe that runs from your home to the municipal main or septic system — to visually inspect the condition of the pipe from the inside.",
  },
  {
    q: "Why is a sewer scope important when buying a home?",
    a: "Sewer line repairs or replacements can cost $5,000–$25,000 or more. Problems like root intrusion, pipe collapse, or offset joints are completely invisible from the surface and are not covered in a standard home inspection.",
  },
  {
    q: "What problems can a sewer scope find?",
    a: "Root intrusion, pipe collapse, offset or separated joints, grease and debris buildup, bellied pipes (low spots that collect waste), and deteriorated or cracked pipe material.",
  },
  {
    q: "Who performs the sewer scope?",
    a: "Sewer scope inspections are sub-contracted to Lateral Concepts, a trusted local specialist with the equipment and expertise to perform thorough camera inspections and provide video documentation.",
  },
  {
    q: "Can it be done at the same time as the home inspection?",
    a: "Yes. We coordinate scheduling with Lateral Concepts so both inspections can happen on the same day, saving you time and minimizing disruption.",
  },
];

export default function SewerScope() {
  return (
    <Layout>
      {/* Header */}
      <div className="relative bg-[oklch(0.12_0.005_260)] border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1400&auto=format&fit=crop" alt="Home inspection sewer scope" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.10_0.005_260)] via-[oklch(0.10_0.005_260)]/80 to-transparent" />
        </div>
        <div className="relative container py-24">
          <div className="section-label mb-4">Specialty Service</div>
          <h1 className="font-['Barlow_Condensed'] font-800 text-5xl md:text-6xl text-white leading-tight mb-4">
            Sewer Scope Inspection
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            See what's hiding underground. A sewer scope inspection can reveal costly problems invisible to the naked eye — before you close on your home.
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="py-20 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="w-12 h-12 bg-[#D35400]/10 flex items-center justify-center mb-6">
              <Eye size={24} className="text-[#D35400]" />
            </div>
            <h2 className="font-['Barlow_Condensed'] font-800 text-4xl text-white mb-4">
              What We Look For
            </h2>
            <div className="amber-divider mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              The sewer lateral is one of the most expensive and most overlooked components of a home. A standard home inspection does not include a sewer scope — it requires specialized camera equipment and expertise. We coordinate this service through Lateral Concepts, a trusted local specialist.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The inspection produces a video recording of the entire lateral, from the cleanout at the home to the connection at the main line or septic system. You receive a copy of the video along with a written summary of findings.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "Root intrusion",
                "Pipe collapse",
                "Offset and separated joints",
                "Grease and debris buildup",
                "Bellied or sagging pipe",
                "Cracked or deteriorated pipe",
                "Video recording of findings",
                "Written summary report",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle size={13} className="text-[#D35400] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {/* Sub-contractor note */}
            <div className="bg-[oklch(0.20_0.005_260)] border border-[#D35400]/20 p-5 mb-8">
              <div className="font-['Barlow_Condensed'] font-700 text-sm text-white mb-2">Sub-contracted to Lateral Concepts</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sewer scope inspections are performed by Lateral Concepts, a local specialist with professional-grade camera equipment. Tim coordinates scheduling so both inspections can happen on the same day.
              </p>
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
              Add a Sewer Scope to Your Inspection
            </h2>
            <p className="text-[oklch(0.10_0.005_260)]/70 text-sm">Call Tim to coordinate with Lateral Concepts on the same day as your home inspection.</p>
          </div>
          <a href={PHONE_HREF} className="bg-[oklch(0.10_0.005_260)] text-white font-['Barlow_Condensed'] font-700 text-sm tracking-widest uppercase px-8 py-4 hover:bg-[oklch(0.20_0.005_260)] transition-colors flex items-center gap-2 flex-shrink-0">
            <Phone size={14} /> {PHONE}
          </a>
        </div>
      </section>
    </Layout>
  );
}
