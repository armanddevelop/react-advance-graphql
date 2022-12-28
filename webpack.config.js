const htmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    filename: "app.bundle.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
    liveReload: true,
  },
  plugins: [
    new htmlWebPackPlugin({
      template: "src/index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.js$|.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
