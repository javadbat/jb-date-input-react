/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/jb-date-input-react',
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
      type: 'asset/resource',
    });

    return config
  },
}

module.exports = nextConfig
