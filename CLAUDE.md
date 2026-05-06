# Project notes for Claude

Static site for **Znanje za Spanje** — Eva's Slovenian baby sleep coaching service. Live at https://znanjezaspanje.netlify.app.

## Stack
Eleventy 2.x + Tailwind 3 + DaisyUI 4 + Decap CMS, deployed to Netlify on push to `master`. Full details in [README.md](README.md). Content checklist in [CONTENT.md](CONTENT.md).

## When working with DaisyUI
**Fetch https://daisyui.com/llms.txt via WebFetch** for authoritative docs on components, modifiers, themes, and config options. Especially useful when:
- Adding a new daisy component
- Customizing the `zzs` theme in [tailwind.config.js](tailwind.config.js)
- Debugging why a daisy class isn't behaving as expected
- Choosing between similar components (navbar vs menu vs drawer, modal vs dialog)

## Content language
Page content is **Slovenian**. README and CLAUDE.md are English. [CONTENT.md](CONTENT.md) is Slovenian (Eva's checklist of placeholders to replace).

## Watch out
- Branch is `master`, not `main`. The Decap CMS config and Netlify deploy hooks reference `master`.
- `package.json` scripts intentionally invoke tools via `node node_modules/.../cli.js` instead of `npx`. **Do not "modernize" back to `npx`** — that breaks the Netlify Linux build with `Permission denied` on the `.bin` symlink.
- `dist/` is gitignored but may still appear in historical commits. Netlify rebuilds fresh, so this is harmless.
- The `home`, `site` data files (`src/_data/*.yml`) are CMS-editable; `_data/build.js` is computed (current year for footer).
