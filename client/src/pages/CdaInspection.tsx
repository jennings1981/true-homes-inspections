import LocationPage from "@/components/LocationPage";

export default function CdaInspection() {
  return (
    <LocationPage
      city="Coeur d'Alene"
      county="Kootenai County"
      state="Idaho"
      description="Certified home inspections in Coeur d'Alene, Idaho. Serving Kootenai County including lakefront properties, established neighborhoods, and new construction throughout the greater CDA area."
      paragraphs={[
        "Coeur d'Alene is one of the fastest-growing cities in the Pacific Northwest, with a booming real estate market that attracts buyers from across the country. Whether you're purchasing a lakefront home on Lake Coeur d'Alene, a property in an established neighborhood, or new construction in one of the area's many developments, True Homes Inspections provides the thorough inspection you need.",
        "Our inspector has extensive experience with Coeur d'Alene's diverse housing stock — from historic homes in the older neighborhoods to modern construction in rapidly developing areas like Hayden and Rathdrum. We understand the specific issues common to Kootenai County homes and provide honest, unbiased assessments.",
        "As a locally owned company based in Coeur d'Alene, we're invested in this community. We provide the same thorough inspection we'd want for our own families, backed by InterNACHI certification and Idaho state licensing.",
      ]}
      localFacts={[
        "Rapid growth means many new construction homes with builder defects",
        "Older neighborhoods have aging electrical, plumbing, and HVAC systems",
        "Lakefront properties require special attention to moisture and foundation issues",
        "Radon levels in Kootenai County are frequently elevated",
        "Clay soils in some areas can cause foundation movement and drainage issues",
        "Older homes may have asbestos-containing materials (pre-1980 construction)",
        "Crawlspace moisture and vapor barrier issues are common",
        "Deck and patio structures often have deferred maintenance",
      ]}
      testimonial={{
        text: "True Homes did our inspection on a Coeur d'Alene home we were purchasing. They were incredibly thorough and the report was detailed and easy to understand. We felt completely informed going into closing.",
        name: "Michael & Jennifer S.",
      }}
    />
  );
}
