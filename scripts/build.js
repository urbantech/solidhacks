// Import the necessary modules and libraries
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.dev.js'); // Your custom Webpack configuration

// Run the build process
webpack(webpackConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error('Build failed with errors');
  } else {
    console.log('Build successful');
  }
});
