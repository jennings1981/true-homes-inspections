import ServicePage from "@/components/ServicePage";
import { Home } from "lucide-react";

export default function BuyerInspection() {
  return (
    <ServicePage
      heroImage="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1400&auto=format&fit=crop"
      icon={Home}
      subtitle="Buyer Home Inspection"
      title="Pre-Purchase Home Inspection in North Idaho"
      description="Know exactly what you're buying before you close. Our comprehensive buyer home inspection covers every accessible system and component in the home."
      longDesc={[
        "Purchasing a home is one of the largest financial decisions you'll ever make. A professional home inspection is your best tool for understanding exactly what you're buying — and what it may cost to maintain or repair.",
        "Our buyer home inspections follow ASHI standards and cover every accessible area of the property. We spend 2–4 hours on-site, then deliver a detailed digital report with photos within 24 hours.",
        "We serve home buyers throughout Sandpoint, Coeur d'Alene, Post Falls, and all of North Idaho. Our local knowledge of regional building practices, common defects, and climate-related issues gives you an advantage other inspectors can't provide.",
      ]}
      includes={[
        "Roof, gutters, and drainage",
        "Foundation and structural components",
        "Electrical systems and panels",
        "Plumbing and water heater",
        "HVAC systems and ductwork",
        "Insulation and ventilation",
        "Windows, doors, and exterior",
        "Interior rooms and finishes",
        "Attic and crawlspace",
        "Garage and outbuildings",
        "Grading and drainage",
        "Deck and porch structures",
      ]}
      faq={[
        {
          q: "How long does a buyer home inspection take?",
          a: "Most inspections take 2–4 hours depending on the size and age of the home. We encourage buyers to attend so we can walk you through our findings in person.",
        },
        {
          q: "When will I receive my report?",
          a: "You'll receive your detailed digital report with photos within 24 hours of the inspection.",
        },
        {
          q: "Should I attend the inspection?",
          a: "We recommend joining Tim at the end of the inspection for a personal walkthrough review — and it's one of the most valuable 20 minutes you'll spend in the home buying process. Tim will walk you through every significant finding face-to-face, explain what it means in plain language, and answer every question you have. You'll leave with a clear picture of the home's condition — not just a report to decipher on your own. Plan to arrive toward the end of the inspection window and Tim will let you know when he's ready for you.",
        },
        {
          q: "What if the inspection finds problems?",
          a: "Finding issues is normal — no home is perfect. Our report helps you understand which issues are serious, which are minor, and which are normal maintenance items. You can use this information to negotiate repairs or credits with the seller.",
        },
      ]}
    />
  );
}
