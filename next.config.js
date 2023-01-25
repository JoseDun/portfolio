/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: process.env.REACT_APP_API_KEY,
    customTEMPLATE: process.env.REACT_APP_TEMPLATE_API_KEY,
    customSERVICE: process.env.REACT_APP_SERVICE_API_KEY,
  },
};

module.exports = nextConfig;
