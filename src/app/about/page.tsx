import type { Metadata } from "next";
import Section from "@/components/Section";
import AnimatedStats from "@/components/AnimatedStats";
import TeamSection from "@/components/TeamSection";
import about from "@/content/about.json";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About",
  description: about.hero.subtitle,
};

const valueIcons: Record<string, string> = {
  blue: "🔍",
  pink: "💗",
  amber: "⭐",
  green: "🎉",
};

const valueBg: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700",
  pink: "bg-pink-100 text-pink-700",
  amber: "bg-amber-100 text-amber-700",
  green: "bg-green-100 text-green-700",
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: "About", href: "/about" }])
          ),
        }}
      />
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
            <h2 className="text-2xl font-bold text-gray-900">
              {about.mission.title}
            </h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              {about.mission.text}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {about.vision.title}
            </h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              {about.vision.text}
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-blue-50">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Our Values
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {about.values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-xl ${valueBg[v.color]}`}
              >
                {valueIcons[v.color]}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {v.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <AnimatedStats stats={about.stats} />
      </Section>

      {/* Leadership Team */}
      <Section className="bg-gray-50">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Leadership Team
        </h2>
        <TeamSection members={about.team} />
      </Section>
    </>
  );
}
