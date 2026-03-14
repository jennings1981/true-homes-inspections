import { Link } from "wouter";
import Layout from "@/components/Layout";
import { MapPin, ArrowRight, Phone } from "lucide-react";

const primaryAreas = [
  {
    city: "Sandpoint",
    county: "Bonner County",
    href: "/sandpoint-home-inspector",
    desc: "Our home base. We know Sandpoint homes inside and out — from lakefront properties on Lake Pend Oreille to mountain homes near Schweitzer.",
  },
  {
    city: "Coeur d'Alene",
    county: "Kootenai County",
    href: "/coeur-dalene-home-inspection",
    desc: "Serving the greater Coeur d'Alene area including lakefront homes, established neighborhoods, and new developments.",
  },
  {
    city: "Post Falls",
    county: "Kootenai County",
    href: "/post-falls-home-inspector",
    desc: "Fast-growing Post Falls has a mix of new construction and established homes. We inspect them all with the same thoroughness.",
  },
];

const microAreas = [
  "Hayden, ID", "Rathdrum, ID", "Sagle, ID", "Dover, ID", "Ponderay, ID",
  "Priest River, ID", "Bonners Ferry, ID", "Spirit Lake, ID", "Athol, ID",
  "Oldtown, ID", "Newport, WA", "Colville, WA", "Metaline Falls, WA",
  "Clark Fork, ID", "Hope, ID", "East Hope, ID", "Kootenai, ID",
];

export default function AreasServed() {
  return (
    <Layout>
      <div className="bg-[oklch(0.12_0.005_260)] py-16 border-b border-white/5">
        <div className="container">
          <div className="section-label mb-4">Service Area</div>
          <h1 className="font-['Barlow_Condensed'] font-800 text-5xl md:text-6xl text-white leading-tight mb-4">
            North Idaho Home Inspection Service Area
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            We provide certified home inspections throughout the North Idaho panhandle and surrounding areas. If you don't see your city listed, call us — we likely serve your area.
          </p>
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="section-label mb-6">Primary Service Areas</div>
          <h2 className="font-['Barlow_Condensed'] font-800 text-4xl text-white mb-12">
            Where We Inspect Most
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {primaryAreas.map((area) => (
              <Link
                key={area.city}
                href={area.href}
                className="service-card group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className="text-amber-400" />
                  <span className="text-xs text-amber-400/70 font-['Barlow_Condensed'] font-600 tracking-widest uppercase">{area.county}</span>
                </div>
                <h3 className="font-['Barlow_Condensed'] font-700 text-2xl text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {area.city}, Idaho
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{area.desc}</p>
                <div className="flex items-center gap-1 text-xs text-amber-400 font-['Barlow_Condensed'] font-600 tracking-wide uppercase">
                  View Page <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>

          <div className="section-label mb-6">Additional Areas</div>
          <h2 className="font-['Barlow_Condensed'] font-800 text-4xl text-white mb-8">
            We Also Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {microAreas.map((area) => (
              <div
                key={area}
                className="bg-[oklch(0.20_0.005_260)] border border-white/5 px-4 py-3 flex items-center gap-2 text-sm text-muted-foreground"
              >
                <MapPin size={12} className="text-amber-400/50 flex-shrink-0" />
                {area}
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Don't see your area? <a href="tel:+15099984033" className="text-amber-400 hover:text-amber-300 transition-colors">Call us at (509) 998-4033</a> — we serve a wide radius and are happy to discuss your location.
          </p>
        </div>
      </section>

      <section className="py-16 bg-amber-500">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-[oklch(0.10_0.005_260)] leading-tight mb-1">
              Serving Your North Idaho Community
            </h2>
            <p className="text-[oklch(0.10_0.005_260)]/70 text-sm">Schedule your inspection today — we come to you.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/schedule" className="bg-[oklch(0.10_0.005_260)] text-white font-['Barlow_Condensed'] font-700 text-xs tracking-widest uppercase px-6 py-3 hover:bg-[oklch(0.20_0.005_260)] transition-colors flex items-center gap-2">
              Schedule Now <ArrowRight size={13} />
            </Link>
            <a href="tel:+15099984033" className="border-2 border-[oklch(0.10_0.005_260)] text-[oklch(0.10_0.005_260)] font-['Barlow_Condensed'] font-700 text-xs tracking-widest uppercase px-6 py-3 hover:bg-[oklch(0.10_0.005_260)] hover:text-white transition-colors flex items-center gap-2">
              <Phone size={13} /> (509) 998-4033
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
