/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const { withExpo } = require('@expo/next-adapter');
const withTM = require('next-transpile-modules')([
  'react-native-web',
  'react-native',
  'react-native-web-next-image',
]);
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  webpack5: true,
  webpack: (config, { isServer }) => {
    config.resolve.fallback = { fs: false };

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };

    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];

    config.module.rules.push({
      test: /\.ttf$/,
      loader: 'url-loader',
    });

    return config;
  },
};

module.exports = withPlugins([[withTM], [withExpo]], {
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  ...nextConfig,
});
