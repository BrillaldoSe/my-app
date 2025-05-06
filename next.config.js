const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@/core'] = path.resolve(__dirname, '../../../packages/core');
    config.resolve.alias['@measured/puck'] = path.resolve(__dirname, '../../../packages/core');
    config.resolve.alias['@/plugin-heading-analyzer'] = path.resolve(__dirname, '../../../packages/plugin-heading-analyzer');
    return config;
  },
};
