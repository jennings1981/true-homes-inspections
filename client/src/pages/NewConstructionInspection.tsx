import ServicePage from "@/components/ServicePage";
import { Hammer } from "lucide-react";

export default function NewConstructionInspection() {
  return (
    <ServicePage
      heroImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&auto=format&fit=crop"
      icon={Hammer}
      subtitle="New Construction Inspection"
      title="New Home Inspection in North Idaho"
      description="New homes aren't perfect. Builder errors and code violations are common. We inspect at key phases to protect your investment before you take possession."
      longDesc={[
        "Many buyers assume a new home doesn't need an inspection. This is one of the most costly misconceptions in real estate. Builder errors, subcontractor mistakes, and code violations are surprisingly common in new construction — and they're much easier and cheaper to fix before drywall goes up.",
        "We offer two critical inspection phases for new construction: a pre-drywall inspection that catches structural, electrical, and plumbing issues before they're hidden behind walls, and a final walkthrough inspection before you close.",
        "Our inspectors have extensive knowledge of North Idaho building codes and construction practices. We work with you — not the builder — to ensure your new home is built to the standards you're paying for.",
      ]}
      includes={[
        "Pre-drywall phase inspection",
        "Final walkthrough inspection",
        "Structural framing review",
        "Electrical rough-in inspection",
        "Plumbing rough-in inspection",
        "HVAC installation review",
        "Insulation and air sealing",
        "Builder punch-list documentation",
        "Code compliance review",
        "Digital report with photos",
      ]}
      faq={[
        {
          q: "Does my new home really need an inspection?",
          a: "Yes. Builder errors are common in new construction. Municipal inspectors check for minimum code compliance — they don't look out for your interests the way an independent inspector does.",
        },
        {
          q: "When should I schedule a new construction inspection?",
          a: "We recommend two inspections: one before drywall is installed (pre-drywall phase) and one at the final walkthrough before closing. Both are important.",
        },
        {
          q: "Will the builder allow an independent inspection?",
          a: "Yes. You have the right to hire an independent inspector for any home purchase, including new construction. Most reputable builders welcome independent inspections.",
        },
        {
          q: "Should I be present for the inspection?",
          a: "We recommend joining Tim at the end of the inspection for a personal walkthrough review — and it's one of the most valuable things you can do during the new construction process. Tim will walk you through every significant finding face-to-face, explain what it means in plain language, and answer every question you have. You'll leave knowing exactly what your builder needs to address before you close. Plan to arrive toward the end of the inspection window and Tim will let you know when he's ready for you.",
        },
      ]}
    />
  );
}
