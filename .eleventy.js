const yaml = require("js-yaml");

// Lucide icons (https://lucide.dev) — MIT licensed. Inlined as path data so the
// site stays dependency-free at runtime. Add new icons here as needed.
const ICONS = {
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  "refresh-cw":
    '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/>',
  timer:
    '<line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/>',
  sunrise:
    '<path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 6 4-4 4 4"/><path d="M16 18a4 4 0 0 0-8 0"/>',
  "hand-helping":
    '<path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"/><path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 13 6 6"/>',
  route:
    '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  heart:
    '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  sprout:
    '<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  instagram:
    '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
  video:
    '<path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2"/>',
  "shield-check":
    '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
};

// Knowledge-base categories. Single source of truth for the blog taxonomy.
// Keep the `value`s in sync with the category select in admin/config.yml.
const CATEGORIES = [
  { slug: "osnove", label: "Osnove spanja" },
  { slug: "prebujanja", label: "Nočna prebujanja" },
  { slug: "ritem", label: "Dnevni spanci in ritem" },
  { slug: "prehodi", label: "Prehodi" },
  { slug: "hranjenje", label: "Hranjenje in spanje" },
  { slug: "starost", label: "Starostna obdobja" },
];

module.exports = function (eleventyConfig) {
  // Eleventy does not parse YAML data files (_data/*.yml) by default.
  // Register the extension so site.yml / home.yml load as global data.
  eleventyConfig.addDataExtension("yml,yaml", (contents) => yaml.load(contents));

  eleventyConfig.addShortcode("icon", (name, classes = "w-6 h-6") => {
    const body = ICONS[name];
    if (!body) return "";
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classes}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
  });

  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addWatchTarget("assets/css/main.css");
  eleventyConfig.addPassthroughCopy("assets/css/main.css");

  // Vendor the Fuse.js ES module into assets so search.js can import it locally.
  eleventyConfig.addPassthroughCopy({
    "node_modules/fuse.js/dist/fuse.min.mjs": "assets/js/fuse.min.mjs",
  });

  // Knowledge-base taxonomy available to all templates.
  eleventyConfig.addGlobalData("categories", CATEGORIES);

  eleventyConfig.addFilter("categoryLabel", (slug) => {
    const c = CATEGORIES.find((x) => x.slug === slug);
    return c ? c.label : "";
  });

  eleventyConfig.addFilter(
    "relatedPosts",
    (posts, currentUrl, category, limit = 3) => {
      if (!category) return [];
      return (posts || [])
        .filter((p) => p.url !== currentUrl && p.data.category === category)
        .reverse()
        .slice(0, limit);
    }
  );

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    return d.toLocaleDateString("sl-SI", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  });

  eleventyConfig.addFilter("sortByOrder", (collection) => {
    return [...(collection || [])].sort(
      (a, b) => (a.data.order ?? 0) - (b.data.order ?? 0)
    );
  });

  eleventyConfig.addFilter("readingTime", (content) => {
    if (!content) return "";
    const text = String(content).replace(/<[^>]+>/g, "");
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min branja`;
  });

  eleventyConfig.addFilter("startsWith", (str, prefix) =>
    String(str || "").startsWith(prefix)
  );

  return {
    dir: { input: "src", output: "dist" },
  };
};
