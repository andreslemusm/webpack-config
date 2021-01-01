/**
 * @return {import('webpack').Configuration}
 */
module.exports = () => ({
  devServer: {
    historyApiFallback: true,
    hot: true,
    liveReload: false,
    open: true,
  },
  devtool: "eval-cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.css$/iu,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/u,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  output: {
    publicPath: "/",
  },
  plugins: [],
});
