import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "./ContactForm";
import contact from "@/content/contact.json";
import site from "@/content/site.json";

export const metadata: Metadata = {
  title: "Contact",
  description: contact.hero.subtitle,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-blue-50 to-white text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          {contact.hero.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          {contact.hero.subtitle}
        </p>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <ContactForm />

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Get in Touch</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>Phone: {site.phone}</li>
                <li>Email: {site.email}</li>
                <li>Address: {site.address}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
              <p className="mt-2 text-sm text-gray-600">{contact.officeHours}</p>
            </div>
            {/* Map placeholder */}
            <div className="flex aspect-video items-center justify-center rounded-xl bg-gray-100 text-sm text-gray-400">
              Map will be embedded here
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
