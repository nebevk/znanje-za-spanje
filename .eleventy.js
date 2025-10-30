
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("assets");
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
