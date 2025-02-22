// config-overrides.js

const { override, addWebpackPlugin, addBabelPlugin } = require('customize-cra');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = override(
  // Add production optimizations
  (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              parse: {
                ecma: 8,
              },
              compress: {
                ecma: 5,
                warnings: false,
                comparisons: false,
                inline: 2,
                drop_console: true,
              },
              mangle: {
                safari10: true,
              },
              output: {
                ecma: 5,
                comments: false,
                ascii_only: true,
              },
            },
            parallel: true,
          }),
        ],
        splitChunks: {
          chunks: 'all',
          name: false,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
        runtimeChunk: {
          name: (entrypoint) => `runtime-${entrypoint.name}`,
        },
      };
    }
    return config;
  },

  // Add compression plugin
  addWebpackPlugin(
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    })
  ),

  // Add Babel optimization plugins
  addBabelPlugin('@babel/plugin-transform-runtime'),
  addBabelPlugin(['babel-plugin-transform-imports', {
    'lodash': {
      transform: 'lodash/${member}',
      preventFullImport: true
    },
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/${member}',
      preventFullImport: true
    }
  }])
);