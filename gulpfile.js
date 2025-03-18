import { src, dest, watch, series } from "gulp";
import concat from "gulp-concat";
import * as sass from "sass";
import gulpSass from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
import fileInclude from "gulp-file-include";
import autoprefixer from "gulp-autoprefixer";
import htmlbeautify from "gulp-html-beautify";
import cleanCSS from "gulp-clean-css";
import uglify from "gulp-clean-css";
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
    libs: `${root}/libs/**/*.*`,
    images: `${root}/img/**/*.*`
};

function processHtml(srcPath, destPath) {
    return src(srcPath)
        .pipe(fileInclude({
            prefix: "@@", 
            basepath: "./src/html", 
            context: { BASE_URL: process.env.NODE_ENV === "production" ? "/Velora" : "" }
        }))
        .pipe(htmlbeautify({ indent_size: 4 }))
        .pipe(dest(destPath))
        .pipe(browserSync.stream());
}

function html() {
    return processHtml(paths.html, "docs") && processHtml(paths.pages, "docs/html");
}

function style() {
    return src(paths.css)
        .pipe(sourcemaps.init())
        .pipe(scss({ outputStyle: "expanded" }).on("error", scss.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())  // ✅ ضغط ملفات CSS
        .pipe(sourcemaps.write("."))
        .pipe(dest("docs/assets/css"))
        .pipe(browserSync.stream());
}

function scripts() {
    return src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat("main.js"))
        .pipe(uglify()) // ✅ ضغط ملفات JavaScript
        .pipe(sourcemaps.write("."))
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
    watch(paths.includes, html);
    watch(paths.css, style);
    watch(paths.js, scripts);
    watch(paths.libs, libs);
    watch(paths.images, images);
}

export default series(style, scripts, html, libs, images, serve);
