import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import contact from "@/content/contact.json";
import site from "@/content/site.json";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact",
  description: contact.hero.subtitle,
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: "Contact", href: "/contact" }])
          ),
        }}
      />
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
          <form className="space-y-5">
            {contact.formFields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  {field.label}
                  {field.required && <span className="text-red-500"> *</span>}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    required={field.required}
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                ) : field.type === "select" ? (
                  <select
                    id={field.name}
                    name={field.name}
                    required={field.required}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">Select...</option>
                    {field.options?.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                )}
              </div>
            ))}

            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <Button type="submit" variant="primary">
              Send Enquiry
            </Button>
          </form>

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
