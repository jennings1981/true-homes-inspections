/**
 * Blog listing page — True Homes Inspections
 * Dark slate + orange #D35400
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, Calendar, ChevronRight, Phone } from "lucide-react";
import { blogPosts } from "@/lib/blogPosts";

export default function Blog() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

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
            <Link
              href={`/blog/${featured.slug}`}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[oklch(0.20_0.005_260)] border border-white/5 hover:border-[#D35400]/20 transition-all group"
            >
              <div className="h-64 lg:h-auto overflow-hidden">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663427046845/ToYqQAZz6CCmi4HjBtrLQ7/inspection-interior-5kwkj8D2DYcxBYd4VkaTu6.webp"
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs bg-[#D35400]/10 text-[#D35400] px-2 py-1 font-['Barlow_Condensed'] font-600 tracking-wide uppercase">
                    {featured.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar size={11} /> {featured.date}
                  </span>
                </div>
                <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-white mb-4 leading-tight group-hover:text-[#D35400] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm text-[#D35400] font-['Barlow_Condensed'] font-600 tracking-wide uppercase">
                  Read Article <ArrowRight size={13} />
                </div>
              </div>
            </Link>
          </div>

          {/* All posts grid */}
          <div className="section-label mb-8">All Articles</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-[oklch(0.20_0.005_260)] border border-white/5 hover:border-[#D35400]/20 transition-all group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs bg-[#D35400]/10 text-[#D35400] px-2 py-1 font-['Barlow_Condensed'] font-600 tracking-wide uppercase">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="font-['Barlow_Condensed'] font-700 text-xl text-white mb-3 leading-tight group-hover:text-[#D35400] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar size={11} /> {post.date}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-[#D35400] font-['Barlow_Condensed'] font-600 tracking-wide uppercase">
                      Read <ChevronRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#D35400]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-[oklch(0.10_0.005_260)] leading-tight mb-1">
              Ready to Schedule Your Inspection?
            </h2>
            <p className="text-[oklch(0.10_0.005_260)]/70 text-sm">Put our expertise to work for you.</p>
          </div>
          <a
            href="tel:+12082439706"
            className="bg-[oklch(0.10_0.005_260)] text-white font-['Barlow_Condensed'] font-700 text-xs tracking-widest uppercase px-6 py-3 hover:bg-[oklch(0.20_0.005_260)] transition-colors flex items-center gap-2 flex-shrink-0"
          >
            <Phone size={13} /> Call Tim — 208-243-9706
          </a>
        </div>
      </section>
    </Layout>
  );
}
