import { Link } from "wouter";
import Layout from "@/components/Layout";
import { MapPin, CheckCircle, ArrowRight, Phone, Star } from "lucide-react";

interface LocationPageProps {
  city: string;
  county: string;
  state: string;
  description: string;
  paragraphs: string[];
  localFacts: string[];
  testimonial?: { text: string; name: string };
}

export default function LocationPage({ city, county, state, description, paragraphs, localFacts, testimonial }: LocationPageProps) {
  const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427046845/ToYqQAZz6CCmi4HjBtrLQ7/north-idaho-landscape-aGtsL65CuHUy9D4qReAaQj.webp";

  return (
    <Layout>
      <div
        className="relative py-24 overflow-hidden"
        style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 container">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={14} className="text-[#D35400]" />
            <span className="text-xs text-[#D35400] font-['Barlow_Condensed'] font-600 tracking-widest uppercase">{county}, {state}</span>
          </div>
          <h1 className="font-['Barlow_Condensed'] font-800 text-5xl md:text-6xl text-white leading-tight mb-4">
            Home Inspector in {city}, Idaho
          </h1>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed">{description}</p>
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="section-label mb-4">{city} Home Inspections</div>
              <h2 className="font-['Barlow_Condensed'] font-800 text-4xl text-white mb-6">
                Trusted Home Inspection Services in {city}
              </h2>
              <div className="amber-divider mb-6" />
              {paragraphs.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">{para}</p>
              ))}

              <h3 className="font-['Barlow_Condensed'] font-700 text-2xl text-white mt-8 mb-4">
                Common Issues in {city} Homes
              </h3>
              <ul className="space-y-2 mb-8">
                {localFacts.map((fact) => (
                  <li key={fact} className="flex items-start gap-3 text-sm text-white/70">
                    <CheckCircle size={13} className="text-[#D35400] flex-shrink-0 mt-0.5" />
                    {fact}
                  </li>
                ))}
              </ul>

              {testimonial && (
                <div className="testimonial-card mt-8">
                  <div className="flex gap-1 mb-4 mt-2">
                    {[1,2,3,4,5].map(i => <Star key={i} size={13} className="text-[#D35400] fill-[#D35400]" />)}
                  </div>
                  <p className="text-sm text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                  <div className="font-['Barlow_Condensed'] font-700 text-white text-sm">{testimonial.name}</div>
                  <div className="text-xs text-[#D35400]/70">{city}, Idaho</div>
                </div>
              )}
            </div>

            <div>
              <div className="bg-[oklch(0.20_0.005_260)] border border-white/5 p-6 sticky top-24">
                <h3 className="font-['Barlow_Condensed'] font-700 text-lg text-white mb-4">
                  Schedule Your {city} Inspection
                </h3>
                <p className="text-sm text-muted-foreground mb-5">
                  Same-week appointments often available. Call or book online.
                </p>
                <div className="space-y-3 mb-6">
                  <Link href="/schedule" className="btn-amber w-full justify-center text-xs">
                    Book Online <ArrowRight size={13} />
                  </Link>
                  <a href="tel:+12082439706" className="btn-outline-amber w-full justify-center text-xs">
                    <Phone size={13} /> 208-243-9706
                  </a>
                </div>
                <div className="border-t border-white/5 pt-5 space-y-2">
                  <h4 className="font-['Barlow_Condensed'] font-700 text-sm text-white tracking-wide uppercase mb-3">Our Services</h4>
                  {[
                    { label: "Buyer Home Inspection", href: "/services/buyer-home-inspection" },
                    { label: "Pre-Listing Inspection", href: "/services/pre-listing-inspection" },
                    { label: "New Construction Inspection", href: "/services/new-construction-inspection" },
                    { label: "Radon Testing", href: "/services/radon-testing" },
                  ].map((svc) => (
                    <Link key={svc.href} href={svc.href} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#D35400] transition-colors py-1">
                      <ArrowRight size={12} className="text-[#D35400]/50" />
                      {svc.label}
                    </Link>
                  ))}
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
              Serving {city} and Surrounding Areas
            </h2>
            <p className="text-[oklch(0.10_0.005_260)]/70 text-sm">Licensed, certified, and locally trusted.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/schedule" className="bg-[oklch(0.10_0.005_260)] text-white font-['Barlow_Condensed'] font-700 text-xs tracking-widest uppercase px-6 py-3 hover:bg-[oklch(0.20_0.005_260)] transition-colors flex items-center gap-2">
              Schedule Now <ArrowRight size={13} />
            </Link>
            <a href="tel:+12082439706" className="border-2 border-[oklch(0.10_0.005_260)] text-[oklch(0.10_0.005_260)] font-['Barlow_Condensed'] font-700 text-xs tracking-widest uppercase px-6 py-3 hover:bg-[oklch(0.10_0.005_260)] hover:text-white transition-colors flex items-center gap-2">
              <Phone size={13} /> Call Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
