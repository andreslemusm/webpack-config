/**
 * @return {import('webpack').Configuration}
 */
module.exports = () => ({
  devtool: "eval-source-map",
  output: {
    chunkFilename: "[name].lazy-chunk.js",
  },
  module: {
    rules: [],
  },
  plugins: [],
});
