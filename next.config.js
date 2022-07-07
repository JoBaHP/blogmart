/** @type {import('next').NextConfig} */
module.exports = {
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=315360000, must-revalidate',
          },
        ],
      },
    ]
  },
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '',
    domains: ['http://affiliate.ledger.com', 'https://affiliate.ledger.com'],
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: true,
}
