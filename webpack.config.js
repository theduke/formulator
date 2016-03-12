module.exports = {
  entry: "./src/main.js",

  output: {
    path: "./dist",
    filename: "formulator.js"
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/, 
        loader: "eslint-loader", 
        exclude: /(node_modules|bower_components)/,
        query: {
          parser: "babel-eslint",
          rules: {
            strict: 0
          }
        }
      }
    ],

    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          plugins: ["transform-object-rest-spread", "transform-class-properties"],
          presets: ["react", "es2015"],
        }
      }
    ]
  }
};
