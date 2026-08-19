/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // The old *.vercel.app alias is a byte-for-byte duplicate of the real
      // domain. Send it to the canonical host so search engines only ever see
      // one copy of the page.
      {
        source: "/:path*",
        has: [{ type: "host", value: "leosbarbers.vercel.app" }],
        destination: "https://www.leobarbers.com/:path*",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      // Preview deployments keep working, they just stay out of the index.
      {
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
