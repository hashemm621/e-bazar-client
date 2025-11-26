/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: ['i.ibb.co.com'], // External host add করা হলো
  },
};

export default nextConfig;
