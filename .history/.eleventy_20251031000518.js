
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addWatchTarget("assets/css/main.css");
  eleventyConfig.addPassthroughCopy("assets/css/main.css");
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
