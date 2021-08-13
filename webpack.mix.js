const mix = require('laravel-mix');
const config = require('./webpack.config.js')

mix.webpackConfig(config);

mix
  .js("resources/core/index.jsx", "public/core")
  .react()
