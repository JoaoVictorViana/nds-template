const mix = require('laravel-mix');
const path = require('path')

mix.webpackConfig({
    resolve: {
        extensions: [".jsx", ".js"],
        alias: {
            '@': path.resolve(__dirname, 'resources')
        },
    }
})
