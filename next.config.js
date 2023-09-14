/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Specify the output option for static export
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}


module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.stickpng.com', 
         
        },

       {
        protocol: 'https',
        hostname: "wallpapers.com"
       },
       {
        protocol:'https',
        hostname:"frpnet.net"
       },

       {
        protocol:"https",
        hostname:"image.tmdb.org"
       }

          
      ],
    },
  }

