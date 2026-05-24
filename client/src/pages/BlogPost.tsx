/**
 * BlogPost — True Homes Inspections
 * Individual blog article page — dark slate + orange #D35400
 */
import { useRoute, Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowLeft, Calendar, Clock, Phone, ArrowRight } from "lucide-react";
import { getPostBySlug, blogPosts } from "@/lib/blogPosts";
import NotFound from "./NotFound";

/** Render simple markdown-style content: **Bold Heading**, - bullets, and paragraphs */
function renderContent(content: string) {
  const paragraphs = content.split(/\n\n+/);
  return paragraphs.map((para, i) => {
    const trimmed = para.trim();
    if (!trimmed) return null;

    // Standalone bold heading: **Heading Text**
    if (/^\*\*[^*]+\*\*$/.test(trimmed)) {
      const text = trimmed.replace(/^\*\*|\*\*$/g, "");
      return (
        <h3 key={i} className="font-['Barlow_Condensed'] font-700 text-xl text-white mt-7 mb-2">
          {text}
        </h3>
      );
    }

    // Bullet list block
    if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} className="mb-4 space-y-1.5 ml-2">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
              <span className="text-[#D35400] flex-shrink-0 mt-0.5">—</span>
              <span>{item.replace(/^- /, "")}</span>
            </li>
          ))}
        </ul>
      );
    }

    // Regular paragraph with inline **bold** support
    const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
        {parts.map((part, j) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={j} className="text-white font-600">
              {part.replace(/^\*\*|\*\*$/g, "")}
            </strong>
          ) : (
            part
          )
        )}
      </p>
    );
  });
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug ?? "";
  const post = getPostBySlug(slug);

  if (!post) return <NotFound />;

  const related = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);
  const relatedPosts =
    related.length > 0 ? related : blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <Layout>
      {/* Compact hero */}
      <div className="bg-[oklch(0.12_0.005_260)] py-10 border-b border-white/5">
        <div className="container max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-[#D35400] font-['Barlow_Condensed'] font-600 tracking-widest uppercase mb-5 hover:text-[#E8660A] transition-colors"
          >
            <ArrowLeft size={12} /> Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-xs bg-[#D35400]/10 text-[#D35400] px-2 py-0.5 font-['Barlow_Condensed'] font-600 tracking-wide uppercase">
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar size={10} /> {post.date}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock size={10} /> {post.readTime}
            </span>
          </div>
          <h1 className="font-['Barlow_Condensed'] font-800 text-3xl md:text-5xl text-white leading-tight mb-3">
            {post.title}
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Article body — no extra padding gap */}
      <section className="py-10 bg-background">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main article */}
            <article className="lg:col-span-2">
              <div className="amber-divider mb-6" />
              {renderContent(post.content)}
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-sm text-muted-foreground mb-3">
                  Have questions about your home inspection? Call Tim directly.
                </p>
                <a
                  href="tel:+12082439706"
                  className="btn-amber text-xs flex items-center gap-2 w-fit"
                >
                  <Phone size={13} /> Call Tim — 208-243-9706
                </a>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-5">
              <div className="bg-[oklch(0.20_0.005_260)] border border-[#D35400]/20 p-5">
                <div className="amber-divider mb-4" />
                <h3 className="font-['Barlow_Condensed'] font-700 text-base text-white mb-2">
                  Schedule Your Inspection
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Tim personally performs every inspection. Same-week appointments often available.
                </p>
                <a
                  href="tel:+12082439706"
                  className="btn-amber text-xs flex items-center gap-2 w-full justify-center"
                >
                  <Phone size={13} /> 208-243-9706
                </a>
              </div>

              {relatedPosts.length > 0 && (
                <div>
                  <div className="section-label mb-3">Related Articles</div>
                  <div className="space-y-3">
                    {relatedPosts.map((rp) => (
                      <Link
                        key={rp.slug}
                        href={`/blog/${rp.slug}`}
                        className="block bg-[oklch(0.20_0.005_260)] border border-white/5 hover:border-[#D35400]/20 transition-all p-4 group"
                      >
                        <div className="text-xs text-[#D35400] font-['Barlow_Condensed'] font-600 tracking-wide uppercase mb-1">
                          {rp.category}
                        </div>
                        <h4 className="font-['Barlow_Condensed'] font-700 text-sm text-white leading-snug group-hover:text-[#D35400] transition-colors mb-2">
                          {rp.title}
                        </h4>
                        <div className="flex items-center gap-1 text-xs text-[#D35400]">
                          Read <ArrowRight size={10} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-14 bg-[#D35400]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-['Barlow_Condensed'] font-800 text-3xl text-[oklch(0.10_0.005_260)] leading-tight mb-1">
              Ready to Schedule Your Inspection?
            </h2>
            <p className="text-[oklch(0.10_0.005_260)]/70 text-sm">
              Call Tim directly — same-week appointments often available.
            </p>
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
