const webpack = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const modeConfig = (mode) => require(`./buildUtils/webpack.${mode}`)(mode);
const presetConfig = require("./buildUtils/loadPresets");

module.exports = ({ mode = "production", presets = [] }) => {
  return merge(
    {
      mode,
      output: {
        filename: "bundle.js",
      },
      module: {
        rules: [],
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
