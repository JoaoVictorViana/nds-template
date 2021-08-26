const mix = require('laravel-mix');
const config = require('./webpack.config.js')

mix.webpackConfig(config);

mix
  .js("resources/presentation/index.jsx", "public")
  .react()

mix.browserSync('127.0.0.1:8000');
