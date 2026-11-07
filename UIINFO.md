# Antonio Enriquez Construction — Duna-Inspired Design System

## Reference and intent

The primary reference is the live [Duna website](https://duna.com/), reviewed for its navigation, opening composition, editorial rhythm, restrained surfaces, calls to action, feature sections, and footer. The supplemental [Duna style extraction](https://styles.refero.design/style/8cf4a580-bfb6-4090-a899-f734ffe62370) informs measured tokens where the live page does not expose exact values.

Duna pairs a warm, almost-white canvas with aubergine-black text, compact pill controls, compressed sans-serif headlines, thin borders, and generous whitespace. A landscape illustration is its main expressive image; supporting content remains calm and mostly achromatic. For Antonio Enriquez Construction, use real company project photographs as the visual anchor. Do not represent conceptual or generated imagery as completed company work.

The live Duna site is a B2B product website. Preserve its visual principles—editorial headline scale, a quiet pill navigation, atmospheric hero image, clear content bands, case-study style proof, alternating image-and-copy sections, and structured footer—while using only Antonio Enriquez Construction's routes, services, project photos, and contact information.

## Color tokens

| Token | Hex | Use |
|---|---|---|
| `--ink` / Aubergine Ink | `#1b0624` | Main text, display headings, outlines, and selected icon strokes |
| `--espresso` | `#160f0c` | Filled primary CTA and selected pressed surfaces |
| `--onyx` | `#0d0d0d` | Small dark graphic details |
| `--smoke` | `#1a1816` | Dark secondary UI detail |
| `--charcoal` | `#292421` | Secondary dark fill and hover treatment |
| `--graphite` | `#444444` | Body copy and supporting text |
| `--warm-ash` | `#766a7c` | Muted copy, metadata, and subdued borders |
| `--stone` | `#898683` | Tertiary labels and dividers |
| `--bone` | `#edece7` | Warm card surface and quiet section contrast |
| `--mist` | `#eeeeee` | Input surface |
| `--linen` | `#f7f7f5` | Main page canvas |
| `--paper` | `#ffffff` | Cards and high-contrast surfaces |

The palette is intentionally restrained. Do not introduce blue, green, orange, or saturated accent colors into interface chrome. Let project photography carry natural color. Avoid gradients, glow, decorative grids, and drop shadows.

## Typography

Use a geometric neo-grotesque sans throughout, matching Duna's GT America treatment. The project uses local/system fallbacks (`Inter`, system sans, Arial) so builds do not depend on downloading fonts. Do not use a display serif for headlines.

| Role | Size | Weight | Line height | Tracking |
|---|---:|---:|---:|---:|
| Display | 72–80px | 400–500 | 1.0 | `-0.06em` |
| Large heading | 44px | 400 | 1.1 | `-0.05em` |
| Section heading | 32px | 400 | 1.2 | `-0.03em` |
| Subheading | 24px | 400 | 1.3 | `-0.02em` |
| Body large | 20px | 400 | 1.4 | `-0.01em` |
| Body | 16–18px | 400 | 1.5–1.6 | normal |
| Caption | 14px | 400 | 1.5 | normal |
| Micro label | 12px | 400–500 | 1.2 | slight positive tracking |

Scale headlines responsively and use tight tracking only at display sizes. Use medium emphasis sparingly. Avoid all-caps display headlines and heavy bold weights.

## Layout and spacing

- Base spacing unit: 4px.
- Main content width: 1200px maximum.
- Page gutters: 20px on narrow screens; 5vw with a 64px cap on wide screens.
- Major section separation: 80–132px desktop; 64–80px mobile.
- Typical card padding: 24–32px.
- Typical component gap: 16px.
- Use broad, quiet content bands. Give each section one clear message and let images and text breathe.
- Favor asymmetrical editorial grids: copy aligned to a strong edge, paired with large landscape or portrait project photography.
- Use 3-column feature grids only when the content is genuinely parallel; collapse to two columns and then one as space requires.

## Surfaces and shape

- Canvas: Linen `#f7f7f5`.
- Cards: Paper `#fff` with a fine aubergine-tinted border; Bone `#edece7` for secondary emphasis.
- Border: usually 1px `rgba(27, 6, 36, .10–.18)`.
- Cards: 16–20px radius.
- Images: 24px radius and natural color treatment.
- Inputs: 8–10px radius on Mist background with a clear border and visible focus ring.
- Buttons and tags: fully rounded `999px`.
- Elevation comes from paper/bone contrast and hairline borders. Do not use floating shadows.

## Navigation

Keep a compact floating or sticky pill-shaped header on the Linen canvas. Wordmark and business name sit at left; the existing page routes remain easy to reach; one filled Espresso pill points to the estimate flow. Use clear active, hover, keyboard-focus, and mobile menu states. The mobile menu uses the same warm canvas and a prominent estimate action. Do not hide route links behind a novel interaction.

## Buttons and links

- Primary: Espresso fill, white label, pill radius; concise task-specific language and a small directional cue where useful.
- Secondary: transparent or Paper fill, aubergine text, thin border, pill radius.
- Text links: Aubergine Ink, underline or arrow on hover; no colored accent.
- Focus: visible 2px Aubergine Ink outline with a 3px offset.
- State changes: 200ms ease for color, border, opacity, and small positional changes.
- Respect `prefers-reduced-motion`; avoid parallax and continuous decorative motion.

## Images

Use authentic files from `public/` for real construction work and label them as company project photographs only when the repository provides them as such. Crop for clear architecture and material details; avoid heavy overlays and saturation filters. Provide descriptive alt text. A conceptual asset, if ever introduced, must be clearly labeled as illustrative and never shown as completed work.

## Forms

Preserve the current quote wizard's fields, data flow, SMS/email message preview, navigation between steps, and links. Set labels above controls, use readable 16px text, keep inputs on Mist, and retain selected, invalid, focus, and disabled states with accessible contrast. Keep steps clear and show progress without making it decorative.

## Responsive behavior

- Wide desktop: 1200px content frame, paired editorial columns, expansive project imagery.
- Tablet (around 900px): reduce headline scale and gutters; collapse multi-column feature rows where copy or photos need room.
- Mobile (around 640px): 20px page gutter; 42–60px page headline; single-column content; short navigation menu; full-width primary CTA when appropriate; preserve image focal points and comfortable touch targets.
- Prevent horizontal overflow in project captions, email addresses, and form previews.
- Maintain readable paragraph measures and intentional section spacing at all widths.

## Component guidance

- **Hero:** one eyebrow or context line, a concise oversized headline, one supportive paragraph, one primary action, and a strong real-project image.
- **Trust strip:** use only verified facts already present in the company materials. Do not add testimonials, project totals, awards, or credentials without evidence.
- **Service modules:** concise service name and plain-language description on white or bone; minimal icons; no saturated tiles.
- **Project gallery:** authentic photos first, restrained rounded crop, keyboard-accessible lightbox controls, meaningful alt text.
- **About/story:** introduce the real company and founder, explain the hands-on process, and preserve verified business details.
- **Contact:** preserve all existing methods, contact details, labels, and content meaning; make each contact path easy to scan.
- **Footer:** brand, core route links, legal links, location, and existing copyright/developer credit.

## Content and factual standards

Write in direct, natural English. Keep copy specific to construction and to the customer's next decision. Avoid empty superlatives, slogans, unsupported guarantees, made-up testimonials, and repeated claims. Preserve business facts and contact details already present in the repository. Keep legal privacy and terms language accurate in meaning.

## Live-reference observations

The live Duna homepage currently opens with a floating navigation containing product/solution/company/resource groups and one filled demo action; a large landscape illustration and a compact customer-story marker frame its oversized headline. It continues through a customer logo band, selected operational metrics, a trust statement, testimonial proof, product sections pairing short copy with interface imagery, customer stories, and a multi-column footer. The construction adaptation uses the same pacing and hierarchy but replaces Duna's product language with service, project, company, and estimate content.
