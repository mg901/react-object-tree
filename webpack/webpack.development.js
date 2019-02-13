const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { FAVICON, POSTCSS } = require('./constants');
const devServer = require('./dev-server');
const linting = require('./linting');

const files = () => ({
  test: /\.(png|jpg|gif|svg|woff|woff2)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'images/[name].[ext]',
      },
    },
  ],
});

const css = () => ({
  test: /\.css$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      },
    },
    'resolve-url-loader',
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        config: {
          path: POSTCSS,
        },
      },
    },
  ],
});

module.exports = {
  mode: 'development',
  output: {
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  devtool: 'eval',
  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
  },
  devServer: devServer(),
  plugins: [
    new DefinePlugin({
      NODE_ENV: JSON.stringify('development'),
    }),
    new HotModuleReplacementPlugin(),
    new FaviconsWebpackPlugin({
      logo: FAVICON,
      prefix: 'icons/',
      emitStats: false,
      statsFilename: 'iconstats.json',
      background: '#fff',
      persistentCache: true,
      inject: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false,
      },
    }),
  ],
  module: {
    rules: [linting(), files(), css()],
  },
};
