import Link from "next/link";
import site from "@/content/site.json";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-blue-600">{site.shortName}</h3>
            <p className="mt-2 text-sm text-gray-600">{site.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>{site.phone}</li>
              <li>{site.email}</li>
              <li>{site.address}</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {Object.entries(site.socialLinks).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm capitalize text-gray-600 hover:text-blue-600"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
