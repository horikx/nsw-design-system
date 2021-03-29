const path = require('path')
module.exports = {
  entry: require.resolve("./src/server.mjs"),
  mode: 'production',
  output: {
    path: path.join(__dirname, "/server-dist"),
    // iife: true,
    library: 'templates',
    filename: "wbundle.js",
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'unlazy-loader'
      },
      {
        test: /\.hbs$/, 
        loader: 'handlebars-loader',
        options: {
          helperDirs: path.join(__dirname, "./src/global/handlebars/helpers"),
          partialDirs: path.resolve(__dirname, "./src/components/**"),
        }
      },
    ],
  },
  resolve: {
    alias: {
      "handlebars/runtime": 'handlebars/dist/handlebars.runtime.min.js'
    }
  }
}