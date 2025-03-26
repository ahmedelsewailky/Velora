/**
 * Import required Gulp plugins and modules
 */
import { src, dest, watch, series } from "gulp";
import concat from "gulp-concat";
import * as sass from "sass";
import gulpSass from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
import fileInclude from "gulp-file-include";
import autoprefixer from "gulp-autoprefixer";
import htmlbeautify from "gulp-html-beautify";
import cleanCSS from "gulp-clean-css";
import uglify from "gulp-uglify";
import browserSyncPackage from "browser-sync";

/**
 * Initialize BrowserSync and SASS compiler
 */
const browserSync = browserSyncPackage.create();
const scss = gulpSass(sass);

/**
 * Define project directories
 */
const root = "src";
const basedir = "docs";

/**
 * Define paths for various assets
 */
const paths = {
    html: `${root}/*.html`,
    pages: `${root}/html/pages/*.html`,
    includes: `${root}/html/{components,layouts,includes,sections}/**/*.html`,
    css: `${root}/scss/**/*.scss`,
    js: `${root}/js/**/*.js`,
    libs: `${root}/libs/**/*.*`,
    images: `${root}/images/**/*.*`,
    output: `${basedir}/assets`
};

/**
 * Process HTML files with file includes and beautification
 * @returns {NodeJS.WritableStream} Processed HTML files
 */
function html() {
    return src(paths.html)
        .pipe(fileInclude({
            prefix: "@@",
            basepath: "./src",
            pagetitle: "Undefind"
        }))
        .pipe(htmlbeautify({ indent_size: 4 }))
        .pipe(dest(basedir))
        .pipe(browserSync.stream());
}

/**
 * Compile SCSS files, add prefixes, minify, and generate sourcemaps
 * @returns {NodeJS.WritableStream} Processed CSS files
 */
function style() {
    return src(paths.css)
        .pipe(sourcemaps.init())
        .pipe(scss({ outputStyle: "expanded" }).on("error", scss.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write("."))
        .pipe(dest(`${paths.output}/css`))
        .pipe(browserSync.stream());
}

/**
 * Concatenate and minify JavaScript files with sourcemaps
 * @returns {NodeJS.WritableStream} Processed JavaScript files
 */
function scripts() {
    return src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(sourcemaps.write("."))
        .pipe(dest(`${paths.output}/js`))
        .pipe(browserSync.stream());
}

/**
 * Copy library files to the output directory
 * @returns {NodeJS.WritableStream} Processed library files
 */
function libs() {
    return src(paths.libs, { encoding: false })
        .pipe(dest(`${paths.output}/libs`))
        .pipe(browserSync.stream());
}

/**
 * Copy images to the output directory
 * @returns {NodeJS.WritableStream} Processed images
 */
function images() {
    return src(paths.images, { encoding: false })
        .pipe(dest(`${paths.output}/images`))
        .pipe(browserSync.stream());
}

/**
 * Initialize local development server with live reloading
 */
function serve() {
    browserSync.init({ server: { baseDir: basedir } });
    watch(paths.html, html);
    watch(paths.includes, html);
    watch(paths.css, style);
    watch(paths.js, scripts);
    watch(paths.libs, libs);
    watch(paths.images, images);
}

/**
 * Default Gulp task to process all assets and start development server
 */
export default series(style, scripts, html, libs, images, serve);