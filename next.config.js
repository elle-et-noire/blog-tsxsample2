/** @type {import('next').NextConfig} */
module.exports = {
  basePath: process.env.GITHUB_ACTIONS ? "/lumieres-legeres" : "",
  publicRuntimeConfig: {
    basePath: process.env.GITHUB_ACTIONS ? "/lumieres-legeres" : "",
  },
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: 'https://elle-et-noire.github.io/lumieres-legeres/',
  },
};
