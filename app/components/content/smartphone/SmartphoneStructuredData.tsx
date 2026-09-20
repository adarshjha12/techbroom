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
      image: [`https://techbroom.com${content.images.hero}`],
    }),

    url: `https://techbroom.com/${content.slug}`,
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