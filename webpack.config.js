var path = require("path");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    library: {
      name: "ReactCookieConsent",
      type: "umd",
    },
    environment: {
      arrowFunction: false, // the generated runtime-code should not use arrow functions
    },
    globalObject: `typeof self !== 'undefined' ? self : this`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|build)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  externals: {
    react: "commonjs react", // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  },
  plugins: [new CopyWebpackPlugin({ patterns: [{ from: "src/index.d.ts", to: "index.d.ts" }] })],
};
