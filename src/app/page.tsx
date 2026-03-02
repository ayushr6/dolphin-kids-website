import Section from "@/components/Section";
import Button from "@/components/Button";
import Card from "@/components/Card";
import home from "@/content/home.json";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-center text-white">
        {/* Decorative pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Decorative blurred shapes */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {home.hero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100 sm:text-xl">
            {home.hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href={home.hero.ctaHref} className="bg-white text-blue-700 hover:bg-blue-50 hover:shadow-white/25">
              {home.hero.ctaLabel}
            </Button>
            <Button
              href={home.hero.secondaryCtaHref}
              variant="outline"
              className="border-white text-white hover:bg-white/10 hover:text-white hover:shadow-white/10"
            >
              {home.hero.secondaryCtaLabel}
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {home.highlights.map((h) => (
            <Card
              key={h.title}
              title={h.title}
              description={h.description}
              icon={h.icon}
            />
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
