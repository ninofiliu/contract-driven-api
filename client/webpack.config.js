const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  devServer: {
    contentBase: __dirname,
    stats: 'minimal',
  },
  entry: `${__dirname}/main.js`,
  mode: 'development',
  module: {
    rules: [
      { test: /\.vue$/, use: ['vue-loader'] },
      { test: /\.scss$/, use: ['vue-style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};
