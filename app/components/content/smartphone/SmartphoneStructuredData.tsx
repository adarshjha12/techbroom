import type { SmartphoneContent } from "@/lib/content/types";

type SmartphoneStructuredDataProps = {
  content: SmartphoneContent;
};

export default function SmartphoneStructuredData({
  content,
}: SmartphoneStructuredDataProps) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",

    name: content.name,

    description: content.description,

    ...(content.brand && {
      brand: {
        "@type": "Brand",
        name: content.brand,
      },
    }),

    ...(content.images.hero && {
      image: [content.images.hero],
    }),

    url: `https://techbroom.com/${content.slug}`,

    review: {
      "@type": "Review",

      author: {
        "@type": "Organization",
        name: "TechBroom",
      },

      reviewRating: {
        "@type": "Rating",
        ratingValue: content.buyDecision.rating,
        bestRating: content.buyDecision.bestRating,
        worstRating: 1,
      },

      positiveNotes: {
        "@type": "ItemList",
        itemListElement: content.buyDecision.reasonsToBuy.map(
          (item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item,
          })
        ),
      },

      negativeNotes: {
        "@type": "ItemList",
        itemListElement: content.buyDecision.reasonsToSkip.map(
          (item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item,
          })
        ),
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://techbroom.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Smartphones",
        item: "https://techbroom.com/smartphones",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: content.name,
        item: `https://techbroom.com/${content.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}