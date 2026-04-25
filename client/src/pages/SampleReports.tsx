import { Link } from "wouter";
import Layout from "@/components/Layout";
import { FileText, CheckCircle, ArrowRight, Phone, Camera, BarChart2, List } from "lucide-react";

const reportFeatures = [
  { icon: Camera, title: "Photo Documentation", desc: "Every issue is photographed and clearly labeled so you can see exactly what we found." },
  { icon: List, title: "Priority Rankings", desc: "Issues are categorized by severity — safety concerns, major defects, and maintenance items." },
  { icon: BarChart2, title: "Summary Section", desc: "A clear executive summary gives you the key findings at a glance before diving into details." },
  { icon: FileText, title: "Digital Delivery", desc: "Reports are delivered digitally within 24–48 hours and accessible on any device." },
];

export default function SampleReports() {
  return (
    <Layout>
      <div className="bg-[oklch(0.12_0.005_260)] py-16 border-b border-white/5">
        <div className="container">
          <div className="section-label mb-4">Sample Reports</div>
          <h1 className="font-['Barlow_Condensed'] font-800 text-5xl md:text-6xl text-white leading-tight mb-4">
            See What You'll Receive
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Our detailed digital reports give you a complete picture of the home's condition — with photos, priority rankings, and clear explanations.
          </p>
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-label mb-4">Report Features</div>
              <h2 className="font-['Barlow_Condensed'] font-800 text-4xl text-white mb-6">
                Detailed, Clear, Actionable Reports
              </h2>
              <div className="amber-divider mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our inspection reports are generated using industry-leading software and include hundreds of photos, clear descriptions of every finding, and priority rankings that help you understand what matters most.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Unlike some inspectors who deliver vague, text-only reports, we provide visual documentation of every issue we find. You'll know exactly what you're dealing with — and so will your real estate agent and any contractors you hire for repairs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {reportFeatures.map((feature) => (
                  <div key={feature.title} className="service-card">
                    <div className="w-8 h-8 bg-[#D35400]/10 flex items-center justify-center mb-3">
                      <feature.icon size={16} className="text-[#D35400]" />
                    </div>
                    <h3 className="font-['Barlow_Condensed'] font-700 text-base text-white mb-1">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[oklch(0.20_0.005_260)] border border-[#D35400]/20 p-5">
                <h3 className="font-['Barlow_Condensed'] font-700 text-lg text-white mb-3">Request a Sample Report</h3>
                <p className="text-sm text-muted-foreground mb-4">Want to see a full sample report before scheduling? Call or email us and we'll send one right over.</p>
                <div className="flex gap-3">
                  <a href="tel:+12082439706" className="btn-amber text-xs"><Phone size={13} /> Call Tim</a>
                  <a href="mailto:info@truehomesinspections.com" className="btn-outline-amber text-xs">Email Us</a>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[oklch(0.20_0.005_260)] border border-white/5 p-8">
                <h3 className="font-['Barlow_Condensed'] font-700 text-xl text-white mb-6">What's in Every Report</h3>
                <ul className="space-y-3">
                  {[
                    "Executive summary of key findings",
                    "Detailed findings for all major systems",
                    "Hundreds of labeled photographs",
                    "Safety concern callouts",
                    "Major defect identification",
                    "Maintenance recommendation items",
                    "Repair priority rankings",
                    "Estimated repair cost ranges (where applicable)",
                    "Inspector notes and observations",
                    "Recommendations for further evaluation",
                    "Digital delivery within 24–48 hours",
                    "Accessible on any device (phone, tablet, computer)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                      <CheckCircle size={13} className="text-[#D35400] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <a href="tel:+12082439706" className="btn-amber w-full justify-center text-xs flex items-center gap-2"><Phone size={13} /> Call Tim Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#D35400]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-[oklch(0.10_0.005_260)] leading-tight mb-1">
              Ready for Your Detailed Report?
            </h2>
            <p className="text-[oklch(0.10_0.005_260)]/70 text-sm">Schedule your inspection and receive your report within 48 hours.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href="tel:+12082439706" className="bg-[oklch(0.10_0.005_260)] text-white font-['Barlow_Condensed'] font-700 text-xs tracking-widest uppercase px-6 py-3 hover:bg-[oklch(0.20_0.005_260)] transition-colors flex items-center gap-2 flex items-center gap-2"><Phone size={13} /> Call Tim — 208-243-9706</a>
            <a href="tel:+12082439706" className="border-2 border-[oklch(0.10_0.005_260)] text-[oklch(0.10_0.005_260)] font-['Barlow_Condensed'] font-700 text-xs tracking-widest uppercase px-6 py-3 hover:bg-[oklch(0.10_0.005_260)] hover:text-white transition-colors flex items-center gap-2">
              <Phone size={13} /> 208-243-9706
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
