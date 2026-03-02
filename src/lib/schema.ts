import site from "@/content/site.json";

const BASE_URL = "https://dolphinkids.edu.in";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    name: site.name,
    url: BASE_URL,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Education Lane",
      addressLocality: "Whitefield, Bangalore",
      postalCode: "560066",
      addressCountry: "IN",
    },
    sameAs: [
      site.socialLinks.facebook,
      site.socialLinks.instagram,
      site.socialLinks.youtube,
      site.socialLinks.twitter,
    ],
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${BASE_URL}${item.href}`,
      })),
    ],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
