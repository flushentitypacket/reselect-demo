module.exports = {
  devtool: 'source-map',
  entry: './todo/index.jsx',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}
