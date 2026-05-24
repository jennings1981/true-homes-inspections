/**
 * Blog listing page — True Homes Inspections
 * Dark slate + orange #D35400
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowRight, Calendar, Clock, Phone } from "lucide-react";
import { blogPosts } from "@/lib/blogPosts";

const FEATURED_IMG = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&auto=format&fit=crop";

export default function Blog() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <Layout>
      {/* Page header */}
      <div className="bg-[oklch(0.12_0.005_260)] py-14 border-b border-white/5">
        <div className="container">
          <div className="section-label mb-3">Homeowner Resources</div>
          <h1 className="font-['Barlow_Condensed'] font-800 text-5xl md:text-6xl text-white leading-tight mb-3">
            North Idaho Home Inspection Blog
          </h1>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
            Expert advice, local insights, and educational resources for North Idaho home buyers, sellers, and homeowners.
          </p>
        </div>
      </div>

      <section className="py-12 bg-background">
        <div className="container">

          {/* Featured post */}
          <div className="mb-10">
            <div className="section-label mb-4">Featured Article</div>
            <Link
              href={`/blog/${featured.slug}`}
              className="grid grid-cols-1 lg:grid-cols-2 bg-[oklch(0.20_0.005_260)] border border-white/5 hover:border-[#D35400]/30 transition-all group overflow-hidden"
            >
              <div className="h-56 lg:h-72 overflow-hidden">
                <img
                  src={FEATURED_IMG}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs bg-[#D35400]/10 text-[#D35400] px-2 py-1 font-['Barlow_Condensed'] font-600 tracking-wide uppercase">
                    {featured.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar size={11} /> {featured.date}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock size={11} /> {featured.readTime}
                  </span>
                </div>
                <h2 className="font-['Barlow_Condensed'] font-800 text-2xl md:text-3xl text-white mb-3 leading-tight group-hover:text-[#D35400] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm text-[#D35400] font-['Barlow_Condensed'] font-600 tracking-wide uppercase">
                  Read Article <ArrowRight size={13} />
                </div>
              </div>
            </Link>
          </div>

          {/* All posts grid */}
          <div className="section-label mb-5">All Articles</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-[oklch(0.20_0.005_260)] border border-white/5 hover:border-[#D35400]/30 transition-all group flex flex-col"
              >
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-[#D35400]/10 text-[#D35400] px-2 py-0.5 font-['Barlow_Condensed'] font-600 tracking-wide uppercase">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="font-['Barlow_Condensed'] font-700 text-lg text-white mb-2 leading-snug group-hover:text-[#D35400] transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar size={10} /> {post.date}
                    </span>
                    <span className="text-xs text-[#D35400] font-['Barlow_Condensed'] font-600 tracking-wide uppercase flex items-center gap-1">
                      Read <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#D35400]">
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
