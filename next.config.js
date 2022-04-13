/** @type {import('next').NextConfig} */
module.exports = {
  basePath: process.env.GITHUB_ACTIONS ? "/lumieres-legeres" : "",
  publicRuntimeConfig: {
    basePath: process.env.GITHUB_ACTIONS ? "/lumieres-legeres" : "",
  },
  reactStrictMode: true,
  trailingSlash: true,
};
