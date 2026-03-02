import type { Metadata } from "next";
import Section from "@/components/Section";
import GalleryClient from "@/components/GalleryClient";
import gallery from "@/content/gallery.json";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Gallery",
  description: gallery.hero.subtitle,
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: "Gallery", href: "/gallery" }])
          ),
        }}
      />
      {/* Hero */}
      <Section className="bg-gradient-to-br from-blue-50 to-white text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          {gallery.hero.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          {gallery.hero.subtitle}
        </p>
      </Section>

      <GalleryClient />
    </>
  );
}
