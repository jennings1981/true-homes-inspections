import LocationPage from "@/components/LocationPage";

export default function PostFallsInspection() {
  return (
    <LocationPage
      city="Post Falls"
      county="Kootenai County"
      state="Idaho"
      description="Certified home inspections in Post Falls, Idaho. Serving all of Post Falls including new construction developments, established neighborhoods, and the rapidly growing areas along the Spokane River corridor."
      paragraphs={[
        "Post Falls is one of the fastest-growing cities in Idaho, with new construction developments appearing throughout the city. This rapid growth makes professional home inspections more important than ever — builder errors and code violations are common in high-volume construction environments.",
        "We inspect both new and existing homes in Post Falls with the same thoroughness. For new construction, we offer pre-drywall and final walkthrough inspections that catch builder errors before they become your problem. For existing homes, we provide comprehensive evaluations of all systems and components.",
        "Our inspector's 20+ years of experience in the North Idaho region means we understand the specific issues common to Post Falls homes — from the clay soils that can affect foundations to the rapid construction that sometimes cuts corners on quality.",
      ]}
      localFacts={[
        "High volume of new construction — builder errors are common",
        "Clay soils can cause foundation settling and drainage issues",
        "Rapid development means some contractors may cut corners",
        "Older neighborhoods have aging infrastructure needing attention",
        "Radon testing is recommended throughout Kootenai County",
        "Crawlspace moisture issues are common in the region",
        "HVAC systems in new construction should be verified for proper installation",
        "Grading and drainage issues are frequent in new developments",
      ]}
      testimonial={{
        text: "We used True Homes for a new construction inspection in Post Falls. They found multiple issues the builder had missed, including improper electrical work and drainage problems. Absolutely worth every penny.",
        name: "David & Lisa M.",
      }}
    />
  );
}
