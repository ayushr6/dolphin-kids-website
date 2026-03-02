import type { Metadata } from "next";
import Section from "@/components/Section";
import academics from "@/content/academics.json";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Academics",
  description: academics.hero.subtitle,
};

export default function AcademicsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: "Academics", href: "/academics" }])
          ),
        }}
      />
      {/* Hero */}
      <Section className="bg-gradient-to-br from-blue-50 to-white text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          {academics.hero.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          {academics.hero.subtitle}
        </p>
      </Section>

      {/* Programs */}
      <Section>
        <div className="space-y-12">
          {academics.programs.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                <h2 className="text-2xl font-bold text-gray-900">{p.title}</h2>
                <span className="text-sm font-medium text-blue-600">{p.ages}</span>
              </div>
              <p className="mt-3 text-gray-600 leading-relaxed">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Teaching Approach */}
      <Section className="bg-blue-50">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          {academics.approach.title}
        </h2>
        <ul className="mx-auto mt-8 max-w-2xl space-y-4">
          {academics.approach.points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-gray-700">
              <span className="mt-1 text-blue-600">&#10003;</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
