# PARI GILL PORTFOLIO — MASTER PROJECT SPEC

> **Single source of truth for parigill.com**
> Last updated: April 18, 2026

---

## 1. Project Overview

Build a pixel-faithful portfolio website for Pari Gill, a Product Designer, from her complete Figma designs. The site showcases two deep case studies (AppleNJ, Princeton IT Services), two locked/password-protected case studies (Hungie, NSCC/Hack4Impact), a landing/about page, a case studies summary page, a contact page, and a miscellany page.

**Non-negotiable principle:** The Figma designs are the single visual authority. Every layout decision, color, font, spacing, and proportion must match the Figma file. Do not improvise visual design — only add animation, responsiveness, and interactivity on top of the existing designs.

### Key Links

| Resource | URL |
|----------|-----|
| Figma File | `https://www.figma.com/design/in5EBObGnwpPthIKWmpRhu/Portfolio?node-id=2934-1107&t=xTlUwujHTNAgHrl9-1` |
| GitHub Repo | `https://github.com/rrr-ritz/portfolio-parigi` |
| Live Domain (later) | `https://parigill.com` |
| Vercel | Already have an account; project not yet created |

---

## 2. Prerequisites & Setup

Complete these before beginning implementation.

### 2.1 Figma MCP Server

Pari is on a **Figma Pro plan** (~200 API calls/day). Use the **official Figma MCP server**.

```bash
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

Authenticate via OAuth when prompted. Verify connection by querying a known frame from the Figma file.

**If you hit rate limits or the official server is unavailable**, fall back to **Framelink MCP**:

```bash
# Requires a Figma Personal Access Token (already set in $FIGMA_PAT)
npx -y figma-developer-mcp --figma-api-key=$FIGMA_PAT --stdio
```

### 2.2 Figma Personal Access Token

A personal access token (PAT) has already been generated (named `portfolio-parigi`, read-only scope). It is needed for the **image export script** (Section 11) and for Framelink MCP if used as a fallback.

The developer will provide it via environment variable before your session starts. Expect it at:

```bash
# Already set in your shell environment:
$FIGMA_PAT

# Or in .env.local in the repo root:
FIGMA_PAT=<token>
```

**Do NOT hardcode the token in any committed file.** Always read from the environment variable. Ensure `.env.local` is in `.gitignore` (it is by default with `create-next-app`).

### 2.3 Repository Initialization

The repo already exists at `https://github.com/rrr-ritz/portfolio-parigi`. Initialize the Next.js project inside it:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

If the repo already has files, adapt accordingly — do not delete existing configuration without confirming.

### 2.4 Install Core Dependencies

```bash
# Animation
npm install gsap @gsap/react lenis

# Utilities
npm install clsx tailwind-merge
```

### 2.5 Vercel Project

```bash
npx vercel link
```

Link to the existing Vercel account. Do NOT connect a custom domain — use the auto-generated `.vercel.app` URL for now.

---

## 3. Tech Stack

| Layer | Choice | Version | Why |
|-------|--------|---------|-----|
| Framework | Next.js (App Router) | 16.x (latest) | Best Claude Code compatibility, SSG/SSR hybrid, next/image |
| Language | TypeScript | 5.x | Type safety, better AI code generation |
| CSS | Tailwind CSS | v4 | Deterministic utility classes, design-token-friendly |
| Animation | GSAP + @gsap/react | Latest | Free since April 2025, ScrollTrigger, SplitText, Timeline |
| Smooth Scroll | Lenis | Latest | Physics-based, preserves native APIs, ~3KB |
| Deployment | Vercel | — | Zero-config Next.js, free tier, preview URLs |
| Font Loading | next/font | Built-in | Self-hosted WOFF2, no layout shift |
| Images | next/image | Built-in | Auto WebP/AVIF, responsive srcset, lazy loading |

### What NOT to install

- No CSS-in-JS (styled-components, Emotion) — use Tailwind + vanilla CSS
- No Framer Motion — GSAP handles everything and is more capable for this project
- No CMS — all content is static, embedded directly in components
- No analytics packages — Vercel Analytics is free and built-in (enable in dashboard later)
- No UI component libraries (shadcn, MUI, Chakra) — this is a bespoke design, not a design-system consumer

---

## 4. Figma Integration Strategy

### 4.1 How to Use the Figma MCP

For each page/section you implement:

1. **Get the design context** — Paste the Figma frame URL for that specific section into the prompt. The MCP server returns structured data: layer hierarchy, colors, typography, spacing, Auto Layout properties, text content.
2. **Get a screenshot** — Use `get_screenshot` to capture the visual reference for comparison.
3. **Implement** — Write the Next.js + Tailwind code based on the structured data.
4. **Screenshot compare** — After implementing, take a screenshot of your output and compare it side-by-side to the Figma screenshot. List every difference. Fix them. Repeat until faithful.

### 4.2 Navigating the Figma File

The Figma file URL includes `node-id=2934-1107` as the entry point. To find other pages/frames:

1. Query the file's top-level structure first to understand the page/frame hierarchy.
2. Each page in the portfolio will be a separate frame or page in Figma.
3. Work through pages in the order specified in Section 15 (Implementation Order).

### 4.3 What the MCP Cannot Do

- **Cannot export raster images** — See Section 11 for the image export strategy.
- **Cannot extract animations/interactions** — Pari did not design animations; you will implement them per Section 9.
- **Cannot provide responsive breakpoints** — Figma designs are static. You must implement responsive behavior per Section 7's per-page specs.
- **Performance degrades on large selections** — Always query section-by-section, never an entire page at once.

---

## 5. Site Architecture

### 5.1 Route Structure

```
/                       → Landing / About page
/work                   → Case Studies summary page
/work/applenj           → AppleNJ case study (full, public)
/work/pits              → Princeton IT Services case study (full, public)
/work/hungie            → Hungie case study (locked)
/work/nscc              → NSCC / Hack4Impact case study (locked)
/contact                → Contact page
/miscellany             → Miscellany page
```

### 5.2 File Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (Lenis provider, nav, footer)
│   ├── page.tsx                # Landing / About
│   ├── work/
│   │   ├── page.tsx            # Case studies summary
│   │   ├── applenj/
│   │   │   └── page.tsx        # AppleNJ case study
│   │   ├── pits/
│   │   │   └── page.tsx        # PITS case study
│   │   ├── hungie/
│   │   │   └── page.tsx        # Hungie (locked)
│   │   └── nscc/
│   │       └── page.tsx        # NSCC (locked)
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── miscellany/
│   │   └── page.tsx            # Miscellany page
│   └── api/
│       └── unlock/
│           └── route.ts        # Password verification endpoint
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx      # Site-wide nav
│   │   ├── Footer.tsx          # Site-wide footer
│   │   └── LenisProvider.tsx   # Smooth scroll wrapper
│   ├── ui/
│   │   ├── AnimatedSection.tsx # Reusable scroll-reveal wrapper
│   │   ├── ProjectCard.tsx     # Card for case studies summary
│   │   ├── ImageReveal.tsx     # Animated image component
│   │   ├── LockScreen.tsx      # Password gate for locked studies
│   │   └── Button.tsx          # Styled button (if needed)
│   └── case-study/
│       ├── CaseStudyHero.tsx   # Hero section for case studies
│       ├── CaseStudySection.tsx# Generic content section
│       ├── BeforeAfter.tsx     # Before/after image comparison
│       ├── MetricCard.tsx      # Stats/metrics display
│       └── ProcessStep.tsx     # Step-by-step process display
├── lib/
│   ├── animations.ts           # GSAP animation presets
│   └── utils.ts                # clsx/twMerge helper, etc.
├── styles/
│   └── globals.css             # Tailwind directives, CSS custom properties, global styles
└── public/
    ├── images/
    │   ├── applenj/            # AppleNJ case study images
    │   ├── pits/               # PITS case study images
    │   ├── hungie/             # Hungie preview image (for locked card)
    │   ├── nscc/               # NSCC preview image (for locked card)
    │   └── shared/             # Logo, headshot, misc
    └── fonts/                  # Self-hosted font files (WOFF2)
```

### 5.3 Naming Conventions

- Components: PascalCase (`ProjectCard.tsx`)
- Utilities/hooks: camelCase (`useScrollReveal.ts`)
- CSS: Tailwind utilities in JSX; custom CSS only for things Tailwind can't express (editorial typography, complex clip-paths)
- Images: kebab-case (`applenj-hero-before.png`)
- Commit messages: conventional commits, one line max (two if truly needed). Examples: `feat: add AppleNJ case study hero section`, `fix: correct nav alignment on mobile`. **Never reference AI, Claude, LLMs, or AI authorship in any commit message, comment, or code.**

---

## 6. Design System

### 6.1 Extracting from Figma

On your **first task**, before implementing any pages:

1. Query the Figma file for its **variables/tokens** using `get_variable_defs` or by inspecting the design system frames.
2. Extract and document:
   - **Color palette** — All colors with semantic names (primary, secondary, background, text, accent, etc.)
   - **Typography scale** — Font families, sizes, weights, line heights, letter spacing for each text style
   - **Spacing scale** — Padding, margins, gaps used consistently
   - **Border radii** — If any rounded corners are used
   - **Shadows** — Box shadows, if any
3. Configure these in `tailwind.config.ts` as theme extensions.
4. Also write them as CSS custom properties in `globals.css` for use in vanilla CSS where needed.

### 6.2 Typography

Extract the exact font families from the Figma file. Then:

- If they are **Google Fonts**: Use `next/font/google` for automatic optimization.
- If they are **custom/commercial fonts**: Place WOFF2 files in `/public/fonts/` and use `next/font/local`.
- Limit to **2-3 font families** maximum.
- Set `font-display: swap` (next/font does this by default).
- Use `clamp()` for fluid typography where appropriate:
  ```css
  /* Example: heading that scales from mobile to desktop */
  font-size: clamp(1.75rem, 1rem + 3vw, 3.5rem);
  ```

### 6.3 Tailwind Configuration

```typescript
// tailwind.config.ts — STRUCTURE ONLY, fill with actual Figma values
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Extract from Figma variables
      },
      fontFamily: {
        // Extract from Figma
      },
      fontSize: {
        // Map Figma type scale
      },
      spacing: {
        // Map Figma spacing scale if it uses non-standard values
      },
      borderRadius: {
        // Map Figma radii
      },
      boxShadow: {
        // Map Figma shadows
      },
    },
  },
  plugins: [],
} satisfies Config;
```

---

## 7. Page Specifications

For every page: query the Figma MCP for the relevant frame, implement faithfully, then add animations and responsive behavior as specified below.

### 7.1 Landing / About Page (`/`)

**Purpose:** First impression. Introduces Pari, shows her personality and design sensibility, previews her work.

**Figma:** Query the landing page frame from the Figma file.

**Expected sections** (confirm against Figma — these are assumptions based on standard portfolio structure):
- **Hero** — Name, title ("Product Designer"), brief tagline or intro
- **About** — Bio, background, philosophy (likely with a photo)
- **Selected Work Preview** — 2-4 project cards linking to case studies
- **Skills/Tools** — Possibly a section showing design tools, technical skills
- **Call to Action** — Link to contact or work page

**Responsive behavior:**
- Hero: Full-width, text scales with clamp()
- Project cards: 2-column on desktop → 1-column on mobile
- About section: Side-by-side (photo + text) on desktop → stacked on mobile

**Animations (see Section 9 for full specs):**
- Hero text: SplitText reveal on page load
- About section: Fade-up on scroll enter
- Project cards: Staggered reveal, hover lift effect
- Skills: Staggered fade-in

### 7.2 Case Studies Summary Page (`/work`)

**Purpose:** Gallery of all case studies — both public and locked.

**Expected layout:** Grid of project cards, each linking to the respective case study.

**Card types:**
- **Public cards** (AppleNJ, PITS) — Thumbnail, title, brief description, role tag → links to full case study
- **Locked cards** (Hungie, NSCC) — Same visual treatment but with a subtle lock indicator → links to lock screen

**Responsive:** 2-column grid on desktop → 1-column on mobile. Cards should maintain consistent aspect ratio.

**Animations:**
- Staggered entrance on page load
- Hover: Image zoom + card lift + shadow

### 7.3 AppleNJ Case Study (`/work/applenj`)

**Purpose:** Deep case study showing Pari's 0-to-1 product design work for an Apple reseller.

**This is a LONG page.** From the Figma uploads, it includes at minimum these major sections:

1. **Hero** — Project title, role, timeline, brief overview
2. **Context/Problem** — Business situation, the mandate from leadership
3. **Creative Direction** — Brand name & logo development (brainstorming → refinement → final mark), color system exploration and rationale, design system (typography, spacing), mood boarding
4. **Structure** — Information architecture (mind map), user flows (3 archetypes), comparative analysis
5. **Design Direction** — Wireframing & iteration (5 iterations shown with rationale for each), stakeholder feedback and pivots
6. **The Final Product** — Landing page before/after, the remaining pages, full page system
7. **Reflection** — What the project taught, what she'd do differently, working with C-suite

**Implementation approach:**
- Each major section is its own React component.
- Images are critical — this page is image-heavy. Every mockup, wireframe, color exploration, mind map, and comparison grid must be present.
- Text content comes directly from the Figma (the MCP extracts all text).
- Respect the editorial layout — this isn't a blog post, it's a designed narrative.

**Responsive:**
- Full-bleed hero and images on all breakpoints
- Side-by-side layouts (e.g., iteration screenshots with descriptions) → stack on mobile
- Mind map / comparative analysis images → full width with horizontal scroll on mobile if needed
- Typography scales down proportionally

### 7.4 Princeton IT Services Case Study (`/work/pits`)

**Purpose:** Deep case study showing data-driven iterative design for an enterprise B2B homepage.

**Major sections (from Figma uploads):**

1. **Hero** — Project title, role, timeline
2. **The Existing Site** — Original design description, heatmap analysis (with annotated percentages), user testing (10-second test, comprehension test), the verdict
3. **From Sketch to Solution / Process** — Four rounds of iteration with the narrative of each: Iteration 1 (co-intern's direction, C-suite presentation, heatmap), Iteration 2 (the refinement, the center rebuild), Iteration 3 & 4, Iteration 5 (final push)
4. **The Final Test** — Preference testing (results with percentages), Live A/B testing (metrics: +340% CTR, -41% bounce, +127% CTA, +180% CTA conversions, +12K weekly page views), the internship ending
5. **Reflection** — What the project taught, what she'd do differently, working with C-suite

**Implementation approach:**
- Same component-based approach as AppleNJ
- Heatmap images with annotated data are particularly important — these tell the story
- Metrics should be displayed prominently (consider MetricCard components)
- The iterative process narrative is the core — each iteration needs clear visual treatment

**Responsive:** Same principles as AppleNJ.

### 7.5 Locked Case Study Pages (`/work/hungie`, `/work/nscc`)

**Purpose:** Show that work exists but gate access behind a password.

**Design:**
- The page should feel designed, not like an error state
- Display: project title, a brief one-line teaser (pull from Figma if available), a clean lock icon
- Password input field with submit button
- Subtle messaging: "This case study is password-protected. Enter the password to view."
- On incorrect password: Gentle shake animation on the input + brief error message
- On correct password: Smooth transition to reveal the content (for now, a "Coming soon" placeholder since these case studies aren't designed yet)

**Password mechanism:** See Section 10.

**Responsive:** Centered content, works at all breakpoints.

### 7.6 Contact Page (`/contact`)

**Purpose:** Let recruiters, hiring managers, and collaborators reach out.

**Expected content** (confirm against Figma):
- Heading ("Get in Touch" or similar)
- Contact info: email (pgill123@terpmail.umd.edu), LinkedIn link
- Possibly a simple contact form (if in Figma — if so, it can be a mailto: form or use Formspree for actual submission)
- Resume download link (optional)

**Animations:**
- Fade-up entrance
- If there's a form: field focus animations (label float, border color change)

### 7.7 Miscellany Page (`/miscellany`)

**Purpose:** Fun/personal page showcasing Pari's personality beyond professional work.

**Note:** This page may not be fully designed in Figma yet (Ritvik mentioned "something fun she's working on right now"). Query the Figma file for this page — if the design exists, implement it faithfully. If it's incomplete or missing, create a clean placeholder page with:
- Title "Miscellany"
- "Coming soon" message styled consistently with the site
- A fun, small animation (e.g., a rotating emoji, a doodle)

---

## 8. Global Components

### 8.1 Navigation

**Behavior:**
- **Desktop:** Horizontal nav bar with links to: Work, About (anchor on landing page or separate), Contact, and possibly Miscellany. Logo/name on the left.
- **Mobile:** Hamburger menu → full-screen or slide-out overlay with the same links
- **Sticky header** on scroll with `backdrop-blur` and reduced opacity background
- **Active state** indicated on the current page link
- Smooth scroll to anchors on the landing page (if "About" is an anchor rather than a separate route)

**Animation:**
- Header background transitions from transparent to blurred on scroll (use GSAP ScrollTrigger or IntersectionObserver)
- Mobile menu: smooth open/close animation
- Nav links: underline grows from left on hover

### 8.2 Footer

Query the Figma file for footer design. Typically includes:
- Name / copyright
- Social links (LinkedIn, email, Dribbble/Behance if present)
- Navigation links repeated
- "Designed by Pari Gill" credit

**Responsive:** Stack on mobile.

---

## 9. Animation System

Pari did not design specific animations. Implement the following system — it should feel **polished but restrained**, befitting a professional designer's portfolio. Never let animation distract from the work itself.

### 9.1 Global: Lenis Smooth Scroll

Create a `LenisProvider.tsx` component that wraps the entire app:

```tsx
// Integrate Lenis with GSAP ticker:
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

Wrap the app in `layout.tsx`.

### 9.2 Scroll Reveal — `AnimatedSection`

A reusable wrapper component for scroll-triggered animations:

- **Default behavior:** Fade up from 20px below, opacity 0 → 1, duration 0.8s, ease `power2.out`
- **Trigger:** When element enters viewport (ScrollTrigger `start: "top 85%"`)
- **Once:** Plays once, does not reverse
- **Stagger variant:** For groups of items (cards, skills), stagger by 0.1s

Use `useGSAP` from `@gsap/react` (handles cleanup automatically).

### 9.3 Hero Text Animation

On the landing page hero:
- Use GSAP **SplitText** to split the headline into words or characters
- Animate each word/character: fade up + slight y-offset, staggered by 0.03s
- Duration: 0.6s per element, total sequence ~1.5s
- Ease: `power3.out`
- Delay: 0.3s after page load (let fonts load first)

### 9.4 Project Card Hover

- **Lift:** translateY -4px on hover, duration 0.3s
- **Shadow:** Increase box-shadow depth
- **Image zoom:** Scale image 1.03x within its container (overflow hidden)
- **Cursor:** Change to pointer
- Use CSS transitions (not GSAP) for hover states — they're more performant and don't require JS listeners

### 9.5 Case Study Page Entrance

- Hero section: Immediate visibility (no delay — this is the LCP)
- Subsequent sections: Staggered fade-up using `AnimatedSection`
- Large images: Clip-path reveal — `inset(100% 0 0 0)` → `inset(0)`, duration 0.8s, ease `power2.inOut`

### 9.6 Image Reveal

For important images within case studies (mockups, before/after):
- Clip-path wipe from bottom: `clip-path: inset(100% 0 0 0)` → `inset(0 0 0 0)`
- Duration: 0.8s, ease: `power2.inOut`
- Triggered on scroll enter

### 9.7 Navigation

- **Sticky header transition:** On scroll past ~50px, header gains `backdrop-blur-md bg-white/80` (or whatever the design's background color is at reduced opacity). Animate with CSS transition.
- **Mobile menu:** Overlay slides in from right, links stagger in 0.05s apart
- **Link hover:** Underline grows from left (CSS `transform: scaleX(0)` → `scaleX(1)`, `transform-origin: left`)

### 9.8 Locked Page

- **Lock icon:** Subtle floating animation (translateY -4px ↔ +4px, infinite, duration 3s, ease sine)
- **Wrong password:** Input shakes horizontally (translateX -10px → 10px → 0, duration 0.4s)
- **Correct password:** Lock icon rotates and fades, content fades in

### 9.9 Page Transitions

Use the **View Transitions API** if the browser supports it (Next.js has experimental support). Fallback: simple crossfade via CSS opacity transition. Do NOT implement complex page transitions that delay navigation — speed matters more than flashiness.

### 9.10 Reduced Motion

**Non-negotiable.** Wrap all animations in a reduced-motion check:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Also in GSAP:
```ts
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.globalTimeline.timeScale(100); // effectively instant
}
```

---

## 10. Password Protection

### 10.1 Mechanism

Use **Next.js Middleware + cookie-based auth**. One shared password for all locked case studies.

### 10.2 Implementation

1. **Environment variable:** Store the password in `.env.local`:
   ```
   CASE_STUDY_PASSWORD=your-password-here
   ```

2. **API route** (`src/app/api/unlock/route.ts`):
   - POST endpoint that accepts `{ password: string }`
   - Compares against `process.env.CASE_STUDY_PASSWORD`
   - On match: Sets an HTTP-only, secure, SameSite=strict cookie (`portfolio_unlocked=true`, expires in 7 days)
   - Returns `{ success: true }` or `{ success: false }`

3. **Middleware** (`src/middleware.ts`):
   - Matches routes `/work/hungie` and `/work/nscc`
   - Checks for the `portfolio_unlocked` cookie
   - If missing or invalid: Does NOT redirect — let the page render its own lock screen component
   - The page component itself checks for the cookie client-side and shows either LockScreen or content

4. **LockScreen component:**
   - Displayed on the locked page routes when not authenticated
   - Clean design consistent with site aesthetics
   - Password input + submit button
   - Calls the API route on submit
   - On success: Reloads the page (cookie is now set, content renders)
   - On failure: Shake animation + error message

### 10.3 Important

- Do NOT use Vercel's built-in password protection (that's a paid feature and protects the entire site)
- The password is a lightweight gate for portfolio case studies, not enterprise security
- The content behind the lock is currently a "Coming soon" placeholder — the actual case study designs don't exist yet

---

## 11. Image Handling

### 11.1 The Image Export Problem

The Figma MCP server **cannot export raster images**. A separate process is needed.

### 11.2 Image Export Script

Write a Node.js script (`scripts/export-figma-images.ts`) that:

1. Uses the **Figma REST API** (`GET /v1/files/:file_key/images` and `GET /v1/images/:file_key`) with the personal access token from `$FIGMA_PAT`
2. The Figma file key can be extracted from the URL: `in5EBObGnwpPthIKWmpRhu`
3. Traverses the file tree to find all image/photo nodes (nodes with image fills)
4. Exports each at **2x scale** as PNG (for raster) or SVG (for vector assets like icons/logos)
5. Saves to the appropriate directory under `public/images/`
6. Names files based on the node's layer name in Figma (sanitized to kebab-case)

**Fallback:** If the script encounters issues (some image types don't export cleanly via API), flag those images in the console output. The developer (Ritvik) can manually export those specific images from Figma.

### 11.3 Using Images in Components

- Use `next/image` for all images:
  ```tsx
  <Image
    src="/images/applenj/hero-before.png"
    alt="AppleNJ original website design"
    width={1200}
    height={800}
    className="..."
    placeholder="blur"
    blurDataURL="data:image/..."  // Generate blur placeholder
  />
  ```
- **Always** set `width` and `height` (or use `fill` with a sized container) to prevent CLS
- Set `priority` on the hero/LCP image of each page (disables lazy loading)
- Use `sizes` attribute for responsive images:
  ```tsx
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
  ```

### 11.4 Image Optimization

- Vercel automatically serves WebP/AVIF via `next/image`
- For case study images that appear full-width, export at 2x the max display width (e.g., if max display is 1200px, export at 2400px)
- For thumbnail/card images, export at 2x the card width
- Organize images by case study: `public/images/applenj/`, `public/images/pits/`, etc.

---

## 12. Performance Targets

| Metric | Target | How |
|--------|--------|-----|
| **LCP** | < 2.5s | `priority` on hero image, preload fonts, no render-blocking JS |
| **CLS** | < 0.1 | Width/height on all images, font `size-adjust`, no layout shifts |
| **INP** | < 200ms | Code-split below-fold with `next/dynamic`, minimal main-thread work |
| **Lighthouse Performance** | 90+ | All of the above + image optimization |
| **Lighthouse Accessibility** | 95+ | Semantic HTML, contrast, alt text, focus indicators |

### Fonts
- Self-host as WOFF2 via `next/font` (never use Google Fonts CDN — it adds a DNS lookup)
- Subset if files are large (remove unused character ranges)
- Maximum 3 font files total

### Code Splitting
- Each case study page is its own route (automatic code splitting in Next.js App Router)
- Use `next/dynamic` for heavy components that aren't above-the-fold:
  ```tsx
  const HeavySection = dynamic(() => import('./HeavySection'), {
    loading: () => <SectionSkeleton />,
  });
  ```

### Static Generation
- All pages should be statically generated (SSG) at build time
- The API route for password checking is the only server-side component
- Use `generateStaticParams` if needed (not required for this simple routing structure)

---

## 13. Accessibility Requirements

- **Semantic HTML:** Use `<main>`, `<nav>`, `<article>`, `<section>`, `<figure>` + `<figcaption>`, `<header>`, `<footer>`
- **Headings:** Proper hierarchy (h1 → h2 → h3, no skipped levels). One `<h1>` per page.
- **Alt text:** Descriptive for all meaningful images (e.g., "Heatmap analysis showing 14.9% attention on the hero heading and 0.7% on the primary CTA"). Empty `alt=""` for decorative images.
- **Color contrast:** Minimum 4.5:1 for normal text, 3:1 for large text (WCAG 2.2 AA)
- **Focus indicators:** Visible focus outlines on all interactive elements. Never `outline: none` without a replacement.
- **Keyboard navigation:** All interactive elements reachable via Tab. Escape closes modals/menus.
- **Tap targets:** Minimum 44×44 CSS pixels for all interactive elements
- **Skip link:** "Skip to main content" link visible on focus (first focusable element)
- **Reduced motion:** See Section 9.10
- **Language:** `<html lang="en">`

---

## 14. SEO

### Per-Page Metadata

Each page needs unique metadata using Next.js Metadata API:

```tsx
export const metadata: Metadata = {
  title: "Page Title | Pari Gill — Product Designer",
  description: "150-160 character description",
  openGraph: {
    title: "...",
    description: "...",
    images: [{ url: "/og/page-name.png", width: 1200, height: 630 }],
  },
};
```

### Sitemap

Use Next.js built-in sitemap generation:

```tsx
// src/app/sitemap.ts
export default function sitemap() {
  return [
    { url: "https://parigill.com", lastModified: new Date() },
    { url: "https://parigill.com/work", lastModified: new Date() },
    // ... all public pages
  ];
}
```

### Robots

```tsx
// src/app/robots.ts
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: "https://parigill.com/sitemap.xml",
  };
}
```

### Structured Data

Add `ProfilePage` JSON-LD schema on the landing page with `Person` entity linking to LinkedIn (`linkedin.com/in/pari-gill`).

---

## 15. Implementation Order

Execute in this exact order. Each phase is a logical unit that can be verified before proceeding.

### Phase 0: Foundation

1. Initialize the Next.js project (if not already done)
2. Install dependencies
3. Set up Figma MCP connection
4. **Query Figma for the design system** — extract all colors, typography, spacing
5. Configure `tailwind.config.ts` with the extracted design tokens
6. Set up `globals.css` with CSS custom properties and base styles
7. Set up fonts via `next/font`
8. Create the `LenisProvider` component
9. Create the `AnimatedSection` reusable component
10. Set up `lib/animations.ts` with GSAP presets
11. **Run the image export script** — get all images from Figma into `public/images/`
12. Commit: `feat: project foundation and design system`

### Phase 1: Layout Shell

1. Query Figma for the navigation design
2. Implement `Navigation.tsx` (desktop + mobile)
3. Query Figma for the footer design
4. Implement `Footer.tsx`
5. Wire up `layout.tsx` with nav, footer, Lenis, fonts
6. Verify: Nav and footer render correctly at all breakpoints
7. Commit: `feat: global layout with navigation and footer`

### Phase 2: Landing / About Page

1. Query Figma for the landing page — section by section
2. Implement hero section (with SplitText animation)
3. Implement about section
4. Implement selected work preview / project cards
5. Implement any remaining sections
6. **Screenshot compare** against Figma for each section
7. Add responsive behavior
8. Verify: Page matches Figma at desktop, tablet, mobile
9. Commit: `feat: landing page`

### Phase 3: Case Studies Summary Page

1. Query Figma for the work/summary page
2. Implement the project cards grid
3. Add hover animations
4. Add locked indicators for Hungie/NSCC cards
5. Screenshot compare
6. Responsive verification
7. Commit: `feat: case studies summary page`

### Phase 4: AppleNJ Case Study

1. Query Figma section by section (this is the longest page)
2. Implement hero
3. Implement each major section as a component
4. Screenshot compare each section individually
5. Add scroll animations
6. Add image reveals
7. Responsive verification (especially side-by-side layouts)
8. Commit: `feat: AppleNJ case study`

### Phase 5: PITS Case Study

1. Same approach as AppleNJ
2. Pay special attention to: heatmap images with data overlays, A/B test metrics, iteration sequence
3. Reuse shared case study components where possible (CaseStudyHero, MetricCard, etc.)
4. Screenshot compare, responsive verify
5. Commit: `feat: PITS case study`

### Phase 6: Locked Pages + Password System

1. Implement the API route for password verification
2. Implement the LockScreen component
3. Implement middleware for route protection
4. Create the locked page layouts (Hungie + NSCC)
5. Test: wrong password → shake + error; correct password → unlock + cookie set; revisit → stays unlocked
6. Commit: `feat: locked case studies with password protection`

### Phase 7: Contact Page

1. Query Figma for contact page design
2. Implement the page
3. Screenshot compare, responsive verify
4. Commit: `feat: contact page`

### Phase 8: Miscellany Page

1. Query Figma — if design exists, implement faithfully
2. If design is incomplete, create a styled placeholder
3. Commit: `feat: miscellany page`

### Phase 9: Polish & Performance

1. Run Lighthouse audit on every page
2. Fix any performance issues (images, fonts, code splitting)
3. Fix any accessibility issues
4. Test all animations with `prefers-reduced-motion`
5. Cross-browser test (Chrome, Firefox, Safari)
6. Verify all links work
7. Add SEO metadata to every page
8. Add sitemap and robots.txt
9. Commit: `feat: performance and accessibility polish`

### Phase 10: Deploy

1. Push to GitHub
2. `npx vercel` to deploy (or configure Vercel GitHub integration)
3. Verify the `.vercel.app` preview URL
4. Test password protection on deployed site
5. Share preview URL for review
6. Commit: `chore: production deployment`

---

## 16. Verification Checklist

Run through this after each phase AND at the end of the project.

### Per-Page Checks

- [ ] Layout matches Figma screenshot at 1440px width
- [ ] Layout is responsive and usable at 768px (tablet)
- [ ] Layout is responsive and usable at 375px (mobile)
- [ ] All text content matches Figma exactly (no typos, no missing text)
- [ ] All images are present and correctly sized
- [ ] All images have appropriate alt text
- [ ] All links navigate correctly
- [ ] Heading hierarchy is correct (h1 → h2 → h3, no skips)
- [ ] Scroll animations trigger correctly
- [ ] Hover states work on interactive elements
- [ ] Page is keyboard navigable
- [ ] No horizontal scrollbar at any breakpoint (unless intentional)

### Global Checks

- [ ] Navigation works on all pages (desktop + mobile)
- [ ] Footer is consistent across all pages
- [ ] Smooth scrolling works site-wide
- [ ] Password protection works (lock, unlock, cookie persistence)
- [ ] `prefers-reduced-motion` disables all animations
- [ ] Lighthouse Performance ≥ 90 on all pages
- [ ] Lighthouse Accessibility ≥ 95 on all pages
- [ ] No console errors or warnings
- [ ] All pages have unique, descriptive `<title>` and meta description
- [ ] Favicon is set (extract from Figma if available, or use Pari's logo)
- [ ] Open Graph images are set for social sharing
- [ ] Site works on Chrome, Firefox, Safari
- [ ] Deployed URL is accessible and matches local development

---

## 17. DO NOT List

These are explicit constraints. Violating any of these is a bug.

- **DO NOT** improvise visual design — match the Figma exactly
- **DO NOT** use placeholder/stock images — all images come from the Figma file
- **DO NOT** use Inter, Roboto, or Open Sans as fonts (common AI defaults) — use only the fonts from Figma
- **DO NOT** use purple/blue gradient backgrounds (common AI default)
- **DO NOT** install UI component libraries (shadcn, MUI, Chakra, etc.)
- **DO NOT** install Framer Motion — use GSAP
- **DO NOT** use Google Fonts CDN — self-host via next/font
- **DO NOT** use `// @ts-ignore` or `any` types — fix type errors properly
- **DO NOT** skip alt text on images
- **DO NOT** remove focus outlines without providing visible alternatives
- **DO NOT** use `localStorage` or `sessionStorage` for password state — use HTTP-only cookies
- **DO NOT** connect the custom domain (parigill.com) — use the Vercel preview URL only
- **DO NOT** make the site depend on JavaScript for core content — case study text and images must be visible even if JS fails (SSG handles this)
- **DO NOT** over-animate — animations enhance the work, they don't compete with it
- **DO NOT** add a blog, CMS, or database — this is a purely static portfolio
- **DO NOT** skip the screenshot comparison loop — compare every section against Figma
- **DO NOT** reference AI, Claude, LLMs, or AI authorship in commit messages, code comments, PR descriptions, or anywhere in the codebase — commit messages should read as if written by a human developer

---

## 18. CLAUDE.md Template

Place this in the repo root so the Code Agent reads it on every session:

```markdown
# CLAUDE.md

## Project
Pari Gill's portfolio site — parigill.com

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- GSAP + @gsap/react + Lenis
- Deployed on Vercel (preview URL only for now)

## Key Files
- `PORTFOLIO_SPEC.md` — Master spec (single source of truth)
- `tailwind.config.ts` — Design tokens from Figma
- `src/styles/globals.css` — CSS custom properties and global styles
- `src/components/layout/LenisProvider.tsx` — Smooth scroll wrapper

## Figma
- Use the Figma MCP server to fetch design context for each section
- File: https://www.figma.com/design/in5EBObGnwpPthIKWmpRhu/Portfolio
- ALWAYS screenshot-compare your implementation against Figma
- Query section-by-section, not entire pages

## Design Principles
- Pixel-faithful to Figma — never improvise visual design
- Animations: polished but restrained (see PORTFOLIO_SPEC.md Section 9)
- Mobile-first responsive design
- Accessibility first (WCAG 2.2 AA)

## DO NOT
- Use Inter/Roboto/Open Sans (use fonts from Figma)
- Use purple gradients or "AI slop" aesthetics
- Install UI libraries, Framer Motion, or CSS-in-JS
- Skip screenshot comparison after implementing any section
- Connect custom domain (use Vercel preview URL)
- Reference AI, Claude, or AI authorship in commits, comments, or code

## Commit Convention
feat: / fix: / chore: / style: — one concise line, no AI references
```
