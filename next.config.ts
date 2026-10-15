import type { NextConfig } from 'next';
const config: NextConfig = { distDir: process.env.NODE_ENV === 'production' ? '.next-build' : '.next', output: 'export', trailingSlash: true, images: { unoptimized: true } };
export default config;
