import { Link } from "wouter";
import Layout from "@/components/Layout";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  longDesc: string[];
  includes: string[];
  icon: LucideIcon;
  faq?: { q: string; a: string }[];
}

export default function ServicePage({ title, subtitle, description, longDesc, includes, icon: Icon, faq }: ServicePageProps) {
  const INSPECTOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663427046845/ToYqQAZz6CCmi4HjBtrLQ7/hero-house-inspection-63aGz43DbvpCKgC7R3bn5U.webp";

  return (
    <Layout>
      <div className="bg-[oklch(0.12_0.005_260)] py-16 border-b border-white/5">
        <div className="container">
          <div className="section-label mb-4">{subtitle}</div>
          <h1 className="font-['Barlow_Condensed'] font-800 text-5xl md:text-6xl text-white leading-tight mb-4">{title}</h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">{description}</p>
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="w-12 h-12 bg-amber-500/10 flex items-center justify-center mb-6">
                <Icon size={24} className="text-amber-400" />
              </div>
              {longDesc.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">{para}</p>
              ))}
              <div className="mt-8">
                <h3 className="font-['Barlow_Condensed'] font-700 text-xl text-white mb-4">What's Included</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {includes.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle size={13} className="text-amber-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex gap-3">
                <Link href="/schedule" className="btn-amber text-xs">Schedule Now <ArrowRight size={13} /></Link>
                <a href="tel:+15099984033" className="btn-outline-amber text-xs"><Phone size={13} /> Call Us</a>
              </div>
            </div>
            <div>
              <img src={INSPECTOR_IMG} alt={title} className="w-full h-[400px] object-cover mb-6" />
              <div className="bg-[oklch(0.20_0.005_260)] border border-white/5 p-6">
                <h3 className="font-['Barlow_Condensed'] font-700 text-lg text-white mb-4">Schedule This Inspection</h3>
                <p className="text-sm text-muted-foreground mb-4">Call us or schedule online. Same-week appointments often available.</p>
                <div className="space-y-3">
                  <Link href="/schedule" className="btn-amber w-full justify-center text-xs">Book Online <ArrowRight size={13} /></Link>
                  <a href="tel:+15099984033" className="btn-outline-amber w-full justify-center text-xs"><Phone size={13} /> (509) 998-4033</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {faq && faq.length > 0 && (
        <section className="py-20 bg-[oklch(0.18_0.005_260)]">
          <div className="container max-w-3xl">
            <div className="section-label mb-4">FAQ</div>
            <h2 className="font-['Barlow_Condensed'] font-800 text-4xl text-white mb-10">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faq.map((item) => (
                <div key={item.q} className="border-b border-white/5 pb-6">
                  <h3 className="font-['Barlow_Condensed'] font-700 text-lg text-amber-400 mb-2">{item.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-amber-500">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-[oklch(0.10_0.005_260)] leading-tight mb-1">Ready to Get Started?</h2>
            <p className="text-[oklch(0.10_0.005_260)]/70 text-sm">Schedule your inspection today — same-week availability.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/schedule" className="bg-[oklch(0.10_0.005_260)] text-white font-['Barlow_Condensed'] font-700 text-xs tracking-widest uppercase px-6 py-3 hover:bg-[oklch(0.20_0.005_260)] transition-colors flex items-center gap-2">
              Schedule Now <ArrowRight size={13} />
            </Link>
            <a href="tel:+15099984033" className="border-2 border-[oklch(0.10_0.005_260)] text-[oklch(0.10_0.005_260)] font-['Barlow_Condensed'] font-700 text-xs tracking-widest uppercase px-6 py-3 hover:bg-[oklch(0.10_0.005_260)] hover:text-white transition-colors flex items-center gap-2">
              <Phone size={13} /> Call Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
