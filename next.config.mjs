/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iheaqdluewqbcbcunigk.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/placeholders/**',
      },
    ],
  },
};

export default nextConfig;
