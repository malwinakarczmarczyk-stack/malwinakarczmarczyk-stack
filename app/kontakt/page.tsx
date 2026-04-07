import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Skontaktuj się z psychodietetyczką Malwiną Karczmarczyk. Umów wizytę online lub stacjonarnie w Krakowie.",
  openGraph: {
    title: "Kontakt | Malwina Karczmarczyk",
    description:
      "Skontaktuj się z psychodietetyczką Malwiną Karczmarczyk. Umów wizytę online lub stacjonarnie.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-4">
            Kontakt
          </h1>
          <p className="font-body text-lg text-neutral-600 max-w-2xl mx-auto">
            Masz pytanie? Chcesz umówić wizytę? Napisz lub zarezerwuj termin
            online.
          </p>
        </div>
      </section>

      {/* Contact form + details */}
      <section className="py-8 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-heading font-semibold text-2xl text-neutral-900 mb-6">
                Formularz kontaktowy
              </h2>
              <ContactForm />
            </div>

            {/* Contact details */}
            <div className="lg:col-span-2">
              <h2 className="font-heading font-semibold text-2xl text-neutral-900 mb-6">
                Dane kontaktowe
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body font-medium text-neutral-900 text-sm mb-0.5">
                      Email
                    </p>
                    <a
                      href="mailto:kontakt@malwinakarczmarczyk.pl"
                      className="font-body text-neutral-600 hover:text-primary transition-colors"
                    >
                      kontakt@malwinakarczmarczyk.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body font-medium text-neutral-900 text-sm mb-0.5">
                      Telefon
                    </p>
                    <a
                      href="tel:+48123456789"
                      className="font-body text-neutral-600 hover:text-primary transition-colors"
                    >
                      +48 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body font-medium text-neutral-900 text-sm mb-0.5">
                      Gabinet
                    </p>
                    <p className="font-body text-neutral-600">
                      ul. Przykładowa 1, Kraków
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body font-medium text-neutral-900 text-sm mb-0.5">
                      Godziny pracy
                    </p>
                    <p className="font-body text-neutral-600">
                      Pon–Pt: 9:00–18:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex gap-3 mt-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-neutral-200 text-neutral-600 hover:text-primary hover:border-primary transition-colors text-xs font-bold"
                    >
                      FB
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-neutral-200 text-neutral-600 hover:text-primary hover:border-primary transition-colors text-xs font-bold"
                    >
                      IG
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking section */}
      <section className="py-16 lg:py-24 bg-primary-light/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-neutral-900 mb-4">
            Zarezerwuj wizytę online
          </h2>
          <p className="font-body text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Wybierz dogodny termin — konsultacja online lub stacjonarnie.
          </p>
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <p className="font-body text-neutral-600 mb-6">
              Aby umówić wizytę, napisz na{" "}
              <a
                href="mailto:kontakt@malwinakarczmarczyk.pl"
                className="text-primary font-medium hover:text-primary-dark"
              >
                kontakt@malwinakarczmarczyk.pl
              </a>{" "}
              lub zadzwoń pod numer{" "}
              <a
                href="tel:+48123456789"
                className="text-primary font-medium hover:text-primary-dark"
              >
                +48 123 456 789
              </a>
              .
            </p>
            <p className="font-body text-sm text-neutral-600 italic">
              System rezerwacji online pojawi się wkrótce.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
