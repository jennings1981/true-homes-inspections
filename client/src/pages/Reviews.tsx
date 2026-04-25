import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Star, ArrowRight, Phone } from "lucide-react";

const reviews = [
  { name: "Sarah M.", location: "Sandpoint, ID", rating: 5, date: "January 2025", text: "Absolutely thorough inspection. The report was incredibly detailed with photos of every issue found. Saved us from a very expensive mistake on a lakefront property. Would recommend True Homes to anyone buying in North Idaho." },
  { name: "James & Linda K.", location: "Coeur d'Alene, ID", rating: 5, date: "December 2024", text: "Professional, knowledgeable, and patient. He took the time to explain everything he found and helped us understand what was urgent vs. what could wait. The report was delivered the same day. Excellent service." },
  { name: "Mike T.", location: "Post Falls, ID", rating: 5, date: "November 2024", text: "Used True Homes for our new construction inspection. Found several issues the builder had missed, including improper electrical work and a drainage problem. Worth every penny. Will use again for our next purchase." },
  { name: "Amanda R.", location: "Sandpoint, ID", rating: 5, date: "October 2024", text: "We were first-time home buyers and had no idea what to expect. The inspector was incredibly patient and educational throughout the entire process. The report was clear and easy to understand. Highly recommend!" },
  { name: "Tom & Carol B.", location: "Hayden, ID", rating: 5, date: "September 2024", text: "Very thorough and professional. Found issues with the roof and HVAC that we were able to negotiate with the seller. The report paid for itself many times over. Great local company." },
  { name: "Jessica L.", location: "Coeur d'Alene, ID", rating: 5, date: "August 2024", text: "I've used True Homes twice now — once as a buyer and once as a seller getting a pre-listing inspection. Both times were excellent. They know North Idaho homes better than anyone." },
  { name: "Robert & Karen T.", location: "Sandpoint, ID", rating: 5, date: "July 2024", text: "We were buying a lakefront property and were nervous about hidden issues. True Homes found several significant problems that saved us from a very expensive mistake. Their knowledge of local homes is unmatched." },
  { name: "David & Lisa M.", location: "Post Falls, ID", rating: 5, date: "June 2024", text: "New construction inspection caught multiple builder errors including improper electrical work and drainage problems. The inspector was thorough, professional, and clearly knew what to look for. Excellent service." },
  { name: "Chris P.", location: "Rathdrum, ID", rating: 5, date: "May 2024", text: "Quick scheduling, thorough inspection, detailed report. Everything you could ask for. The inspector clearly has deep knowledge of North Idaho homes and what to look for. Will definitely use again." },
];

export default function Reviews() {
  return (
    <Layout>
      <div className="bg-[oklch(0.12_0.005_260)] py-16 border-b border-white/5">
        <div className="container">
          <div className="section-label mb-4">Client Reviews</div>
          <h1 className="font-['Barlow_Condensed'] font-800 text-5xl md:text-6xl text-white leading-tight mb-4">
            What Our Clients Say
          </h1>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={20} className="text-[#D35400] fill-[#D35400]" />)}
            </div>
            <span className="font-['Barlow_Condensed'] font-700 text-2xl text-white">5.0</span>
            <span className="text-muted-foreground text-sm">— Based on 100+ verified reviews</span>
          </div>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Trusted by hundreds of North Idaho home buyers and sellers. Read what our clients say about their experience with True Homes Inspections.
          </p>
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.name + review.date} className="testimonial-card">
                <div className="flex items-center justify-between mb-3 mt-2">
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} size={13} className="text-[#D35400] fill-[#D35400]" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">"{review.text}"</p>
                <div>
                  <div className="font-['Barlow_Condensed'] font-700 text-white text-sm">{review.name}</div>
                  <div className="text-xs text-[#D35400]/70">{review.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#D35400]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-[oklch(0.10_0.005_260)] leading-tight mb-1">
              Join Hundreds of Satisfied Clients
            </h2>
            <p className="text-[oklch(0.10_0.005_260)]/70 text-sm">Schedule your inspection today and experience the True Homes difference.</p>
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
