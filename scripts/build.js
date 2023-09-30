// Import the necessary modules and libraries
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js'); // Your custom Webpack configuration

// Run the build process
webpack(webpackConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error('Build failed with errors');
    console.log(err)
  } else {
    console.log('Build successful');
  }
});
