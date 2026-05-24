/**
 * Schedule Page — Call Tim directly, no forms
 */
import Layout from "@/components/Layout";
import { Phone, Clock, CheckCircle, MapPin, Star, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  "Buyer Home Inspection",
  "Pre-Listing Inspection",
  "New Construction Inspection",
  "Radon Testing",
  "Well Water Testing",
  "Sewer Scope Inspection",
  "Lead & Mold Inspections",
];

const areas = [
  "Sandpoint & Bonner County",
  "Coeur d'Alene & Kootenai County",
  "Post Falls",
  "Hayden",
  "Rathdrum",
  "Spirit Lake",
  "Priest River",
  "Clark Fork",
  "Hope",
  "Dover",
];

const faqs = [
  {
    q: "How quickly can Tim schedule an inspection?",
    a: "Same-week appointments are often available. Call Tim directly at 208-243-9706 and he'll find a time that works for you.",
  },
  {
    q: "How long does an inspection take?",
    a: "Most inspections take 2–4 hours depending on the size and condition of the home. Tim encourages buyers to attend.",
  },
  {
    q: "When will I receive my report?",
    a: "You'll receive a comprehensive digital report with photos within 24 hours — guaranteed.",
  },
  {
    q: "What areas does Tim serve?",
    a: "Tim serves all of North Idaho including Sandpoint, Coeur d'Alene, Post Falls, Hayden, Rathdrum, and surrounding communities.",
  },
];

export default function Schedule() {
  return (
    <Layout>
      {/* Page header */}
      <div className="bg-[oklch(0.12_0.005_260)] py-16 border-b border-white/5">
        <div className="container">
          <div className="section-label mb-4">Book Your Inspection</div>
          <h1 className="font-['Barlow_Condensed'] font-800 text-5xl md:text-6xl text-white leading-tight mb-4">
            Call Tim to Schedule
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            No forms, no waiting. Call Tim directly and get your inspection on the calendar — same-week appointments often available.
          </p>
        </div>
      </div>

      {/* Main call CTA */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left: Big call panel */}
            <div>
              <div className="bg-[#D35400] p-10 text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white flex items-center justify-center mx-auto mb-6">
                  <Phone size={36} className="text-white" />
                </div>
                <p className="text-white/80 text-sm font-['Barlow_Condensed'] font-600 tracking-widest uppercase mb-3">
                  Call Tim Directly
                </p>
                <a
                  href="tel:+12082439706"
                  className="font-['Barlow_Condensed'] font-800 text-5xl text-white hover:text-white/80 transition-colors block mb-4"
                >
                  208-243-9706
                </a>
                <p className="text-white/70 text-sm mb-6">
                  Mon–Sat 7am–7pm · North Idaho
                </p>
                <a
                  href="tel:+12082439706"
                  className="bg-[oklch(0.10_0.005_260)] text-white font-['Barlow_Condensed'] font-700 text-sm tracking-widest uppercase px-10 py-4 hover:bg-[oklch(0.20_0.005_260)] transition-colors flex items-center gap-3 justify-center w-full"
                >
                  <Phone size={16} /> Tap to Call Tim Now
                </a>
              </div>

              {/* Hours & availability */}
              <div className="bg-[oklch(0.20_0.005_260)] border border-white/5 p-6">
                <h3 className="font-['Barlow_Condensed'] font-700 text-lg text-white mb-4 flex items-center gap-2">
                  <Clock size={16} className="text-[#D35400]" /> Availability
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span>Monday – Friday</span>
                    <span className="text-white">7:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span>Saturday</span>
                    <span className="text-white">7:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Sunday</span>
                    <span className="text-white/50">By Arrangement</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-[#D35400]">
                  <CheckCircle size={13} />
                  Same-week appointments often available
                </div>
              </div>
            </div>

            {/* Right: Services + areas + what to expect */}
            <div className="space-y-6">
              {/* Services */}
              <div className="bg-[oklch(0.20_0.005_260)] border border-white/5 p-6">
                <h3 className="font-['Barlow_Condensed'] font-700 text-lg text-white mb-4">
                  Services Tim Offers
                </h3>
                <div className="space-y-2">
                  {services.map((svc) => (
                    <div key={svc} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                      <CheckCircle size={14} className="text-[#D35400] flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{svc}</span>
                    </div>
                  ))}
                </div>
                <Link href="/services" className="mt-4 flex items-center gap-2 text-xs text-[#D35400] font-['Barlow_Condensed'] font-600 tracking-wide uppercase hover:text-[#D35400]/70 transition-colors">
                  View All Services <ArrowRight size={12} />
                </Link>
              </div>

              {/* Areas */}
              <div className="bg-[oklch(0.20_0.005_260)] border border-white/5 p-6">
                <h3 className="font-['Barlow_Condensed'] font-700 text-lg text-white mb-4 flex items-center gap-2">
                  <MapPin size={16} className="text-[#D35400]" /> Areas Served
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {areas.map((area) => (
                    <div key={area} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1 h-1 bg-[#D35400] rounded-full flex-shrink-0" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              {/* What to expect */}
              <div className="bg-[oklch(0.20_0.005_260)] border border-white/5 p-6">
                <h3 className="font-['Barlow_Condensed'] font-700 text-lg text-white mb-4">
                  What to Expect
                </h3>
                <div className="space-y-3">
                  {[
                    { num: "01", text: "Call Tim — he'll confirm availability and answer any questions" },
                    { num: "02", text: "Tim arrives on time and spends 2–4 hours on a thorough inspection" },
                    { num: "03", text: "Receive your detailed digital report with photos within 24 hours" },
                    { num: "04", text: "Tim walks you through findings and answers every question" },
                  ].map((step) => (
                    <div key={step.num} className="flex items-start gap-3">
                      <span className="font-['Barlow_Condensed'] font-800 text-[#D35400] text-lg leading-none mt-0.5">{step.num}</span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[oklch(0.18_0.005_260)]">
        <div className="container max-w-3xl">
          <div className="section-label mb-4">Common Questions</div>
          <h2 className="font-['Barlow_Condensed'] font-800 text-4xl text-white mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div key={item.q} className="border-b border-white/5 pb-6">
                <h3 className="font-['Barlow_Condensed'] font-700 text-lg text-[#D35400] mb-2">{item.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial strip */}
      <section className="py-12 bg-[oklch(0.12_0.005_260)] border-t border-white/5">
        <div className="container text-center">
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-[#D35400] fill-[#D35400]" />
            ))}
          </div>
          <p className="text-white/80 text-lg font-['Barlow'] italic max-w-xl mx-auto mb-2">
            "Absolutely thorough inspection. Saved us from a very expensive mistake on a lakefront property."
          </p>
          <p className="text-sm text-muted-foreground">— Sarah M., Sandpoint, ID</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#D35400]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-[oklch(0.10_0.005_260)] leading-tight mb-1">
              Ready to Book Your Inspection?
            </h2>
            <p className="text-[oklch(0.10_0.005_260)]/70 text-sm">Call Tim directly — no forms, no waiting.</p>
          </div>
          <a
            href="tel:+12082439706"
            className="bg-[oklch(0.10_0.005_260)] text-white font-['Barlow_Condensed'] font-700 text-sm tracking-widest uppercase px-8 py-4 hover:bg-[oklch(0.20_0.005_260)] transition-colors flex items-center gap-3 flex-shrink-0"
          >
            <Phone size={16} /> Call Tim — 208-243-9706
          </a>
        </div>
      </section>
    </Layout>
  );
}
