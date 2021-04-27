const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
    'resources/assets/admin/css/select2-bootstrap4.min.css',
    'resources/assets/admin/plugins/fontawesome-free/css/all.min.css',
    'resources/assets/admin/css/select2.css',
    'resources/assets/admin/css/adminlte.min.css',
], 'public/assets/admin/css/admin.css');

mix.scripts([
    'resources/assets/admin/plugins/jquery/jquery.min.js',
    'resources/assets/admin/plugins/bootstrap/js/bootstrap.bundle.min.js',
    'resources/assets/admin/js/select2.full.js',
    'resources/assets/admin/js/adminlte.min.js',
    'resources/assets/admin/js/demo.js',
    'resources/assets/admin/js/select2init.js',
], 'public/assets/admin/js/admin.js');

mix.copyDirectory('resources/assets/admin/plugins/fontawesome-free/webfonts', 'public/assets/admin/webfonts');

mix.copyDirectory('resources/assets/admin/img', 'public/assets/admin/img');

mix.copy('resources/assets/admin/css/adminlte.min.css.map', 'public/assets/admin/css/adminlte.min.css.map');
