

/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
})

const nextConfig = {
  reactStrictMode: true,
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
  // i18n: {
  //   locales: ['en', 'np'],
  //   defaultLocale: 'np',
  //   localeDetection: true,
  // },
}

module.exports = withPWA({
  reactStrictMode: true
})
