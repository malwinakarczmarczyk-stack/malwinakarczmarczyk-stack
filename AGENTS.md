# AGENTS.md

## Language policy

**All repository files — code, comments, commit messages, documentation, and agent instructions — must be written in English.** This applies even if user prompts are in Polish or any other language. The only exception is the website content files in `content/` which are written in Polish (the website's target language).

**All website-facing content (pages, blog posts, UI labels, meta descriptions) must be written in Polish.** The target audience is Polish-speaking — every piece of text visible to end users must be in Polish.

## Project overview

A public website for a psycho-dietitian specializing in working with women suffering from:

- **Obesity**
- **Insulin resistance**
- **PCOS (Polycystic Ovary Syndrome)**

The website serves an informational and promotional purpose — it presents the specialist's offer, expert knowledge, and enables contact with patients.

## Tech stack

- **Runtime:** Node.js
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Page content:** Markdown / MDX — subpages are defined as `.md` / `.mdx` files, allowing easy content editing without code knowledge
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (target)

## Project structure (target)

```
/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Main site layout
│   ├── page.tsx            # Home page
│   ├── [slug]/             # Dynamic routing for Markdown-based subpages
│   │   └── page.tsx
│   └── globals.css         # Global styles
├── content/                # Markdown files with page content (in Polish)
│   ├── o-mnie.md
│   ├── oferta.md
│   ├── otylosc.md
│   ├── insulinoopornosc.md
│   ├── pcos.md
│   ├── blog/               # Blog articles (optional)
│   │   └── *.md
│   └── faq.md
├── components/             # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── MarkdownRenderer.tsx
├── lib/                    # Utility functions
│   └── markdown.ts         # Markdown parsing and rendering
├── public/                 # Static assets (images, icons)
├── AGENTS.md               # This file
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Code guidelines

### Content

- Subpages are created as Markdown files in the `content/` directory.
- Each Markdown file has a YAML frontmatter with metadata:
  ```yaml
  ---
  title: "Page title"
  description: "SEO description"
  order: 1
  ---
  ```
- Adding a new subpage = adding a new `.md` file in `content/` — no code changes required.

### Code

- Use TypeScript — avoid `any`.
- React components must be functional (function components).
- Use Next.js App Router (`app/` directory, not `pages/`).
- Use Tailwind CSS for styling — avoid custom CSS where Tailwind suffices.
- The site must be fully responsive (mobile-first).
- Ensure accessibility (a11y): semantic HTML, alt attributes, proper contrast.

### SEO

- Each subpage must have a unique `title` and `meta description` (sourced from frontmatter).
- Use the `Metadata` export from Next.js.
- The site should generate a sitemap.xml.

### Performance

- Serve images via `next/image`.
- Render Markdown pages statically (SSG) where possible.

## Target audience

Women aged 20–50 dealing with hormonal and metabolic issues, seeking psycho-dietetic support. Communication tone: empathetic, professional, supportive — non-judgmental.

## Instructions for AI agents

- **Repository language is English.** All code, comments, variable names, commit messages, PR descriptions, and documentation must be in English — regardless of the language used in prompts.
- **Website content language is Polish.** All user-facing text — Markdown content in `content/`, UI labels, button text, navigation items, meta descriptions, and any other text rendered on the website — must be written in Polish.
- When generating medical content, exercise caution — do not diagnose or recommend specific medications. Content should be educational and informational only.
- When editing Markdown files in `content/`, do not change the frontmatter structure without confirmation.
- When adding new subpages, ensure the slug (filename) is readable and follows the convention (lowercase, hyphens instead of spaces).
- Validation: run `npm run build` to verify the site compiles correctly.
