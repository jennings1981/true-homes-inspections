import ServicePage from "@/components/ServicePage";
import { FileSearch } from "lucide-react";

export default function PreListingInspection() {
  return (
    <ServicePage
      icon={FileSearch}
      subtitle="Pre-Listing Inspection"
      title="Seller Home Inspection in North Idaho"
      description="Sell faster, for more money, with fewer surprises. A pre-listing inspection gives sellers a competitive advantage in the North Idaho real estate market."
      longDesc={[
        "In today's competitive North Idaho real estate market, a pre-listing inspection is one of the smartest investments a seller can make. By identifying and addressing issues before your home hits the market, you control the narrative and reduce the risk of deals falling apart.",
        "When buyers discover problems during their own inspection, they often overestimate repair costs and use findings as leverage to negotiate significant price reductions. A pre-listing inspection lets you make repairs on your own terms, at your own pace, with contractors you choose.",
        "We provide the same comprehensive inspection for sellers that we provide for buyers — covering every accessible system and component. The resulting report helps you price accurately, disclose properly, and negotiate from a position of strength.",
      ]}
      includes={[
        "Full home inspection (same as buyer inspection)",
        "Identify deal-breakers before listing",
        "Accurate pricing documentation",
        "Seller disclosure support",
        "Reduce buyer negotiation leverage",
        "Faster, smoother closing process",
        "Digital report with photos",
        "Inspector available for questions",
      ]}
      faq={[
        {
          q: "Why should I get a pre-listing inspection?",
          a: "A pre-listing inspection gives you control. You can fix issues before listing, price your home accurately, and avoid surprises during the buyer's inspection that could derail your sale.",
        },
        {
          q: "Do I have to disclose the inspection findings?",
          a: "Idaho requires sellers to disclose known material defects. A pre-listing inspection helps you fulfill this obligation accurately and protects you from future liability.",
        },
        {
          q: "How much does a pre-listing inspection cost?",
          a: "Contact us for current pricing. The cost is typically a fraction of what you'd lose in price negotiations if a buyer discovers issues during their own inspection.",
        },
      ]}
    />
  );
}
