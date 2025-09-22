/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        url: require.resolve('url'),
        zlib: require.resolve('browserify-zlib'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        assert: require.resolve('assert'),
        os: require.resolve('os-browserify'),
        path: require.resolve('path-browserify'),
      };
    }
    return config;
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
    NEXT_PUBLIC_INFURA_API_URL: process.env.NEXT_PUBLIC_INFURA_API_URL,
    NEXT_PUBLIC_NETWORK_ID: process.env.NEXT_PUBLIC_NETWORK_ID,
    NEXT_PUBLIC_LENDING_POOL_ADDRESS: process.env.NEXT_PUBLIC_LENDING_POOL_ADDRESS,
    NEXT_PUBLIC_LENDING_HELPER_ADDRESS: process.env.NEXT_PUBLIC_LENDING_HELPER_ADDRESS,
    NEXT_PUBLIC_LENDING_CONFIG_ADDRESS: process.env.NEXT_PUBLIC_LENDING_CONFIG_ADDRESS,
    NEXT_PUBLIC_ADDRESS_TO_TOKEN_MAP_ADDRESS: process.env.NEXT_PUBLIC_ADDRESS_TO_TOKEN_MAP_ADDRESS,
    NEXT_PUBLIC_DAI_TOKEN_ADDRESS: process.env.NEXT_PUBLIC_DAI_TOKEN_ADDRESS,
    NEXT_PUBLIC_USDC_TOKEN_ADDRESS: process.env.NEXT_PUBLIC_USDC_TOKEN_ADDRESS,
    NEXT_PUBLIC_LINK_TOKEN_ADDRESS: process.env.NEXT_PUBLIC_LINK_TOKEN_ADDRESS,
  },
};

module.exports = nextConfig;
