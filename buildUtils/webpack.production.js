const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");

/**
 * @return {import('webpack').Configuration}
 */
module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.css$/iu,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.tsx?$/u,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              compilerOptions: {
                jsx: "react-jsx",
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new TerserJSPlugin(), new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      chunkFilename: "css/[id]-lazy-chunk.css",
    }),
  ],
});
