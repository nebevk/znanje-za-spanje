const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

function hex(value, fallback) {
  const v = String(value || "").trim();
  return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v) ? v : fallback;
}

let site = {};
try {
  site = yaml.load(fs.readFileSync(path.join(__dirname, "../src/_data/site.yml"), "utf8")) || {};
} catch (err) {
  site = {};
}

const primary = hex(site.color_primary, "#1A5C4A");
const accent = hex(site.color_accent, "#C9B896");
const secondary = hex(site.color_secondary, "#2C3540");

const css = `/* Generated from src/_data/site.yml — do not edit by hand. */
:root {
  --p: ${primary};
  --a: ${accent};
  --s: ${secondary};
  --ink: #1a1f26;
  --paper: #f2f4f6;
  --muted: rgba(26, 31, 38, 0.68);
}

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: Figtree, ui-sans-serif, system-ui, sans-serif;
  font-size: 17px;
  line-height: 1.6;
}

.preview-frame {
  max-width: 42rem;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 4rem;
}

.preview-kicker {
  display: inline-block;
  margin: 0 0 0.75rem;
  padding: 0.15rem 0.55rem;
  border-radius: 0.375rem;
  background: var(--s);
  color: #e8edf0;
  font-size: 0.75rem;
  letter-spacing: 0.02em;
}

h1, h2, h3, .preview-display {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.15;
  text-wrap: balance;
}

h1 { font-size: 2.6rem; margin: 0 0 0.6rem; }
h2 { font-size: 1.8rem; margin: 2rem 0 0.75rem; }
h3 { font-size: 1.35rem; margin: 1.5rem 0 0.5rem; }

.preview-meta {
  margin: 0 0 1.75rem;
  color: var(--muted);
  font-size: 0.9rem;
}

.post-body p { margin: 0 0 1rem; color: rgba(26, 31, 38, 0.88); }
.post-body ul, .post-body ol { margin: 0 0 1rem; padding-left: 1.25rem; }
.post-body li { margin: 0.25rem 0; }
.post-body a { color: var(--p); }
.post-body blockquote {
  margin: 1.5rem 0;
  padding-left: 1rem;
  border-left: 4px solid color-mix(in srgb, var(--p) 40%, transparent);
  font-style: italic;
  color: var(--muted);
}
.post-body img { max-width: 100%; height: auto; border-radius: 0.75rem; }

.preview-quote {
  margin: 0;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 1.7rem;
  font-style: italic;
  line-height: 1.35;
}
.preview-quote:before { content: "“"; color: var(--p); margin-right: 0.15rem; }
.preview-by { margin-top: 1rem; font-size: 0.9rem; }
.preview-by span { color: var(--muted); }

.preview-card {
  background: #fff;
  border: 1px solid #e2e6ea;
  border-radius: 0.75rem;
  padding: 1.25rem 1.35rem;
}
.preview-price { font-family: "Cormorant Garamond", Georgia, serif; font-size: 1.8rem; margin: 0.4rem 0; }
.preview-features { margin: 0.8rem 0 0; padding: 0; list-style: none; }
.preview-features li { padding: 0.2rem 0 0.2rem 1.2rem; position: relative; }
.preview-features li:before { content: ""; position: absolute; left: 0; top: 0.55rem; width: 0.45rem; height: 0.25rem; border-left: 2px solid var(--p); border-bottom: 2px solid var(--p); transform: rotate(-45deg); }

.preview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem 1rem;
  background: #fff;
  border-bottom: 1px solid #e2e6ea;
}
.preview-brand { display: flex; align-items: center; gap: 0.7rem; min-width: 0; }
.preview-brand img { width: 44px; height: 44px; object-fit: contain; }
.preview-brand strong { display: block; font-family: "Cormorant Garamond", Georgia, serif; font-size: 1.35rem; line-height: 1; }
.preview-brand small { color: var(--muted); }
.preview-nav { display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; font-size: 0.85rem; }
.preview-nav a { color: var(--ink); text-decoration: none; }
.preview-cta {
  background: var(--p);
  color: #f4f7f5 !important;
  padding: 0.35rem 0.7rem;
  border-radius: 0.5rem;
}
.preview-swatches { display: flex; gap: 0.75rem; margin-top: 1.25rem; }
.preview-swatch { width: 4.5rem; }
.preview-swatch i { display: block; height: 2.4rem; border-radius: 0.4rem; border: 1px solid #e2e6ea; }
.preview-swatch span { display: block; margin-top: 0.3rem; font-size: 0.75rem; color: var(--muted); }
`;

const out = path.join(__dirname, "../admin/preview.css");
fs.writeFileSync(out, css);
console.log("Wrote", out);
