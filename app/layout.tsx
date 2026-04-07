import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Malwina Karczmarczyk — Psychodietetyczka",
    template: "%s | Malwina Karczmarczyk",
  },
  description:
    "Psychodietetyczka specjalizująca się w pracy z kobietami z otyłością, insulinoopornością i PCOS. Pomagam zbudować zdrową relację z jedzeniem.",
  metadataBase: new URL("https://malwinakarczmarczyk.pl"),
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "Malwina Karczmarczyk — Psychodietetyczka",
    title: "Malwina Karczmarczyk — Psychodietetyczka",
    description:
      "Psychodietetyczka specjalizująca się w pracy z kobietami z otyłością, insulinoopornością i PCOS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
