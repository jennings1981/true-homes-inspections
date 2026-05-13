import ServicePage from "@/components/ServicePage";
import { Wind } from "lucide-react";

export default function RadonTesting() {
  return (
    <ServicePage
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663427046845/ToYqQAZz6CCmi4HjBtrLQ7/ni-well-water-home-m5VktnbxfBXvo2MbBgEvHi.webp"
      icon={Wind}
      subtitle="Radon Testing"
      title="Radon Testing in North Idaho"
      description="Idaho ranks among the highest radon-risk states in the nation. Protect your family with certified radon testing from True Homes Inspections."
      longDesc={[
        "Radon is a colorless, odorless, radioactive gas that forms naturally from the decay of uranium in soil and rock. It enters homes through foundation cracks, gaps around pipes, and other openings. Radon is the second leading cause of lung cancer in the United States, responsible for approximately 21,000 deaths annually.",
        "Idaho — and North Idaho in particular — has elevated radon levels due to the region's geology. The EPA recommends testing every home, and mitigation if levels exceed 4 pCi/L. Many North Idaho homes test well above this threshold.",
        "We perform certified radon testing using EPA-approved protocols. Testing can be added to any home inspection or scheduled as a standalone service. Results are typically available within 48–72 hours of test placement.",
      ]}
      includes={[
        "Certified radon measurement device placement",
        "Short-term testing (48–96 hours)",
        "EPA-standard closed-house conditions",
        "Detailed results report",
        "Clear explanation of findings",
        "Mitigation recommendations if needed",
        "Can be combined with any inspection",
        "Follow-up testing support",
      ]}
      faq={[
        {
          q: "How dangerous is radon?",
          a: "Radon is the second leading cause of lung cancer after smoking. The EPA estimates it causes about 21,000 lung cancer deaths per year in the US. Long-term exposure to elevated levels significantly increases your risk.",
        },
        {
          q: "What radon level is considered dangerous?",
          a: "The EPA recommends taking action if radon levels are at or above 4 pCi/L. Many North Idaho homes test above this level. Levels between 2–4 pCi/L should also be considered for mitigation.",
        },
        {
          q: "How is radon mitigated?",
          a: "The most common and effective mitigation method is sub-slab depressurization — a system of pipes and fans that draws radon from beneath the foundation and vents it outside. Mitigation typically costs $800–$2,500 and is very effective.",
        },
        {
          q: "How long does radon testing take?",
          a: "Short-term tests require 48–96 hours with closed-house conditions. We place the test device, you maintain closed-house conditions, and we retrieve and analyze the device after the testing period.",
        },
      ]}
    />
  );
}
