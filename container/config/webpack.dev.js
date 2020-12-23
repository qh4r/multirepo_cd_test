const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require("./webpack.common.js");
const dependencies = require("../package.json").dependencies;

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8079/'
  },
  devServer: {
    port: 8079,
    historyApiFallback: {
      index: 'index.html'
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        "marketing": "marketing@http://localhost:8081/remoteEntry.js",
        "auth": "auth@http://localhost:8082/remoteEntry.js"
      },
      //shared: ['react', 'react-dom'],
      shared: dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
