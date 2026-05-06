module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addWatchTarget("assets/css/main.css");
  eleventyConfig.addPassthroughCopy("assets/css/main.css");

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

  return {
    dir: { input: "src", output: "dist" },
  };
};
