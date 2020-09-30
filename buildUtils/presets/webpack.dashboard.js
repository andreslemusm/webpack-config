const DashboardPlugin = require("webpack-dashboard/plugin");

/**
 * @return {import('webpack').Configuration}
 */
module.exports = () => ({
  plugins: [new DashboardPlugin()],
});
