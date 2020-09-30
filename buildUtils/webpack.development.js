/**
 * @return {import('webpack').Configuration}
 */
module.exports = () => ({
  devtool: "eval-source-map",
  devServer: { hot: true, liveReload: false, open: true },
  output: {
    chunkFilename: "[name].lazy-chunk.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [],
});
