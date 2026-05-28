import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Star, ArrowRight, Phone } from "lucide-react";

const reviews = [
  { name: "Lynol Stevens", location: "North Idaho", rating: 5, date: "2 weeks ago", text: "Detailed and thorough — pictures, videos, recommendations. Professional." },
  { name: "J.W.", location: "North Idaho", rating: 5, date: "3 weeks ago", text: "Tim was awesome regarding our house inspection. My wife and I purchasing of a home moved very rapidly and Tim responded just as quickly to get the home inspection done. Tim was very thorough where he explained what needed to be fixed in layman's terms. His inspection reports have links you can use on how to fix problems, photos, videos, and very detailed analysis of findings. Any questions we had, he answered, and offered to answer any further questions after the fact. I highly recommend him for your home inspection needs." },
  { name: "Lynn Fleckle", location: "North Idaho", rating: 5, date: "2 months ago", text: "We cannot emphasize enough how thorough Tim inspected our potential homes. In the long run, he saved us many thousands of dollars by documenting actual and potential structural as well as many other issues we were completely unaware of. He is methodical and objective in his reviews and documentation of flaws — from the critical to the cosmetic — and actual and potential problems, recommending the type of professional who would need to be used to correct and mitigate the defects he found. His reports are complete with explanations that can be understood by laypeople, along with additional internet references to similar problems. He shows up when scheduled and is very prompt in providing a complete report. We will definitely call him again when the time comes to consider a new home." },
  { name: "Jesse Williamson", location: "North Idaho", rating: 5, date: "2 months ago", text: "Was very professional and did an excellent job. His inspection report was thorough and well put together." },
  { name: "TJ Hake", location: "North Idaho", rating: 5, date: "2 months ago", text: "Tim did a fantastic job, extremely detailed and goes above and beyond for his clients." },
  { name: "Jonathan Luhnow", location: "North Idaho", rating: 5, date: "2 months ago", text: "Tim was great to work with, very knowledgeable both technically and from experience. He was easy to talk with and gave a great report with pictures and notes that are easy to read." },
  { name: "Stewart Fisk", location: "North Idaho", rating: 5, date: "2 months ago", text: "Tim was thorough, explained the findings well, and generated a great report on what he found." },
  { name: "Cody Corbett", location: "North Idaho", rating: 5, date: "2 months ago", text: "Very thorough inspections and timely delivery of report. Pricing was competitive but the documentation and attention to detail are where they really shine. Would definitely use these guys again." },
  { name: "Jan Baird", location: "North Idaho", rating: 5, date: "2 months ago", text: "Normally I do not post reviews publicly. However, I make the exception today as Tim's True Homes inspection report and verbal sharing of the feedback was exceptional. His formal report was detail-oriented with clear and concise information — e.g., photographs, recommendation links when applicable to other useful web-related information. I also appreciated the in-person review and knowing that I can contact him directly if I need further clarification." },
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
