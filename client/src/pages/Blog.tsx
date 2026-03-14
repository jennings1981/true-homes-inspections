import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, Calendar, ChevronRight } from "lucide-react";

const posts = [
  {
    title: "Common Issues Found in North Idaho Homes",
    excerpt: "From moisture intrusion to aging electrical panels, here are the most frequent problems we discover during inspections in the Sandpoint and Coeur d'Alene areas. Understanding these issues helps buyers make informed decisions.",
    date: "March 15, 2025",
    category: "Inspection Tips",
    readTime: "5 min read",
    content: `North Idaho's unique climate and housing stock create specific patterns of issues that we see repeatedly during home inspections. Understanding these common problems helps buyers know what to look for and what questions to ask during the inspection process.

**Moisture and Water Intrusion**
The North Idaho climate — with heavy snowfall, spring runoff, and significant rainfall — creates persistent moisture challenges for homes. We frequently find evidence of water intrusion in basements, crawlspaces, and around windows and doors. Improper grading that directs water toward the foundation is one of the most common issues we encounter.

**Aging Electrical Systems**
Many homes in Sandpoint, Coeur d'Alene, and surrounding areas were built in the 1960s–1980s and still have original electrical panels. Federal Pacific Electric (FPE) Stab-Lok panels and Zinsco panels are particularly concerning and are found regularly in older North Idaho homes. These panels have documented safety issues and should be evaluated by a licensed electrician.

**Roof Condition**
Heavy snowpack puts significant stress on roofing systems. We frequently find damaged or missing shingles, inadequate attic ventilation that leads to ice damming, and structural issues related to snow loads. Flat or low-slope roofs are particularly vulnerable.

**Radon**
Idaho consistently ranks among the top states for elevated radon levels. We strongly recommend radon testing for every home purchase in North Idaho. Many homes test above the EPA action level of 4 pCi/L.`,
  },
  {
    title: "What Buyers Should Know Before Buying in Sandpoint",
    excerpt: "The Sandpoint real estate market moves fast. Here's what every buyer should understand about home inspections before making an offer on a property in Bonner County.",
    date: "February 28, 2025",
    category: "Buyer Tips",
    readTime: "6 min read",
    content: `Sandpoint's real estate market has become increasingly competitive, with buyers from across the Pacific Northwest competing for limited inventory. In this environment, it can be tempting to waive inspection contingencies to make your offer more attractive. Here's why that's almost always a mistake.`,
  },
  {
    title: "How Radon Affects Homes in North Idaho",
    excerpt: "Idaho consistently ranks among the highest radon-risk states. Learn why testing matters and what levels are considered dangerous for your family's health.",
    date: "January 20, 2025",
    category: "Radon",
    readTime: "7 min read",
    content: `Radon is a naturally occurring radioactive gas that forms from the decay of uranium in soil and rock. It's colorless, odorless, and tasteless — you can't detect it without testing. Yet it's the second leading cause of lung cancer in the United States, responsible for approximately 21,000 deaths annually.`,
  },
  {
    title: "How Snow and Moisture Impact Idaho Homes",
    excerpt: "North Idaho's heavy snowfall and wet climate create unique challenges for homes. Learn what to look for and how to protect your property from moisture damage.",
    date: "December 10, 2024",
    category: "Maintenance",
    readTime: "5 min read",
    content: `North Idaho receives significant snowfall each winter, with some areas seeing 100+ inches annually. This snow, combined with spring runoff and significant rainfall, creates persistent moisture challenges that affect homes throughout the region.`,
  },
  {
    title: "What Happens During a Home Inspection",
    excerpt: "Wondering what a home inspector actually does during those 2–4 hours on-site? Here's a detailed walkthrough of what we examine and why it matters.",
    date: "November 5, 2024",
    category: "Education",
    readTime: "8 min read",
    content: `A professional home inspection is a systematic, visual examination of a home's accessible systems and components. Here's what we examine during a standard buyer home inspection in North Idaho.`,
  },
  {
    title: "How to Prepare Your Home for Inspection",
    excerpt: "Selling your home? Here's how to prepare for the buyer's inspection to minimize surprises, speed up the process, and avoid deal-killing discoveries.",
    date: "October 18, 2024",
    category: "Seller Tips",
    readTime: "5 min read",
    content: `Whether you're getting a pre-listing inspection or preparing for a buyer's inspector, proper preparation can make the process smoother and reduce the likelihood of deal-killing discoveries.`,
  },
  {
    title: "Idaho Winter Home Maintenance Tips",
    excerpt: "Protect your North Idaho home through the winter months with these essential maintenance tips from a certified home inspector with 20+ years of local experience.",
    date: "September 30, 2024",
    category: "Maintenance",
    readTime: "6 min read",
    content: `North Idaho winters can be harsh, with temperatures dropping well below freezing and significant snowfall accumulation. Proper preparation and maintenance can prevent costly damage and keep your home safe and comfortable through the winter months.`,
  },
  {
    title: "New Construction Inspection Checklist",
    excerpt: "Buying a new construction home? Don't skip the inspection. Here's what a professional inspector looks for during pre-drywall and final walkthrough inspections.",
    date: "August 22, 2024",
    category: "New Construction",
    readTime: "7 min read",
    content: `Many buyers assume new construction homes don't need inspections. This is one of the most costly misconceptions in real estate. Builder errors, subcontractor mistakes, and code violations are surprisingly common in new construction.`,
  },
  {
    title: "Lakefront Home Inspection Considerations",
    excerpt: "Buying a lakefront property on Lake Pend Oreille or Lake Coeur d'Alene? These homes have unique inspection considerations that require specialized knowledge.",
    date: "July 14, 2024",
    category: "Specialty",
    readTime: "6 min read",
    content: `Lakefront properties in North Idaho — particularly on Lake Pend Oreille and Lake Coeur d'Alene — are among the most desirable real estate in the Pacific Northwest. They're also among the most complex to inspect. Here's what buyers should know.`,
  },
  {
    title: "Top Problems Found During Home Inspections",
    excerpt: "After thousands of inspections in North Idaho, here are the most common and costly problems we find — and what they mean for buyers and sellers.",
    date: "June 5, 2024",
    category: "Inspection Tips",
    readTime: "6 min read",
    content: `After thousands of home inspections throughout North Idaho, certain issues appear again and again. Understanding these common problems helps buyers know what to expect and sellers know what to address before listing.`,
  },
];

export default function Blog() {
  return (
    <Layout>
      <div className="bg-[oklch(0.12_0.005_260)] py-16 border-b border-white/5">
        <div className="container">
          <div className="section-label mb-4">Homeowner Resources</div>
          <h1 className="font-['Barlow_Condensed'] font-800 text-5xl md:text-6xl text-white leading-tight mb-4">
            North Idaho Home Inspection Blog
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Expert advice, local insights, and educational resources for North Idaho home buyers, sellers, and homeowners from True Homes Inspections.
          </p>
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container">
          {/* Featured post */}
          <div className="mb-16">
            <div className="section-label mb-6">Featured Article</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[oklch(0.20_0.005_260)] border border-white/5 hover:border-[#C0392B]/20 transition-all group">
              <div className="h-64 lg:h-auto overflow-hidden">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663427046845/ToYqQAZz6CCmi4HjBtrLQ7/inspection-interior-5kwkj8D2DYcxBYd4VkaTu6.webp"
                  alt={posts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs bg-[#C0392B]/10 text-[#C0392B] px-2 py-1 font-['Barlow_Condensed'] font-600 tracking-wide uppercase">{posts[0].category}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar size={11} /> {posts[0].date}</span>
                </div>
                <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-white mb-4 leading-tight group-hover:text-[#C0392B] transition-colors">
                  {posts[0].title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-2 text-sm text-[#C0392B] font-['Barlow_Condensed'] font-600 tracking-wide uppercase">
                  Read Article <ArrowRight size={13} />
                </div>
              </div>
            </div>
          </div>

          {/* All posts grid */}
          <div className="section-label mb-8">All Articles</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <div
                key={post.title}
                className="bg-[oklch(0.20_0.005_260)] border border-white/5 hover:border-[#C0392B]/20 transition-all group cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs bg-[#C0392B]/10 text-[#C0392B] px-2 py-1 font-['Barlow_Condensed'] font-600 tracking-wide uppercase">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="font-['Barlow_Condensed'] font-700 text-xl text-white mb-3 leading-tight group-hover:text-[#C0392B] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar size={11} /> {post.date}</span>
                    <div className="flex items-center gap-1 text-xs text-[#C0392B] font-['Barlow_Condensed'] font-600 tracking-wide uppercase">
                      Read <ChevronRight size={12} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#C0392B]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-white leading-tight mb-1">
              Ready to Schedule Your Inspection?
            </h2>
            <p className="text-white/70 text-sm">Put our expertise to work for you.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/schedule" className="bg-[#1a1a1a] text-white font-['Barlow_Condensed'] font-700 text-xs tracking-widest uppercase px-6 py-3 hover:bg-black transition-colors flex items-center gap-2">
              Schedule Now <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
