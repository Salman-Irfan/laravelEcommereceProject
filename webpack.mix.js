const mix = require("laravel-mix");
const { vite } = require("laravel-mix");

mix.js("resources/js/app.js", "public/js")
    .vue()
    .postCss("resources/css/app.css", "public/css", [])
    .vite();
