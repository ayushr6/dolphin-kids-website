import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import FaqAccordion from "@/components/FaqAccordion";
import admissions from "@/content/admissions.json";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Admissions",
  description: admissions.hero.subtitle,
};

export default function AdmissionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: "Admissions", href: "/admissions" }])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(admissions.faq)),
        }}
      />
      {/* Hero */}
      <Section className="bg-gradient-to-br from-blue-50 to-white text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          {admissions.hero.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          {admissions.hero.subtitle}
        </p>
      </Section>

      {/* Process Timeline */}
      <Section>
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Admissions Process
        </h2>

        {/* Mobile: vertical timeline */}
        <div className="relative mt-10 md:hidden">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 h-full w-0.5 bg-blue-200" />

          <div className="space-y-8">
            {admissions.steps.map((s) => (
              <div key={s.step} className="relative flex items-start gap-5 pl-2">
                {/* Circle */}
                <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white ring-4 ring-white">
                  {s.step}
                </div>
                {/* Content */}
                <div className="pt-0.5">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-gray-600">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="relative mt-12 hidden md:block">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-6 mx-auto h-0.5 w-[calc(100%-6rem)] bg-blue-200" />

          <div className="relative grid grid-cols-5 gap-4">
            {admissions.steps.map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center">
                {/* Circle */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white ring-4 ring-white">
                  {s.step}
                </div>
                {/* Content */}
                <h3 className="mt-4 text-sm font-semibold text-gray-900">
                  {s.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-600">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button href={admissions.ctaHref}>{admissions.ctaLabel}</Button>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-blue-50">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="mt-8">
          <FaqAccordion items={admissions.faq} />
        </div>
        <div className="mt-10 text-center">
          <Button href={admissions.ctaHref} variant="secondary" className="px-8 py-4 text-base">
            {admissions.ctaLabel}
          </Button>
        </div>
      </Section>
    </>
  );
}
