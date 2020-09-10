const CompressionWebpackPlugin = require("compression-webpack-plugin");

/**
 * @return {import('webpack').Configuration}
 */
module.exports = () => ({
  plugins: [new CompressionWebpackPlugin()],
});
