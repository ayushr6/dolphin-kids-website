import type { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";
import facilities from "@/content/facilities.json";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Facilities",
  description: facilities.hero.subtitle,
};

export default function FacilitiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: "Facilities", href: "/facilities" }])
          ),
        }}
      />
      {/* Hero */}
      <Section className="bg-gradient-to-br from-blue-50 to-white text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          {facilities.hero.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          {facilities.hero.subtitle}
        </p>
      </Section>

      {/* Facilities Grid */}
      <Section>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.facilities.map((f) => (
            <Card
              key={f.title}
              title={f.title}
              description={f.description}
              icon={f.icon}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
