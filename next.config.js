const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
    
  },
})
