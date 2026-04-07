import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Strona główna" },
  { href: "/o-mnie/", label: "O mnie" },
  { href: "/oferta/", label: "Oferta" },
  { href: "/blog/", label: "Blog" },
  { href: "/kontakt/", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand column */}
          <div>
            <p className="font-heading text-xl font-semibold mb-1">
              Malwina Karczmarczyk
            </p>
            <p className="text-neutral-200 text-sm mb-6">
              Psychodietetyczka
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-neutral-200 hover:text-primary-light transition-colors"
              >
                <span className="text-xs font-semibold">FB</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-neutral-200 hover:text-primary-light transition-colors"
              >
                <span className="text-xs font-semibold">IG</span>
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <p className="font-body font-semibold text-sm uppercase tracking-wider mb-4 text-neutral-200">
              Nawigacja
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-200 hover:text-primary-light transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="font-body font-semibold text-sm uppercase tracking-wider mb-4 text-neutral-200">
              Kontakt
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-neutral-200">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+48123456789" className="hover:text-primary-light transition-colors">
                  +48 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-200">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:kontakt@malwinakarczmarczyk.pl" className="hover:text-primary-light transition-colors">
                  kontakt@malwinakarczmarczyk.pl
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-200">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>ul. Przykładowa 1, Kraków</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            &copy; 2026 Malwina Karczmarczyk. Wszelkie prawa zastrzeżone.
          </p>
          <Link
            href="/polityka-prywatnosci/"
            className="text-xs text-neutral-600 hover:text-primary-light transition-colors"
          >
            Polityka prywatności
          </Link>
        </div>
      </div>
    </footer>
  );
}
