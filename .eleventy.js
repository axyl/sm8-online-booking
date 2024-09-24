module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "client/views", // source HTML files to be compiled agains the templates.  Templates are in the _includes folder.
      output: "client/dist", // output of HTML files.
    },
  };
};
