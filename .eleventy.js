module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("APIBaseURL", function () {
    return "localhost:4000";
    //    return process.env.URL_BASE;
  });
  //  eleventyConfig.setTemplateFormats(["html", "css", "js", "njk"]);

  eleventyConfig.addPassthroughCopy({ "client/css": "css" }); // Copy CSS folder contents to dist css
  eleventyConfig.addPassthroughCopy({ "client/assets/fonts": "fonts" }); // Copy fonts folder contents to dist fonts
  eleventyConfig.addPassthroughCopy({ "client/assets/img": "img" }); // Copy img folder contents to dist img
  eleventyConfig.addPassthroughCopy({ "client/js": "js" }); // Copy js folder contents to dist js
  // I want to be able to use liquid in some JS files to generate values from eleventy data, such as API urls based on stage.
  eleventyConfig.addExtension("liquid.js", {
    key: "liquid",
    outputFileExtension: "js",
  });

  eleventyConfig.addGlobalData("apiBaseURL", () => {
    if (process.env.stage === "local") {
      return "http://localhost:4000";
    } else {
      return "https://www.google.com";
    }
  });

  return {
    dir: {
      input: "client/views", // source HTML files to be compiled agains the templates.  Templates are in the _includes folder.
      output: "client/dist", // output of HTML files.
    },
  };
};
