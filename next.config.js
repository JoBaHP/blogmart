/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '',
    domains: ['http://affiliate.ledger.com', 'https://affiliate.ledger.com'],
    formats: ['image/webp'],
  },
  trailingSlash: true,
}
