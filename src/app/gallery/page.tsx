import type { Metadata } from "next";
import Section from "@/components/Section";
import gallery from "@/content/gallery.json";

export const metadata: Metadata = {
  title: "Gallery",
  description: gallery.hero.subtitle,
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-blue-50 to-white text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          {gallery.hero.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          {gallery.hero.subtitle}
        </p>
      </Section>

      {/* Category Tabs (static for now — agents will enhance) */}
      <Section>
        <div className="flex flex-wrap justify-center gap-2">
          {gallery.categories.map((cat) => (
            <span
              key={cat.id}
              className="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-700"
            >
              {cat.label}
            </span>
          ))}
        </div>

        {/* Image Grid (placeholder — images don't exist yet) */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.images.map((img) => (
            <div
              key={img.src}
              className="flex aspect-[4/3] items-center justify-center rounded-xl bg-gray-100 text-sm text-gray-400"
            >
              {img.alt}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
