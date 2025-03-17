import { src, dest, watch, series } from "gulp";
import concat from "gulp-concat";
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import sourcemaps from "gulp-sourcemaps";
import fileInclude from "gulp-file-include";
import autoprefixer from "gulp-autoprefixer";
import htmlbeautify from "gulp-html-beautify";
import browserSyncPackage from "browser-sync";

const browserSync = browserSyncPackage.create();
const scss = gulpSass(sass);

const isProduction = process.env.NODE_ENV === "production";

const root = "src";

const paths = {
    html: `${root}/*.html`,
    pages: `${root}/html/pages/*.html`,
    includes: `${root}/html/{components,layouts,includes}/**/*.html`,
    css: `${root}/scss/**/*.scss`,
    js: `${root}/js/**/*.js`,
    libs: `${root}/libs/**/*.*`,
    images: `${root}/img/**/*.*`
}

function html() {
    return src(paths.html)
        .pipe(fileInclude({
            prefix: "@@", basepath: "./src/html", context: {
                BASE_URL: isProduction ? "https://ahmedelsewailky.github.io/Velora" : "" }
        }))
        .pipe(htmlbeautify({ indent_size: 4 }))
        .pipe(dest("docs"))
        .pipe(browserSync.stream());
}

function pages() {
    return src(paths.pages)
        .pipe(fileInclude({
            prefix: "@@", basepath: "./src/html", context: {
                BASE_URL: "https://ahmedelsewailky.github.io/Velora"
            }
        }))
        .pipe(htmlbeautify({ indent_size: 4 }))
        .pipe(dest("docs/html"))
        .pipe(browserSync.stream());
}

function style() {
    return src(paths.css)
        .pipe(sourcemaps.init())
        .pipe(scss({ outputStyle: "compressed" }).on("error", scss.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write("."))
        .pipe(dest("docs/assets/css"))
        .pipe(browserSync.stream());
}

function scripts() {
    return src(paths.js)
        .pipe(concat("main.js"))
        .pipe(dest("docs/assets/js"))
        .pipe(browserSync.stream());
}

function libs() {
    return src(paths.libs)
        .pipe(dest("docs/assets/libs"))
        .pipe(browserSync.stream());
}

function images() {
    return src(paths.images, { encoding: false })
        .pipe(dest("docs/assets/images"))
        .pipe(browserSync.stream());
}

function serve() {
    browserSync.init({ server: { baseDir: "docs" } });
    watch(paths.html, html);
    watch(paths.pages, pages);
    watch(paths.includes, html);
    watch(paths.css, style);
    watch(paths.js, scripts);
    watch(paths.libs, libs);
    watch(paths.images, images);
}

export default series(style, scripts, html, pages, libs, images, serve);