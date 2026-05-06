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

  return {
    dir: { input: "src", output: "dist" },
  };
};
