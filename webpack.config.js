const webpack = require("webpack");
const { merge } = require("webpack-merge");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
const svgToMiniDataURI = require("mini-svg-data-uri");

const modeConfig = (mode) => require(`./buildUtils/webpack.${mode}`)(mode);
const presetConfig = require("./buildUtils/loadPresets");

module.exports = ({ mode = "production", presets = [] }) => {
  return merge(
    {
      entry: "./src/index.tsx",
      mode,
      module: {
        rules: [
          {
            test: /\.svg$/iu,
            type: "asset/inline",
            generator: {
              dataUrl: (content) => svgToMiniDataURI(content.toString()),
            },
          },
          {
            test: /\.(png|jpg|jpeg|gif|webp)$/iu,
            type: "asset",
          },
        ],
      },
      output: {
        chunkFilename: "js/[name].lazy-chunk.js",
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "assets/[hash][ext][query]",
      },
      plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: "public/index.html",
        }),
      ],
      resolve: {
        plugins: [new TsconfigPathsPlugin()],
        extensions: [".tsx", ".ts", ".js"],
      },
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
