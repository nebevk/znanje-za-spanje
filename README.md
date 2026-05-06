Znanje za Spanje — Eleventy + Tailwind + DaisyUI + Decap CMS
=============================================================

Brand: Znanje za Spanje
Coach: Eva
Live: https://znanjezaspanje.netlify.app

## Stack
- **Eleventy 2.0** — static site generator (`src/` → `dist/`)
- **Tailwind CSS 3** + **DaisyUI 4** — design system, custom `zzs` theme tuned to Soft + Warm + Calm palette
- **Nunjucks** layouts (`src/_includes/`) + **Markdown** pages
- **Decap CMS** at `/admin/` — git-based content editor for Eva
- **Netlify** — hosting, Identity + Git Gateway for CMS auth, native form handling for the contact form

## Local development
```bash
npm install
npm run start          # runs Eleventy + Tailwind in parallel
# open http://localhost:8080
```

`npm run start` runs `dev:eleventy` and `dev:css` together — both watch on save.

## Build
```bash
npm run build          # compiles Tailwind, then builds Eleventy → dist/
```

## Project layout
```
src/
  _data/              # global data (site.yml, home.yml) — auto-injected as {{ site.* }}, {{ home.* }}
  _includes/
    base.njk          # site shell (navbar + footer)
    post.njk          # individual blog post layout
  posts/              # blog posts (markdown). posts.json sets layout + permalink + tag
  blog/index.md       # blog listing
  index.md            # homepage
  o-meni.md           # About
  storitve/index.md   # Services
  kontakt.md          # Contact (Netlify form)
  styles/tailwind.css # Tailwind entry + custom @layer styles
admin/
  index.html          # bootstraps Decap CMS
  config.yml          # collections (posts, services, testimonials) and site settings fields
.eleventy.js          # Eleventy config + custom filters (readableDate)
tailwind.config.js    # Tailwind + DaisyUI theme (zzs)
```

## Logging in to the CMS

The CMS lives at https://znanjezaspanje.netlify.app/admin/ and uses **Netlify Identity** for authentication.

### First-time setup (one-time, by site owner in Netlify)

1. Netlify dashboard → **Site configuration** → **Identity** → **Enable Identity**
2. **Identity** → **Registration**: set to **Invite only** (recommended — prevents random sign-ups)
3. **Identity** → **Services** → **Git Gateway** → **Enable**
4. **Identity** → **Invite users** → enter Eva's email → send invite

Eva receives a confirmation email → click → set password → done.

### Logging in (everyday)

1. Go to https://znanjezaspanje.netlify.app/admin/
2. Click **Login**
3. Enter email + password

Forgot password? Click **Forgot password?** on the login screen — Netlify sends a reset link.

## Adding a blog post via CMS

1. Login to https://znanjezaspanje.netlify.app/admin/
2. Sidebar → **Blog / Nasveti**
3. Top-right → **New Blog / Nasveti**
4. Fill in:
   - **Title** — post headline
   - **Date** — display date (defaults to now)
   - **Body** — full article in the rich-text editor (supports headings, lists, links, images, quotes)
5. To insert an image: drop the file into the editor, or use the image button — it uploads to `assets/images/` automatically
6. Top bar → **Save** (draft, only the editor sees it) or **Publish now** (commits to `master` → Netlify rebuilds → live in ~1 minute)

The post appears at `/blog/<slug>/` where `<slug>` is the URL-safe form of the title.

## Adding testimonials

CMS sidebar → **Mnenja mamic** → **New Mnenja mamic**

| Field | Purpose |
|---|---|
| Quote | The testimonial text |
| Author | Name (e.g. "Maja") |
| Role | Context (e.g. "mama 10-mesečnega fantka") — optional |
| Order | Sort number (1 = first on homepage, 2 = second…) — optional |
| Photo | Avatar — optional |

Publish → appears on the homepage in the order set.

## Adding / editing services

CMS sidebar → **Storitve** → open existing or **New Storitve**.

| Field | Purpose |
|---|---|
| Title | Service name |
| Summary | Short text shown on the card |
| Badge | Small label above title (e.g. "Osnovni", "Najbolj priljubljeno") |
| Featured | Checkbox — if ticked, the card is highlighted (primary color, scaled up) |
| Order | Position (1 = leftmost) |
| Full description | Optional longer markdown body |

> Tip: Mark only **one** service as Featured at a time so the highlighted card stands out.

## Editing site-wide content

Two single-file pages live under **Files** in the CMS sidebar:

- **Splošno (site settings)** — brand name, contact email, Instagram handle (used in footer + contact page)
- **Domov - vsebina** — homepage hero title/subtitle/image and the "Komu pomagam" paragraph

## Manual editing (developer workflow)

Posts (and any collection entry) are just markdown files. To add a post by hand, create `src/posts/<slug>.md`:

```markdown
---
title: "Post title"
date: 2026-05-06
---
Body in markdown.
```

The post auto-inherits `layout: post.njk`, the `posts` tag, and the `/blog/<slug>/` permalink from [`src/posts/posts.json`](src/posts/posts.json).

Same pattern for `src/testimonials/<slug>.md` and `src/services/<slug>.md` — see existing files for the front-matter shape.

## What's missing / still TODO

See [CONTENT.md](CONTENT.md) for the checklist of placeholder content Eva needs to replace before launch.

## Deploy
- Netlify build command: `npm run build`
- Publish directory: `dist`
- Required: enable **Identity** + **Git Gateway** (Site settings → Identity → Services → Git Gateway)

## Customizing the design
- Theme colors live in `tailwind.config.js` under `daisyui.themes[0].zzs`
- Component utilities (`.section`, `.post-body`) live in `src/styles/tailwind.css`
- DaisyUI components: https://daisyui.com/components/

## Notes
- Replace placeholder images at `assets/images/eva.jpg` and `assets/images/hero-placeholder.jpg`
- To embed Calendly: paste the Calendly snippet into `src/kontakt.md` where the `mockup-window` placeholder is
