/** @type {import('next').NextConfig}
 * 마크다운문서를 불러오기 위한 설정
 */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source',
    });
    return config;
  },
};

module.exports = nextConfig;
