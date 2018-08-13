module.exports = {
  mode: 'production', // necessary - either production, development, or none
  entry: {
    app: "./app/app.js" // webpack entry point
  },
  output: {
    filename: "public/bundle.js" // where webpack outputs bundle
  },
  module: {
    rules: [{
      test: /\.js$/, // include all JS files
      exclude: /node_modules/, // exclude node modules
      use: [{
        loader: 'babel-loader', // what loader to use to compile JSX
        query: {
          presets: ['react', 'es2015'] // specifics of how to use loader
        }
      }]
    }]
  }
}
