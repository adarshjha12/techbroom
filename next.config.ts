import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },

      {
        protocol: 'https',
        hostname: 'images.macrumors.com',
        port: '',
        pathname: '/**', 
      },

      {
        protocol: 'https',
        hostname: 'images.moneycontrol.com',
        port: '',
        pathname: '/**', 
      },

      {
        protocol: 'https',
        hostname: 'www.techadvisor.com',
        port: '',
        pathname: '/**', 
      },

      {
        protocol: 'https',
        hostname: 'www.cultofmac.com',
        port: '',
        pathname: '/**', 
      },

      {
        protocol: 'https',
        hostname: 'images.hindustantimes.com',
        port: '',
        pathname: '/**', 
      },

       {
        protocol: 'https',
        hostname: 'st1.techlusive.in',
        port: '',
        pathname: '/**', 
      },

      {
        protocol: 'https',
        hostname: 'www.macworld.com',
        port: '',
        pathname: '/**', 
      },

      {
        protocol: 'https',
        hostname: 'cdn.wccftech.com',
        port: '',
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;
