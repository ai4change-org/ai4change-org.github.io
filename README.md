# AI4Change Website

The official website for **AI4Change** — a global open-source movement where real people use AI as their instrument to solve humanity's most pressing problems. Together.

Inspired by [Playing for Change](https://playingforchange.com).

**Live site:** [ai4change.org](https://ai4change.org)

## File Structure

```
.
├── index.html              # Homepage — hero, how it works, seed problems, FAQ
├── about.html              # Origin story and mission
├── manifesto.html          # The AI4Change manifesto
├── problems.html           # Problem board — seed problems + submit your own
├── join.html               # Ways to get involved
├── contributors.html       # Community contributors
├── first-song.html         # First Song — vote on the first project to build
├── 404.html                # Custom 404 page
├── blog/
│   ├── index.html          # Blog listing
│   ├── 001-why-ai4change.html
│   └── 002-first-five-problems.html
├── assets/
│   ├── logo.svg            # AI4Change logo
│   ├── favicon.svg         # Favicon
│   ├── og-image.png        # Social sharing image (1200x630)
│   ├── og-image.html       # OG image template (screenshot to regenerate PNG)
│   ├── hero-illustration.svg
│   ├── icon-192.svg        # PWA icon
│   ├── icon-512.svg        # PWA icon
│   └── BRAND.md            # Brand guidelines
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker
├── robots.txt
├── sitemap.xml
└── CNAME                   # Custom domain config
```

## Local Development

No build step required. Just open any HTML file in your browser:

```bash
# Option 1: Open directly
open index.html

# Option 2: Use a local server (recommended for absolute paths)
python3 -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Use npx
npx serve .
```

Using a local server is recommended because the site uses absolute paths (e.g., `/assets/logo.svg`, `/about.html`) which only resolve correctly when served from a root URL.

## Deployment

The site deploys automatically via **GitHub Pages** on every push to the `main` branch.

- **Branch:** `main`
- **Custom domain:** `ai4change.org` (configured via `CNAME` file)
- **HTTPS:** Enforced by GitHub Pages

## How to Contribute

### Website improvements

1. Fork the repo
2. Create a branch (`git checkout -b fix/my-improvement`)
3. Edit the HTML/CSS directly — no framework, no build tools
4. Test locally with a local server
5. Submit a pull request

### Submit a problem

Real-world problems are tracked as GitHub Issues in the [problems repo](https://github.com/ai4change-org/problems/issues). Anyone can submit a problem they've witnessed.

### Report a bug

Open an issue on this repo describing what's broken and which page it's on.

## Tech Stack

- **Pure HTML/CSS/JS** — no frameworks, no build step
- **GitHub Pages** — hosting
- **PWA** — service worker + manifest for offline support
- **Google Fonts** — Inter + Space Grotesk
- Dark/light mode with system preference detection

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Emerald Teal | `#00D4AA` | Primary — growth, technology, hope |
| Electric Violet | `#7C3AED` | Secondary — AI, creativity, possibility |
| Warm Coral | `#FF6B35` | Accent — humanity, energy, urgency |
| Deep Space | `#0A0E1A` | Dark background |
| Mint Cream | `#F0FDF9` | Light background |

See [`assets/BRAND.md`](assets/BRAND.md) for full brand guidelines.

## License

MIT
