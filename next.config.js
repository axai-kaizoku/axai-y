/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

/**
 * await import("./src/env.js")
 * import BundleAnalyzer from "@next/bundle-analyzer"
 * const isProd = process.env.NODE_ENV === "production"
 *
 * /** @type {import("next").NextConfig} //
 *
 * const nextConfig = {
 * typescript: {
 *  ignoreBuildErrors: true,
 * },
 * eslint: {
 *  ignoreDuringBuilds: true,
 * },
 * basePath: isProd ? "/axai-y" : "",
 * assetPrefix: isProd ? "/axai-y" : "",
 * }
 *
 * const withBundleAnalyzer = BundleAnalyzer({
 * enabled: process.env.ANALYZE === "true",
 * })
 *
 * export default withBundleAnalyzer(nextConfig)
 */

/**
 *  This above config is for analyzing the build
 *  (used in cases of optimization)
 */

await import("./src/env.js")

const isProd = process.env.NODE_ENV === "production"

/** @type {import("next").NextConfig} */
const config = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: isProd ? "/axai-y" : "",
}

export default config
