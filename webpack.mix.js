const mix = require("laravel-mix");
// mix browser sync
mix.browserSync({
    proxy: "http://127.0.0.1:8000",
    files: [
        "resources/views/**/*.blade.php",
        "resources/css/**/*.css",
        "resources/js/**/*.js",
        "resources/assets/js/**/*.js",
        "resources/assets/css/**/*.css",
        "resources/assets/img/**/*.{jpg,png,gif,svg,webp}",
    ],
});

// disable notifications success
mix.disableSuccessNotifications();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .js("resources/js/mapbox/addPolygon.js", "public/js/mapbox")
    .js("resources/js/mapbox/showPolygon.js", "public/js/mapbox")
    .js("resources/js/crud.js", "public/js")
    .js("resources/js/components.js", "public/js")
    .postCss("resources/css/app.css", "public/css");
