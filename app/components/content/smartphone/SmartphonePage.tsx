import type { SmartphoneContent } from "@/lib/content/types";

import SmartphoneHero from "./SmartphoneHero";
import SmartphoneOverview from "./SmartphoneOverview";
import SmartphoneDisplay from "./SmartphoneDisplay";
import SmartphonePerformance from "./SmartphonePerformance";
import SmartphoneCamera from "./SmartphoneCamera";
import SmartphoneBattery from "./SmartphoneBattery";
import SmartphoneOwnerReviews from "./SmartphoneOwnerReviews";
import SmartphoneComparisons from "./SmartphoneComparisons";
import SmartphoneBuyDecision from "./SmartphoneBuyDecision";
import SmartphoneStructuredData from "./SmartphoneStructuredData";
import Breadcrumbs from "../Breadcrumbs";

type SmartphonePageProps = {
  content: SmartphoneContent;
};

export default function SmartphonePage({
  content,
}: SmartphonePageProps) {
  return (
    <div>
      <Breadcrumbs
        items={[
          {
            label: "Smartphones",
            href: "/smartphones",
          },
          {
            label: content.name,
          },
        ]}
      />
      <SmartphoneStructuredData content={content} />

      <SmartphoneHero content={content} />
      <SmartphoneOverview specs={content.specs} />

      <SmartphoneDisplay specs={content.specs} />

      <SmartphonePerformance specs={content.specs} />

      <SmartphoneCamera specs={content.specs} />

      <SmartphoneBattery specs={content.specs} />

      <SmartphoneOwnerReviews reviews={content.reviews} />

      <SmartphoneComparisons slug={content.slug}
        comparisons={content.comparisons} />

      <SmartphoneBuyDecision decision={content.buyDecision} />
    </div>
  );
}