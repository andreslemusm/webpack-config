const WebpackBundleAnalyzer = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

/**
 * @return {import('webpack').Configuration}
 */
module.exports = () => ({
  plugins: [new WebpackBundleAnalyzer()],
});
