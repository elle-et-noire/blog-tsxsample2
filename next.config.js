/** @type {import('next').NextConfig} */
module.exports = {
  basePath: process.env.GITHUB_ACTIONS ? "/blog-tsxsample2" : "",
  reactStrictMode: true,
  trailingSlash: true,
};
