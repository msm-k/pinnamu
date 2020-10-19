/**
 * @file Settings of webpack.
 *
 * @author Koichi Nagaoka
 */

const TerserPlugin        = require('terser-webpack-plugin');
const ImageminPlugin      = require('imagemin-webpack-plugin').default;
const WriteFilePlugin     = require('write-file-webpack-plugin');
const CopyWebpackPlugin   = require('copy-webpack-plugin');
const path                = require('path');
const glob                = require('glob');
const config              = require('./config');

const entryPoints = {};

glob.sync(`${config.srcPagesRoot}/**/*.ts`).forEach((targetFile) => {

  const fileExtension = path.extname(targetFile);
  const fileName = targetFile.substring(config.srcPagesRoot.length + 1, targetFile.length - fileExtension.length);

  entryPoints[fileName] = targetFile;

});

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: entryPoints,
  output: {
    filename: `${config.scriptsDir}/[name].js`,
    path: config.publicAssetsRoot,
    publicPath: config.assetsBaseUrl,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src'),
    ],
  },
  devtool: config.isNodeProduction ? false : 'inline-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    splitChunks: {
      name: 'vendor.bundle',
      chunks: 'initial',
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '**/*',
          to: config.publicRoot,
          context: config.srcStaticRoot,
          noErrorOnMissing: true,
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '**/*',
          to: config.publicImagesRoot,
          context: config.srcImagesRoot,
          noErrorOnMissing: true,
        },
      ],
    }),
    new ImageminPlugin({
      disable: !config.isNodeProduction,
      jpegtran: {
        progressive: true,
      },
      pngquant: {
        speed: 1,
      },
      svgo: {
        multipass: true,
      },
      gifsicle: {
        interlaced: true,
      },
    }),
    new WriteFilePlugin(),
  ],
  devServer: {
    open: true,
    contentBase: config.publicRoot,
    watchContentBase: true,
    port: 8100,
    disableHostCheck: true,
    hot: true,
    inline: true,
  },
};
