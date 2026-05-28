/**
 * Contact Page — Call Tim directly, no forms
 */
import Layout from "@/components/Layout";
import { Phone, Clock, MapPin, Star, CheckCircle } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      {/* Page header */}
      <div className="bg-[oklch(0.12_0.005_260)] py-16 border-b border-white/5">
        <div className="container">
          <div className="section-label mb-4">Get in Touch</div>
          <h1 className="font-['Barlow_Condensed'] font-800 text-5xl md:text-6xl text-white leading-tight mb-4">
            Contact Tim
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            The best way to reach Tim is by phone. Call now and he'll personally answer your questions and get you scheduled.
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left: Primary call CTA */}
            <div>
              <div className="bg-[#D35400] p-10 text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white flex items-center justify-center mx-auto mb-6">
                  <Phone size={36} className="text-white" />
                </div>
                <p className="text-white/80 text-sm font-['Barlow_Condensed'] font-600 tracking-widest uppercase mb-2">
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

              {/* Hours */}
              <div className="bg-[oklch(0.20_0.005_260)] border border-white/5 p-6">
                <h3 className="font-['Barlow_Condensed'] font-700 text-lg text-white mb-4 flex items-center gap-2">
                  <Clock size={16} className="text-[#D35400]" /> Hours
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
              </div>
            </div>

            {/* Right: Service area + why call + testimonial */}
            <div className="space-y-6">
              {/* Service area */}
              <div className="bg-[oklch(0.20_0.005_260)] border border-white/5 p-6">
                <h3 className="font-['Barlow_Condensed'] font-700 text-lg text-white mb-4 flex items-center gap-2">
                  <MapPin size={16} className="text-[#D35400]" /> Service Area
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  True Homes Inspections serves all of North Idaho, including:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Sandpoint", "Coeur d'Alene", "Post Falls", "Hayden",
                    "Rathdrum", "Spirit Lake", "Priest River", "Clark Fork",
                    "Hope", "Dover", "Ponderay", "Bonners Ferry",
                  ].map((city) => (
                    <div key={city} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1 h-1 bg-[#D35400] rounded-full flex-shrink-0" />
                      {city}
                    </div>
                  ))}
                </div>
              </div>

              {/* Why call */}
              <div className="bg-[oklch(0.20_0.005_260)] border border-white/5 p-6">
                <h3 className="font-['Barlow_Condensed'] font-700 text-lg text-white mb-4">
                  Why Call Instead of a Form?
                </h3>
                <div className="space-y-3">
                  {[
                    "Tim answers personally — no call centers or assistants",
                    "Get your questions answered immediately",
                    "Confirm availability and book in one call",
                    "Same-week appointments often available",
                    "Tim can advise on the right inspection for your situation",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle size={14} className="text-[#D35400] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-[#D35400]/10 border border-[#D35400]/20 p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#D35400] fill-[#D35400]" />
                  ))}
                </div>
                <p className="text-sm text-white/80 italic leading-relaxed mb-3">
                  "Professional, knowledgeable, and patient. He took the time to explain everything he found and helped us understand what was urgent vs. what could wait."
                </p>
                <p className="text-xs text-muted-foreground">— James & Linda K., Coeur d'Alene, ID</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Service Area */}
      <section className="py-0 bg-background">
        <div className="container pb-16">
          <div className="mb-6">
            <h2 className="font-['Barlow_Condensed'] font-700 text-2xl text-white mb-2 flex items-center gap-2">
              <MapPin size={20} className="text-[#D35400]" /> Service Area Map
            </h2>
            <p className="text-sm text-muted-foreground">
              Serving Sandpoint, Coeur d'Alene, Post Falls, and all of North Idaho and Eastern Washington.
            </p>
          </div>
          <div className="w-full overflow-hidden border border-white/10" style={{height: '420px'}}>
            <iframe
              title="True Homes Inspections Service Area — North Idaho"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d692830.0!2d-116.7805!3d47.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5363f5e7e3a5b1b5%3A0x1234567890abcdef!2sNorth%20Idaho%2C%20USA!5e0!3m2!1sen!2sus!4v1716921600000!5m2!1sen!2sus"
              width="100%"
              height="420"
              style={{border: 0, filter: 'grayscale(30%) contrast(1.1)'}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            True Homes Inspections · North Idaho &amp; Eastern Washington · (208) 243-9706
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#D35400]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-[oklch(0.10_0.005_260)] leading-tight mb-1">
              Ready to Talk to Tim?
            </h2>
            <p className="text-[oklch(0.10_0.005_260)]/70 text-sm">One call gets your inspection scheduled.</p>
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
