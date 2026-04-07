import Link from "next/link";

interface CtaBandProps {
  heading: string;
  subtitle?: string;
  buttonText: string;
  buttonHref: string;
}

export default function CtaBand({
  heading,
  subtitle,
  buttonText,
  buttonHref,
}: CtaBandProps) {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          {heading}
        </h2>
        {subtitle && (
          <p className="text-white/90 font-body text-lg mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <Link
          href={buttonHref}
          className="inline-block bg-white text-primary-dark rounded-full px-8 py-4 font-body font-semibold text-lg hover:bg-neutral-200 transition-all duration-300 shadow-md"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
