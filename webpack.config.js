const htmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    filename: "app.bundle.js",
  },
  plugins: [
    new htmlWebPackPlugin({
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
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
