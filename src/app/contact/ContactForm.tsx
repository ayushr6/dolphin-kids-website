"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/Button";
import contact from "@/content/contact.json";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<string[]>([]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors([]);

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrors(json.errors ?? [json.error ?? "Something went wrong"]);
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrors(["Network error. Please try again."]);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <h3 className="text-lg font-semibold text-green-800">Thank you!</h3>
        <p className="mt-2 text-sm text-green-700">
          Your enquiry has been submitted. We will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && errors.length > 0 && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <ul className="list-inside list-disc text-sm text-red-700">
            {errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        </div>
      )}

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
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </Button>
    </form>
  );
}
