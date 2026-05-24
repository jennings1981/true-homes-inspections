/**
 * BlogPost — True Homes Inspections
 * Individual blog article page — dark slate + orange #D35400
 */
import { useRoute, Link } from "wouter";
import Layout from "@/components/Layout";
import { ArrowLeft, Calendar, Clock, Phone, ArrowRight } from "lucide-react";
import { getPostBySlug, blogPosts } from "@/lib/blogPosts";
import NotFound from "./NotFound";

/** Render simple markdown-style bold (**text**) and paragraph breaks */
function renderContent(content: string) {
  const paragraphs = content.split(/\n\n+/);
  return paragraphs.map((para, i) => {
    const trimmed = para.trim();
    if (!trimmed) return null;

    // Heading: starts with **...**  on its own line (bold heading pattern)
    if (/^\*\*[^*]+\*\*$/.test(trimmed)) {
      const text = trimmed.replace(/^\*\*|\*\*$/g, "");
      return (
        <h3
          key={i}
          className="font-['Barlow_Condensed'] font-700 text-xl text-white mt-8 mb-3"
        >
          {text}
        </h3>
      );
    }

    // Bullet list: lines starting with -
    if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} className="space-y-2 mb-4 ml-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed">
              <span className="text-[#D35400] mt-1 flex-shrink-0">—</span>
              <span>{item.replace(/^- /, "")}</span>
            </li>
          ))}
        </ul>
      );
    }

    // Regular paragraph — inline bold support
    const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="text-muted-foreground leading-relaxed mb-4">
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

  // Related posts: same category, excluding current
  const related = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  // Fallback to any 2 posts if no same-category posts
  const relatedPosts =
    related.length > 0
      ? related
      : blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <Layout>
      {/* Hero */}
      <div className="bg-[oklch(0.12_0.005_260)] py-14 border-b border-white/5">
        <div className="container max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs text-[#D35400] font-['Barlow_Condensed'] font-600 tracking-widest uppercase mb-6 hover:text-[#E8660A] transition-colors"
          >
            <ArrowLeft size={13} /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs bg-[#D35400]/10 text-[#D35400] px-2 py-1 font-['Barlow_Condensed'] font-600 tracking-wide uppercase">
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar size={11} /> {post.date}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock size={11} /> {post.readTime}
            </span>
          </div>
          <h1 className="font-['Barlow_Condensed'] font-800 text-4xl md:text-5xl text-white leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Article body */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <article className="lg:col-span-2">
              <div className="amber-divider mb-8" />
              {renderContent(post.content)}
              <div className="mt-10 pt-8 border-t border-white/5">
                <p className="text-sm text-muted-foreground mb-4">
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
            <aside className="space-y-6">
              {/* CTA card */}
              <div className="bg-[oklch(0.20_0.005_260)] border border-[#D35400]/20 p-6">
                <div className="amber-divider mb-4" />
                <h3 className="font-['Barlow_Condensed'] font-700 text-lg text-white mb-3">
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

              {/* Related posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <div className="section-label mb-4">Related Articles</div>
                  <div className="space-y-4">
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
                          Read <ArrowRight size={11} />
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
      <section className="py-16 bg-[#D35400]">
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
