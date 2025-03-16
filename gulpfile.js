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

const root = "src";

const paths = {
    html: `${root}/*.html`,
    pages: `${root}/html/pages/*.html`,
    includes: `${root}/html/{components,layouts,includes}/**/*.html`,
    css: `${root}/scss/**/*.scss`,
    js: `${root}/js/**/*.js`,
    libs: `${root}/libs/**/*.*`
}

function html() {
    return src(paths.html)
        .pipe(fileInclude({ prefix: "@@", basepath: "./src/html" }))
        .pipe(htmlbeautify({ indent_size: 4 }))
        .pipe(dest("dist"))
        .pipe(browserSync.stream());
}

function pages() {
    return src(paths.pages)
        .pipe(fileInclude({ prefix: "@@", basepath: "./src/html" }))
        .pipe(htmlbeautify({ indent_size: 4 }))
        .pipe(dest("dist/html"))
        .pipe(browserSync.stream());
}

function style() {
    return src(paths.css)
        .pipe(sourcemaps.init())
        .pipe(scss({ outputStyle: "compressed" }).on("error", scss.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write("."))
        .pipe(dest("dist/assets/css"))
        .pipe(browserSync.stream());
}

function scripts() {
    return src(paths.js)
        .pipe(concat("main.js"))
        .pipe(dest("dist/assets/js"))
        .pipe(browserSync.stream());
}

function libs() {
    return src(paths.libs)
        .pipe(dest("dist/assets/libs"))
        .pipe(browserSync.stream());
}

function serve() {
    browserSync.init({ server: { baseDir: "dist" } });
    watch(paths.html, html);
    watch(paths.pages, pages);
    watch(paths.includes, html);
    watch(paths.css, style);
    watch(paths.js, scripts);
    watch(paths.libs, libs);
}

export default series(style, scripts, html, pages, libs, serve);