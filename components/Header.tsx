"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Strona główna" },
  { href: "/o-mnie/", label: "O mnie" },
  { href: "/oferta/", label: "Oferta" },
  { href: "/blog/", label: "Blog" },
  { href: "/kontakt/", label: "Kontakt" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <a href="#main-content" className="skip-link">
        Przejdź do treści
      </a>
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Nawigacja główna"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="font-heading text-xl lg:text-2xl font-semibold text-neutral-900">
              Malwina Karczmarczyk
            </span>
            <span className="text-xs lg:text-sm text-neutral-600 font-body -mt-1">
              psychodietetyczka
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-body font-medium text-sm transition-colors duration-300 ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-neutral-900 hover:text-primary"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
            <Link
              href="/kontakt/"
              className="bg-accent hover:bg-accent-dark text-white rounded-full px-6 py-2 font-body font-semibold text-sm transition-all duration-300"
            >
              Umów wizytę
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-neutral-900 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 animate-slide-in">
            <div className="flex flex-col p-6 gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-body font-medium text-lg py-2 border-b border-neutral-200 transition-colors ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-neutral-900 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/kontakt/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-accent hover:bg-accent-dark text-white rounded-full px-6 py-3 font-body font-semibold text-center mt-4 transition-all duration-300"
              >
                Umów wizytę
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
