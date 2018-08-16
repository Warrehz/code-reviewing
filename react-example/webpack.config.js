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

module.exports = [{
  entry: './app/css/app.scss',
  output: {
    // This is necessary for webpack to compile
    // But we never use style-bundle.js
    filename: 'style-bundle.js',
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'bundle.css',
          },
        },
        { loader: 'extract-loader' },
        { loader: 'css-loader' },
        { loader: 'sass-loader' },
      ]
    }]
  },
}];
