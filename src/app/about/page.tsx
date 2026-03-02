import type { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";
import about from "@/content/about.json";

export const metadata: Metadata = {
  title: "About",
  description: about.hero.subtitle,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-blue-50 to-white text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          {about.hero.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          {about.hero.subtitle}
        </p>
      </Section>

      {/* Mission & Vision */}
      <Section>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{about.mission.title}</h2>
            <p className="mt-3 text-gray-600 leading-relaxed">{about.mission.text}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{about.vision.title}</h2>
            <p className="mt-3 text-gray-600 leading-relaxed">{about.vision.text}</p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-blue-50">
        <h2 className="text-center text-3xl font-bold text-gray-900">Our Values</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {about.values.map((v) => (
            <Card key={v.title} title={v.title} description={v.description} />
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {about.stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-extrabold text-blue-600">{s.number}</p>
              <p className="mt-1 text-sm font-medium text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
