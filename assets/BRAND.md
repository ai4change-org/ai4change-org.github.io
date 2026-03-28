# AI4Change Brand Guidelines

## Mission Statement

AI4Change is a global open-source movement where real people use AI as their instrument to solve humanity's most pressing problems. Together. In the open.

Inspired by [Playing for Change](https://playingforchange.com) — but with code, not chords.

---

## Colors

### Primary Palette

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Emerald Teal** | `#00D4AA` | `0, 212, 170` | Primary brand color. CTAs, links, highlights, success states |
| **Electric Violet** | `#7C3AED` | `124, 58, 237` | Secondary. Accent elements, gradients, emphasis |
| **Warm Coral** | `#FF6B35` | `255, 107, 53` | Accent. Alerts, warm highlights, energy |
| **Deep Dark** | `#0A0E1A` | `10, 14, 26` | Background (dark mode), text on light backgrounds |
| **Soft Light** | `#F0FDF9` | `240, 253, 249` | Background (light mode) |

### Supporting Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Muted Slate** | `#94A3B8` | Secondary text, captions, metadata |
| **Sky Blue** | `#5B8DEF` | Info states, links, secondary accents |
| **Hot Pink** | `#FF3CAC` | Tertiary accent, gradients |

### Gradients

| Name | CSS | Usage |
|------|-----|-------|
| **Brand Glow** | `linear-gradient(135deg, #00D4AA, #7C3AED)` | Primary gradient. Logo, headings, CTAs |
| **Warm Fire** | `linear-gradient(135deg, #FF6B35, #FF3CAC)` | Accent gradient. Alerts, energy |
| **Hero** | `linear-gradient(135deg, #0A0E1A, #1A1040, #0D2847)` | Dark backgrounds, hero sections |

### Color Accessibility

- All text combinations meet WCAG AA contrast requirements minimum
- Primary teal on dark background: 8.2:1 contrast ratio
- Never place teal text on violet backgrounds (insufficient contrast)
- Use `--brand-muted` (#94A3B8) only for secondary/tertiary text, not primary content

---

## Typography

### Font Stack

| Role | Font | Weights | Fallback |
|------|------|---------|----------|
| **Headings** | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) | 400, 500, 600, 700, 800 | sans-serif |
| **Body** | [Inter](https://fonts.google.com/specimen/Inter) | 300, 400, 500, 600, 700 | -apple-system, BlinkMacSystemFont, sans-serif |

### Scale

| Element | Size | Weight | Letter Spacing |
|---------|------|--------|----------------|
| H1 (Hero) | `clamp(2.8rem, 7vw, 5.5rem)` | 800 | -0.03em |
| H2 (Section) | `clamp(2rem, 4.5vw, 3.25rem)` | 700 | -0.02em |
| H3 (Card) | `1.15rem - 1.25rem` | 600-700 | normal |
| Body | `1rem` | 400 | normal |
| Small/Meta | `0.85rem - 0.9rem` | 500 | normal |
| Label | `0.75rem` | 700 | 0.2em (uppercase) |

---

## Logo

### Primary Logo

The AI4Change logo is the wordmark "AI4Change" set in **Space Grotesk Bold (700)** with the Brand Glow gradient applied.

```css
.logo {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    background: linear-gradient(135deg, #00D4AA, #7C3AED);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.02em;
}
```

### Logo Usage Rules

- **Minimum size**: 16px font size (digital), 10pt (print)
- **Clear space**: Maintain at least 0.5em padding around the logo
- **On dark backgrounds**: Use the gradient version (default)
- **On light backgrounds**: Use the gradient version or solid `#0A0E1A`
- **Never**: Rotate, stretch, add drop shadows, place on busy backgrounds, or change the gradient colors
- **SVG version**: Available at `/assets/logo.svg`

---

## Voice & Tone

### Brand Voice

| Attribute | Description | Example |
|-----------|-------------|---------|
| **Hopeful urgency** | We're optimistic but not naive. Problems are real. Solutions are possible | "The problems are hard because the people closest to them are furthest from the tools" |
| **Human-first** | People before technology. Stories before specs | "Every solution starts with a problem worth solving" |
| **Direct** | No corporate speak. No jargon shields | "This is not a company. It's an open invitation" |
| **Inclusive** | Everyone belongs. No gatekeeping | "No technical background needed" |
| **Never corporate** | We're a movement, not a startup | Avoid: "leverage", "synergy", "stakeholder alignment", "circle back" |

### Writing Guidelines

- Use active voice
- Keep sentences short and punchy
- Lead with the human impact, not the technology
- Use contractions (we're, it's, don't)
- Use em dashes for emphasis — like this
- Avoid exclamation marks (the content should carry the energy)
- When in doubt, ask: "Would a person say this to a friend?"

---

## Iconography

We use emoji as primary icons for simplicity and universal rendering:

| Category | Emoji |
|----------|-------|
| Agriculture | &#x1F33E; |
| Education | &#x1F393; &#x1F4DA; |
| Health | &#x1F3E5; &#x1F9E0; |
| Environment | &#x1F30D; &#x1F30A; |
| Energy | &#x26A1; |
| Water | &#x1F4A7; |
| Disaster | &#x1F6A8; |
| Community | &#x1F465; |
| Code | &#x1F4BB; |
| Story | &#x1F3AC; |

---

## Components

### Buttons

| Type | Background | Text Color | Usage |
|------|-----------|------------|-------|
| Primary | Brand Glow gradient | `#0A0E1A` | Main CTAs |
| Secondary | Violet gradient | White | Secondary CTAs |
| Ghost | Transparent + border | White/Dark | Tertiary actions |
| Accent | Warm Fire gradient | White | Special emphasis |

All buttons use `border-radius: 100px` (pill shape), `font-weight: 600`, and subtle hover animations (`translateY(-2px)`).

### Cards

- Background: `rgba(255,255,255,0.025)` (dark) / `rgba(0,0,0,0.02)` (light)
- Border: `1px solid rgba(255,255,255,0.06)` (dark) / `rgba(0,0,0,0.08)` (light)
- Border radius: `20px - 24px`
- Hover: Lift (`translateY(-6px)`) + glow shadow
- Top gradient accent bar: `3px` height, varies by context

---

## Social Links

| Platform | Handle | URL |
|----------|--------|-----|
| GitHub | ai4change-org | https://github.com/ai4change-org |
| X / Twitter | @ai4changeorg | https://twitter.com/ai4changeorg |
| LinkedIn | AI4Change | https://linkedin.com/company/ai4change |
| YouTube | @ai4change | https://youtube.com/@ai4change |
| Discord | ai4change | https://discord.gg/ai4change |

---

## Tagline

> Built with ❤️ and AI

---

*These guidelines are living documents. As AI4Change grows, the brand evolves with its community.*
