# UX/UI Design Proposal — Strona psychodietetyczki

## Spis treści

1. [System projektowy (Design System)](#1-system-projektowy)
2. [Nawigacja i układ globalny](#2-nawigacja-i-układ-globalny)
3. [A. Strona Główna (Home Page)](#a-strona-główna)
4. [B. O mnie (About Me)](#b-o-mnie)
5. [C. Oferta / Usługi (Services)](#c-oferta--usługi)
6. [D. Blog / Baza Wiedzy (Knowledge Base)](#d-blog--baza-wiedzy)
7. [E. Kontakt i Rezerwacje (Contact & Booking)](#e-kontakt-i-rezerwacje)
8. [Uwagi dotyczące dostępności i wydajności](#8-uwagi-dotyczące-dostępności-i-wydajności)

---

## 1. System projektowy

### 1.1 Paleta kolorów

Kolory dobrane tak, aby budować poczucie bezpieczeństwa, ciepła i profesjonalizmu. Unikamy agresywnych barw — dominują stonowane, naturalne odcienie.

| Rola                | Kolor              | Kod HEX    | Zastosowanie                                       |
|---------------------|--------------------|-----------|----------------------------------------------------|
| **Primary**         | Szałwia (sage)     | `#7C9A82` | Przyciski główne, akcenty, linki aktywne           |
| **Primary Dark**    | Ciemna szałwia     | `#5A7A60` | Hover na przyciskach, podkreślenia                 |
| **Primary Light**   | Jasna szałwia      | `#D4E4D7` | Tła sekcji, tagi, delikatne wyróżnienia            |
| **Secondary**       | Ciepły piaskowy    | `#E8DCC8` | Tła alternatywnych sekcji, karty                   |
| **Accent**          | Terrakota          | `#C67D5B` | CTA wyróżnione, ikony uwagi, elementy pilne       |
| **Neutral 900**     | Ciemny grafitowy   | `#2D2D2D` | Tekst główny (body)                                |
| **Neutral 600**     | Szary              | `#6B6B6B` | Tekst drugorzędny, podpisy                         |
| **Neutral 200**     | Jasny szary        | `#EBEBEB` | Obramowania, separatory                            |
| **Background**      | Kremowy biały      | `#FAFAF7` | Tło strony                                         |
| **White**           | Biały              | `#FFFFFF` | Tła kart, modali                                   |

### 1.2 Typografia

Stosujemy Google Fonts dostępne bezpłatnie, ładowane przez `next/font`.

| Rola            | Font                | Waga              | Zastosowanie                              |
|-----------------|---------------------|--------------------|-------------------------------------------|
| **Nagłówki**    | **Playfair Display**| 600 (Semi-bold), 700 (Bold) | H1–H3, tytuły sekcji          |
| **Tekst body**  | **Inter**           | 400 (Regular), 500 (Medium), 600 (Semi-bold) | Paragraf, przyciski, etykiety |

- Bazowy rozmiar tekstu: `16px` (1rem)
- Skala typograficzna:
  - H1: `2.5rem / 3rem` (40px / 48px) — strona główna hero
  - H2: `2rem / 2.5rem` (32px / 40px) — tytuły sekcji
  - H3: `1.5rem / 2rem` (24px / 32px) — podtytuły
  - H4: `1.25rem` (20px) — nagłówki kart
  - Body: `1rem / 1.625rem` (16px / 26px)
  - Small: `0.875rem` (14px) — podpisy, metadane

### 1.3 Odstępy (Spacing)

Oparte na siatce 8px (Tailwind default):

- Sekcja do sekcji: `py-16` do `py-24` (64–96px)
- Wewnątrz sekcji (tytuł → treść): `mb-8` do `mb-12` (32–48px)
- Między kartami: `gap-6` do `gap-8` (24–32px)
- Padding kart: `p-6` do `p-8` (24–32px)
- Maksymalna szerokość kontentu: `max-w-6xl` (1152px), wyśrodkowany

### 1.4 Zaokrąglenia i cienie

- Karty: `rounded-2xl` (16px), `shadow-sm` → `shadow-md` on hover
- Przyciski: `rounded-full` (pill shape) — buduje miękkość
- Zdjęcia: `rounded-xl` do `rounded-2xl`
- Przejścia hover: `transition-all duration-300 ease-in-out`

### 1.5 Ikony

Zestaw: **Lucide React** (lekkie, liniowe ikony, spójne z estetyką)
Alternatywa: Heroicons (outline variant)

### 1.6 Zdjęcia i grafiki

- Styl: Naturalne, ciepłe światło, stonowane kolory. Zdjęcia specjalistki powinny być profesjonalne, ale przystępne (uśmiech, kontakt wzrokowy, naturalne otoczenie — np. gabinet, kuchnia).
- Format: WebP przez `next/image`, z fallback na JPEG.
- Ilustracje: Opcjonalnie — minimalistyczne, line-art, w kolorze szałwii.

---

## 2. Nawigacja i układ globalny

### 2.1 Header / Nawigacja górna

```
┌────────────────────────────────────────────────────────────────┐
│  [Logo / Nazwa]          Strona główna  O mnie  Oferta  Blog  │
│                                          Kontakt   [CTA btn]  │
└────────────────────────────────────────────────────────────────┘
```

**Opis komponentu (`Header.tsx`):**

- **Logo/Nazwa:** Po lewej. Tekst „Malwina Karczmarczyk" w Playfair Display 600, pod spodem mały napis „psychodietetyczka" w Inter 400, Neutral 600. Alternatywnie: prosty logotyp graficzny.
- **Menu:** Wyrównane do prawej. Linki: „Strona główna", „O mnie", „Oferta", „Blog", „Kontakt".
  - Stan domyślny: Neutral 900, Inter 500.
  - Stan hover: Primary (`#7C9A82`), z podkreśleniem animowanym od lewej.
  - Stan aktywnej strony: Primary, z podkreśleniem stałym.
- **CTA w nawigacji:** Przycisk „Umów wizytę" — tło Accent (`#C67D5B`), tekst biały, `rounded-full`, `px-6 py-2`. Hover: ciemniejszy odcień.
- **Sticky header:** Header przyklejony do góry (`sticky top-0`), z lekkim `backdrop-blur` i `bg-white/90` po przewinięciu.
- **Mobile (< 768px):** Hamburger menu po prawej. Rozwija się jako panel pełnoekranowy z animacją slide-in. Logo i CTA widoczne zawsze.

### 2.2 Footer

```
┌────────────────────────────────────────────────────────────────┐
│  [Logo / Nazwa]             Nawigacja       Kontakt            │
│  Psychodietetyczka          Strona główna   tel: xxx           │
│                             O mnie          email: xxx         │
│  [Social icons]             Oferta          adres: xxx         │
│  FB  IG                     Blog                               │
│                             Kontakt                            │
│────────────────────────────────────────────────────────────────│
│  © 2026 Malwina Karczmarczyk. Wszelkie prawa zastrzeżone.     │
│  Polityka prywatności                                          │
└────────────────────────────────────────────────────────────────┘
```

**Opis:**
- Tło: Neutral 900 (`#2D2D2D`), tekst biały/jasny szary.
- 3 kolumny na desktop, 1 kolumna na mobile (stackowane).
- Ikony social media: Facebook, Instagram — liniowe, białe, hover → Primary Light.
- Link „Polityka prywatności" — wymagany prawnie (RODO).

---

## A. Strona Główna

### A.1 Hero Section

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│   [Zdjęcie specjalistki]          TEKST:                       │
│   (po lewej lub jako tło)                                      │
│                                   H1: Odzyskaj wolność         │
│                                   w relacji z jedzeniem.        │
│                                   Bez restrykcji               │
│                                   i poczucia winy.             │
│                                                                │
│                                   Podtytuł: Jestem Malwina —   │
│                                   psychodietetyczka. Pomagam   │
│                                   kobietom z otyłością,        │
│                                   insulinoopornością i PCOS    │
│                                   zbudować zdrową relację       │
│                                   z jedzeniem i własnym ciałem.│
│                                                                │
│                                   [Zapisz się na bezpłatną     │
│                                    konsultację]                │
│                                   [Zobacz ofertę]              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Szczegóły:**

- **Układ:** Dwie kolumny na desktop (50/50). Zdjęcie po lewej, tekst po prawej. Na mobile: zdjęcie na górze (pełna szerokość), tekst pod spodem.
- **Tło:** Kremowy biały (`#FAFAF7`) lub subtelny gradient od `#FAFAF7` do `#D4E4D7` (Primary Light).
- **H1:** Playfair Display 700, `text-4xl md:text-5xl`, kolor Neutral 900. Pierwsza linia „Odzyskaj wolność w relacji z jedzeniem." — mocna, emocjonalna. Druga linia „Bez restrykcji i poczucia winy." — uspokajająca.
- **Podtytuł:** Inter 400, `text-lg`, kolor Neutral 600. Krótki opis kim jest specjalistka i komu pomaga. Maksymalnie 2-3 zdania.
- **CTA główny:** „Zapisz się na bezpłatną konsultację" — tło Primary (`#7C9A82`), tekst biały, `rounded-full`, `px-8 py-4`, `text-lg`, `font-semibold`. Hover: Primary Dark. Cień: `shadow-md`.
- **CTA drugorzędny:** „Zobacz ofertę" — obramowanie Primary, tekst Primary, tło transparentne (ghost button). Hover: tło Primary Light.
- **Zdjęcie:** Profesjonalne, ciepłe, przyjazne. Kadrowanie: od pasa w górę lub 3/4 postaci. `rounded-2xl`, lekki cień. Proporcje: `aspect-[4/5]` lub `aspect-square`.
- **Wysokość sekcji:** Minimum `min-h-[80vh]`, wyśrodkowane pionowo (`items-center`).

### A.2 Sekcja „Czy to o Tobie?"

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│   H2: Czy to brzmi znajomo?                                   │
│                                                                │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐                    │
│   │ 🔄 Ikona │  │ 😔 Ikona │  │ 🍫 Ikona │                    │
│   │          │  │          │  │          │                    │
│   │ Siedzisz │  │ Czujesz  │  │ Jesz pod │                    │
│   │ na diecie│  │ się      │  │ wpływem  │                    │
│   │ za dietą │  │ winna    │  │ emocji,  │                    │
│   │ — a waga │  │ po każdym│  │ nie głodu│                    │
│   │ wraca    │  │ posiłku  │  │          │                    │
│   └──────────┘  └──────────┘  └──────────┘                    │
│                                                                │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐                    │
│   │ ⚖️ Ikona │  │ 🩺 Ikona │  │ 😞 Ikona │                    │
│   │          │  │          │  │          │                    │
│   │ Masz IO  │  │ Usłyszałaś│ │ Nie      │                    │
│   │ lub PCOS │  │ „schudnij"│ │ wierzysz │                    │
│   │ i nikt   │  │ od lekarza│ │ że dieta │                    │
│   │ nie tłu- │  │ — ale nikt│ │ może     │                    │
│   │ maczy co │  │ nie powie-│ │ działać  │                    │
│   │ dalej    │  │ dział jak │ │ „na Ciebie│                    │
│   └──────────┘  └──────────┘  │"         │                    │
│                               └──────────┘                    │
│                                                                │
│   Podpis: Nie musisz przez to przechodzić sama.               │
│   [Porozmawiajmy — umów bezpłatną konsultację]                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Szczegóły:**

- **Tło sekcji:** Biały (`#FFFFFF`) lub Secondary (`#E8DCC8`) z opacity 30%.
- **H2:** „Czy to brzmi znajomo?" — Playfair Display 600, `text-3xl md:text-4xl`, wyśrodkowany.
- **Karty z problemami:** Siatka 3 kolumny na desktop, 2 na tablet, 1 na mobile.
  - Każda karta: biały background, `rounded-2xl`, `p-6`, `shadow-sm`.
  - Ikona na górze: Lucide icon w kolorze Primary, `w-10 h-10`.
  - Tekst: Inter 400, `text-base`, Neutral 900. Sformułowany w drugiej osobie — „Siedzisz na diecie za dietą…"
  - Hover: lekkie podniesienie (`-translate-y-1`) + `shadow-md`.

- **Sugerowana treść kart (6 pain points):**
  1. „Siedzisz na diecie za dietą — a efekt jo-jo wraca jak bumerang."
  2. „Czujesz się winna po każdym ‚zakazanym' posiłku."
  3. „Jesz pod wpływem emocji, stresu albo nudy — nie głodu."
  4. „Masz insulinooporność lub PCOS i nie wiesz, co naprawdę jeść."
  5. „Usłyszałaś od lekarza ‚proszę schudnąć' — ale nikt nie powiedział Ci jak."
  6. „Nie wierzysz już, że jakakolwiek dieta może zadziałać na Ciebie."

- **Podpis pod kartami:** Inter 500, `text-lg`, Primary Dark. Empatyczny, budujący zaufanie.
- **CTA:** „Porozmawiajmy — umów bezpłatną konsultację" — styl jak CTA główny z hero.

### A.3 Sekcja „Krótko o mnie"

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│        [Zdjęcie]            H2: Cześć, jestem Malwina.         │
│        okrągłe              Łączę wiedzę z dietetyki           │
│        lub rounded          i psychologii, bo wierzę,          │
│                             że zdrowe jedzenie zaczyna          │
│                             się w głowie.                       │
│                                                                │
│                             Moim celem jest pomóc Ci            │
│                             zbudować taką relację               │
│                             z jedzeniem, w której               │
│                             nie ma miejsca na poczucie          │
│                             winy — jest za to spokój            │
│                             i pewność siebie.                   │
│                                                                │
│                             [Poznaj mnie bliżej →]             │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Szczegóły:**

- **Układ:** Dwie kolumny (40/60). Zdjęcie po lewej, tekst po prawej. Na mobile: zdjęcie wyśrodkowane na górze, tekst pod spodem.
- **Tło:** Primary Light (`#D4E4D7`) z opacity 30%, lub subtelny wzór (np. organiczne kształty w tle).
- **Zdjęcie:** Bardziej osobiste niż w hero — uśmiech, kontakt wzrokowy. `rounded-2xl` lub `rounded-full` (okrągłe). Rozmiar: `w-64 h-64` do `w-80 h-80`.
- **Tekst:** 2-3 zdania. Ton: ciepły, bezpośredni, budujący relację. Zwracanie się do pacjentki na „Ty".
- **Link:** „Poznaj mnie bliżej →" — tekstowy link w kolorze Primary, ze strzałką animowaną na hover (przesuwa się w prawo).

### A.4 Sekcja „Jak pracuję" (opcjonalnie)

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│   H2: 3 kroki do lepszej relacji z jedzeniem                   │
│                                                                │
│   ①                    ②                    ③                  │
│   Bezpłatna            Diagnoza             Wspólna            │
│   konsultacja          potrzeb              praca              │
│                                                                │
│   Poznajemy się.       Tworzę plan          Regularne          │
│   Opowiadasz mi        dopasowany           spotkania,         │
│   o sobie —            do Twojego           wsparcie           │
│   bez oceniania.       ciała, zdrowia       psychologiczne     │
│                        i stylu życia.       i dietetyczne.     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Szczegóły:**

- **Cel:** Zmniejszyć barierę wejścia — pacjentka widzi, czego się spodziewać.
- **Układ:** 3 kolumny, każda z numerem (duży, ozdobny, w kolorze Primary Light), nagłówkiem (H4, Inter 600) i krótkim opisem (Inter 400).
- **Separatory:** Linia przerywana lub strzałka łącząca kroki.
- **Tło:** Biały.

### A.5 Sekcja z opiniami (Social Proof) — przyszłość

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│   H2: Co mówią moje pacjentki                                 │
│                                                                │
│   ┌──────────────────────────┐                                 │
│   │ „Nareszcie ktoś mnie     │                                 │
│   │ wysłuchał i nie kazał     │                                 │
│   │ liczyć kalorii."          │                                 │
│   │                          │                                 │
│   │ — Anna, 34 lata          │                                 │
│   └──────────────────────────┘                                 │
│                                                                │
│   [← ] [ ● ● ○ ] [ →]                                         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Szczegóły:**

- **Carousel/slider** z opiniami (po jednej na ekran na mobile, 2-3 na desktop).
- Każda opinia: tekst w cudzysłowie, imię i wiek (za zgodą). Tło karty: biały, `rounded-2xl`, `shadow-sm`.
- **Uwaga:** Sekcja do dodania po zebraniu realnych opinii. Placeholder w MVP z tekstem „Tu wkrótce pojawią się opinie pacjentek".
- Nawigacja: strzałki + kropki (dots pagination).

### A.6 Sekcja CTA zamykająca

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│   Tło: Primary (#7C9A82)                                       │
│                                                                │
│   H2: Gotowa na pierwszy krok?                                 │
│   Podtytuł: Bezpłatna konsultacja to 15 minut rozmowy,        │
│   w której razem sprawdzimy, czy mogę Ci pomóc.               │
│                                                                │
│   [Umów bezpłatną konsultację]                                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Szczegóły:**

- **Tło:** Primary (`#7C9A82`), tekst biały.
- **CTA:** Biały przycisk z tekstem Primary Dark. `rounded-full`, `px-8 py-4`.
- **Podtytuł:** Krótkie wyjaśnienie, co pacjentka zyska — obniża barierę.
- Sekcja pełnej szerokości, `text-center`, `py-20`.

---

## B. O mnie

### B.1 Hero sekcji

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│   [Duże zdjęcie — lifestyle]                                   │
│                                                                │
│   H1: O mnie                                                   │
│   Podtytuł: Psychodietetyczka, która wierzy,                  │
│   że zdrowie zaczyna się od zrozumienia siebie.                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Szczegóły:**

- **Zdjęcie:** Szerokie, lifestyle (np. w gabinecie, przy biurku, w kuchni). `aspect-[21/9]` lub `aspect-[16/7]`. Przyciemnione z overlayem, tekst na zdjęciu (biały).
- Alternatywa: Zdjęcie obok tekstu, dwukolumnowy layout (jak hero strony głównej).

### B.2 Sekcja „Moja historia"

**Sugerowana treść:**

> **H2: Dlaczego psychodietetyka?**
>
> Przez lata obserwowałam, jak kobiety walczą z jedzeniem — nie dlatego, że brakuje im silnej woli, ale dlatego, że nikt nie zaopiekował się tym, co kryje się pod jedzeniem. Stresem, emocjami, przekonaniami wyniesionymi z domu.
>
> Dlatego łączę dietetykę z psychologią. Bo sama dieta nie wystarczy, jeśli nie zrozumiemy, dlaczego jemy tak, jak jemy.

**Układ:** Tekst ciągły, z akapitami. Można dodać zdjęcie z boku (styl edytorialny — tekst opływa zdjęcie). Tło: biały lub kremowy.

### B.3 Sekcja „Wykształcenie i certyfikaty"

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│   H2: Wykształcenie i kwalifikacje                             │
│                                                                │
│   • Dietetyka kliniczna — [nazwa uczelni]                      │
│   • Psychodietetyka — [nazwa kursu/uczelni]                    │
│   • Certyfikat CBT (terapia poznawczo-behawioralna)            │
│   • Szkolenie: Insulinooporność w praktyce dietetyka           │
│   • Członkini Polskiego Towarzystwa Dietetyki                  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Szczegóły:**

- Lista punktowana z ikonami (Lucide: `GraduationCap`, `Award`, `BookOpen`).
- Każdy punkt: ikona + nazwa kwalifikacji + ewentualnie rok.
- Tło sekcji: Secondary (`#E8DCC8`) z opacity 20%.
- Buduje autorytet — kluczowe dla zaufania.

### B.4 Sekcja „Filozofia pracy"

**Sugerowana treść:**

> **H2: Jak pracuję?**
>
> **Bez restrykcyjnych diet.** Nie wierzę w diety cud — wierzę w zrozumienie Twojego ciała.
>
> **Z psychologicznym wsparciem.** Jedzenie to nie tylko kalorie. To emocje, nawyki, wspomnienia. Pracujemy z tym wszystkim.
>
> **W Twoim tempie.** Każda kobieta jest inna. Nie porównuję, nie oceniam, nie pogamiam.

**Układ:** 3 bloki (ikona + nagłówek + opis) rozmieszczone pionowo lub w siatce 3-kolumnowej. Ikony w kolorze Primary.

### B.5 Sekcja „Prywatnie"

**Sugerowana treść:**

> **H3: Prywatnie**
>
> Poza gabinetem lubię [np. spacery z psem, gotowanie, podróże, jogę]. Wierzę, że dobra relacja z jedzeniem to część większej układanki — dbania o siebie z szacunkiem i bez presji.

**Układ:** Lekka, osobista. Jedno zdjęcie lifestyle (hobby). Tekst krótki, 2-3 zdania. Buduje relację — pacjentka widzi w specjalistce człowieka, nie tylko eksperta.

### B.6 CTA zamykające

> **H3: Chcesz sprawdzić, czy mogę Ci pomóc?**
>
> [Umów bezpłatną konsultację]

---

## C. Oferta / Usługi

### C.1 Nagłówek sekcji

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│   H1: Oferta                                                   │
│   Podtytuł: Każda współpraca zaczyna się od rozmowy.           │
│   Wybierz opcję, która najbardziej odpowiada Twoim potrzebom.  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### C.2 Karty usług

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│   ┌──────────────────┐  ┌──────────────────┐                   │
│   │  ★ WYRÓŻNIONA    │  │                  │                   │
│   │                  │  │  Pakiet           │                   │
│   │  Konsultacja     │  │  współpracy       │                   │
│   │  wstępna         │  │  (3 miesiące)     │                   │
│   │                  │  │                  │                   │
│   │  Czas: 60 min    │  │  Co obejmuje:     │                   │
│   │  Online / stacj. │  │  • Konsult. wstęp.│                   │
│   │                  │  │  • Indyw. plan    │                   │
│   │  Co obejmuje:    │  │    żywienia       │                   │
│   │  • Wywiad żyw.   │  │  • Wsparcie psych.│                   │
│   │  • Analiza nawyków│  │  • 6 spotkań     │                   │
│   │  • Wstępne       │  │    (co 2 tyg.)   │                   │
│   │    zalecenia     │  │  • Kontakt        │                   │
│   │                  │  │    między sesjami │                   │
│   │  Cena: XXX zł    │  │                  │                   │
│   │                  │  │  Cena: XXX zł     │                   │
│   │  [Umów wizytę]   │  │  (rata: XXX zł/m.)│                   │
│   │                  │  │                  │                   │
│   └──────────────────┘  │  [Umów wizytę]   │                   │
│                         │                  │                   │
│                         └──────────────────┘                   │
│                                                                │
│   ┌──────────────────┐                                         │
│   │  Kursy online /  │                                         │
│   │  E-booki         │                                         │
│   │                  │                                         │
│   │  Wkrótce!        │                                         │
│   │  Zapisz się na   │                                         │
│   │  newsletter,     │                                         │
│   │  żeby nie         │                                         │
│   │  przegapić.      │                                         │
│   │                  │                                         │
│   │  [Zapisz się]    │                                         │
│   └──────────────────┘                                         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Szczegóły kart usług:**

- **Układ:** 2-3 kolumny na desktop. 1 kolumna na mobile (stackowane).
- **Karta wyróżniona (np. Konsultacja wstępna):** Obramowanie Primary (`border-2 border-primary`), badge „Najpopularniejsze" lub „Zacznij tutaj" w kolorze Accent.
- **Każda karta zawiera:**
  - Ikona lub mała ilustracja (góra karty)
  - Nazwa usługi: H3, Playfair Display 600
  - Opis: 1-2 zdania, Inter 400
  - Lista „Co obejmuje:" — punkty z checkmark ikonami (Lucide: `Check`)
  - Czas trwania i forma (online / stacjonarnie)
  - Cena: wyróżniona, `text-2xl`, Inter 700, kolor Primary Dark
  - CTA: przycisk „Umów wizytę" — Primary background
- **Karta „Wkrótce":** Wyszarzona lub z delikatnym overlayem. Badge „Wkrótce". CTA: zapis na newsletter.
- **Styl karty:** `bg-white`, `rounded-2xl`, `shadow-sm`, `p-8`. Hover: `shadow-md`, lekkie podniesienie.

### C.3 Sekcja „Dla kogo jest moja oferta?"

**Sugerowana treść:**

> **H2: Dla kogo pracuję?**
>
> Specjalizuję się we wsparciu kobiet z:
> - **Otyłością** — bez efektu jo-jo i restrykcji
> - **Insulinoopornością** — jadłospis dopasowany do Twojego metabolizmu
> - **PCOS** — holistyczne podejście do objawów
> - **Kompulsywnym jedzeniem** — praca nad emocjonalnym głodem
> - **Zaburzonym obrazem ciała** — odbudowa szacunku do siebie

**Układ:** Lista z ikonami, lub karty poziome (ikona | tekst). Tło: Primary Light z opacity 20%.

### C.4 Sekcja FAQ

**Sugerowane pytania:**

1. **Jak wygląda pierwsza konsultacja?**
   > Pierwsza konsultacja trwa ok. 60 minut. Rozmawiamy o Twojej historii zdrowia, nawykach żywieniowych, relacji z jedzeniem i celach. Nie oceniam — słucham. Na tej podstawie wspólnie ustalamy plan działania.

2. **Czy konsultacje są online czy stacjonarnie?**
   > Oferuję oba formaty. Konsultacje online odbywają się przez [Google Meet / Zoom]. Stacjonarnie przyjmuję w [nazwa miasta/gabinetu].

3. **Czy wystawiam faktury?**
   > Tak, wystawiam faktury na życzenie.

4. **Czy współpracujesz z lekarzami?**
   > Tak, w razie potrzeby współpracuję z endokrynologami, ginekologami i psychiatrami. Mogę też pomóc zinterpretować wyniki badań.

5. **Co jeśli mam insulinooporność — czy dieta będzie inna?**
   > Tak, plan żywienia jest w pełni indywidualny. Przy insulinooporności szczególnie dbam o kompozycję posiłków, indeks glikemiczny i regularność jedzenia.

**Komponent:** Accordion (rozwijane pytania). Klik na pytanie rozwija odpowiedź z animacją. Ikona `ChevronDown` obraca się na `ChevronUp`. Zastosowanie: `details/summary` w HTML dla dostępności, z CSS animacją.

---

## D. Blog / Baza Wiedzy

### D.1 Strona listingu artykułów

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│   H1: Blog                                                     │
│   Podtytuł: Wiedza, która pomaga zrozumieć swoje ciało.        │
│                                                                │
│   [Filtry: Wszystkie | IO | PCOS | Psychologia | Przepisy]     │
│                                                                │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐                    │
│   │ [Obraz]  │  │ [Obraz]  │  │ [Obraz]  │                    │
│   │          │  │          │  │          │                    │
│   │ Tag: IO  │  │ Tag: PCOS│  │ Tag:Psych│                    │
│   │          │  │          │  │          │                    │
│   │ Dlaczego │  │ PCOS     │  │ Głód     │                    │
│   │ tyjemy   │  │ a dieta  │  │ emocjo-  │                    │
│   │ od stresu│  │ — co     │  │ nalny vs │                    │
│   │          │  │ naprawdę │  │ fizyczny │                    │
│   │ 5 min    │  │ działa?  │  │          │                    │
│   │ czytania │  │          │  │ 4 min    │                    │
│   │          │  │ 7 min    │  │ czytania │                    │
│   │ [Czytaj] │  │ czytania │  │          │                    │
│   └──────────┘  │          │  │ [Czytaj] │                    │
│                 │ [Czytaj] │  └──────────┘                    │
│                 └──────────┘                                   │
│                                                                │
│   [Załaduj więcej]                                             │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Szczegóły:**

- **Układ:** Siatka 3 kolumny na desktop, 2 na tablet, 1 na mobile.
- **Filtry:** Tagi klikalne na górze (pills/chips). Aktywny filtr: tło Primary, tekst biały. Nieaktywny: tło Primary Light, tekst Primary Dark.
- **Karta artykułu:**
  - Obraz wyróżniający: `aspect-[16/10]`, `rounded-t-2xl`
  - Tag kategorii: mały badge, `rounded-full`, `px-3 py-1`, `text-xs`, tło Primary Light
  - Tytuł: H3, Playfair Display 600, `text-xl`
  - Czas czytania: Inter 400, `text-sm`, Neutral 600
  - Link „Czytaj dalej →" — tekst Primary
  - Cała karta klikalna (`<a>` wrapper)
  - Hover: `shadow-md`, obraz lekko powiększony (`scale-105`, z `overflow-hidden`)

- **Sugerowane kategorie tagów:** „Insulinooporność", „PCOS", „Psychologia jedzenia", „Przepisy", „Otyłość"

- **Sugerowane tytuły artykułów:**
  - „Dlaczego tyjemy od stresu? Rola kortyzolu w przybieraniu na wadze"
  - „Jak rozpoznać głód emocjonalny — 5 sygnałów, które łatwo przeoczyć"
  - „PCOS a dieta — co naprawdę działa, a co jest mitem?"
  - „Insulinooporność — 7 zmian w jadłospisie, które naprawdę pomagają"
  - „Przepis: Owsianka stabilizująca poziom cukru (idealna przy IO)"
  - „Dlaczego ‚silna wola' nie wystarczy — o psychologii diety"
  - „Jedz regularnie — dlaczego to ważniejsze niż to, CO jesz"

- **Paginacja:** „Załaduj więcej" (button, nie paginacja numeryczna) — lepsze UX na mobile.

### D.2 Strona pojedynczego artykułu

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│   [← Wróć do bloga]                                           │
│                                                                │
│   Tag: Insulinooporność                                        │
│   H1: Dlaczego tyjemy od stresu?                               │
│   Rola kortyzolu w przybieraniu na wadze                       │
│                                                                │
│   Data: 15 marca 2026 · 5 min czytania                         │
│                                                                │
│   [Obraz wyróżniający — pełna szerokość]                      │
│                                                                │
│   --- treść artykułu w Markdown ---                            │
│                                                                │
│   ┌──────────────────────────────────────┐                     │
│   │  CTA Box:                            │                     │
│   │  Chcesz porozmawiać o swoim         │                     │
│   │  metabolizmie?                        │                     │
│   │  [Umów bezpłatną konsultację]        │                     │
│   └──────────────────────────────────────┘                     │
│                                                                │
│   Podobne artykuły:                                            │
│   [Karta 1] [Karta 2] [Karta 3]                               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Szczegóły:**

- **Szerokość treści:** `max-w-3xl` (768px) — wąska kolumna dla czytelności tekstu.
- **Typografia treści:** Inter 400, `text-base`, `leading-relaxed` (1.75). Nagłówki w treści: Playfair Display.
- **CTA w treści:** Po artykule — box z tłem Primary Light, `rounded-2xl`, `p-8`, z przyciskiem CTA.
- **Sekcja „Podobne artykuły":** 3 karty (taki sam format jak na listingu), automatycznie dobierane po tagu.
- **SEO:** Każdy artykuł ma unikalne `title`, `meta description` z frontmatter. Struktura nagłówków: jeden H1, następnie H2 i H3 w treści.

---

## E. Kontakt i Rezerwacje

### E.1 Układ strony

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│   H1: Kontakt                                                  │
│   Podtytuł: Masz pytanie? Chcesz umówić wizytę?               │
│   Napisz lub zarezerwuj termin online.                         │
│                                                                │
│   ┌───────────────────┐    ┌───────────────────┐               │
│   │                   │    │                   │               │
│   │   FORMULARZ       │    │   DANE KONTAKTOWE │               │
│   │   KONTAKTOWY      │    │                   │               │
│   │                   │    │   📧 Email:        │               │
│   │   Imię:  [      ] │    │   malwina@...     │               │
│   │   Email: [      ] │    │                   │               │
│   │   Temat: [v     ] │    │   📱 Telefon:      │               │
│   │   Wiadomość:      │    │   +48 xxx xxx xxx │               │
│   │   [              ]│    │                   │               │
│   │   [              ]│    │   📍 Gabinet:      │               │
│   │   [              ]│    │   ul. Przykładowa  │               │
│   │                   │    │   1, Kraków        │               │
│   │   ☐ Wyrażam zgodę │    │                   │               │
│   │   na przetwarzanie│    │   🕐 Godziny:      │               │
│   │   danych (RODO)   │    │   Pon-Pt: 9-18    │               │
│   │                   │    │                   │               │
│   │   [Wyślij wiad.]  │    │   Social:         │               │
│   │                   │    │   [FB] [IG]       │               │
│   └───────────────────┘    └───────────────────┘               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Szczegóły formularz:**

- **Pola formularza:**
  - Imię (text, required)
  - Adres email (email, required)
  - Temat (select/dropdown): „Konsultacja wstępna", „Pytanie o ofertę", „Współpraca", „Inne"
  - Wiadomość (textarea, required, min 20 znaków)
  - Checkbox RODO (required): „Wyrażam zgodę na przetwarzanie moich danych osobowych w celu odpowiedzi na wiadomość. [Polityka prywatności]"

- **Styl inputów:**
  - `border border-neutral-200`, `rounded-xl`, `px-4 py-3`
  - Focus: `ring-2 ring-primary`, `border-primary`
  - Label: Inter 500, `text-sm`, Neutral 600, nad inputem
  - Walidacja: czerwony obramowanie + tekst błędu pod polem
  - Przycisk submit: styl Primary CTA (`bg-primary`, biały tekst, `rounded-full`)

- **Po wysłaniu:** Komunikat sukcesu w zielonym boxie: „Dziękuję! Twoja wiadomość została wysłana. Odpowiem najszybciej jak to możliwe, zwykle w ciągu 24 godzin."

### E.2 Sekcja rezerwacji online

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│   H2: Zarezerwuj wizytę online                                │
│   Podtytuł: Wybierz dogodny termin —                          │
│   konsultacja online lub stacjonarnie.                         │
│                                                                │
│   ┌──────────────────────────────────────────┐                 │
│   │                                          │                 │
│   │   [Embed: Calendly / ZnanyLekarz         │                 │
│   │    widget]                                │                 │
│   │                                          │                 │
│   │   Kalendarz z dostępnymi terminami       │                 │
│   │                                          │                 │
│   └──────────────────────────────────────────┘                 │
│                                                                │
│   Alternatywnie:                                               │
│   [Przycisk: Umów wizytę przez ZnanyLekarz →]                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Szczegóły:**

- **Preferowany system:** Calendly (lepszy embed, ładniejszy wygląd) lub ZnanyLekarz (popularny w Polsce, buduje zaufanie).
- **Implementacja Calendly:** `<iframe>` lub Calendly React widget. Stylowanie inline widget do dopasowania kolorystyki strony.
- **Implementacja ZnanyLekarz:** Link zewnętrzny otwierający się w nowej karcie z `rel="noopener noreferrer"`. Ewentualnie embed widgetu jeśli dostępny.
- **Fallback:** Jeśli brak systemu — wyraźna informacja: „Aby umówić wizytę, napisz na [email] lub zadzwoń [telefon]."
- **Tło sekcji:** Primary Light (`#D4E4D7`) z opacity 20%.

### E.3 Mapa (opcjonalnie)

- Jeśli gabinet stacjonarny — embed Google Maps.
- Stylowanie: `rounded-2xl`, `shadow-sm`, `aspect-[16/9]`.
- Pod mapą: adres tekstem + link „Otwórz w Google Maps" (dla mobile — uruchamia nawigację).

---

## 8. Uwagi dotyczące dostępności i wydajności

### 8.1 Dostępność (a11y)

- **Kontrast:** Wszystkie kombinacje tekst/tło muszą spełniać WCAG AA (minimum 4.5:1 dla tekstu, 3:1 dla dużego tekstu). Zweryfikować szczególnie:
  - Biały tekst na Primary (`#7C9A82`) — sprawdzić, czy ratio >= 4.5:1. Jeśli nie, użyć Primary Dark (`#5A7A60`).
  - Neutral 600 (`#6B6B6B`) na białym — ratio ~4.9:1, OK.
- **Semantyczny HTML:** Prawidłowa hierarchia nagłówków (jeden H1 na stronę, potem H2, H3). Użycie `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- **Atrybuty alt:** Każde zdjęcie z opisowym `alt` w języku polskim. Zdjęcia dekoracyjne: `alt=""`, `aria-hidden="true"`.
- **Formularze:** Każde pole ma `<label>` powiązany przez `htmlFor`. Komunikaty błędów powiązane przez `aria-describedby`. Focus trap w modalu.
- **Nawigacja klawiaturą:** Wszystkie interaktywne elementy dostępne przez Tab. Focus ring widoczny (`focus-visible:ring-2`).
- **Skip link:** Ukryty link „Przejdź do treści" na początku strony, widoczny po focusie.

### 8.2 Wydajność

- **Obrazy:** Wszystkie przez `next/image` — automatyczny lazy loading, responsywne rozmiary, format WebP.
- **Fonty:** Ładowane przez `next/font/google` — eliminuje layout shift (FOUT).
- **Strony statyczne:** Blog i strony informacyjne renderowane statycznie (SSG) za pomocą `generateStaticParams`.
- **Bundle size:** Calendly widget ładowany dynamicznie (`next/dynamic`) — nie blokuje początkowego ładowania.
- **Core Web Vitals cele:**
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

### 8.3 Responsywność

Podejście mobile-first. Breakpointy Tailwind:

| Breakpoint | Szerokość   | Układ                                          |
|-----------|------------|------------------------------------------------|
| Default   | < 640px    | 1 kolumna, stackowane sekcje, hamburger menu   |
| `sm`      | >= 640px   | Drobne poprawki paddingów                      |
| `md`      | >= 768px   | 2 kolumny w niektórych sekcjach                |
| `lg`      | >= 1024px  | Pełny desktop layout, nawigacja rozwinięta     |
| `xl`      | >= 1280px  | Maksymalna szerokość kontentu                  |

### 8.4 SEO

- Każda strona: unikalne `<title>` i `<meta name="description">` z frontmatter.
- Struktura URL: `/o-mnie`, `/oferta`, `/blog`, `/blog/dlaczego-tyjemy-od-stresu`, `/kontakt`.
- `sitemap.xml` generowany automatycznie (Next.js `app/sitemap.ts`).
- Open Graph i Twitter Card meta tagi dla udostępniania w social media.
- Structured data (JSON-LD): `LocalBusiness`, `Person` (specjalistka), `Article` (blog).

---

## Podsumowanie priorytetów implementacji

### Faza 1 — MVP

1. Strona główna (hero + pain points + krótkie bio + CTA)
2. O mnie (historia + kwalifikacje + filozofia)
3. Oferta (karty usług + FAQ)
4. Kontakt (formularz + dane + link do rezerwacji)
5. Header + Footer
6. Responsywność + podstawowe SEO

### Faza 2 — Rozbudowa

1. Blog (listing + artykuły + filtry)
2. Integracja z Calendly / ZnanyLekarz (embed)
3. Sekcja opinii (carousel)
4. Newsletter signup
5. Structured data (JSON-LD)

### Faza 3 — Przyszłość

1. Kursy online / E-booki (sklep)
2. Kalkulator BMI / kalkulator zapotrzebowania kalorycznego
3. Chatbot / FAQ bot
4. Wersja wielojęzyczna (jeśli potrzeba)
