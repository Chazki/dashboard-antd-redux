const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports(
    "import",
    {
      libraryName: "antd",
      libraryDirectory: "es",
      style: true,
    },
    {
      libraryName: "src",
      libraryDirectory: "styles",
      style: true,
    }
  ),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        "@primary-color": "#272c33",
        "@text-color": "#272C33",
      },
    },
  })
);
