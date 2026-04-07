"use client";

import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  consent?: string;
}

const SUBJECT_OPTIONS = [
  "Konsultacja wstępna",
  "Pytanie o ofertę",
  "Współpraca",
  "Inne",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: SUBJECT_OPTIONS[0],
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Imię jest wymagane.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Adres email jest wymagany.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Podaj prawidłowy adres email.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Wiadomość jest wymagana.";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Wiadomość musi mieć co najmniej 20 znaków.";
    }

    if (!formData.consent) {
      newErrors.consent =
        "Musisz wyrazić zgodę na przetwarzanie danych.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      // In a real app, this would send data to an API endpoint
      setIsSubmitted(true);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: e.target.checked }));
    if (errors.consent) {
      setErrors((prev) => ({ ...prev, consent: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-primary-light rounded-2xl p-8 text-center">
        <p className="font-body font-semibold text-primary-dark text-lg mb-2">
          Dziękuję!
        </p>
        <p className="font-body text-neutral-900">
          Twoja wiadomość została wysłana. Odpowiem najszybciej jak to
          możliwe, zwykle w ciągu 24 godzin.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block font-body font-medium text-sm text-neutral-600 mb-1"
        >
          Imię
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={`w-full border rounded-xl px-4 py-3 font-body text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
            errors.name ? "border-red-500" : "border-neutral-200"
          }`}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-sm mt-1">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block font-body font-medium text-sm text-neutral-600 mb-1"
        >
          Adres email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={`w-full border rounded-xl px-4 py-3 font-body text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
            errors.email ? "border-red-500" : "border-neutral-200"
          }`}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-sm mt-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block font-body font-medium text-sm text-neutral-600 mb-1"
        >
          Temat
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border border-neutral-200 rounded-xl px-4 py-3 font-body text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white"
        >
          {SUBJECT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block font-body font-medium text-sm text-neutral-600 mb-1"
        >
          Wiadomość
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`w-full border rounded-xl px-4 py-3 font-body text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-y ${
            errors.message ? "border-red-500" : "border-neutral-200"
          }`}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-sm mt-1">
            {errors.message}
          </p>
        )}
      </div>

      {/* Consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={handleCheckbox}
            className="mt-1 w-4 h-4 accent-primary rounded"
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <span className="font-body text-sm text-neutral-600">
            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
            odpowiedzi na wiadomość.{" "}
            <a
              href="/polityka-prywatnosci/"
              className="text-primary underline hover:text-primary-dark"
            >
              Polityka prywatności
            </a>
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="text-red-500 text-sm mt-1">
            {errors.consent}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary-dark text-white rounded-full px-8 py-3 font-body font-semibold transition-all duration-300"
      >
        Wyślij wiadomość
      </button>
    </form>
  );
}
