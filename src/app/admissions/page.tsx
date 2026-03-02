import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
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

      {/* Process Steps */}
      <Section>
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Admissions Process
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {admissions.steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                {s.step}
              </div>
              <h3 className="mt-3 text-sm font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-1 text-xs text-gray-600">{s.description}</p>
            </div>
          ))}
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
        <div className="mx-auto mt-8 max-w-3xl space-y-6">
          {admissions.faq.map((f) => (
            <details
              key={f.question}
              className="group rounded-xl border border-gray-200 bg-white p-5"
            >
              <summary className="cursor-pointer text-sm font-semibold text-gray-900 group-open:text-blue-600">
                {f.question}
              </summary>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {f.answer}
              </p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
