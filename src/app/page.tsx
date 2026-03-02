import Section from "@/components/Section";
import Button from "@/components/Button";
import Card from "@/components/Card";
import home from "@/content/home.json";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-blue-50 to-white text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          {home.hero.headline}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          {home.hero.subheadline}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href={home.hero.ctaHref}>{home.hero.ctaLabel}</Button>
          <Button href={home.hero.secondaryCtaHref} variant="outline">
            {home.hero.secondaryCtaLabel}
          </Button>
        </div>
      </Section>

      {/* Highlights */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {home.highlights.map((h) => (
            <Card key={h.title} title={h.title} description={h.description} />
          ))}
        </div>
      </Section>

      {/* Why Dolphin */}
      <Section className="bg-blue-50">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          {home.whyDolphin.title}
        </h2>
        <ul className="mx-auto mt-8 max-w-2xl space-y-4">
          {home.whyDolphin.points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-gray-700">
              <span className="mt-1 text-blue-600">&#10003;</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Testimonials */}
      <Section>
        <h2 className="text-center text-3xl font-bold text-gray-900">
          What Parents Say
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {home.testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <p className="text-gray-700 italic">&ldquo;{t.quote}&rdquo;</p>
              <cite className="mt-4 block text-sm font-semibold text-gray-900 not-italic">
                &mdash; {t.author}
              </cite>
            </blockquote>
          ))}
        </div>
      </Section>
    </>
  );
}
