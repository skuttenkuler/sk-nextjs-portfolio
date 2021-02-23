const withImages = require('next-images')
module.exports = withImages()
module.exports = {
  // Target must be serverless
    target: "serverless",
    images: {
      loader: "imgix",
      path: "https://noop/",
    },
  }
 
