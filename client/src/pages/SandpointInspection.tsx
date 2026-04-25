import LocationPage from "@/components/LocationPage";

export default function SandpointInspection() {
  return (
    <LocationPage
      city="Sandpoint"
      county="Bonner County"
      state="Idaho"
      description="Certified home inspections in Sandpoint, Idaho. Serving Bonner County including lakefront properties on Lake Pend Oreille, mountain homes near Schweitzer, and all residential properties in the Sandpoint area."
      paragraphs={[
        "Sandpoint is one of North Idaho's most sought-after communities, attracting buyers from across the Pacific Northwest and beyond. Whether you're purchasing a lakefront home on Lake Pend Oreille, a mountain property near Schweitzer, or a home in one of Sandpoint's established neighborhoods, True Homes Inspections provides the thorough, certified inspection you need.",
        "We've been inspecting Sandpoint homes for over 20 years. That experience gives us deep knowledge of the region's housing stock — from older craftsman homes in the historic downtown area to newer construction in Ponderay and Sagle. We understand the unique challenges these homes face, including heavy snowpack loads, moisture from the lake environment, and the aging infrastructure common in older properties.",
        "Every Sandpoint home inspection follows ASHI standards and covers all accessible systems and components. You'll receive a detailed digital report with photos within 24–48 hours, and we're available to answer questions throughout the process.",
      ]}
      localFacts={[
        "Heavy snowpack can stress roofs, gutters, and structural components",
        "Lakefront and waterfront properties require special attention to moisture and drainage",
        "Older homes in historic Sandpoint may have aging electrical panels (Federal Pacific, Zinsco)",
        "Radon levels in Bonner County frequently exceed EPA action levels",
        "Crawlspace moisture issues are common due to the region's climate",
        "Deck and porch structures on mountain properties require careful inspection",
        "Older homes may have knob-and-tube or aluminum wiring",
        "Septic systems are common outside city limits and require attention",
      ]}
      testimonial={{
        text: "We were buying a lakefront property in Sandpoint and were nervous about hidden issues. True Homes found several significant problems that saved us from a very expensive mistake. Their knowledge of local homes is unmatched.",
        name: "Robert & Karen T.",
      }}
    />
  );
}
