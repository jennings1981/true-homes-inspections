/**
 * PageSEO — Reusable per-page SEO meta tag component using react-helmet-async
 * Injects unique title, description, canonical URL, and Open Graph tags per page
 */
import { Helmet } from "react-helmet-async";

interface PageSEOProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
}

export default function PageSEO({ title, description, canonical, keywords }: PageSEOProps) {
  const fullTitle = `${title} | True Homes Inspections`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
