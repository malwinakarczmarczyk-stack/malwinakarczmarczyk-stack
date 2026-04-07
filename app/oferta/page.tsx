import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  MessageCircle,
  Users,
  BookOpen,
  Heart,
  Brain,
  Apple,
  Smile,
  Shield,
} from "lucide-react";
import { getMarkdownPage } from "@/lib/markdown";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBand from "@/components/CtaBand";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getMarkdownPage("oferta");
  return {
    title: page?.title ?? "Oferta",
    description:
      page?.description ??
      "Oferta psychodietetyczna — konsultacje, pakiety współpracy, wsparcie online.",
    openGraph: {
      title: page?.title ?? "Oferta",
      description:
        page?.description ??
        "Oferta psychodietetyczna — konsultacje, pakiety współpracy, wsparcie online.",
    },
  };
}

const SERVICES = [
  {
    title: "Konsultacja wstępna",
    highlighted: true,
    badge: "Zacznij tutaj",
    duration: "60 minut",
    format: "Online / stacjonarnie",
    description:
      "Pierwsze spotkanie, na którym poznajemy się i określamy Twoje potrzeby.",
    features: [
      "Szczegółowy wywiad żywieniowy",
      "Analiza nawyków żywieniowych",
      "Omówienie relacji z jedzeniem",
      "Wstępne zalecenia",
    ],
    price: "150 zł",
    icon: MessageCircle,
  },
  {
    title: "Pakiet współpracy (3 miesiące)",
    highlighted: false,
    badge: null,
    duration: "3 miesiące",
    format: "Online / stacjonarnie",
    description:
      "Kompleksowe wsparcie dietetyczne i psychologiczne przez 3 miesiące.",
    features: [
      "Konsultacja wstępna",
      "Indywidualny plan żywienia",
      "Wsparcie psychodietetyczne",
      "6 spotkań (co 2 tygodnie)",
      "Kontakt między sesjami",
    ],
    price: "900 zł",
    priceNote: "(rata: 300 zł/mies.)",
    icon: Users,
  },
  {
    title: "Kursy online / E-booki",
    highlighted: false,
    badge: "Wkrótce",
    duration: null,
    format: null,
    description:
      "Materiały edukacyjne, które pomogą Ci lepiej rozumieć swoje ciało. Zapisz się na newsletter, żeby nie przegapić!",
    features: [],
    price: null,
    icon: BookOpen,
    comingSoon: true,
  },
];

const SPECIALIZATIONS = [
  {
    icon: Shield,
    title: "Otyłość",
    description: "Bez efektu jo-jo i restrykcji",
  },
  {
    icon: Apple,
    title: "Insulinooporność",
    description: "Jadłospis dopasowany do Twojego metabolizmu",
  },
  {
    icon: Heart,
    title: "PCOS",
    description: "Holistyczne podejście do objawów",
  },
  {
    icon: Brain,
    title: "Kompulsywne jedzenie",
    description: "Praca nad emocjonalnym głodem",
  },
  {
    icon: Smile,
    title: "Zaburzony obraz ciała",
    description: "Odbudowa szacunku do siebie",
  },
];

const FAQ_ITEMS = [
  {
    question: "Jak wygląda pierwsza konsultacja?",
    answer:
      "Pierwsza konsultacja trwa ok. 60 minut. Rozmawiamy o Twojej historii zdrowia, nawykach żywieniowych, relacji z jedzeniem i celach. Nie oceniam — słucham. Na tej podstawie wspólnie ustalamy plan działania.",
  },
  {
    question: "Czy konsultacje są online czy stacjonarnie?",
    answer:
      "Oferuję oba formaty. Konsultacje online odbywają się przez Google Meet. Stacjonarnie przyjmuję w Krakowie.",
  },
  {
    question: "Czy wystawiam faktury?",
    answer: "Tak, wystawiam faktury na życzenie.",
  },
  {
    question: "Czy współpracujesz z lekarzami?",
    answer:
      "Tak, w razie potrzeby współpracuję z endokrynologami, ginekologami i psychiatrami. Mogę też pomóc zinterpretować wyniki badań.",
  },
  {
    question:
      "Co jeśli mam insulinooporność — czy dieta będzie inna?",
    answer:
      "Tak, plan żywienia jest w pełni indywidualny. Przy insulinooporności szczególnie dbam o kompozycję posiłków, indeks glikemiczny i regularność jedzenia.",
  },
];

export default async function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-4">
            Oferta
          </h1>
          <p className="font-body text-lg text-neutral-600 max-w-2xl mx-auto">
            Każda współpraca zaczyna się od rozmowy. Wybierz opcję,
            która najbardziej odpowiada Twoim potrzebom.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 ${
                    service.highlighted
                      ? "border-2 border-primary"
                      : "border border-neutral-200"
                  } ${service.comingSoon ? "opacity-80" : ""}`}
                >
                  {service.badge && (
                    <span
                      className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-body font-semibold text-white ${
                        service.comingSoon ? "bg-neutral-600" : "bg-accent"
                      }`}
                    >
                      {service.badge}
                    </span>
                  )}

                  <Icon className="w-10 h-10 text-primary mb-4" />

                  <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="font-body text-neutral-600 text-sm mb-4">
                    {service.description}
                  </p>

                  {service.duration && (
                    <p className="font-body text-sm text-neutral-600 mb-1">
                      Czas: {service.duration}
                    </p>
                  )}
                  {service.format && (
                    <p className="font-body text-sm text-neutral-600 mb-4">
                      Forma: {service.format}
                    </p>
                  )}

                  {service.features.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2"
                        >
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="font-body text-sm text-neutral-900">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {service.price && (
                    <div className="mb-6">
                      <span className="font-body font-bold text-2xl text-primary-dark">
                        {service.price}
                      </span>
                      {service.priceNote && (
                        <span className="font-body text-sm text-neutral-600 ml-2">
                          {service.priceNote}
                        </span>
                      )}
                    </div>
                  )}

                  <Link
                    href={service.comingSoon ? "#newsletter" : "/kontakt/"}
                    className={`block w-full text-center rounded-full px-6 py-3 font-body font-semibold transition-all duration-300 ${
                      service.comingSoon
                        ? "bg-neutral-200 text-neutral-600"
                        : "bg-primary hover:bg-primary-dark text-white"
                    }`}
                  >
                    {service.comingSoon ? "Zapisz się" : "Umów wizytę"}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 lg:py-24 bg-primary-light/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-neutral-900 text-center mb-12">
            Dla kogo pracuję?
          </h2>
          <p className="font-body text-lg text-neutral-600 text-center mb-10 max-w-2xl mx-auto">
            Specjalizuję się we wsparciu kobiet z:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {SPECIALIZATIONS.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm"
                >
                  <Icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body font-semibold text-neutral-900">
                      {spec.title}
                    </p>
                    <p className="font-body text-sm text-neutral-600">
                      {spec.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-neutral-900 text-center mb-12">
            Najczęściej zadawane pytania
          </h2>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        heading="Gotowa na pierwszy krok?"
        subtitle="Bezpłatna konsultacja to 15 minut rozmowy, w której razem sprawdzimy, czy mogę Ci pomóc."
        buttonText="Umów bezpłatną konsultację"
        buttonHref="/kontakt/"
      />
    </>
  );
}
