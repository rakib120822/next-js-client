/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.daisyui.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // <- Add this
      },
      {
        protocol: "https",
        hostname: "img.icons8.com", // <- Add this
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // ✅ Add this
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "cookingformysoul.com",
        pathname: "/**", // allow any path on this domain
      },
    ],
  },
};

export default nextConfig;
